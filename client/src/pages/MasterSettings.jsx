import React, { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import axios from "axios";
import toast from "react-hot-toast";

const MasterSettings = () => {
  const [location, setLocation] = useState("");
  const [machineType, setMachineType] = useState("");
  const [machineConfig, setMachineConfig] = useState("");
  const [machineSize, setMachineSize] = useState("");
  const [description, setDescription] = useState("");
  const [uniqueKey, setUniqueKey] = useState(uuidV4());

  const handleAddMachine = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/add-machine",
        {
          location,
          machineType,
          machineConfig,
          machineSize,
          description,
          uniqueKey,
        }
      );
      toast.success("machine added successfully");
      console.log("response: ", response);
      handleClearForm();
    } catch (error) {
      console.log("error in data sending", error);
    }
  };

  const handleClearForm = () => {
    setLocation("");
    setMachineType("");
    setMachineConfig("");
    setMachineSize("");
    setDescription("");
  };

  return (
    <>
      <div className="top w-full flex justify-end gap-7 items-center px-4 py-3">
        <div className="profile flex justify-end items-center gap-3">
          <i className="fa-solid fa-circle-user text-gray-400 text-[1.5rem]"></i>
          <span className="text-sm">Admin Panel</span>
        </div>

        <div className="notification">
          <i className="fa-solid fa-bell text-[1.1rem]"></i>
        </div>
      </div>
      <div className="p-6 w-full bg-white rounded-lg ">
        <div>
          <h3 className="font-medium">Settings</h3>
          <nav className="flex gap-2 items-center my-3">
            <Link
              to="/admin/dashboard"
              className="text-[0.7rem] flex gap-1 items-center"
            >
              <i className="fa-solid fa-table-list text-gray-400"></i>
              <span>Dashboard</span>
            </Link>
            <span>/</span>
            <Link
              to="/admin/master-settings"
              className="flex gap-1 items-center text-[0.7rem]"
            >
              <i className="fa-solid fa-gear text-gray-600"></i>
              <span>Master Settings</span>
            </Link>
          </nav>
        </div>

        <div className="flex flex-col px-5 mt-3">
          <nav className="w-full flex gap-2 font-[600] text-gray-700 py-5">
            <Link
              to="/admin/master-settings"
              className="flex gap-1 pe-3 py-1 items-center text-[0.8rem]"
            >
              <i className="fa-solid fa-check"></i>{" "}
              <span>THRESHOLD VALUES</span>
            </Link>
            <Link
              to="/admin/master-settings"
              className="flex gap-1 px-3 py-1 items-center text-[#F33823] border-b-[1px] border-[#F33823] text-[0.8rem]"
            >
              <i className="fa-solid fa-layer-group"></i>{" "}
              <span>ADD MACHINES</span>
            </Link>
            <Link
              to="/admin/master-settings"
              className="flex gap-1 px-3 py-1 items-center text-[0.8rem]"
            >
              <i className="fa-solid fa-wallet"></i> <span>BILLING</span>
            </Link>
          </nav>

          <h2 className="text-2xl font-semibold mb-4 my-6">
            App Settings for the Whole System
          </h2>
          <form onSubmit={handleAddMachine} className="w-[70%] mt-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                  placeholder="Enter or Select Location"
                />
              </div>
              <div>
                <input
                  type="text"
                  value={machineType}
                  onChange={(e) => setMachineType(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                  placeholder="Enter or Select Machine Type"
                />
              </div>
              <div>
                <input
                  type="text"
                  value={machineConfig}
                  onChange={(e) => setMachineConfig(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                  placeholder="Select Machine Configuration"
                />
              </div>
              <div>
                <input
                  type="text"
                  value={machineSize}
                  onChange={(e) => setMachineSize(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                  placeholder="Enter Machine Size"
                />
              </div>
            </div>
            <div className="mb-4">
              <input
                type="text"
                value={uniqueKey}
                readOnly
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
              />
              <p className="text-[#F33823] text-sm mt-1">
                (Autogenerated) Unique key is generated for the machine.
              </p>
            </div>
            <div className="mb-4">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                placeholder="Enter Description (Optional)"
              />
            </div>
            <div className="flex space-x-4">
              <button
                type="submit"
                className="bg-[#F33823] text-white px-2 py-[6px] text-[0.7rem] focus:outline-none rounded"
              >
                ADD MACHINE
              </button>
              <button
                type="button"
                onClick={handleClearForm}
                className="text-[#F33823] text-sm font-bold px-2 rounded focus:outline-none"
              >
                CLEAR FORM
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MasterSettings;
