const express = require('express');
const app = express();

function resolveStaticFolder() {
  if (process.env.NOTE_APP_BACKEND) {
    return process.env.NOTE_APP_BACKEND.split('/').pop();
  }

  return 'firebase';
}

function resolvePort() {
  return process.env.PORT || 8080;
}

let staticFolder = resolveStaticFolder();
let port = resolvePort();

app.use(express.static(staticFolder));

app.listen(port);

console.log(`Serving ${staticFolder} app on port ${port}.`);
