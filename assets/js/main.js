import generateDiscreteNotifications from "./scripts/generateDiscreteNotifications.js";
import appendDiscreteNotifications from "./scripts/appendDiscreteNotifications.js";

const textareaElement = document.querySelector("textarea");
const buttonElement = document.querySelector("button");
const outputElement = document.querySelector("output");

/**
 * Handles click event then calls function for appending / displaying slacount messages.
 * @param {Event} event - Click Event object
 */
const handleClick = (event) => {
    event.stopPropagation();

    const lines = textareaElement.value.split("\n");
    const notifications = generateDiscreteNotifications(lines);

    appendDiscreteNotifications(notifications, outputElement);
}


buttonElement.addEventListener("click", (event) => handleClick(event));