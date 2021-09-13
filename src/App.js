import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routing/AppRouter';
// import Home from './pages/Home/Home';
// import Blog from './pages/Blog/Blog';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      {/* <Home /> */}
      {/* <Blog /> */}
      <AppRouter />
    </div>
    </BrowserRouter>
    
  );
}

export default App;
