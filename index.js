const server = require('./server.js');

const port = process.env.PORT || 3333;
server.listen(port, () => console.log(`\n\n--- Swooosh, ${port} points! ---\n`));

