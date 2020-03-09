import { useCriminals } from "./CriminalDataProvider.js";
import { Criminal } from "./Criminal.js"

const contentTarget = document.querySelector(".criminalsContainer")
export const CriminalList = () => {
    const criminalArray = useCriminals()
    for (const criminalObject of criminalArray) {
        const criminalHTML = Criminal(criminalObject)
        contentTarget.innerHTML += criminalHTML
    }
}
