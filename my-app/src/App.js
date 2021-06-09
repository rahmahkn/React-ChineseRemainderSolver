import logo from './logo.svg';
import './App.css';
import '.'
import Page from './components/Page/Page'

function App() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">
          Chinese Remainder Solver
        </a>
      </nav>
      <div className="container-fluid">
        <Page></Page>
      </div>
    </div> 
  );
}

export default App;
