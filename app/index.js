import choo from 'choo';

import main from './routes/main';

const app = choo();

app.route('/', main);

app.mount('body');
