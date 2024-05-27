const header = document.querySelector(".header");
const main = document.querySelector("main");
const aboutMeSection = document.querySelector(".main__hero");
const projectsSection = document.querySelector(".main__projects");
const contactSection = document.querySelector(".main__contact");
const contactForm = document.querySelector(".main__contact-form");
const projectsContainerDiv = document.querySelector(
  ".main__projects-container"
);
const activitiesContainer = document.querySelector(
  ".main__contact-activities-container"
);
const toggleThemeButtons = document.querySelectorAll(".toggle-theme-button");

function addClassToImages(toggleThemeButtons) {
  const buttons = document.querySelectorAll(".toggle-theme-button");
  buttons.forEach((toggleThemeButton) => {
    toggleThemeButton.classList.toggle("dark");
    const buttonImages = toggleThemeButton.querySelectorAll("img");
    buttonImages.forEach((img) => {
      img.classList.toggle("dark");
    });
  });
}

function addEventListenerToggleButton(toggleThemeButtons) {
  toggleThemeButtons.forEach((toggleThemeButton) => {
    toggleThemeButton.addEventListener("click", (e) => {
      console.log("cambio de tema");

      addClassToImages(toggleThemeButtons);

      header.classList.toggle("dark");

      const headerChildren = header.querySelectorAll("div");

      headerChildren.forEach((div) => {
        div.classList.toggle("dark");
      });

      main.classList.toggle("dark");

      aboutMeSection.classList.toggle("dark");
      projectsSection.classList.toggle("dark");
      contactSection.classList.toggle("dark");
      projectsContainerDiv.classList.toggle("dark");
      contactForm.classList.toggle("dark");
      activitiesContainer.classList.toggle("dark");

      const popupToggleTheme = document.querySelector("#popup-toggle-theme");

      if (popupToggleTheme) {
        popupToggleTheme.classList.toggle("dark");
      }
    });
  });
}

addEventListenerToggleButton(toggleThemeButtons);

function generatePopup() {
  const popup = document.createElement("div");
  popup.setAttribute("id", "popup-toggle-theme");

  const popupContainer = document.createElement("div");
  popupContainer.classList.add("popup-container");

  popup.innerHTML = `<p>Cambia de tema</p>
  <button class="toggle-theme-button">
    <img src="./public/icons/sun.png" alt="" />
    <img src="./public/icons/moon.png" alt="" />
  </button>
  <button class="popup-button">Entiendo</button>`;

  const toggleThemeButtonsPopup = popup.querySelectorAll(
    ".toggle-theme-button"
  );

  const popupButton = popup.querySelector(".popup-button");

  popupButton.addEventListener("click", () => {
    popup.classList.add("close");

    setTimeout(() => {
      popupButton.parentNode.parentNode.remove();
    }, 150);
  });

  const body = document.querySelector("body");

  popupContainer.appendChild(popup);

  body.appendChild(popupContainer);

  addEventListenerToggleButton(toggleThemeButtonsPopup);
}

window.addEventListener("load", () => {
  generatePopup();
});

export {
  toggleThemeButtons,
  header,
  main,
  aboutMeSection,
  projectsSection,
  contactSection,
  contactForm,
  projectsContainerDiv,
  addEventListenerToggleButton,
  generatePopup,
};
