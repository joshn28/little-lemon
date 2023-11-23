function fetchAPI(date) {
    let possibleTimes = sessionStorage.getItem(date);
    if (possibleTimes === null) {
        const day = new Date(date).getDay();
        // check the day (0 = Sunday, ..., 6 = Saturday)
        if (day !== 5 && day !== 6) {
            possibleTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
        } else {
            possibleTimes = [
                '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
            ];
        }
        sessionStorage.setItem(date, possibleTimes);
        return possibleTimes;
    } else if (possibleTimes === '') {
        return [];
    }
    return possibleTimes.split(',');
}

const submitAPI = (formData) => {
    if (formData.date && formData.time) {
        let times = sessionStorage.getItem(formData.date).split(',');
        times = times.filter(time => time !== formData.time);
        sessionStorage.setItem(formData.date, times);
        return true;
    }
    return false;
};

export { fetchAPI, submitAPI };