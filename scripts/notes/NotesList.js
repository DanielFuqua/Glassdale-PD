import { getNotes, useNotes } from "./NotesProvider.js";
import { Note } from "./Note.js";
import { useCriminals } from "../criminals/CriminalDataProvider.js";
import { deleteNote } from "./NotesProvider.js";

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

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id.startsWith("deleteNote--")) {
    const [prefix, noteId] = clickEvent.target.id.split("--");
    /*
    Invoke the function that performs the delete operation.
    
    Once the operation is complete you should THEN invoke
    useNotes() and render the note list again.
    */
    deleteNote(noteId).then(() => {
      const updatedNotes = useNotes();
      render(updatedNotes);
    });
  }
});

const render = () => {
  if (visibility) {
    contentTarget.classList.remove("invisible");
  } else {
    contentTarget.classList.add("invisible");
  }
  getNotes().then(() => {
    const notes = useNotes();
    const criminals = useCriminals();
    contentTarget.innerHTML = notes
      .map(note => {
        // Find the related criminal
        const foundCriminal = criminals.find(
          criminal => criminal.id === note.criminalId
        );

        const html = Note(note, foundCriminal);
        return html;
      })
      .join("");
  });
};

export const NotesList = () => {
  render();
};
