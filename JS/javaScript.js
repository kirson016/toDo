var Task = {
    elAddButton: document.getElementById('btn-AddNewTask'),
    elsSaveTask: document.getElementById('btn-saveTask'),
    elDeleteTask: document.getElementById('btnClearTaskSize'),
    elResponceSpan: document.getElementById('responce'),
    elTextInput: document.getElementById("taskName"),
    elTaskPriority: document.getElementById("TaskPriority"),
    elValue0: document.getElementById("value0"),
    elValue1: document.getElementById("value1"),
    elValue3: document.getElementById("value3"),
    eltaskDesciptionInput: document.getElementById("taskDesciptionInput"),
    elboxes: document.getElementsByClassName('checked'),
    elCheckBox: document.getElementsByClassName('userTaskText'),

    addMoreTask: function() {
        let priority;
        let text = Task.elTextInput.value;
        let TaskPriority = Task.elTaskPriority.value;
        let taskDescription = Task.eltaskDesciptionInput.value;
        let completed = 'COMPLETED';
        let active = 'ACTIVE';

        if (TaskPriority == 3) {
            priority = '<button type="button" class="btn-group-sm btn-success priorityButtons ">LOW</button>';
        } else if (TaskPriority == 1) {
            priority = '<button type="button" class="btn-group-sm btn-warning priorityButtons " >MEDIUM</button>';
        } else {
            priority = '<button type="button" class="btn-group-sm btn-danger  priorityButtons" >HIGH</button>';
        }

        if (text.length < 3 || TaskPriority == "none") {
            alert("Task name is to short! or didn't set Task Priority");
        } else if (text.length > 64 || taskDescription.length > 70) {
            alert("Task name or description is to long!");
        } else {
            //Task.elResponceSpan.innerHTML += '<div class="checkboxid"><p class="userTaskText"> ' + text + '</p><input type="checkbox" id="checkBox" class="checked" aria-label="..."> ' + priority;
            Task.elResponceSpan.innerHTML += '<div class="checkBoxSelector"><p class="userTaskText"><span class="lineThrough">' + text + '</span><span class="statusColor">' + active + '<span class="statusHide">' + completed + '</span></p><span class="checkBOX"><label><input type="checkbox"  class="checked"  onclick=Task.handleClick() aria-label="..."></label></span> ' + priority + '</div>';
            Task.elTextInput.value = "";
            Task.elTaskPriority.value = "none";
            Task.eltaskDesciptionInput.value = "";
        }
    },


    saveTasks: function() {

        let text = Task.elTextInput.value;
        let TaskPriority = Task.elTaskPriority.value;
        let taskDescription = Task.eltaskDesciptionInput.value;

        if (text.length < 3 || TaskPriority == "none") {
            alert("Task name is to short! or didn't set Task Priority");
        } else if (text.length > 64 || taskDescription.length > 70) {
            alert("Task name or description is to long!");
        } else {
            Task.addMoreTask();
            webWindowControl.hideAddTaskWindow();
        }
    },


    deleteSelectedCheckBox: function() {
        var texts = document.getElementsByClassName('checkBoxSelector');

        for (var i = 0; i < Task.elboxes.length; i++) {
            box = Task.elboxes[i];
            txt = texts[i];
            if (box.checked) {
                box.parentNode.removeChild(box);
                txt.parentNode.removeChild(txt);
            }
        }
    },

    handleClick: function() {
        let aColl = document.getElementsByClassName('lineThrough');
        let lineThrough = 'line-through';
        let noLine = 'none';
        let texts = document.getElementsByClassName('checkBoxSelector');
        let hideActive = document.getElementsByClassName('statusColor');
        let hideCopleted = document.getElementsByClassName('statusHide');

        for (let i = 0; i < Task.elboxes.length; i++) {
            box = Task.elboxes[i];
            txt = texts[i];
            if (box.checked) {
                hideActive[i].style["visibility"] = 'hidden';
                hideCopleted[i].style["visibility"] = 'visible';
                aColl[i].style["text-decoration"] = lineThrough;
            } else {
                hideActive[i].style["visibility"] = 'visible';
                hideCopleted[i].style["visibility"] = 'hidden';
                aColl[i].style["text-decoration"] = noLine;
            }
        }
        if (typeof(Storage) !== "undefined") { // Browser supports it
            localStorage.base = document.getElementById("responce").innerHTML;
        }
    },
};


