/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

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

function resolveHostname() {
  return process.env.NOTE_APP_HOSTNAME || '0.0.0.0';
}

let staticFolder = resolveStaticFolder();
let port = resolvePort();
let hostname = resolveHostname();

app.use(express.static(staticFolder));

app.listen(port);

console.log(`Serving ${staticFolder} app on ${hostname}:${port}.`);
