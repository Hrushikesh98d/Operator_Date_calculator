document.addEventListener('DOMContentLoaded', function() {
    // Populate time zones
    const timeZoneSelect = document.getElementById('timeZone');
    const timeZones = Intl.supportedValuesOf('timeZone'); // Get the list of supported time zones
    timeZones.forEach(zone => {
        const option = document.createElement('option');
        option.value = zone;
        option.textContent = zone;
        timeZoneSelect.appendChild(option);
    });

    // Set default time zone to EST (which is 'America/New_York')
    timeZoneSelect.value = 'America/New_York'; // Default to EST

    document.getElementById('inputDateTime').addEventListener('change', function() {
        const dateTimeInput = document.getElementById('inputDateTime').value;
        if (dateTimeInput) {
            document.getElementById('addOptions').classList.remove('hidden');
        }
    });

    document.getElementById('dateForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const inputDateTimeValue = document.getElementById('inputDateTime').value;
        const timeZone = document.getElementById('timeZone').value;

        // Parse the input date in the local time zone (which is EST here)
        const inputDate = luxon.DateTime.fromISO(inputDateTimeValue, { zone: 'America/New_York' });

        // Convert to the selected time zone
        const timeZoneDate = inputDate.setZone(timeZone);

        const addDays = parseInt(document.getElementById('addDays').value, 10);
        const addMonths = parseInt(document.getElementById('addMonths').value, 10);
        const addYears = parseInt(document.getElementById('addYears').value, 10);
        const addHours = parseInt(document.getElementById('addHours').value, 10);
        const addMinutes = parseInt(document.getElementById('addMinutes').value, 10);
        const addSeconds = parseInt(document.getElementById('addSeconds').value, 10);

        // Calculate new date
        const newDate = timeZoneDate
            .plus({ days: addDays, months: addMonths, years: addYears, hours: addHours, minutes: addMinutes, seconds: addSeconds });

        // Format the output date in the selected time zone
        const outputDate = newDate.toFormat('yyyy-MM-dd HH:mm:ss ZZZZ');

        document.getElementById('outputHeader').classList.remove('hidden');
        document.getElementById('outputDate').classList.remove('hidden');
        document.getElementById('outputDate').textContent = outputDate;
    });
});
