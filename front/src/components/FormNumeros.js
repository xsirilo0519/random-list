import React,{useState} from 'react'
import { connect } from 'react-redux';
import { fetchRandomWithNum } from '../actions';
const FormNumeros = (props) => {

    const [state, setState] = useState({
        num1:"0",
        num2:"5"
    });
    const onSubmit = (e) => {
      e.preventDefault();
      console.log(state);
    if(state.num1<=state.num2){
      props.dispatch(fetchRandomWithNum(state));
    }
    };

    return (
        <div style={{margin:10}}>
        <form onSubmit={onSubmit}>
            <label >Inicio</label>
            <br/>
            <input type='number' min="0" max="100" defaultValue="0" onChange={(e) => setState({...state,num1: e.target.value})}/>
            <br/>
            <label>Fin</label>
            <br/>
            <input type='number' min="0" max="100" defaultValue="5" onChange={(e) => setState({...state,num2: e.target.value})}/>
            <br />
      <button type="submit" >
        Enviar
      </button>
    </form>
    </div>

    )
}
const stateMapToPros = state => {
    return {
      loading: state.view.loading
    }
  }
  

export default connect(stateMapToPros) (FormNumeros)
