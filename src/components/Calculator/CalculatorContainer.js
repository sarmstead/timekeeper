import React from 'react';
import './Calculator.css';
import Calculator from './Calculator';

class CalculatorContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: '',
            minutes: '',
            seconds: '',
            rate: '',
            client: '',
            message: '',
        };
        this.handleReset = this.handleReset.bind(this);
        this.handleUserInputHours = this.handleUserInputHours.bind(this);
        this.handleUserInputMinutes = this.handleUserInputMinutes.bind(this);
        this.handleUserInputSeconds = this.handleUserInputSeconds.bind(this);
        this.handleUserInputClient = this.handleUserInputClient.bind(this);
        this.handleUserInputRate = this.handleUserInputRate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleReset() {
        this.setState({
            hours: '',
            minutes: '',
            seconds: '',
            rate: '',
            client: '',
            message: ''
        })
    }

    handleUserInputHours(e) {
        this.setState({
            hours: e.target.value
        });
    }

    handleUserInputMinutes(e) {
        this.setState({
            minutes: e.target.value
        });
    }
    handleUserInputSeconds(e) {
        this.setState({
            seconds: e.target.value
        });
    }
    handleUserInputRate(e) {
        this.setState({
            rate: e.target.value
        });
    }

    handleUserInputClient(e) {
        this.setState({
            client: e.target.value
        });
    }

    handleSubmit() {
        const rate = this.state.rate;
        const hrAmt = this.state.hours * rate;
        const minAmt = (rate * this.state.minutes) / 60;
        const secAmt = (rate * this.state.seconds) / 3600;
        let total = (hrAmt + minAmt + secAmt).toFixed(2);
        this.setState({message: `Please pay ${this.state.client} $${total}.`});
    }

    render() {
        return <Calculator 
            hours={this.state.hours}
            minutes={this.state.minutes}
            seconds={this.state.seconds}
            rate={this.state.rate}
            client={this.state.client}
            message={this.state.message}
            onClick={this.handleSubmit}
            onChangeHours={this.handleUserInputHours}
            onChangeMinutes={this.handleUserInputMinutes}
            onChangeSeconds={this.handleUserInputSeconds}
            onChangeRate={this.handleUserInputRate}
            onChangeClient={this.handleUserInputClient} />
    }
}

export default CalculatorContainer;