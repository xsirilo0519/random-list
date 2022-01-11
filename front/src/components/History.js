import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { GetAll } from '../actions';



const History = (props) => {

    useEffect(()=>{
        props.dispatch(GetAll());
    },[])

    return (
        <div>
            <h1>Historial</h1>
                {props.result&&props.result.map((list)=>{
                    return <h6>{list.randomList}</h6>
                })}
        </div>
    )
}

const stateMapToPros = state => {
    console.log(state.random);
    return {
      loading: state.view.loading,
      result: state.random.all
    }
}

export default connect(stateMapToPros)(History)
