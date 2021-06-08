import './page.css';
import Form from '../Form/Form';
import React from 'react';
import * as Process from '../../processing/Solve';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {result: 0};
    }

    alertResult(listFromForm) {
        this.setState({result: Process.chineseSolution(listFromForm)});
        alert(listFromForm);
        alert(Process.chineseSolution(listFromForm));
        // alert(this.state.result);
    }

    render() {
        return (
            <div className='div-page'>
                <h3>Find the smallest integer that ... </h3>
                <Form alertResult={(listFromForm) => this.alertResult(listFromForm)}></Form>
            </div>
        )
    }
}

export default Page;