/**
 * ruta: /retweets
**/
const { Router } = require("express");
const { findIdByRt, telegram } = require('../controladores/retweets');
const router = Router();

router.get("/:id", findIdByRt );




module.exports = router;