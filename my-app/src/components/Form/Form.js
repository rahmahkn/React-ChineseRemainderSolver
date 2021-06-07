import React from 'react';
import './form.css';
import * as Process from '../../processing/Solve';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {divider: '', remainder: ''};
        this.handleDividerChange = this.handleDividerChange.bind(this);
        this.handleRemainderChange = this.handleRemainderChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleDividerChange(event) {
        // Checking if there's already remainder, divider should be bigger than the remainder
        // if (this.state.divider != 0) {
        //     if (event.target.value <= this.state.remainder) {
        //         alert('Divider is <= ' + event.target.value);
        //     }
        // }

        this.setState({divider: parseInt(event.target.value)});
    }

    handleRemainderChange(event) {
        // Checking if there's already divider, remainder should be smaller than the remainder
        this.setState({remainder: parseInt(event.target.value)});
    }

    handleSubmit(event) {
        var coba = this.state.remainder*this.state.divider;
        alert('Smallest integer: ' + Process.chineseSolution([[this.state.divider, this.state.remainder], [this.state.divider+1, this.state.remainder+1]]));
        event.preventDefault();
    }

    render() {
        return (
            <div className='div-form'>
                <form onSubmit={this.handleSubmit}>
                    <input type='number' name='divider' value={this.state.divider} placeholder='Divider' required onChange={this.handleDividerChange}/>
                    <input type='number' name='remainder' value={this.state.remainder} placeholder='Remainder' required onChange={this.handleRemainderChange}/>
                    <button onSubmit={this.handleSubmit}>Find the Smallest Integer</button>
                </form>
            </div>
        )
    }
}

export default Form;