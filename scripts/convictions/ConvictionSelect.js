/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions } from "./ConvictionProvider.js"

const contentTarget = document.querySelector(".filters__crime")

export const ConvictionSelect = () => {
    const convictions = useConvictions()
    const render = convictionsCollection => {
        /*
            Use interpolation here to invoke the map() method on
            the convictionsCollection to generate the option elements.
            Look back at the example provided above.
        */
        contentTarget.innerHTML = `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${convictions.map(crime => {
                    return `<option>${crime.name}</option>`
                })}
            </select>
        `
    }

    render(convictions)
}


