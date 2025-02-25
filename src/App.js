import './App.css';
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <h1 className="main">Dictionary</h1>
        <Dictionary defaultKeyword="eclipse" />
      </header>
      <footer>This project is coded by Anne Sura, and is open-sourced on <a href="https://github.com/annesura/react-dictionary-project" target="_blank" rel="noreferrer" >GitHub</a>.</footer>
      </div>
    </div>
  );
}
