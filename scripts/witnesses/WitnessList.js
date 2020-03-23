import { getWitnesses, useWitnesses } from "./WitnessProvider.js";
import { WitnessHTML } from "./Witness.js";

const witnessContainer = document.querySelector(".witnessesContainer");
const eventHub = document.querySelector(".container");
let visibility = false;

eventHub.addEventListener("allWitnessesClicked", customEvent => {
  render();
  visibility = !visibility;

  if (visibility) {
    witnessContainer.classList.remove("invisible");
  } else {
    witnessContainer.classList.add("invisible");
  }
});

const render = () => {
  getWitnesses().then(() => {
    witnessContainer.innerHTML = `
          <h1>Witnesses</h1>
        `;
    const allTheWitnesses = useWitnesses();

    witnessContainer.innerHTML += allTheWitnesses
      .map(currentWitnessObject => {
        return WitnessHTML(currentWitnessObject);
      })
      .join("");
  });
};
