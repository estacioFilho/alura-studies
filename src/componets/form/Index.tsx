import React from "react";
import Button from "../button";
import './style.scss'

class Form extends React.Component{
    render(){
        return(
            <form className="novaTarefa">
                <div className="inputContainer"> 
                    <label htmlFor="task">Adcione sua primeria tarefa</label>
                    <input type="text" id="task" name="task" placeholder="O que você quer estudar?" required />
                </div>
                <div className="inputContainer" > 
                    <label htmlFor="time">Tempo</label>
                    <input type="time" id="time" name="time" step="1" placeholder="O que você quer estudar?" required />
                </div>
                <Button />
            </form>
        )
    }
}

export default Form;