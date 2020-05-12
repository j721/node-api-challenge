

const express = require('express');
const server = require('./server');
const cors = require('cors');

const port = process.env.PORT || 8000;

server.listen(port, () => {
    console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
  });



