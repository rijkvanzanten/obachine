const router = require('express').Router(); // eslint-disable-line
const OBA = require('oba-api');

require('dotenv').config();

const client = new OBA({
  public: process.env.PUBLIC,
  secret: process.env.SECRET,
});

router.get('/search', (req, res) => {
  const apiSearchObject = {
    facet: [],
    librarian: true,
    q: 'id:*',
  };

  const {query} = req;

  // If statements overloaddd!!1!!
  if (query.genre) {
    query.genre.split(',').forEach(genre => {
      apiSearchObject.facet.push(`Genre(${genre})`);
    });
  }

  if(query.keyword) {
    apiSearchObject.q = query.keyword;
  }

  if(query.author) {
    apiSearchObject.q = query.author;
  }

  if(query.type) {
    apiSearchObject.facet.push(`Type(${query.type})`);
  }

  if(query.hardsort) {
    apiSearchObject.sort = query.hardsort;
  }

  if(query.location) {
    apiSearchObject.branch = query.location;
  }

  client.get('search', apiSearchObject)
    .then(results => res.send(results))
    .catch(err => console.log(err));
});

router.get('*', (req, res) => res.status(404).send('Route not defined'));

module.exports = router;
