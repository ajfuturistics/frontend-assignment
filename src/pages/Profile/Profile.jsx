import { useParams } from "react-router-dom";
import { useGlobalState } from "../../components/Provider/UserProvider";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProfileNav from "../../components/ProfileNav/ProfileNav";
import TabOne from "../../components/Tabs/TabOne";
import TabSoon from "../../components/Tabs/TabSoon";
import ChatBox from "../../components/ChatBox/ChatBox";
import UserChat from "../../components/UserChat/UserChat";

const Profile = () => {
  const { userId } = useParams();
  const { getUserById, activeTab, userChatId } = useGlobalState();
  const userDetails = getUserById(userId);

  return (
    <div className="relative flex p-4">
      <Sidebar />

      <div className="w-full px-4">
        <ProfileNav userDetails={userDetails} />

        {activeTab === 0 && <TabOne userDetails={userDetails} />}
        {activeTab !== 0 && <TabSoon />}
      </div>

      <ChatBox userId={userDetails?.id} />
      {userChatId && <UserChat />}
    </div>
  );
};

export default Profile;
