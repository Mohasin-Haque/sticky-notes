let notes = [
    {
        id: new Date(),
        title: "My first note",
        body: "This is my first note",
        bgColor: "pink"
    }
]
const createElement = (tag, classes = []) => {
    const element = document.createElement(tag);
    classes.forEach(cl => {
        element.classList.add(cl);
    })
    return element;
}
const createNoteView = (note) => {
    const noteDiv = createElement('div', ['note']);
    noteDiv.id = note.id;
    const textDiv = createElement('div', ['text']);
    textDiv.style.background = note.bgColor;
    const title = createElement('b', ['title']);
    const bodyP = createElement('p', ['body']);
    bodyP.innerHTML = note.body;
    editButton = createElement('button', ['edit']);
    editButton.innerHTML = "Edit Note";
    const deleteButton = createElement('button', ['delete']);
    deleteButton.innerHTML = "Delete Note";

    textDiv.append(title, bodyP);
    noteDiv.append(textDiv, editButton, deleteButton);
    return noteDiv;
}

const noteDiv = document.querySelector('.notesDiv');

notes.forEach(note => {
    const noteDiv = createNoteView(note);
    notesDiv.append(noteDiv);
})