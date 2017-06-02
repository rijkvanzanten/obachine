const router = require('express').Router();

router.get('/', (req, res) => res.send('api data'));

router.get('*', (req, res) => res.status(404).send('Route not defined'));

module.exports = router;
