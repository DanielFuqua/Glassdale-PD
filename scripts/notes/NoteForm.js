import { saveNote } from "./NotesProvider.js";
import { useCriminals } from "../criminals/CriminalDataProvider.js";
import { useWitnesses, getWitnesses } from "../witnesses/WitnessProvider.js";

const contentTarget = document.querySelector(".noteFormContainer");
const eventHub = document.querySelector(".container");

let visibility = false;

eventHub.addEventListener("noteStateChanged", customEvent => {
  render();
  contentTarget.classList.remove("invisible");
});

eventHub.addEventListener("noteFormButtonClicked", customEvent => {
  visibility = !visibility;

  if (visibility) {
    contentTarget.classList.remove("invisible");
  } else {
    contentTarget.classList.add("invisible");
  }
});

// Handle browser-generated click event in component
contentTarget.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveNote") {
    const noteText = document.querySelector("#noteText").value;
    const criminalId = document.querySelector("#criminalDropdown").value;
    const witnessId = document.querySelector("#witnessDropdown").value;
    if (criminalId === 0) {
      // Make a new object representation of a note
      const newNote = {
        noteText: noteText,
        criminalId: parseInt(criminalId),
        timestamp: Date.now()
      };
      saveNote(newNote);
    } else {
      const witnessNote = {
        noteText: noteText,
        witnessId: parseInt(witnessId),
        timestamp: Date.now()
      };
      saveNote(witnessNote);

      // Change API state and application state
    }
  }
});

const render = () => {
  contentTarget.classList.add("invisible");
  const allCriminals = useCriminals();
  const allWitnesses = useWitnesses();

  contentTarget.innerHTML = `
        <fieldset>
        <select id="criminalDropdown">
        <option value="0">Please choose a criminal...</option>
        ${allCriminals.map(currentCriminalObject => {
          return `<option value="${currentCriminalObject.id}">${currentCriminalObject.name}</option>`;
        })}
        </select>
        <select id="witnessDropdown">
        <option value="0">Please choose a witness...</option>
        ${allWitnesses.map(currentWitnessObject => {
          return `<option value="${currentWitnessObject.id}">${currentWitnessObject.name}</option>`;
        })}
        </select>
        </fieldset>

        <fieldset>
            <label for="noteText">Note:</label>
            <input type="text" id="noteText">
        </fieldset>
        <button id="saveNote">Save Note</button>
    `;
};

const NoteForm = () => {
  render();
};

export default NoteForm;
