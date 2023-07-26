import PropTypes from "prop-types";

const TabOne = ({ userDetails }) => {
  return (
    <section className="w-full grid grid-cols-[0.8fr_1.2fr] h-96">
      <div className="w-full h-full flex flex-col justify-center items-center gap-2 p-10">
        <img
          src={userDetails?.profilepicture}
          alt="user"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="text-lg font-semibold text-center">
            {userDetails?.name}
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-4 ">
          <p className="text-lg font-semibold  text-gray-400 justify-self-end">
            Username :
          </p>
          <p className="text-lg font-semibold  justify-self-start">
            {userDetails?.username}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <p className="text-lg font-semibold  text-gray-400 justify-self-end">
            E-Mail :
          </p>
          <p className="text-lg font-semibold  justify-self-start">
            {userDetails?.email}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <p className="text-lg font-semibold  text-gray-400 justify-self-end">
            Phone :
          </p>
          <p className="text-lg font-semibold  justify-self-start">
            {userDetails?.phone.split(" ")[0]}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 ">
          <p className="text-lg font-semibold  text-gray-400 justify-self-end">
            Website :
          </p>
          <p className="text-lg font-semibold  justify-self-start">
            {userDetails?.website}
          </p>
        </div>
        <div className="w-[60%] h-[2px] bg-gray-400"></div>
        <h3 className="text-gray-400 text-lg font-semibold">Company</h3>
        <div className="grid grid-cols-2 gap-4 ">
          <p className="text-lg font-semibold  text-gray-400 justify-self-end">
            Name :
          </p>
          <p className="text-lg font-semibold justify-self-start">
            {userDetails?.company?.name}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 ">
          <p className="text-lg font-semibold  text-gray-400 justify-self-end">
            Catchphrase :
          </p>
          <p className="text-lg font-semibold  justify-self-start">
            {userDetails?.company?.catchPhrase}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 ">
          <p className="text-lg font-semibold  text-gray-400 justify-self-end">
            bs :
          </p>
          <p className="text-lg font-semibold  justify-self-start">
            {userDetails?.company?.bs}
          </p>
        </div>
      </div>
      <div className="w-full h-full bg-blue-200"></div>
    </section>
  );
};

export default TabOne;

TabOne.propTypes = {
  userDetails: PropTypes.object,
};
