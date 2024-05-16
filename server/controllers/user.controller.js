const Machine = require("../model/machine");
const User = require("../model/user");

const addUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await User.findOne({ email });
    console.log(findUser.email);
    if (findUser.email !== email) {
      console.log("invalid user");
      return res.status(400).send("invalid user");
    }

    res.status(200).send("login successful");

    // const user = new User({ email, password });
    // await user.save();
  } catch (error) {
    res.status(404).json(error);
  }
};

const getAllUsers = async (req, res) => {
  const user = await User.find();
  if (!user) return res.status(404).send("Users not found");
  res.send(user);
};

const assignMachine = async (req, res) => {
  const { machineId } = req.body;
  const user = await User.findById(req.params.userId);
  const machine = await Machine.findById(machineId);
  if (!user || !machine)
    return res.status(404).send("User or Machine not found");

  machine.assignedTo = user._id;
  await machine.save();

  user.machines.push(machine._id);
  await user.save();

  res.send("Machine assigned");
};

const getUserById = async (req, res) => {
  const { email } = req.params;
  try {
    const findUser = await User.find({ email });
    res.json(findUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  addUser,
  getAllUsers,
  assignMachine,
  getUserById,
};
