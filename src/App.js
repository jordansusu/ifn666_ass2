import logo from './logo.svg';
import './App.css';
import LandingPage from './component/LandingPage';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>
  );
}

export default App;
