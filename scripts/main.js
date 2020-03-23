import { getCriminals } from "./criminals/CriminalDataProvider.js";
import { CriminalList } from "./criminals/CriminalList.js";
import { getConvictions } from "./convictions/ConvictionProvider.js";
import { ConvictionSelect } from "./convictions/ConvictionSelect.js";
import NoteForm from "./notes/NoteForm.js";
import { DisplayNotesButton } from "./notes/DisplayNotesButton.js";
import "./notes/NotesList.js";
import { DisplayNoteFormButton } from "./notes/DisplayNoteFormButton.js";
import "./criminals/knownAssociatesDialog.js";
import "./witnesses/WitnessList.js";
import { DisplayWitnessesButton } from "./witnesses/WitnessButton.js";
// import { DisplayCriminalsButton } from "./criminals/CriminalsButton.js";
import "./criminals/CriminalsButton.js";

getCriminals().then(CriminalList);

// first get all convictions, THEN create the conviction dropdown
getConvictions().then(ConvictionSelect);

DisplayNotesButton();
DisplayNoteFormButton();
NoteForm();
DisplayWitnessesButton();
// DisplayCriminalsButton();
