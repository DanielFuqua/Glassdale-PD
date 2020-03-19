import { getNotes, useNotes } from "./NotesProvider.js";
import { Note } from "./Note.js";

const contentTarget = document.querySelector(".notesContainer");
const eventHub = document.querySelector(".container");
let visibility = false;

eventHub.addEventListener("noteStateChanged", customEvent => {
  render();
});

eventHub.addEventListener("allNotesClicked", customEvent => {
  render();
  visibility = !visibility;

  if (visibility) {
    contentTarget.classList.remove("invisible");
  } else {
    contentTarget.classList.add("invisible");
  }
});

const render = () => {
  getNotes().then(() => {
    const allTheNotes = useNotes();

    contentTarget.innerHTML = allTheNotes
      .map(currentNoteObject => {
        return Note(currentNoteObject);
      })
      .join("");
  });
};
