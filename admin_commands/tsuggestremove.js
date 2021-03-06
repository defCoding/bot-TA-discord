// tsuggestremove.js
// Removes a suggestion from the list.
module.exports.description = "Removes a specified suggestion by number from the suggestions list."

module.exports.run = (client, message, args) => {
  const channel = message.channel;

  const list = client.suggestions;
  let str = "";

  // First convert argument into number.
  let num = parseInt(args);
  
  // Ensure that the given input is valid.
  if (num != args) {
    str = "Invalid argument provided. Please give the number of the suggestion to remove (e.g. `!tsuggestremove 1`).";
  } else if (num >= list.length) {
    str = "Invalid suggestion number. The number must be less than the size of the list.";
  } else {
    list.splice(num, 1);
    str = `Suggestion ${num} removed from list.`;
  }

  channel.send(str);
}