var webWindowControl = {
    elShowAllTaskButton: document.getElementById("btnShowAllTasks"),
    elAddNewTaskButton: document.getElementById("btnAddNewTaskSize"),

    hideAddTaskWindow: function() {
        let addTaskCss = document.getElementsByClassName('addTaskWindowBackground');
        let taskWindow = document.getElementsByClassName('WindowBackground');
        let hideActive = document.getElementsByClassName('statusColor');
        let hideCopleted = document.getElementsByClassName('statusHide');
        let aColl = document.getElementsByClassName('userTaskText');

        for (let i = 0; i < addTaskCss.length; i++) {
            addTaskCss[i].style["visibility"] = 'hidden';
            taskWindow[i].style["visibility"] = 'visible';
        }

        for (let j = 0; j < Task.elboxes.length; j++) {
            box = Task.elboxes[j];
            if (box.checked) {
                hideActive[j].style["visibility"] = 'hidden';
                hideCopleted[j].style["visibility"] = 'visible';
            } else {
                hideActive[j].style["visibility"] = 'visible';
                hideCopleted[j].style["visibility"] = 'hidden';
            }
        }

    },
    hideTaskWindow: function() {
        let addTaskCss = document.getElementsByClassName('addTaskWindowBackground');
        let taskWindow = document.getElementsByClassName('WindowBackground');
        let hideActive = document.getElementsByClassName('statusColor');
        let hideCopleted = document.getElementsByClassName('statusHide');
        let aColl = document.getElementsByClassName('userTaskText');

        for (let i = 0; i < addTaskCss.length; i++) {
            taskWindow[i].style["visibility"] = 'hidden';
            addTaskCss[i].style["visibility"] = 'visible';
        }

        for (let j = 0; j < Task.elboxes.length; j++) {
            box = Task.elboxes[j];
            if (box.checked) {
                hideActive[j].style["visibility"] = 'hidden';
                hideCopleted[j].style["visibility"] = 'hidden';
            } else {
                hideActive[j].style["visibility"] = 'hidden';
                hideCopleted[j].style["visibility"] = 'hidden';
            }
        }
    },
}

var deleteTaskStorage = function() {
    Task.deleteSelectedCheckBox();
    if (typeof(Storage) !== "undefined") { // Browser supports it
        localStorage.base = document.getElementById("responce").innerHTML;
    }
}

var saveTaskStorage = function() {
    Task.saveTasks();
    if (typeof(Storage) !== "undefined") { // Browser supports it
        localStorage.base = document.getElementById("responce").innerHTML;
    }
}

var addMorTaskStorage = function() {
    Task.addMoreTask();
    if (typeof(Storage) !== "undefined") { // Browser supports it
        localStorage.base = document.getElementById("responce").innerHTML;
    }
}

var hideWindowsStorage = function() {
    webWindowControl.hideAddTaskWindow();
    if (typeof(Storage) !== "undefined") { // Browser supports it
        localStorage.base = document.getElementById("responce").innerHTML;
    }
}

var hideTaskWindowStorage = function() {
    webWindowControl.hideTaskWindow();
    if (typeof(Storage) !== "undefined") { // Browser supports it
        localStorage.base = document.getElementById("responce").innerHTML;
    }
}

Task.elAddButton.onclick = addMorTaskStorage;
Task.elsSaveTask.onclick = saveTaskStorage;
Task.elDeleteTask.onclick = deleteTaskStorage;


webWindowControl.elShowAllTaskButton.onclick = hideWindowsStorage;
webWindowControl.elAddNewTaskButton.onclick = hideTaskWindowStorage;

 var startWebLoad = function () {
    if (typeof(Storage) !== "undefined") { // Browser supports it
        document.getElementById("responce").innerHTML = localStorage.base;
    }
}
 startWebLoad();
