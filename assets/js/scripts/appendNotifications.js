/**
 * Appends slacount notification strings to output DOM element.
 * @param {String[]} notifications - String array wherein each string is of slacount notification format.
 * @param {Node} outputElement - output DOM element of which notifications will be appended.
 */
 export default (notifications, outputElement) => {
    outputElement.innerHTML = "";
    const ul = document.createElement("ul");

    for (const notification of notifications) {
        const li = document.createElement("li");
        li.textContent = notification;
        ul.appendChild(li);
    }

    outputElement.appendChild(ul);
}