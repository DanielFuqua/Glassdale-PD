const contentTarget = document.querySelector(".criminals__button");
const eventHub = document.querySelector(".container");
let visibility = false;

contentTarget.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "criminals--button") {
    // Create a custom event to tell any interested component that the user wants to see notes
    const allCriminalsEvent = new CustomEvent("allCriminalsClicked");

    // Dispatch it to event hub
    eventHub.dispatchEvent(allCriminalsEvent);
  }
});

eventHub.addEventListener("allCriminalsClicked", customEvent => {
  //Since the witnesses button is initially visible when it is clicked we want class "invisible" to be added the classList.

  contentTarget.classList.add("invisible");
});

eventHub.addEventListener("allWitnessesClicked", customEvent => {
  //Since the witnesses button is initially visible when it is clicked we want class "invisible" to be added the classList.

  contentTarget.classList.remove("invisible");
});

export const DisplayCriminalsButton = () => {
  contentTarget.innerHTML = "<button id='criminals--button'>Criminals</button>";
};
