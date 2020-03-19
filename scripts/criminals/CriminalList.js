import { useCriminals } from "./CriminalDataProvider.js";
import { Criminal } from "./Criminal.js";

const contentTarget = document.querySelector(".criminalsContainer");
const eventHub = document.querySelector(".container");

contentTarget.addEventListener("click", clickEvent => {
  if (clickEvent.target.id.startsWith("associates--")) {
    const [junk, criminalId] = clickEvent.target.id.split("--");

    //time to yell at the system that a known associates button was clicked
    const showAssociatesEvent = new CustomEvent("knownAssociatesClicked", {
      detail: {
        criminalChosen: criminalId
      }
    });

    eventHub.dispatchEvent(showAssociatesEvent);
  }
});

eventHub.addEventListener("crimeChosen", event => {
  // Filter the list of criminal who committed the crime

  // Get the criminals
  const criminals = useCriminals();

  // Get the crime
  const theCrimeThatWasChosen = event.detail.chosenCrime;

  // Look at all of the criminals and determine if each one is a vandal
  const guiltyCriminals = criminals.filter(criminal => {
    if (criminal.conviction === theCrimeThatWasChosen) {
      return true;
    }
    return false;
  });

  // Clear inner HTML of the criminal list
  contentTarget.innerHTML = "";

  // Build it up again
  for (const singleGuiltyCriminal of guiltyCriminals) {
    contentTarget.innerHTML += Criminal(singleGuiltyCriminal);
  }
});

export const CriminalList = () => {
  const criminals = useCriminals();

  for (const singleCriminal of criminals) {
    contentTarget.innerHTML += Criminal(singleCriminal);
  }
};
