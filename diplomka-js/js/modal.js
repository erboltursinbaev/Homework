 const modal = () => {
  const buttons = document.querySelectorAll("[data-modal-button]");
  const closeButtons = document.querySelectorAll("[data-modal-close]");

  
  const modal = document.querySelector(".modal");
  const modalWindow = document.querySelector(".modal-buy");

  
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.classList.add("modal--open");
      modalWindow.classList.add("modal__window--open");
    });
  });

  
  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.classList.remove("modal--open");
      modalWindow.classList.remove("modal__window--open");
    });
  });

 
  modal.addEventListener("click", (e) => {
    if (!e.target.closest(".modal-buy")) {
      modal.classList.remove("modal--open");
      modalWindow.classList.remove("modal__window--open");
    }
  });
};

export default modal;
