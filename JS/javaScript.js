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
            Tasks.elResponceSpan.innerHTML += '<div class="checkBoxSelector"><p class="userTaskText">' + text + ' </p><span class="checkBOX"><label><input type="checkbox" id="x" class="checked"  onclick=handleClick(this) aria-label="..."></label></span> ' + priority + '</div>';
            //  alert(TaskDescription);
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
};

Tasks.elAddButton.onclick = Tasks.resetInput;
Tasks.elDeleteTask.onclick = Tasks.deleteSelectedCheckBox;
//Tasks.elCheckBox.onclick = Tasks.checkIfBoxIsChecked;

function handleClick(cb) {
    var aColl = document.getElementsByClassName('userTaskText'); //Cache the collection here, so that even a new element added with the same class later we can avoid qurying this again by using the cached collection.
    var color = 'line-through';
    var colorr = 'black';
    var texts = document.getElementsByClassName('checkBoxSelector');
    for (var i = 0; i < Tasks.elboxes.length; i++) {
        box = Tasks.elboxes[i];
        txt = texts[i];
        if (box.checked) {
          // for (var j = 0, len = aColl.length; j < len; j++) {
              aColl[i].parentNode.style["text-decoration"] = color;
      //     }
        }
}
}
