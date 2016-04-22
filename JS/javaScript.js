var Tasks = {
    elAddButton: document.getElementById('btn-AddNewTask'),
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

    resetInput: function() {
        var priority;
        var text = Tasks.elTextInput.value;
        var TaskPriority = Tasks.elTaskPriority.value;
        var taskDescription = Tasks.eltaskDesciptionInput.value;

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
            //Tasks.elResponceSpan.innerHTML += '<div class="checkboxid"><p class="userTaskText"> ' + text + '</p><input type="checkbox" id="checkBox" class="checked" aria-label="..."> ' + priority;
            Tasks.elResponceSpan.innerHTML += '<div class="checkBoxSelector"><p class="userTaskText">' + text + ' </p><span class="checkBOX"><label><input type="checkbox"  class="checked"  onclick=Tasks.handleClick() aria-label="..."></label></span> ' + priority + '</div>';
            Tasks.elTextInput.value = "";
            Tasks.elTaskPriority.value = "none";
            Tasks.eltaskDesciptionInput.value = "";
        }
    },

    deleteSelectedCheckBox: function() {
        var texts = document.getElementsByClassName('checkBoxSelector');

        for (var i = 0; i < Tasks.elboxes.length; i++) {
            box = Tasks.elboxes[i];
            txt = texts[i];
            if (box.checked) {
                box.parentNode.removeChild(box);
                txt.parentNode.removeChild(txt);
            }
        }
    },

    handleClick: function() {
        var aColl = document.getElementsByClassName('userTaskText');
        var lineThrough = 'line-through';
        var noLine = 'none';
        var texts = document.getElementsByClassName('checkBoxSelector');

        for (var i = 0; i < Tasks.elboxes.length; i++) {
            box = Tasks.elboxes[i];
            txt = texts[i];
            if (box.checked) {
                aColl[i].parentNode.style["text-decoration"] = lineThrough;
            } else {
                aColl[i].parentNode.style["text-decoration"] = noLine;
            }
        }
    },
};

Tasks.elAddButton.onclick = Tasks.resetInput;
Tasks.elDeleteTask.onclick = Tasks.deleteSelectedCheckBox;
