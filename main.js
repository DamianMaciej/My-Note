const editBtn = document.querySelector(`.edit`);
const saveEditBtn = document.querySelector(`.saveEdit`);
const cancelEditBtn = document.querySelector(`.cancelEdit`);
const textareaEditor = document.querySelector(`#textEditor`);
const noteEditPanel = document.querySelector(`.note-edit-panel`);

const addBtn = document.querySelector(`.add`);
const saveBtn = document.querySelector(`.save`);
const cancelBtn = document.querySelector(`.cancel`);
const delateNote = document.getElementsByClassName(`.delate-note`);
const btnDelateAll = document.querySelector(`.delate-all`);

const noteArea = document.querySelector(`.note-area`);
const notePanel = document.querySelector(`.note-panel`);
const noteCategory = document.querySelector(`#category`);
const textarea = document.querySelector(`#text`);
const error = document.querySelector(`.error`);

let selectedValue;
let cardID = 0;

const openPanel = () => {
    notePanel.style.display = `flex`;
}

const closePanel = () => {
    notePanel.style.display = `none`;
    error.style.visibility =`hidden`;
    textarea.value = ``;
    noteCategory.selectedIndex = 0;
}
const addNote = () => {
    if (textarea.value != `` && noteCategory.options[noteCategory.selectedIndex].value != `0`){
        createNote();
        error.style.visibility =`hidden`;
    } else {
        error.style.visibility =`visible`;
    }
}

const createNote = () => {
    const newNote = document.createElement(`div`);
    newNote.classList.add(`note`);
    newNote.setAttribute(`id`, cardID);

    newNote.innerHTML = `
    <div class="note-header">
        <h3 class="note-title">${selectedValue}</h3>
    
        <button class="editBtn" onclick="openEditPanel(${cardID})"><i class="fa-solid fa-gear"></i></i></button>

        <button class="delate-note" onclick="deleteNote(${cardID})"><i class="fa-solid fa-trash-can"></i></button>
    </div>
    
    <div class="note-body">
        ${textarea.value}
    </div>
    `

    noteArea.appendChild(newNote);
    cardID++
    textarea.value = ``;
    noteCategory.selectedIndex = `0`;
    notePanel.style.display = `none`;
    checkColor(newNote);
}

const selectValue = () => {
    selectedValue = noteCategory.options[noteCategory.selectedIndex].text;
}

const checkColor = note => {

    switch(selectedValue) {
        case `Shopping`:
            note.style.backgroundColor = `rgb(72,255,0)`;
            break;
        case `Work`:
            note.style.backgroundColor = `rgb(255,243,0)`;
            break;
        case `Other`:
            note.style.backgroundColor = `rgb(0,170,255)`;
            break;
    }
}

const openEditPanel = id => {
    noteEditPanel.style.display = `flex`;
    const element = document.getElementById(id);
    textareaEditor.value = element.lastElementChild.textContent;    
}

const closeEditPanel = () => {
    noteEditPanel.style.display = `none`;
    error.style.visibility =`hidden`;
    textareaEditor.value = ``;
}

const saveEditPanel = () => {
    if (textareaEditor.value != ``){
        // editNote();
        error.style.visibility =`hidden`;
    } else {
        error.style.visibility =`visible`;
    }
}

const deleteNote = id => {
    const noteToDelete = document.getElementById(id);
    noteArea.removeChild(noteToDelete);
}

const deleteAllNotes = () => {
    noteArea.textContent = ``;
}

addBtn.addEventListener(`click`, openPanel);
cancelBtn.addEventListener(`click`, closePanel);
saveBtn.addEventListener(`click`, addNote);

saveEditBtn.addEventListener(`click`, saveEditPanel);
cancelEditBtn.addEventListener(`click`, closeEditPanel);

btnDelateAll.addEventListener(`click`, deleteAllNotes);
