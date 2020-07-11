import React from 'react';
import './Calculator.css';

const submit = document.getElementById('submit');

const reset = document.getElementById('reset');

const submitOnClick = () => {
    let hours = document.getElementById('hours').value;
    let mins = document.getElementById('minutes').value;
    let secs = document.getElementById('seconds').value;
    let rate = document.getElementById('rate').value;
    let client = document.getElementById('client').value;
    const hrAmt = hours * rate;
    const minAmt = (rate * mins) / 60;
    const secAmt = (rate * secs) / 3600;
    const total = (hrAmt + minAmt + secAmt).toFixed(2);
    document.getElementById('calculateMsg').innerHTML = `Please bill ${client} $${total}.`;
};

const resetOnClick = () => {
    document.getElementById('hours').value = '';
    document.getElementById('minutes').value = '';
    document.getElementById('seconds').value = '';
    document.getElementById('rate').value = '';
    document.getElementById('client').value = '';
    document.getElementById('calculateMsg').innerHTML = '';
};

class Calculator extends React.Component {
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
                    <button id="submit">Calculate</button>
                    <button id="reset">Reset</button>
                </section>
                
                <section class="calculate">
                    <p id="calculateMsg"></p>
                </section>
            </main>);
    }
}

export default Calculator;