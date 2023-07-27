import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useEffect } from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [userChatId, setUserChatId] = useState(null);

  useEffect(() => {
    const getUsers = () => {
      axios
        .get("https://panorbit.in/api/users.json")
        .then((res) => {
          setUsers(res.data.users);
        })
        .catch((e) => {
          console.log(e);
          setUsers([]);
        });
    };

    getUsers();
  }, []);

  const getUserById = (userId) => {
    if (!userId) return null;
    const user = users.find((user) => user.id.toString() === userId.toString());
    if (!user) return null;

    return user;
  };

  return (
    <UserContext.Provider
      value={{
        getUserById,
        users,
        activeTab,
        setActiveTab,
        userChatId,
        setUserChatId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalState = () => {
  const data = useContext(UserContext);
  return data;
};
