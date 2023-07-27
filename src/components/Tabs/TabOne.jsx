import PropTypes from "prop-types";

const TabOne = ({ userDetails }) => {
  return (
    <section className="w-full grid grid-cols-[0.8fr_0.01fr_1.1fr] h-96">
      <div className="w-full h-full flex flex-col justify-center items-center gap-2 p-10">
        <img
          src={userDetails?.profilepicture}
          alt="user"
          className="w-32 h-32 rounded-full"
        />
        <div>
          <h3 className="text-lg font-semibold text-center">
            {userDetails?.name}
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-4 ">
          <p className="font-semibold  text-gray-400 justify-self-end">
            Username :
          </p>
          <p className="font-semibold  justify-self-start">
            {userDetails?.username}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <p className="font-semibold  text-gray-400 justify-self-end">
            E-Mail :
          </p>
          <p className="font-semibold  justify-self-start">
            {userDetails?.email}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <p className="font-semibold  text-gray-400 justify-self-end">
            Phone :
          </p>
          <p className="font-semibold  justify-self-start">
            {userDetails?.phone.split(" ")[0]}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 ">
          <p className="font-semibold text-gray-400 justify-self-end">
            Website :
          </p>
          <p className="font-semibold justify-self-start">
            {userDetails?.website}
          </p>
        </div>
        <div className="w-[60%] h-[2px] bg-gray-400"></div>
        <h3 className="text-gray-400 text-lg font-semibold">Company</h3>
        <div className="grid grid-cols-2 gap-4 ">
          <p className="font-semibold  text-gray-400 justify-self-end">
            Name :
          </p>
          <p className="font-semibold justify-self-start">
            {userDetails?.company?.name}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 ">
          <p className="font-semibold  text-gray-400 justify-self-end">
            Catchphrase :
          </p>
          <p className="font-semibold  justify-self-start">
            {userDetails?.company?.catchPhrase}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 ">
          <p className="font-semibold  text-gray-400 justify-self-end">bs :</p>
          <p className="font-semibold  justify-self-start">
            {userDetails?.company?.bs}
          </p>
        </div>
      </div>
      <div className="h-[70vh] w-[2px] my-10 bg-gray-400"></div>
      <div className="w-full h-full flex flex-col gap-2 p-10">
        <h3 className="text-gray-400 font-semibold text-start">Address :</h3>

        <div className="flex gap-4 ml-10">
          <p className="font-semibold  text-gray-400 text-end w-20">Street :</p>
          <p className="font-semibold text-start">
            {userDetails?.address?.street}
          </p>
        </div>
        <div className="flex gap-4 ml-10">
          <p className="font-semibold  text-gray-400 text-end w-20">Suite :</p>
          <p className="font-semibold  text-start">
            {userDetails?.address?.suite}
          </p>
        </div>
        <div className="flex gap-4 ml-10">
          <p className="font-semibold  text-gray-400 text-end w-20">City :</p>
          <p className="font-semibold  text-start">
            {userDetails?.address?.city}
          </p>
        </div>
        <div className="flex gap-4 ml-10">
          <p className="font-semibold  text-gray-400 text-end w-20">
            Zipcode :
          </p>
          <p className="font-semibold  text-start">
            {userDetails?.address?.zipcode}
          </p>
        </div>

        <div className="pt-4 px-6 pb-0">
          {/* <iframe
            key={`map-user-${userDetails?.id}`}
            // src={`//maps.google.com/maps?q=${userDetails?.address?.geo?.lat},${userDetails?.address?.geo?.lng}&z=zoom&output=embed`}
            src={`https://maps.google.com/maps?q=${userDetails?.address?.geo?.lat},${userDetails?.address?.geo?.lng}&hl=es;z=14&output=embed`}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe> */}
          <img src="/map.png" alt="map" className="w-full rounded-3xl" />
        </div>
        <div className="px-6 flex justify-end gap-4">
          <p className="text-gray-400">
            Lat :{" "}
            <span className="text-black font-semibold">
              {userDetails?.address?.geo?.lat}
            </span>
          </p>
          <p className="text-gray-400">
            Long :{" "}
            <span className="text-black font-semibold">
              {userDetails?.address?.geo?.lng}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TabOne;

TabOne.propTypes = {
  userDetails: PropTypes.object,
};
