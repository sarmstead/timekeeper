import React from 'react';
import './Calculator.css';

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
                            <input type="number" name="hours" id="hours" onChange={this.props.onChangeHours} value={this.props.hours} required />
                        <label for="minutes">Minutes</label>
                            <input type="number" name="minutes" id="minutes" onChange={this.props.onChangeMinutes} value={this.props.minutes} required />
                        <label for="seconds">Seconds</label>
                            <input type="number" name="seconds" id="seconds" onChange={this.props.onChangeSeconds} value={this.props.seconds} required />
                        <label for="rate">Hourly Rate ($)</label>
                            <input type="number" name="rate" id="rate" onChange={this.props.onChangeRate} value={this.props.rate} required />
                        <label for="client">Client</label>
                            <input type="text" name="client" id="client" onChange={this.props.onChangeClient} value={this.props.client} required />
                    </form>
                </section>
                
                <section className="form-buttons">
                    <button id="submit" onClick={this.props.onClick}>Calculate</button>
                    <button id="reset" onClick={this.props.onClick}>Reset</button>
                </section>
                
                <section class="calculate">
                    <p id="calculateMsg">{this.props.message}</p>
                </section>
            </main>);
    }
}

export default Calculator;