import React from 'react';
import './Calculator.css';

class CalculatorButtonsSubmit extends React.Component {
    render() {
        return (<button id="submit" onClick={this.props.onClick}>Calculate</button>);
    }
}

class CalculatorButtonsReset extends React.Component {
    render() {
        return (<button id="reset" onClick={this.props.onClick}>Reset</button>);
    }
}

class Calculator extends React.Component {
    handleReset() {
        document.getElementById('hours').value = '';
        document.getElementById('minutes').value = '';
        document.getElementById('seconds').value = '';
        document.getElementById('rate').value = '';
        document.getElementById('client').value = '';
        document.getElementById('calculateMsg').innerHTML = '';
    }

    handleSubmit() {
        let hours = document.getElementById('hours').value;
        let mins = document.getElementById('minutes').value;
        let secs = document.getElementById('seconds').value;
        let rate = document.getElementById('rate').value;
        let client = document.getElementById('client').value;
        const hrAmt = hours * rate;
        const minAmt = (rate * mins) / 60;
        const secAmt = (rate * secs) / 3600;
        let total = (hrAmt + minAmt + secAmt).toFixed(2);
        document.getElementById('calculateMsg').innerHTML = `Please bill ${client} $${total}.`;
    }

    render() {
        return (
            <main>
                <section className="logo">
                    <h1>THE TIME KEEPER</h1>
                    <hr />
                </section>
                <section className="form-main">
                    <form>
                        <label for="hours">Hours</label>
                            <input type="number" name="hours" id="hours" required />
                        <label for="minutes">Minutes</label>
                            <input type="number" name="minutes" id="minutes" required />
                        <label for="seconds">Seconds</label>
                            <input type="number" name="seconds" id="seconds" required />
                        <label for="rate">Hourly Rate ($)</label>
                            <input type="number" name="rate" id="rate" required />
                        <label for="client">Client</label>
                            <input type="text" name="client" id="client" required />
                    </form>
                </section>
                
                <section className="form-buttons">
                    <CalculatorButtonsSubmit onClick={this.handleSubmit} />
                    <CalculatorButtonsReset onClick={this.handleReset} />
                </section>
                
                <section class="calculate">
                    <p id="calculateMsg"></p>
                </section>
            </main>);
    }
}

export default Calculator;