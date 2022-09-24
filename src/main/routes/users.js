const express = require('express');

const router = express.Router();

/* Get users listing. */
router.get('/', (req, res) => {
    const users = [{ name: 'John Doe', mail: 'john@mail.com' }];
    res.status(200).send(users);
});

/* Insert user. */
router.post('/', (req, res) => {
    res.status(201).json(req.body);
});

module.exports = router;
