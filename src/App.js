import {useContext} from 'react'
import { ThemeContext } from './context/theme';
import './App.css';

function App() {
  const [{theme, isDark}, toggleTheme]= useContext(ThemeContext)
  console.log('theme',theme)
  return (
    <div className='app' style={{backgroundColor:theme.backgroundColor,
    color:theme.color}}>
      <div className='text'>It's a {isDark?'dark':'light'} theme</div>
    <button onClick={toggleTheme}>click</button>
    </div>
  );
}

export default App;
