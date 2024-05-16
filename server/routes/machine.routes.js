const {Router} = require("express");
const { addMachine, showMachines } = require("../controllers/machine.controller");
const router = Router(); 

router.route("/add-machine").post(addMachine);
router.route("/show-machine").get(showMachines);    

module.exports = router;