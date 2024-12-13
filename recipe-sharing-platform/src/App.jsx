import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetail from './components/RecipeDetail';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4">
      {/* User Registration Section */}
      <section className="mb-8">
        <h1 className="text-2xl font-bold mb-4">User Registration</h1>
        <RegistrationForm />
      </section>

      {/* Formik Registration Section */}
      <section className="mb-8">
        <h1 className="text-2xl font-bold mb-4">User Registration with Formik</h1>
        <FormikForm />
      </section>

      {/* Tailwind CSS Test Section */}
      <section className="mb-8 text-center">
        <h1 className="text-blue-500 text-3xl font-bold">Hello, Tailwind CSS!</h1>
      </section>

      {/* Vite + React Demo Section */}
      <section className="text-center">
        <div>
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className="text-2xl font-bold">Vite + React</h1>
        <div className="card">
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={() => setCount((count) => count + 1)}
          >
            Count is {count}
          </button>
          <p className="mt-4">
            Edit <code>src/App.jsx</code> and save to test HMR.
          </p>
        </div>
        <p className="read-the-docs mt-4">
          Click on the Vite and React logos to learn more.
        </p>

        <div>
      <HomePage />
      </div>
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
      </section>
    </div>
  );
}

export default App;
