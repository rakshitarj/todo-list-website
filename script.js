const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if (text === "") return;

    const li = document.createElement("li");
    li.textContent = text;

    const del = document.createElement("span");
    del.textContent = "✖";
    del.className = "delete-btn";
    del.onclick = () => li.remove();

    li.appendChild(del);
    taskList.appendChild(li);

    taskInput.value = "";
});
