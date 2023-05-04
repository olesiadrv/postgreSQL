const Router = require("express");
const router = new Router();
const controller = require("./controller");

router.post("/user", controller.createUser);

router.get("/user", controller.getUsers);

router.put("/user", controller.updateUser);

router.delete("/user/:id", controller.deleteUser);

module.exports = router;
