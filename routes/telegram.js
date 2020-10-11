// ruta: '/telegram'
const { Router } = require("express");
const { getMe } = require('../controladores/telegram');
const router = Router();

router.get(
  "/",
  getMe
);


module.exports = router;