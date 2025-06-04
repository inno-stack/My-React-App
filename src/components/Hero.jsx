function Hero() {
  return (
    <section className="hero-section">
      <figure className="avatar-container">
        <div className="avatar__img-container">
          <img
            id="profileImage"
            className="avatar"
            src="/src/assets/Images/Avatar.png"
            alt="avatar-image"
          />
        </div>
        <figcaption className="avatar-info">
          <div className="avatar-text">
            <h2 className="truncate" id="profileName">
              Bessie Coleman
            </h2>
            <p className="truncate" id="profileProfession">
              Civil Aviator
            </p>
          </div>
          <button className="edit-profile-btn">
            <img src="src/assets/Icons/Icon_edit.svg" alt="edit" />
            Edit Profile
          </button>
        </figcaption>
      </figure>
      <button id="newPostBtn" className="newPostBtn">
        <span>
          <img src="src/assets/Icons/Icon_add.svg" alt="add" />
        </span>
        <span>New Post</span>
      </button>
    </section>
  );
}
export default Hero;
// This component renders the hero section of the application, which includes the user's profile information and a button to create a new post.
// The profile information includes the user's avatar, name, and profession.
