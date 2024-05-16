import SideBar from "./SideBar";

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout w-full flex h-screen">
      <div className="w-[20%]">
        <SideBar />
      </div>
      <div className="flex flex-col w-full">
   
        <div className="content ">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
