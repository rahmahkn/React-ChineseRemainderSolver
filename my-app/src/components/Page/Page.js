import './page.css';
import Form from '../Form/Form';
import React from 'react';
import * as Convert from '../../processing/Convert';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {result: 0, showResult: false};
        this.alertResult = this.alertResult.bind(this);
    }

    alertResult(listFromForm) {
        var solution = Convert.chineseStep(listFromForm);
        this.setState({result: solution});

        if (this.state.list !== []) {
            this.setState({showResult: true});
        } else {
            this.setState({showResult: false});
        }
    }

    render() {
        return (
            <div className='div-page'>
                <h3>Find the smallest integer that ... </h3>
                <Form alertResult={(listFromForm) => this.alertResult(listFromForm)}></Form>

                <div>
                    {this.state.showResult &&  this.state.result}
                </div>

            </div>
        )
    }
}

export default Page;