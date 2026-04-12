 const Modal = () => {
 const buttons = document.querySelectorAll("[data-modal-button]");
  const closeButtons = document.querySelectorAll("[data-modal-close]");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.modalButton;

      const modal = document.querySelector(
        `[data-modal-window="${target}"]`
      );

      if (modal) {
        modal.classList.add("visible");
      }
    });
  });

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.closest("[data-modal-window]");

      if (modal) {
        modal.classList.remove("visible");
      }
    });
  });
 };
 export default Modal;