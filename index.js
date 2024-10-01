import './components/tasks-list.js';

const date = new Date();
const dateElement = document.querySelector('#date');
dateElement.innerHTML = getTodayDateFormatted(date);

/**
 * @param {Date} date
 * @returns {string} Date passed formatted.
 */
function getTodayDateFormatted(date) {
    const dayOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const day = date.getDay();
    const dayString = dayOfTheWeek[day];

    let month = date.getMonth() + 1;
    if (month < 10) {
        month = `0${month}`;
    } else {
        month = month;
    }

    console.debug(`${dayString}, ${day}/${month}`)

    return `${dayString}, ${day}/${month}`
}
