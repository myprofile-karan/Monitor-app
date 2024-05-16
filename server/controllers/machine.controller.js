const Machine = require("../model/machine");

const addMachine = async (req, res) => {
  try {
    const {
      location,
      machineType,
      machineConfig,
      machineSize,
      description,
      uniqueKey,
    } = req.body;

    console.log(
      location,
      machineType,
      machineConfig,
      machineSize,
      description,
      uniqueKey
    );
    const addedMachine = await Machine.create({
      location,
      machineType,
      machineConfig,
      machineSize,
      description,
      uniqueKey,
    });

    console.log(addedMachine);
    res.status(201).json({ message: "machine added successfully" });
  } catch (error) {
    console.log("adding machine failed: " + error);
    res.status(500).json({ message: "adding machine failed" });
  }
};

const showMachines = async (req, res) => {
  try {
    const response = await Machine.find();
    res.status(200).json(response);
  } catch (error) {
    console.log("error while fetching data:", error);
    res.status(500).json({ message: "error while fetching data" });
  }
};

module.exports = {
  addMachine,
  showMachines,
};
