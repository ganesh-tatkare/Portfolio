import './App.css';
import Main from './components/Main';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme/Theme'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </div>
  );
}

export default App;
