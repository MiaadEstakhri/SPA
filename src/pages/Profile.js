import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboards";
import Download from "../components/Downloads";
import SidBar from "../components/SidBar";

const Profile = (props) => {
  return (
    <>
      <h3 style={{ margin: "20px" }}>this is profile</h3>
      <div>
        <SidBar />
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="download" element={<Download />} />
        </Routes>
      </div>
    </>
  );
};

export default Profile;
