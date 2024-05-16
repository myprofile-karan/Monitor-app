import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const AssignMachine = () => {
  const [users, setUsers] = useState([]);
  const [machines, setMachines] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedMachine, setSelectedMachine] = useState('');

  useEffect(() => {
    const fetchUsersAndMachines = async () => {
      try {
        const usersRes = await axios.get("http://localhost:5000/api/users");
        console.log(usersRes);
        const machinesRes = await axios.get("http://localhost:5000/api/show-machine");  
        console.log(machinesRes);
        setUsers(usersRes.data);
        setMachines(machinesRes.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUsersAndMachines();
  }, []);

  const handleAssignMachine = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.put(`http://localhost:5000/api/users/${selectedUser}/assign`, { machineId: selectedMachine }, {
        headers: { Authorization: token },
      });
      toast.success("machin successfully assigned");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <form onSubmit={handleAssignMachine} className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
      <h2 className="mb-6 text-3xl font-semibold text-gray-800">Assign Machine</h2>
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">User</label>
        <select
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
          required
        >
          <option value="" className='py-6'>Select User</option>
          {users.map((user) => (
            <option key={user._id} value={user._id} className='py-5'>
            {user.email} 
            </option>
          ))}
        </select>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Machine</label>
        <select
          value={selectedMachine}
          onChange={(e) => setSelectedMachine(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
          required
        >
          <option value="">Select Machine</option>
          {machines.map((machine) => (
            <option key={machine._id} value={machine._id}>
              {machine.location} - {machine.machineType}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-gray-500 text-white py-2 rounded-lg font-medium shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
      >
        Assign Machine
      </button>
    </form>
  </div>
  );
};

export default AssignMachine;
