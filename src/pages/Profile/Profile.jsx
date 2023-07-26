import { useParams } from "react-router-dom";
import { useGlobalState } from "../../components/Provider/UserProvider";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProfileNav from "../../components/ProfileNav/ProfileNav";
import TabOne from "../../components/Tabs/TabOne";

const Profile = () => {
  const { userId } = useParams();
  const { getUserById, activeTab } = useGlobalState();
  const userDetails = getUserById(userId);
  console.log(userDetails);

  return (
    <div className="flex p-4">
      <Sidebar />
      <div className="w-full p-4">
        <ProfileNav userDetails={userDetails} />

        {activeTab === 0 && <TabOne userDetails={userDetails} />}
      </div>
    </div>
  );
};

export default Profile;
