const router = require('express').Router(); // eslint-disable-line
const OBA = require('oba-api');
const axios = require('axios');

require('dotenv').config();

const client = new OBA({
  public: process.env.PUBLIC,
  secret: process.env.SECRET,
});

const BL_URL = process.env.BL_URL;
const BL_KEY = process.env.BL_KEY;

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

  if(query.language) {
    apiSearchObject.facet.push(`Language(${query.language})`);
  }

  client.get('search', apiSearchObject)
    .then(results => res.send(results))
    .catch(err => console.log(err));
});

router.get('/details', (req, res) => {
  client.get('details', {
    id: req.query.id,
  })
    .then(results => res.send(results))
    .catch(err => {
      console.log(err);
      res.status(500).end();
    });
});

router.get('/availability', (req, res) => {
  client.get('availability', {
    id: req.query.id,
  })
    .then(results => res.send(results))
    .catch(err => {
      console.log(err);
      res.status(500).end();
    });
});

router.get('/reviews', (req, res) => {
  axios.get(BL_URL, {
    params: {
      key: BL_KEY,
      isbn: req.query.isbn,
      type: 'text',
    },
  })
  .then(reviews => reviews.data.reviews)
  .then(reviews => res.json(reviews))
  .catch(err => {
    console.log(err);
    res.status(500).end();
  });
});

router.get('*', (req, res) => res.status(404).send('Route not defined'));

module.exports = router;
