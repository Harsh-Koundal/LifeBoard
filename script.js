const goals = document.querySelector(".goals .goal-ul");
const addGoal = document.getElementById("add-goal");
const taskContainer = document.querySelector(".task");
const addTask = document.getElementById("add-task");
const notes = document.querySelector(".notes .notes-ul");
const addNotes = document.querySelector('.add-notes');
const inner = document.querySelectorAll(".inner");
const prcent = document.querySelectorAll(".percent");
const bookMarks = document.querySelector(".bookmarks ul");
const addBookMark = document.querySelector(".add-book");
const moodDisplay = document.getElementById("morning-mood");
const addMood = document.getElementById("add-mood");



const line = 80;
prcent.forEach(per => {
    per.innerHTML = `${line}%`;
})

inner.forEach(ine => {
    ine.style.width = `${line}%`;
})



let inputCreated = false;

window.addEventListener("DOMContentLoaded", () => {
    const savedGoals = JSON.parse(localStorage.getItem("goals")) || [];
    savedGoals.forEach(goal => {
        const li = document.createElement("li");
        li.textContent = goal;
        goals.appendChild(li);
    });
});

addGoal.addEventListener("click", () => {
    if (inputCreated) return;

    const overlay = document.createElement("div");
    overlay.className = "goal-overlay";

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter your Goal";
    input.className = "input";

    overlay.appendChild(input);
    document.body.appendChild(overlay);
    input.focus();
    inputCreated = true;

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const goalText = input.value.trim() || "New Goal";

            const li = document.createElement("li");
            li.textContent = goalText;
            goals.appendChild(li);

            const existingGoals = JSON.parse(localStorage.getItem("goals")) || [];
            existingGoals.push(goalText);
            localStorage.setItem("goals", JSON.stringify(existingGoals));

            document.body.removeChild(overlay);
            inputCreated = false;
        }
    });
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
            inputCreated = false
        }
    });
});

let taskInputCreated = false;

window.addEventListener("DOMContentLoaded", () => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(task => {
        addTaskToDom(task);
    });
});

addTask.addEventListener("click", () => {
    if (taskInputCreated) return;

    const overlay = document.createElement("div");
    overlay.className = "goal-overlay";

    const input = document.createElement("input");
    input.type = "text";
    input.className = "input "
    input.placeholder = "Enter Task";

    overlay.appendChild(input);
    document.body.appendChild(overlay);
    input.focus();
    taskInputCreated = true;

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const taskText = input.value.trim() || "New Task";
            addTaskToDom(taskText);

            const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
            existingTasks.push(taskText);
            localStorage.setItem("tasks", JSON.stringify(existingTasks));

            document.body.removeChild(overlay);
            taskInputCreated = false;
        }
    });
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
            taskInputCreated = false;
        }
    });
});

function addTaskToDom(taskText) {
    const checkDiv = document.createElement("div");
    checkDiv.className = "check";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("change", () => {
        task.style.textDecoration = checkbox.checked ? "line-through" : "none";
        task.style.color = checkbox.checked ? "#46ff46" : "white";
    });


    const task = document.createElement("p");
    task.textContent = taskText;

    checkDiv.appendChild(checkbox);
    checkDiv.appendChild(task);
    taskContainer.insertBefore(checkDiv, addTask);
}


let createdNotes = false;
window.addEventListener("DOMContentLoaded", () => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    savedNotes.forEach(note => {
        const li = document.createElement("li");
        li.textContent = note;
        notes.appendChild(li);
    });
});

addNotes.addEventListener("click", () => {
    if (createdNotes) return;

    const overlay = document.createElement('div');
    overlay.className = "goal-overlay";

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter Note";
    input.className = "input";

    overlay.appendChild(input);
    document.body.appendChild(overlay);
    input.focus();
    inputCreated = true;

    input.addEventListener('keydown', (e) => {
        if (e.key === "Enter") {
            const noteText = input.value.trim() || "New Note";

            const li = document.createElement("li");
            li.textContent = noteText;
            notes.appendChild(li);

            const existingNotes = JSON.parse(localStorage.getItem("notes")) || [];
            existingNotes.push(noteText);
            localStorage.setItem("notes", JSON.stringify(existingNotes));

            document.body.removeChild(overlay);
            createdNotes = false;
        }
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
            createdNotes = false;
        }
    });
});

let bookmarkCreated = false;
window.addEventListener("DOMContentLoaded", () => {
    const savedBookMark = JSON.parse(localStorage.getItem("bookMarks")) || [];
    savedBookMark.forEach(bookMark => {
        const li = document.createElement("li");
        li.textContent = bookMark;
        bookMarks.appendChild(li);
    });
});

addBookMark.addEventListener("click", () => {
    if (bookmarkCreated) return;

    const overlay = document.createElement("div");
    overlay.className = "goal-overlay";

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter BookMark...";
    input.className = "input";

    overlay.appendChild(input);
    document.body.appendChild(overlay);
    input.focus();
    bookmarkCreated = true;

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const bookMarkText = input.value.trim() || "New Goal";

            const li = document.createElement("li");
            li.textContent = bookMarkText;
            bookMarks.appendChild(li);

            const existingBookMark = JSON.parse(localStorage.getItem("bookMarks")) || [];
            existingBookMark.push(bookMarkText);
            localStorage.setItem("bookMarks", JSON.stringify(existingBookMark));

            document.body.removeChild(overlay);
            bookmarkCreated = false;
        }
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
            bookmarkCreated = false;
        }
    });
});

//----------- Mood Tracker ---------- 

const moods = ["😀", "😐", "😞", "😡", "😴"];
const morningMood = new Date().toString().split("T")[0];

const savedMoods =JSON.parse(localStorage.getItem("morningMoodTracker")) || [];
const todayMood = savedMoods.find(entry=>entry.date === morningMood);
if(todayMood){
    moodDisplay.textContent = todayMood.moodDisp
}
