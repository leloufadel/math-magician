import React, { useEffect, useState } from 'react';
import './Quotes.css';

const categories = ['success', 'fear', 'education', 'hope', 'love', 'history'];

function getRandomCategory() {
  const randomIndexQuote = Math.floor(Math.random() * categories.length);
  return categories[randomIndexQuote];
}

function Quotes() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [quote, setQuote] = useState({ quote: '', author: '', category: '' });

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const randomCategory = getRandomCategory();
        const url = `https://api.api-ninjas.com/v1/quotes?category=${randomCategory}`;
        const response = await fetch(url, {
          headers: {
            'X-Api-Key': 'w3bvsyhyIFQmRo4Bh+KuWQ==2x581mw77APQ7A5r',
          },
        });
        if (!response.ok) {
          throw new Error(response.status);
        }
        const data = await response.json();
        setQuote(data[0]);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchQuote();
  }, []);

  if (loading) return <h1>Loading Quote...</h1>;
  if (error) return <h1 className="error-message">Error: Failed to fetch quote</h1>;
  return (
    <div className="quotes-container">
      <h3 className="category">{quote.category}</h3>
      <p className="quote">{quote.quote}</p>
      <p className="author">{quote.author}</p>
    </div>
  );
}

export default Quotes;
