const io = require('socket.io')(3000, {
  cors: {
    origin: ['http://localhost:4200'],
  },
});

io.on('connection', (socket) => {
  console.log(socket.id);
  socket.on('send-message', (message) => {
    console.log(message);
    // io.emit('receive-message', message);
    socket.broadcast.emit('receive-message', message);
  });
});
