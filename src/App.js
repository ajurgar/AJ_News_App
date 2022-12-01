import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import MainContainer from './containers/MainContainer';

function App() {
  return (
    <Router>
      <MainContainer/>
    </Router>
  );
}

export default App;
