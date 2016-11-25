exports.timer = new process.EventEmitter();

setInterval(() => {
  exports.timer.emit('tick');
}, 2000); 