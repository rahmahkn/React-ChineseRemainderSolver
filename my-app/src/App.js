import logo from './logo.svg';
import './App.css';
import '.'
import Page from './components/Page/Page'

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       uyy <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="container-fluid">
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">Chinese Remainder Solver</a>
      </nav>

      <Page></Page>
    </div>


    
  );
}

export default App;
