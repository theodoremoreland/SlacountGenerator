/**
 * Parses line then generates text in slacount notification format whereby notifications are based on the same time.
 * Returns array wherein each element is a string of the following format: /slacount_create "Instructor Demo: Promises" 2 minutes "Demo time is over. Time for Student Do: Promises!"
 * @param {String[]} lines - String array wherein each string is of the format: 6:30PM \t1 \tInstructor Do: Stoke Curiosity \t0:10
 */
 export default (lines) => {
    const activityRegEx = /\t\d+\s*(.*)\t/;
    const durationRegEx = /[1-9][0-9]*$/;
    const notificationData = [];
    let agg = 0;

    for (let i = 0, j = 1; j < lines.length; i++, j++) {
        const currentLine = lines[i];
        const nextLine = lines[j];

        const duration = durationRegEx.exec(currentLine)[0].trim();
        const currentActivity = activityRegEx.exec(currentLine)[1].trim();
        const nextActivity = activityRegEx.exec(nextLine)[1].trim();

        const data = {
            duration,
            currentActivity,
            nextActivity
        };

        notificationData.push(data);
    }

    const notifications = notificationData.map(({currentActivity, nextActivity, duration}) => {
        agg += parseInt(duration);
        duration = agg;
        const slacountNotificationString = `/slacount_create "${currentActivity}" ${duration} minutes "Time for ${nextActivity === "END" ? "Office Hours" : nextActivity}!"`;

        return slacountNotificationString;
    });

    return notifications;
}