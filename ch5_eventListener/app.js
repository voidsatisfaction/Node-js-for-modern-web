const mod = require('./module');

mod.timer.on('tick', () => {
  console.log('event is emitted');
})