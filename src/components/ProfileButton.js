import PfpPicture from "../assets/pfp.svg";
import QRButton from "../assets/qr-button.svg";

const handleClick = () => {
  console.log("Button clicked!");
};

const ProfileButton = () => {
  return (
    <div className="relative">
      <img
        className=""
        src={PfpPicture}
        alt=""
        style={{ zIndex: "1" }}
      />
      <button className="absolute bottom-0 left-50" onClick={handleClick}>
        <img className="" src={QRButton} alt="" style={{ zIndex: "2" }} />
      </button>
    </div>
  );
};

export default ProfileButton;
