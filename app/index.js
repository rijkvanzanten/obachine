import choo from 'choo';

import main from './templates/main';

// Append root-div to mount choo in
document.body.append(document.createElement('div'));

const app = choo();

app.route('/', main);

app.mount('div');

