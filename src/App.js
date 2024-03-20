import './App.css';
import Weather from './Weather';


function App() {
  return (
    <div className="App">
      <div className='container'>
     <Weather />
     <footer>
      This project was coded by{" "}
      <a href='https://github.com/Cheta008'>Chukwuma Destiny</a> and is{" "}
      <a href='https://github.com/Cheta008/react-weather-app'>open-sourced on GitHub</a>{" "}and 
      <a href='https://master--unique-naiad-e73a78.netlify.app/'> hosted on Netlify</a>
     </footer>
      </div>
    </div>
  );
}

export default App;
