import Image from "react-bootstrap/Image";
import ProfilePic from "../assets/profilePic.jpg";
export default function Profile() {
  const profileStyle = {
    width: "30px",
    height: "30px",
  };

  return (
    <div className="ml-auto" style={{ marginLeft: "10px" }}>
      <Image
        src={ProfilePic}
        alt="Profile"
        style={profileStyle}
        roundedCircle
      />
    </div>
  );
}
