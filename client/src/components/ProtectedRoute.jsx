import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ Component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    async function checkUser() {
      const isAdmin = JSON.parse(localStorage.getItem("isadmin"));
      if (!isAdmin) {
        navigate("/admin/dashboard");
        toast.error("only admin can access");
      }
    }
    checkUser();
  });

  return (
    <div>
      <Component />
    </div>
  );
};

export default ProtectedRoute;
