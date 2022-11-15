import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Host from './Components/Host/Host'
// import {BrowserRouter} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      theme: 'light'
    }
   }



  // change theme
  changeTheme = () => {
    if (this.state.theme === 'light') {
      this.setState({ theme: "dark" })
    } else if (this.state.theme === 'dark') {
      this.setState({ theme: "light" })
    }
  }


1

  render() {
  return (

      <div className="App">
        
        {/* <Login/> */}
        {/* <BrowserRouter> */}
         {/* <Home theme={this.state.theme} /> */}
        {/* </BrowserRouter> */}
        <Routes>
            <Route path='/' element={<Home theme={this.state.theme} />}>
            </Route>
            <Route path='/login' element={<Login/>}>
            </Route>
            <Route path='/host' element={<Host/>}>
            </Route>
          </Routes>

        <div className="theme" onClick={this.changeTheme}
          style={{
            backgroundColor: `${this.state.theme==='light' ? "black" : "white"}`,
            color: `${this.state.theme==='light' ? "white" : "black"}`
          }}
        >
          <i className="fa-solid fa-moon"></i>
        </div>
        
      </div>
  );
  }
}

export default App;
