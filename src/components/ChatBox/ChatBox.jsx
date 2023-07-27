import PropTypes from "prop-types";
import { useState } from "react";
import { BsChatRight } from "react-icons/bs";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useGlobalState } from "../Provider/UserProvider";

const ChatBox = ({ userId }) => {
  const [openChatBox, setOpenChatBox] = useState(false);
  const { users, setUserChatId } = useGlobalState();

  return (
    <div className="fixed bottom-0 right-[10%] rounded-t-2xl w-80 overflow-hidden border-x border-blue-600">
      <div
        className="w-full bg-blue-600 text-white flex items-center justify-between p-3"
        onClick={() => setOpenChatBox((prev) => !prev)}
      >
        <div className="flex items-center gap-2">
          <BsChatRight size={24} />
          <span className="text-lg">Chats</span>
        </div>
        <MdKeyboardArrowUp
          size={28}
          className={openChatBox ? "transform rotate-180" : ""}
        />
      </div>

      {openChatBox && (
        <div className="overflow-y-scroll h-[40vh] px-4 bg-white">
          {users &&
            users.length !== 0 &&
            users
              .filter((user) => user?.id.toString() !== userId.toString())
              .map((user, idx) => (
                <div className="my-2" key={user.id}>
                  <div
                    className="flex items-center justify-start gap-2 py-2 relative cursor-default"
                    onClick={() => setUserChatId(user?.id)}
                  >
                    <img
                      src={user?.profilepicture}
                      alt="user"
                      className="w-7 h-7 rounded-full"
                    />
                    <span className="font-semibold">{user?.name}</span>
                    <span
                      className={`${
                        idx % 2 !== 0 ? "bg-gray-300" : "bg-green-500"
                      } rounded-full w-2 h-2 absolute right-1`}
                    ></span>
                  </div>
                  <hr className="bg-black m-0 p-0" />
                </div>
              ))}
        </div>
      )}
    </div>
  );
};

export default ChatBox;

ChatBox.propTypes = {
  userId: PropTypes.string,
};
