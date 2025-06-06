// ImagePreviewModal.jsx
export default function ImagePreviewModal({ visible, image, title, onClose }) {
  if (!visible) return null;

  return (
    <div id="imageModal" className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img id="modalImage" src={image} alt={title} />
        <p id="modalCaption">{title}</p>
        <button id="closeImageModal" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
