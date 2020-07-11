const submit = document.getElementById('submit');

const reset = document.getElementById('reset');

submit.onclick = () => {
    hours = document.getElementById('hours').value;
    mins = document.getElementById('minutes').value;
    secs = document.getElementById('seconds').value;
    rate = document.getElementById('rate').value;
    client = document.getElementById('client').value;
    const hrAmt = hours * rate;
    const minAmt = (rate * mins) / 60;
    const secAmt = (rate * secs) / 3600;
    const total = (hrAmt + minAmt + secAmt).toFixed(2);
    document.getElementById('calculateMsg').innerHTML = `Please bill ${client} $${total}.`;
};

reset.onclick = () => {
    document.getElementById('hours').value = '';
    document.getElementById('minutes').value = '';
    document.getElementById('seconds').value = '';
    document.getElementById('rate').value = '';
    document.getElementById('client').value = '';
    document.getElementById('calculateMsg').innerHTML = '';
};

