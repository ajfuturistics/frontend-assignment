import { Link } from "react-router-dom";
import { useGlobalState } from "../../components/Provider/UserProvider";

function App() {
  const { users } = useGlobalState();
  return (
    <div className="relative flex justify-center items-center min-h-screen">
      <div className="overflow-hidden absolute top-0 right-0 -z-10 w-full">
        <svg
          id="visual"
          viewBox="0 0 900 600"
          // width="900"
          // height="600"
          xmlns="http://www.w3.org/2000/svg"
          // xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <rect x="0" y="0" fill="#ffffff"></rect>
          <path
            d="M0 231L25 237.5C50 244 100 257 150 251C200 245 250 220 300 226C350 232 400 269 450 283.2C500 297.3 550 288.7 600 277.8C650 267 700 254 750 258.7C800 263.3 850 285.7 875 296.8L900 308L900 0L875 0C850 0 800 0 750 0C700 0 650 0 600 0C550 0 500 0 450 0C400 0 350 0 300 0C250 0 200 0 150 0C100 0 50 0 25 0L0 0Z"
            fill="#0066FF"
            strokeLinecap="round"
            strokeLinejoin="miter"
          ></path>
        </svg>
      </div>

      <section className="bg-white p-6 rounded-lg min-w-[30vw] shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">
          Select an Account
        </h2>
        <div className="max-h-[50vh] overflow-y-auto p-3">
          {users &&
            users.length !== 0 &&
            users.map((user) => (
              <Link to={`/profile/${user.id}`} className="my-2" key={user.id}>
                <div className="flex items-center justify-start gap-4 py-3">
                  <img
                    src={user?.profilepicture}
                    alt="user"
                    className="w-9 h-9 rounded-full"
                  />
                  <span className="text-lg font-semibold">{user?.name}</span>
                </div>
                <hr className="bg-black m-0 p-0" />
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}

export default App;
