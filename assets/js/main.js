const textareaElement = document.querySelector("textarea");
const buttonElement = document.querySelector("button");
const outputElement = document.querySelector("output");

/**
 * Parses text in text area then appends text to screen in slacount notification format.
 * @param {Node} textareaElement - textarea element with time table for activites
 * @param {Node} outputElement - output element for displaying results
 */
const appendSlacountNotificationsToOutputElement = (textareaElement, outputElement) => {
    const ul = document.createElement("ul");
    const startTimeRegEx = /^\d+:\d+[PpAaMm]{2}/; 
    const activityRegEx = /\t\d+\s*(.*)\t/;
    const durationRegEx = /[1-9][0-9]*$/;
    const lines = textareaElement.value.split("\n"); // #6:30PM \t1 \tInstructor Do: Stoke Curiosity \t0:10

    for (let i = 0, j = 1; j < lines.length; i++, j++) {
        const li = document.createElement("li");
        const currentLine = lines[i];
        const nextLine = lines[j];

        const startTime = startTimeRegEx.exec(currentLine)[0].trim();
        const duration = durationRegEx.exec(currentLine)[0].trim();
        const currentActivity = activityRegEx.exec(currentLine)[1].trim();
        const nextActivity = activityRegEx.exec(nextLine)[1].trim();

        // /slacount_create "Instructor Demo: Promises" 2 minutes "Demo time is over. Time for Student Do: Promises!"
        const slacountNotificationString = `/slacount_create "${currentActivity}" ${duration} minutes "Time for ${nextActivity === "END" ? "Office Hours" : nextActivity}!"`;
        
        li.textContent = slacountNotificationString;
        ul.appendChild(li);
    }

    outputElement.appendChild(ul);
}

/**
 * Handles click event then calls function for appending / displaying slacount messages.
 * @param {Event} event - Click Event object
 */
const handleClick = (event) => {
    event.stopPropagation();

    appendSlacountNotificationsToOutputElement(textareaElement, outputElement);
}


buttonElement.addEventListener("click", (event) => handleClick(event));