import React, { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';


const MyContext = React.createContext();

class MyProvider extends Component {
    
    state = {
        stage: 1,
        players: [],
        result: ""
    }

    addPlayerHandler = (name) => {
       this.setState(prevState => ({players: [...prevState.players, name] }) )
    }

    removePlayerHandler = (id) => {
        const newPlayers = this.state.players.filter((item, index)=>(index !== id))
        this.setState({players: newPlayers})
    }

    next = () => {
        const {players} = this.state;
        if (players.length < 2) {
            toast.error("You need more than one player.", {
                position: toast.POSITION.TOP_RIGHT, 
                autoClose: 1900
            });
        } else {
            this.resultHandler();
            this.setState({stage: 2})
        }
    }

    resultHandler = () => {
        let numberOfPlayers = this.state.players.length;
        let randomNumber = Math.floor(Math.random()*numberOfPlayers);
        let resulty = this.state.players[randomNumber];
        this.setState({result: resulty})
    }

    startOver = () => {
        this.setState({
            stage: 1,
            players: [],
            result: ""
        });
    }

    render() {
        return (
            <>
            <MyContext.Provider value={{
                state: this.state,
                addPlayer: this.addPlayerHandler,
                removePlayer: this.removePlayerHandler,
                next: this.next,
                resulter: this.resultHandler,
                startOver: this.startOver
            }}>
                {this.props.children}
            </MyContext.Provider>
            <ToastContainer/>
            </>
        )
    }
}

export {MyContext,MyProvider};