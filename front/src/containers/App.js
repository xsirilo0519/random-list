import React, { Component } from 'react'
import FormNumeros from '../components/FormNumeros'
import Result from '../components/Result'
import From from '../components/From'
import History from '../components/History'

class App extends Component {// component stateful
  render() {
    return (
      <div style={{textAlign:"center",display:"flex",flexDirection:"column"}}>        <h3>Lista Random</h3>
      <p>Sistema Ramdom - Demo</p>
        <div style={{display:"flex",textAlign:"center",justifyContent:"center"}}>

        <From />
          <FormNumeros/>
       
        </div>
        <Result/>
        <History/>
      </div>
    )
  }
}

export default App


