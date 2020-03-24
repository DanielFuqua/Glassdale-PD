export const Note = (noteObject, relatedCriminal) => {
  return `
        <section class="note">
            <header>
                <h2>${relatedCriminal.name}</h2>
            </header>
            <p>${noteObject.noteText}</p>
            <p>${new Date(noteObject.timestamp).toLocaleDateString()}</p>
            <button id="deleteNote--${noteObject.id}">Delete</button>
        </section>
    `;
};
