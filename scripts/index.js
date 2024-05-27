import { Activity, Repository } from "./usefulClasses.js";
import * as themeToggle from "./themeToggle.js";

const addActivityButton = document.querySelector("#add-activity-button");
const formFields = document.querySelectorAll(".main__contact-form .form-field");
const activitiesContainer = document.querySelector(
  ".main__contact-activities-container"
);
const formActivity = document.querySelector(".main__contact-form");

function convertActivityToHTML(activity) {
  const { title, description, imgUrl } = activity;

  const h3 = document.createElement("h3");
  h3.innerHTML = `<h3 class="">${title}</h3>`;
  const p = document.createElement("p");
  p.innerHTML = `<p class="">${description}</p>`;

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  const img = document.createElement("img");
  img.src = imgUrl;
  const iconContainer = document.createElement("div");
  iconContainer.classList.add("icon-container");
  const deleteIcon = document.createElement("span");
  deleteIcon.classList.add("delete-icon");

  iconContainer.appendChild(deleteIcon);
  imgContainer.appendChild(img);

  const activityHTML = document.createElement("div");
  activityHTML.classList.add("activity-container");
  const activityContainer = document.createElement("div");
  activityContainer.classList.add("activity-before");

  activityHTML.appendChild(imgContainer);
  activityHTML.appendChild(h3);
  activityHTML.appendChild(p);
  activityHTML.appendChild(iconContainer);

  activityContainer.appendChild(activityHTML);

  return activityContainer;
}

function createErrorMessage(childNode) {
  const errorMessage = document.createElement("div");
  errorMessage.innerHTML = `<span style="color: #D54343; margin-top: 4px; margin-bottom: 8px; " class="error-message-input">Este campo es requerido</span>`;
  childNode.parentNode.appendChild(errorMessage);
}

const newRepository = new Repository();

formFields.forEach((formField) => {
  const childNodes = formField.childNodes;

  const input = formField.querySelector(".form-field-input");

  input.addEventListener("input", (e) => {
    if (input.value) {
      const errorMessage = formField.querySelector(".error-message-input");
      if (errorMessage) {
        formField.removeChild(childNodes[childNodes.length - 1]);
      }
    } else {
      createErrorMessage(input);
    }
  });
});

formActivity.addEventListener("submit", (e) => {
  e.preventDefault();

  const activityTitle = document.querySelector("#activityTitle");
  const activityDescription = document.querySelector("#activityDescription");
  const activityImageUrl = document.querySelector("#activityImageUrl");

  if (
    activityTitle.value &&
    activityDescription.value &&
    activityImageUrl.value
  ) {
    activitiesContainer.innerHTML = ``;

    newRepository.createActivity({
      id: crypto.randomUUID(),
      title: activityTitle.value,
      description: activityDescription.value,
      imgUrl: activityImageUrl.value,
    });

    newRepository.activities.map((activity) => {
      const activityHTML = convertActivityToHTML(activity);

      const deleteIcon = activityHTML.querySelector(".icon-container");

      deleteIcon.addEventListener("click", () => {
        activityHTML.remove();

        newRepository.activities = newRepository.activities.filter(
          (item) => activity.id !== item.id
        );
      });

      activitiesContainer.appendChild(activityHTML);
    });
  } else {
    if (!activityTitle.value) {
      const errorMessage = activityTitle.parentNode.querySelector(
        ".error-message-input"
      );
      if (!errorMessage) {
        createErrorMessage(activityTitle);
      }
    }

    if (!activityDescription.value) {
      const errorMessage = activityDescription.parentNode.querySelector(
        ".error-message-input"
      );

      if (!errorMessage) {
        createErrorMessage(activityDescription);
      }
    }

    if (!activityImageUrl.value) {
      const errorMessage = activityImageUrl.parentNode.querySelector(
        ".error-message-input"
      );

      if (!errorMessage) {
        createErrorMessage(activityImageUrl);
      }
    }
  }
});
