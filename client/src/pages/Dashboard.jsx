import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState();
  const [userData, setUserData] = useState();
  const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));

  const { email } = useParams();

  useEffect(() => {
    async function fetchingMachines() {
      const res = await axios.get("http://localhost:5000/api/show-machine");
      setData(res.data);
      console.log("data; ", res.data);
      const userRes = await axios.get(
        `http://localhost:5000/api/users/${email}`
      );
      setUserData(userRes.data);
      console.log("userData: ", userRes.data);
    }
    fetchingMachines();
  }, []);

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>

      {isAdmin ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data &&
            data?.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg p-6"
              >
                <h3 className="text-lg font-semibold mb-4 capitalize">
                  {item.location} : {Math.floor(Math.random() * 10)} Malls
                </h3>
                <div className="flex flex-col">
                  <div className="flex items-center mb-2">
                    <span className="font-semibold mr-2">Machine Type:</span>
                    <span>{item.machineType}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="font-semibold mr-2">Machine Config:</span>
                    <span>{item.machineConfig}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="font-semibold mr-2">Machine Size:</span>
                    <span>{item.machineSize}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="font-semibold mr-2">
                      Machine Description:
                    </span>
                    <span>{item.machineDescription}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-semibold mr-2">Unique ID:</span>
                    <span>{item.uniqueKey}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div>
          {userData && userData?.map((item) => {
            return (
              <div
                className="p-5 border-2 border-gray-200 rounded-lg"
                key={item?._id}
              >
                <div>Email: {item?.email}</div>
                <div>machine assigned id: {item?.machines[0]}</div>
             
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
