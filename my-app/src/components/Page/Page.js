import './page.css'
import Form from '../Form/Form'
import React from 'react'
import * as Convert from '../../processing/Convert'

class Page extends React.Component {
  constructor (props) {
    super(props)
    this.state = { result: '', showResult: false }
    this.alertResult = this.alertResult.bind(this)
  }

  alertResult (listFromForm) {
    const solution = Convert.chineseStep(listFromForm)
    this.setState({ result: solution })

    if (this.state.result !== '') {
      this.setState({ showResult: true })
    } else {
      this.setState({ showResult: false })
    }
  }

  render () {
    return (
      <div>
        <div className='div-page'>
          <h2>Find the smallest integer that ... </h2>
          <Form alertResult={(listFromForm) => this.alertResult(listFromForm)} />
        </div>

        {this.state.showResult
          ? <div className='div-page'>
              <h1>General Solution</h1>
              <p>In general, solution for linear congruence system is</p>
              <div className='general-center'>
                <p>
                  <b>x = a<sub>1</sub>M<sub>1</sub>y<sub>1</sub> +
                  a<sub>2</sub>M<sub>2</sub>y<sub>2</sub> +
                  a<sub>3</sub>M<sub>3</sub>y<sub>3</sub> + ... +
                  a<sub>n</sub>M<sub>n</sub>y<sub>n</sub>
                  </b>
                </p>

                <p>with:</p>
                <p>M<sub>k</sub> is multiplication of all modulus, except m<sub>k</sub></p>
                <p>y<sub>k</sub> is inversion of M<sub>k</sub> in modulus m<sub>k</sub></p>
              </div>
              {this.state.result}
            </div>
          : ''}
      </div>
    )
  }
}

export default Page
