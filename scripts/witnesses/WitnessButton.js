const contentTarget = document.querySelector(".witnesses__button");
const eventHub = document.querySelector(".container");
let visibility = true;

contentTarget.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "witnesses--button") {
    // Create a custom event to tell any interested component that the user wants to see notes
    const allWitnessesEvent = new CustomEvent("allWitnessesClicked");

    // Dispatch it to event hub
    eventHub.dispatchEvent(allWitnessesEvent);
  }
});

eventHub.addEventListener("allWitnessesClicked", customEvent => {
  //Since the witnesses button is initially visible when it is clicked we want class "invisible" to be added the classList.
  if (visibility) {
    contentTarget.classList.add("invisible");
  }
});

eventHub.addEventListener("allCriminalsClicked", customEvent => {
  //Since the witnesses button is initially visible when it is clicked we want class "invisible" to be added the classList.

  contentTarget.classList.remove("invisible");
});

export const DisplayWitnessesButton = () => {
  contentTarget.innerHTML = "<button id='witnesses--button'>Witnesses</button>";
};
