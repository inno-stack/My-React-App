import { useState } from "react";


function Profile() {
  const [name, setName] = useState("Bessie Coleman");
  const [profession, setProfession] = useState("Civil Aviator");
  const [avatar, setAvatar] = useState("/avatar.png");

  return (
    <div className="profile">
      <img src={avatar} alt={name} />
      <h2>{name}</h2>
      <p>{profession}</p>
    </div>
  );
}

export default Profile;