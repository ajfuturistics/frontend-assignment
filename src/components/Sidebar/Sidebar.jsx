import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useGlobalState } from "../Provider/UserProvider";

const TABS = [
  { id: 1, name: "Profile" },
  { id: 2, name: "Posts" },
  { id: 3, name: "Gallery" },
  { id: 4, name: "ToDo" },
];
const Sidebar = () => {
  const { activeTab, setActiveTab } = useGlobalState();
  return (
    <div className="w-[25vw] min-h-[90vh] bg-blue-700 rounded-3xl flex items-center justify-center ">
      <div className="w-full  ">
        {TABS.map((tab, idx) => (
          <div key={tab.id} className="relative ">
            <div
              className="w-full px-10 cursor-pointer"
              onClick={() => setActiveTab(idx)}
            >
              <h3
                className={`py-4 border-b-[3px] text-lg font-semibold ${
                  activeTab === idx ? "text-white" : "text-gray-200"
                }`}
              >
                {tab.name}
              </h3>
            </div>
            {activeTab === idx && (
              <span className="bg-white p-3 rounded-full absolute top-[20%] -right-6">
                <MdOutlineKeyboardArrowRight
                  className="text-gray-400"
                  size={24}
                />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
