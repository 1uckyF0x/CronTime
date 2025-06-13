const parser = require('cron-parser');

module.exports = async function(data) {
    const cronExp = data.cron;
    try {
        const interval = parser.parseExpression(cronExp, { currentDate: new Date() });
        const next = interval.next().toDate();
        data.nextUnixTime = Math.floor(next.getTime() / 1000);
    } catch (err) {
        data.error = err.message;
    }
    return data;
};
