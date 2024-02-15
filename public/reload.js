ws = new WebSocket("ws://localhost:3001");

ws.addEventListener("close", (event) => {
  // This assumes the server will restart and create a new WebSocket server.
  setTimeout(() => {
    window.location.reload();
  }, 500); // gives the server time to restart
});

ws.addEventListener("message", (event) => {
  if (event.data === "reload") location.reload();
});
