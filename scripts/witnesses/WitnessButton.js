const contentTarget = document.querySelector(".witnesses__button");
const eventHub = document.querySelector(".container");
let visibility = false;

contentTarget.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "witnesses--button") {
    // Create a custom event to tell any interested component that the user wants to see notes
    const allWitnessesEvent = new CustomEvent("allWitnessesClicked");

    // Dispatch it to event hub
    eventHub.dispatchEvent(allWitnessesEvent);
  }
});

export const DisplayWitnessesButton = () => {
  contentTarget.innerHTML = "<button id='witnesses--button'>Witnesses</button>";
};
