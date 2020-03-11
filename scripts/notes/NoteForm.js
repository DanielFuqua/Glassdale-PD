<input type="text" id="note-text"></input>

const contentTarget = document.querySelector(".noteFormContainer")

const render = () => {
    contentTarget.innerHTML = `
        Put some input fields and prompts here

        <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    render()
}
