export const Criminal = criminalObject => {
  return `
    <div class="criminal">
        <h4>${criminalObject.name}</h4>
        <ul class="ul">
            <li>Age: ${criminalObject.age}</li>
            <li>Conviction: ${criminalObject.conviction}</li>
            <li>Term Start: ${new Date(
              criminalObject.incarceration.start
            ).toLocaleDateString("en-US")}</li>
            <li>Term End: ${new Date(
              criminalObject.incarceration.end
            ).toLocaleDateString("en-US")}</li>
        </ul>
        <button id="associates--${criminalObject.id}">Associate Alibis</button>
    </div>

    `;
};
