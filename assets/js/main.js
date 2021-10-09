import generateDiscreteNotifications from "./scripts/generateDiscreteNotifications.js";
import generateContinuousNotifications from "./scripts/generateContinuousNotifications.js";
import appendNotifications from "./scripts/appendNotifications.js";

const textareaElement = document.querySelector("textarea");
const buttonElement = document.querySelector("button");
const discreteNotificationsOutputElement = document.querySelector("#discrete-notifications > output");
const continuousNotificationsOutputElement = document.querySelector("#continuous-notifications > output");

/**
 * Handles click event then calls function for appending / displaying slacount messages.
 * @param {Event} event - Click Event object
 */
const handleClick = (event) => {
    event.stopPropagation();

    const lines = textareaElement.value.split("\n");
    const discreteNotifications = generateDiscreteNotifications(lines);
    const continuousNotifications = generateContinuousNotifications(lines);

    appendNotifications(discreteNotifications, discreteNotificationsOutputElement);
    appendNotifications(continuousNotifications, continuousNotificationsOutputElement);
}


buttonElement.addEventListener("click", (event) => handleClick(event));