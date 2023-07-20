import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import routes from './components/routes';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          {routes.map((route) => (
            <Route key={route.id} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </>
  );
}

export default App;
