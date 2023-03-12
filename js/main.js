//sellectors
const notifecations = document.querySelector(".change");
const removeBackgroundOne = document.querySelector(".app__header-section-two");
const removeBackgroundTwo = document.querySelector(
  ".app__header-section-three"
);
const removeBackgroundThree = document.querySelector(
  ".app__header-section-four"
);
const hideCircleOne = document.querySelector(".one");
const hideCircleTwo = document.querySelector(".two");
const hideCircleThree = document.querySelector(".three");

const read = document.querySelector(".changeSpan");
//event listners

function changeState() {
  if (removeBackgroundOne.style.backgroundColor !== "var(--clr-VLGB)") {
    removeBackgroundOne.style.backgroundColor = "var(--clr-WT)";
    hideCircleOne.style.display = "none";
  }
  if (removeBackgroundTwo.style.backgroundColor !== "var(--clr-VLGB)") {
    removeBackgroundTwo.style.backgroundColor = "var(--clr-WT)";
    hideCircleTwo.style.display = "none";
  }
  if (removeBackgroundThree.style.backgroundColor !== "var(--clr-VLGB)") {
    removeBackgroundThree.style.backgroundColor = "var(--clr-WT)";
    hideCircleThree.style.display = "none";
  }
  if ((read.innerHTML = "3")) {
    read.innerHTML = "0";
  }
}
