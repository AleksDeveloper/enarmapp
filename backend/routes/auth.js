const express = require('express');
const router = express.Router();
const authService = require('../services/auth');
const jwt = require('jsonwebtoken');


router.post('/login', async function (req, res, next) {
    try {
        const response = await authService.login(req.body)
        if (response.code === 200) {
            jwt.sign( {data: response}, 'secretkey', (err, token) => {
                res.status(response.code).json({ data: response.data, token });
            })
        } else {
            res.status(response.code).json(response);
        }
    } catch (err) {
        console.error(`Error while getting enarm students info `, err.message);
        next(err);
    }
});

router.post('/login-id', async function (req, res, next) {
    try {
        const response = await authService.loginForId(req.body)
        if (response.code === 200) {
            jwt.sign( response, 'secretkey', (err, token) => {
                res.status(response.code).json({ data: response.data, token });
            })
        } else {
            res.status(response.code).json(response);
        }
    } catch (err) {
        console.error(`Error while getting enarm students info `, err.message);
        next(err);
    }
});

router.post('/register', async function (req, res, next) {
    try {
        let body = req.body;
        res.status(201).json(await authService.register(body));
    } catch (err) {
        console.error(`Error while getting enarm students info `, err.message);
        next(err);
    }
});

router.post('/change-account-status', async function (req, res, next) {
    try {
        let body = req.body;
        res.status(201).json(await authService.changeAccountStatus(body));
    } catch (err) {
        console.error(`Error while getting enarm students info `, err.message);
        next(err);
    }
});

router.put('/reset-password', async function (req, res, next) {
    try {
        console.log('req', req.body);
        const id = parseInt(req.body.id);
        res.status(201).json(await authService.resetPassword(id));
    } catch (err) {
        console.error(`Error while getting enarm students info `, err.message);
        next(err);
    }
});

module.exports = router;