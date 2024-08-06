document.getElementById('inputDateTime').addEventListener('change', function() {
    const dateTimeInput = document.getElementById('inputDateTime').value;
    if (dateTimeInput) {
        document.getElementById('addOptions').classList.remove('hidden');
    }
});

document.getElementById('dateForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const inputDateTimeValue = document.getElementById('inputDateTime').value;
    const inputDate = new Date(inputDateTimeValue);

    // Convert input date to EST
    const offset = -5 * 60; // EST offset in minutes (without considering DST)
    const estDate = new Date(inputDate.getTime() + (offset * 60 * 1000));

    const addDays = parseInt(document.getElementById('addDays').value);
    const addMonths = parseInt(document.getElementById('addMonths').value);
    const addYears = parseInt(document.getElementById('addYears').value);
    const addHours = parseInt(document.getElementById('addHours').value);
    const addMinutes = parseInt(document.getElementById('addMinutes').value);
    const addSeconds = parseInt(document.getElementById('addSeconds').value);

    // Calculate new date
    estDate.setDate(estDate.getDate() + addDays);
    estDate.setMonth(estDate.getMonth() + addMonths);
    estDate.setFullYear(estDate.getFullYear() + addYears);
    estDate.setHours(estDate.getHours() + addHours);
    estDate.setMinutes(estDate.getMinutes() + addMinutes);
    estDate.setSeconds(estDate.getSeconds() + addSeconds);

    document.getElementById('outputHeader').classList.remove('hidden');
    document.getElementById('outputDate').classList.remove('hidden');
    document.getElementById('outputDate').textContent = estDate.toISOString();
});
