import { useParams } from "react-router-dom";
import { useGlobalState } from "../../components/Provider/UserProvider";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProfileNav from "../../components/ProfileNav/ProfileNav";
import TabOne from "../../components/Tabs/TabOne";
import TabSoon from "../../components/Tabs/TabSoon";

const Profile = () => {
  const { userId } = useParams();
  const { getUserById, activeTab } = useGlobalState();
  const userDetails = getUserById(userId);
  console.log(userDetails);

  return (
    <div className="relative flex p-4">
      <Sidebar />
      <div className="w-full p-4">
        <ProfileNav userDetails={userDetails} />

        {activeTab === 0 && <TabOne userDetails={userDetails} />}
        {activeTab !== 0 && <TabSoon />}
      </div>
    </div>
  );
};

export default Profile;
