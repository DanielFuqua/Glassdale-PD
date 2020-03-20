export const WitnessHTML = witnessObj => {
  return `
    <artictle class="witness">
        <h4>${witnessObj.name}</h4>
        <p>${witnessObj.statements}</p>
    </artictle>
  `;
};
