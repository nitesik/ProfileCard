import Home from './components/Home';
import upper from "./components/images/bg-pattern-top.svg"
import lower from "./components/images/bg-pattern-bottom.svg"
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />

      <style>{`
        .App {
          background-image: url(${upper});
          // background-size: 7000px;
          background-size: cover;
          background-position-y: 10000px;
          background-position-x: 3000px;
        }

        .background {
          background-image: url(${lower});
          background-size: 2.2em;
          translate: rotate(30deg);
          background-color: hsl(185, 75%, 45%);
        }
      `}</style>
    </div>
  );
}

export default App;
