'use strict'
const express = require('express');
const router = express.Router();
const auth = require('../middelwares/auth');
const gbmService = require('../services/gbmService');

const mapCreditsGraph = async (data) => {
    return {
       value: data.Precio,
       name: data.Fecha
    }
};

/* GET graph listing. */
router.get('/', auth, async (req, res, next) => {
    try {
        const response = await gbmService.getDataGraph(50);
        const graphCredits = await Promise.all(response.map(mapCreditsGraph));
        const results = [
            {name: 'Precios', series: graphCredits}
        ];
        return res.status(200).json(results);
    }catch (e) {
        return next(e)
    }
});

module.exports = router;