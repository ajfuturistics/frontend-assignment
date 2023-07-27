import { useState } from "react";
import { useGlobalState } from "../Provider/UserProvider";
import { MdKeyboardArrowUp, MdClear } from "react-icons/md";
import { HiPaperAirplane } from "react-icons/hi";

const UserChat = () => {
  const { userChatId, getUserById, setUserChatId } = useGlobalState();
  const user = getUserById(userChatId);

  const [toggleChat, setToggleChat] = useState(userChatId ? true : false);

  return (
    <div className="fixed bottom-0 right-[34%] rounded-t-2xl w-72 overflow-hidden border-x border-blue-600">
      <div className="w-full bg-blue-600 text-white flex items-center justify-between p-3">
        <div className="flex items-center gap-2">
          <img
            src={user?.profilepicture}
            alt=""
            className="w-6 h-6 rounded-full"
          />
          <span className="">{user?.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <MdKeyboardArrowUp
            size={24}
            className={toggleChat ? "transform rotate-180" : ""}
            onClick={() => setToggleChat((prev) => !prev)}
          />
          <MdClear size={24} onClick={() => setUserChatId(null)} />
        </div>
      </div>

      {toggleChat && (
        <>
          <div className="p-2 w-full bg-white overflow-y-scroll h-[40vh] flex flex-col gap-2 text-sm">
            <p className="w-[80%] bg-slate-300 p-2 rounded-md self-start">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <p className="w-[80%] bg-slate-300 p-2 rounded-md self-start">
              Lorem ipsum dolor sit
            </p>
            <p className="w-full text-center text-gray-500 my-2">9:16 PM</p>
            <p className="w-[80%] bg-slate-300 p-2 rounded-md self-end">
              Lorem ipsum dolor
            </p>
            <p className="w-[80%] bg-slate-300 p-2 rounded-md self-end">
              Lorem ipsum
            </p>
          </div>

          <div className="flex items-center p-2 border border-gray-300">
            <input type="text" className="w-full outline-none" />
            <HiPaperAirplane size={24} className="transform rotate-90" />
          </div>
        </>
      )}
    </div>
  );
};

export default UserChat;
