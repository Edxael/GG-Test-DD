import React from 'react'

export default class extends React.Component{
    state = { total: 0 }
    render(){

        const addOne = () => { 
            this.setState({ total: this.state.total + 1 }) 
        }

        return(
            <div className="main-cont" >
                <h1>Add One</h1>
                <h3>Value: { this.state.total }</h3>
                <button className="btn-add-1" onClick={ addOne } >Add One</button>
            </div>
        )
    }
}

