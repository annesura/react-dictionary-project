import './App.css';
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <h1>Dictionary</h1>
        <Dictionary />
      </header>
      <footer>This project is coded by Anne Sura</footer>
      </div>
    </div>
  );
}
