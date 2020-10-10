/**
 * ruta: /timeline
**/

const { Router } = require("express");
const { timeline_user, timeline } = require("../controladores/timeline");

const router = Router();

router.get("/user", timeline_user);

router.get("/", timeline);


module.exports = router;