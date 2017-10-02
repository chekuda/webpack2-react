import React, { Component } from 'react'
import TestWithBoot from './bootstrap4Test'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='card'>
        <div className='card-header'>Lets GO</div>
        <img id="frontImg" src='assets/icon.png' />
        <TestWithBoot/>
      </div>
    )
  }
}

export default App
