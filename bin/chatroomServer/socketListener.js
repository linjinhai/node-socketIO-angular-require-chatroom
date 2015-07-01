/**
 * Created by taox on 15-6-29.
 */
module.exports = function roomConnected(roomNamespace){
  roomNamespace.on("connection",function(socket){
    console.log("this is a namespace connection");
    console.log(socket.id);
    socket.on("room chat", function (msg) {
      roomNamespace.emit('room chat',msg);
    });
  });
  setInterval(function(){
    roomNamespace.emit('user number',{userNum:roomNamespace.sockets.length,pid:process.pid});
  },20000);
};