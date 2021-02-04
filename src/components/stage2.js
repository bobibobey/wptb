import React, { useContext } from "react";
import {MyContext} from "../context";
import { Button, Form, Alert } from 'react-bootstrap';

const Stage2 = () => {
    const context = useContext(MyContext);

    return (
        <>
        <div className="result_wrapper">
            <h3>The loser is:</h3>
            <div>{context.state.result}</div>
           
        </div>
        <div className="action_button btn_2" onClick={()=>context.resulter()}>New Loser</div>
        <div className="action_button" onClick={()=>context.startOver()}>Start Over</div>
        
        </>
    )
}

export default Stage2;