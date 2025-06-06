import { useRef, useEffect } from "react";
import React from "react";


function NewPostModal({ onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && e.target === modalRef.current) {
        onClose();
      }
    };

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("click", handleOutsideClick);
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <>
      <hr className="hero-divider" />
      <dialog ref={modalRef} className="newPostModal" open>
        <div className="newPostModal__wrapper">
          <div className="newPostModal-content">
            <div className="overlayHeader">
              <h3>New post</h3>
              <button id="newPostcloseBtn" className="newPostcloseBtn">
                <img src="src/assets/Icons/Icon_close.svg" alt="close" />
              </button>
            </div>
            <form>
              <div className="overlayBody">
                <div className="form-group">
                  <label htmlFor="postTitle">Post title</label>
                  <input
                    type="text"
                    id="postTitle"
                    placeholder="Input title"
                    required
                  />
                  <span id="titleError" className="error-message"></span>
                </div>
                <div className="form-group">
                  <label htmlFor="uploadImage">Upload Image</label>
                  <input type="file" id="imageUpload" />
                </div>
                <div className="overlayButton">
                  <button className="upload-btn" type="submit">
                    Upload post
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
export default NewPostModal;
