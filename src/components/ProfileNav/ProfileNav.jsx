import PropTypes from "prop-types";
import { useGlobalState } from "../Provider/UserProvider";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProfileNav = ({ userDetails }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const { users } = useGlobalState();
  return (
    <nav className="relative">
      <div className="flex justify-between items-center px-2 border-b-[2px] border-gray-200 pt-2 pb-4">
        <h3 className="text-2xl font-semibold">Profile</h3>
        <div className="my-2 relative">
          <div
            className="flex items-center justify-start gap-4 cursor-pointer"
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            <img
              src={userDetails?.profilepicture}
              alt="user"
              className="w-9 h-9 rounded-full"
            />
            <span className="text-lg font-semibold">{userDetails?.name}</span>
          </div>
        </div>
      </div>
      {openMenu && (
        <div className="bg-white w-[20vw] right-0 absolute shadow-2xl rounded-2xl flex flex-col justify-center items-center p-4 gap-2">
          <img
            src={userDetails?.profilepicture}
            alt="user"
            className="w-20 h-20 rounded-full"
          />
          <div>
            <h3 className="text-lg font-semibold text-center">
              {userDetails?.name}
            </h3>
            <p className="text-lg font-medium text-gray-300 text-center">
              {userDetails?.email}
            </p>
          </div>
          <div className="overflow-y-scroll h-[13vh]">
            <hr className="bg-black m-0 p-0" />
            {users &&
              users.length !== 0 &&
              users.map((user) => (
                <Link to={`/profile/${user.id}`} className="my-2" key={user.id}>
                  <div className="flex items-center justify-start gap-2 py-2">
                    <img
                      src={user?.profilepicture}
                      alt="user"
                      className="w-7 h-7 rounded-full"
                    />
                    <span className="text-lg font-semibold">{user?.name}</span>
                  </div>
                  <hr className="bg-black m-0 p-0" />
                </Link>
              ))}
          </div>

          <Link
            to="/"
            className="bg-red-400 rounded-full py-2 px-4 text-white font-semibold"
          >
            Sign Out
          </Link>
        </div>
      )}
    </nav>
  );
};

export default ProfileNav;

ProfileNav.propTypes = {
  userDetails: PropTypes.object,
};
