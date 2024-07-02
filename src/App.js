import './App.css';
import {Route,Routes} from 'react-router-dom'
import Home from './pages/User/Home/home';
import Counter from './pages/User/Counter/counter';

function App() {
  return <>
    <Routes>
      <Route element={<Home />} path='/'/>
      <Route element={<Counter />} path='/counter'/>
    </Routes>
  </>
}

export default App;
