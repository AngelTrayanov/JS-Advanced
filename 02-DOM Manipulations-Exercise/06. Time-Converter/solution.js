function attachEventsListeners() {
    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click', days);
    document.getElementById('hoursBtn').addEventListener('click', hours);
    document.getElementById('minutesBtn').addEventListener('click', minutes);
    document.getElementById('secondsBtn').addEventListener('click', seconds);


    function days() {
        hoursInput.value = Number(daysInput.value) * 24;
        minutesInput.value = Number(daysInput.value * 24) * 60;
        secondsInput.value = Number(daysInput.value * 24) * 3600;
    }

    function hours() {
        daysInput.value = Number(hoursInput.value) / 24;
        minutesInput.value = Number(hoursInput.value) * 60;
        secondsInput.value = Number(hoursInput.value * 60) * 60;
    }

    function minutes() {
        daysInput.value = Number(minutesInput.value / 60) / 24;
        hoursInput.value = Number(minutesInput.value) / 60;
        secondsInput.value = Number(minutesInput.value) * 60;
    }

    function seconds() {
        daysInput.value = (Number(secondsInput.value) / 3600) / 24;
        hoursInput.value = Number(secondsInput.value) / 3600;
        minutesInput.value = Number(secondsInput.value) / 60;

    }
}