import './App.css'
import '.'
import Page from './components/Page/Page'

function App () {
  return (
    <div className='App'>
      <nav className='navbar navbar-light bg-light navbar-custom'>
        <a className='navbar-brand'>
          Chinese Remainder Solver
        </a>
      </nav>
      <div className='container-fluid'>
        <Page />
      </div>
    </div>
  )
}

export default App
