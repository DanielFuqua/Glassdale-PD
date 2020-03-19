import { useCriminals } from "./CriminalDataProvider.js";
//this module (KnownAssociateDialog.js) will be imported to main. It listens for a custom event and when it hears the click from criminalList, envokes the showModal() funstion which innerHTML's the dialog onto the DOM 🤓
const contentTarget = document.querySelector(".knownAssociatesContainer");
const eventHub = document.querySelector(".container");

eventHub.addEventListener("knownAssociatesClicked", customEvent => {
  const criminalId = customEvent.detail.criminalChosen;
  const criminalArray = useCriminals();

  const iFoundYou = criminalArray.find(currentCriminal => {
    if (currentCriminal.id === parseInt(criminalId)) {
      return true;
    }
    return false;
  });
  knownAssociatesDialog(iFoundYou);

  const theDialog = document.querySelector("#associatesDialog");
  theDialog.showModal();
});

//this is a function that passes criminalObject as the parameter.
const knownAssociatesDialog = criminalObject => {
  contentTarget.innerHTML = `
    <dialog id="associatesDialog">
    ${criminalObject.known_associates
      .map(currentAssociate => {
        return `<div>${currentAssociate.name}</div>`;
      })
      .join("")}
        <button id="associates--close">Close</button>
        </dialog>
        `;
};

contentTarget.addEventListener("click", clickEvent => {
  if (clickEvent.target.id.startsWith("associates--")) {
    const theDialog = document.querySelector("#associatesDialog");
    theDialog.close();
  }
});
