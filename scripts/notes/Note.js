export const Note = (noteObject, person) => {
  return `
        <section class="note">
            <header>
                <h2>${person.name}</h2>
            </header>
            <p>${noteObject.noteText}</p>
            <p>${new Date(noteObject.timestamp).toLocaleDateString()}</p>
            <button id="deleteNote--${noteObject.id}">Delete</button>
        </section>
    `;
};
