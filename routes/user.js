/*
 * ruta: /user 
 */
const { Router } = require("express");
const { getUserShow, getUserSearch } = require("../controladores/user");
const router = Router();

router.get("/profile/:screen_name", getUserShow);

router.get("/serch", getUserSearch);

module.exports = router;