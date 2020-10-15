import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import NavBar from './components/NavBar'
import EPG from './components/EPG'
import './index.css'

class App extends React.Component{
  render(){
    return(
      <>
        <Header />
        <NavBar />
        <div className="container">
          <EPG />
        </div>
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))