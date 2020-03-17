import { saveNote } from "./NoteProvider.js";

const contentTarget = document.querySelector(".noteFormContainer");
const eventHub = document.querySelector(".container");

const render = () => {
  contentTarget.innerHTML = `
        <fieldset>
        <label for="noteText">Note:</label>
        <input type="text" id="noteText">
        </fieldset>
        
        <fieldset>
        <label for="criminalName">Criminal:</label>
        <input type="text" id="criminalName">
        </fieldset>
        
        <button id="saveNote">Save Note</button>
    `;
};

const NoteForm = () => {
  render();
};

contentTarget.addEventListener("click", clickEvent => {
  // Make sure it was one of the color buttons
  if (clickEvent.target.id === "saveNote") {
    const noteText = document.querySelector("#noteText").value;
    const criminalName = document.querySelector("#criminalName").value;
    const newNote = {
      noteText: noteText,
      criminalName: criminalName,
      timestamp: Date.now()
    };
    saveNote(newNote);
  }
});

export default NoteForm;
