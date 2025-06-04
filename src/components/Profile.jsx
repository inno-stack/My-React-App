// import { useState } from "react";

// function Profile() {
//   const [name, setName] = useState("Bessie Coleman");
//   const [profession, setProfession] = useState("Civil Aviator");
//   const [avatar, setAvatar] = useState("/avatar.png");

//   return (
//     <div className="profile">
//       <img src={avatar} alt={name} />
//       <h2>{name}</h2>
//       <p>{profession}</p>
//     </div>
//   );
// }

// export default Profile;

function EditProfileModal() {
  return (
    <dialog id="modalOverlay" className="modal-overlay hidden">
      <div className="modal-content">
        <div className="ep-overlayHeader">
          <h3>Edit Profile</h3>
          <button id="closeModalBtn" className="close-btn">
            <img src="/Icons/Icon_close.svg" alt="close" />
          </button>
        </div>
        <form>
          <div className="ep-overlayBody">
            <div className="ep-form-group">
              <label htmlFor="username">Full Name</label>
              <input
                type="text"
                id="userName"
                name="username"
                placeholder="Input full name"
                required
              />
            </div>
            <div className="ep-form-group">
              <label htmlFor="profession">Profession</label>
              <input
                type="text"
                id="professionInput"
                name="profession"
                placeholder="Input profession"
                required
              />
            </div>
            <div className="ep-form-group">
              <label htmlFor="profileImage">Upload Image</label>
              <input
                type="file"
                id="imageInput"
                name="profileImage"
                accept="image/*"
              />
            </div>
            <div className="ep-form-group">
              <label>Image Preview</label>
              <img
                id="imagePreview"
                style={{ display: "none", maxWidth: "80px", marginTop: "10px" }}
                alt="Preview"
              />
            </div>
            <div className="ep-overlayButton">
              <button type="submit" className="save-changes-btn">
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </dialog>
  );
}
export default EditProfileModal;
// This component renders a modal for editing the user's profile.
// It includes fields for the user's full name, profession, and an option to upload a new profile image.
// The modal has a header with a title and a close button, and a form that contains the input fields.
// The form includes a submit button to save changes.
