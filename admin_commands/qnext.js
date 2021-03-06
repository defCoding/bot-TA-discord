// next.js
// Gets the next person in line and removes them from the queue.
module.exports.description = "Pulls the next person from the specified queue and notifies them.";

module.exports.run = (client, message, args) => {
  const channel = message.channel;

  if (args.length <= 0) {
    message.reply("please provide the queue index of the queue you wish to query.");
    return;
  }


  channel.send(client.queueManager.dequeue(parseInt(args)));
}
