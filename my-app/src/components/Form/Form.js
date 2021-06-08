import React from 'react';
import './form.css';
import * as Process from '../../processing/Solve';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {divider: '', remainder: '', lists: []};
        this.handleDividerChange = this.handleDividerChange.bind(this);
        this.handleRemainderChange = this.handleRemainderChange.bind(this);
        this.handleAddSubmit = this.handleAddSubmit.bind(this);
    }
    
    handleDividerChange(event) {
        // Cheking if divider valid, divider shouldnt == 0
        if (parseInt(event.target.value) === 0) {
            alert('Input is not valid! Divider should not equal to 0');
            return;
        }

        // Checking if there's already remainder, divider should be bigger than the remainder
        if (this.state.remainder !== '') {
            if (parseInt(event.target.value) <= this.state.remainder) {
                alert('Input is not valid! Divider should be bigger than ' + this.state.remainder);
                return;
            }
        }

        this.setState({divider: parseInt(event.target.value)});
    }

    handleRemainderChange(event) {
        // Checking if there's already divider, remainder should be smaller than the remainder
        if (this.state.divider !== '') {
            if (parseInt(event.target.value) >= this.state.divider) {
                alert('Input is not valid! Remainder should be smaller than ' + this.state.divider);
                return;
            }
        }

        this.setState({remainder: parseInt(event.target.value)});
    }

    handleAddSubmit(event) {
        alert('Input: ' + this.state.divider + this.state.remainder );
        var newList = this.state.lists;
        if (this.state.lists.indexOf([this.state.divider, this.state.remainder]) === -1) {
            newList.push([this.state.divider, this.state.remainder]);
            this.setState({lists: newList});
            this.setState({divider: '', remainder: ''});
        }
    }

    render() {
        return (
            <div className='div-form'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <form onSubmit={() => this.props.alertResult(this.state.lists)}>
                            <input type='number' name='divider' value={this.state.divider} placeholder='Which when divided by' onChange={this.handleDividerChange}/>
                            <input type='number' name='remainder' value={this.state.remainder} placeholder='Leaves remainder' onChange={this.handleRemainderChange}/>
                            
                            <input type='button' className='btn btn-primary custom-button d-flex justify-content-center' value='+' onClick={this.handleAddSubmit}/>

                            <button>What number is it?</button>
                        </form>
                    </div>
                </div>

                <p>{this.state.lists}</p>
                
            </div>
        )
    }
}

export default Form;