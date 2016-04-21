    var countBox = 1;
    var boxName = [];
    var number = 0;


    var Tasks = {
        elAddButton: document.getElementById('btn-AddNewTask'),
        elResponceSpan: document.getElementById('responce'),
        elTextInput: document.getElementById("taskName"),
        elTaskName: document.getElementById("taskName"),
        elTaskPriority: document.getElementById("TaskPriority"),
        elValue0: document.getElementById("value0"),
        elValue1: document.getElementById("value1"),
        elValue3: document.getElementById("value3"),

        resetInput: function() {
            var priority;
            var z = boxName[number];
            var text = Tasks.elTextInput.value;
            var TaskPriority = Tasks.elTaskPriority.value;

            if (TaskPriority == 3) {
                priority = '<button type="button" class="btn-group-sm btn-success " id="priorityButtons">LOW</button>>';
            } else if (TaskPriority == 1) {
                priority = '<button type="button" class="btn-group-sm btn-warning " id="priorityButtons">MEDIUM</button>';
            } else {
                priority = '<button type="button" class="btn-group-sm btn-danger " id="priorityButtons">HIGH</button>';
            }

            if (text.length < 3 || TaskPriority == "none") {
                alert("Task name is to short! or didn't set Task Priority");
            } else {
                Tasks.elResponceSpan.innerHTML += '<div class="taskSelector"><p class="userTaskText"> ' + text + '</p><input type="checkbox" id="checkBox" aria-label="..."> ' + priority + '<div class="taskSelector"> ';
                countBox += 1;
                number += 1;
                //alert(priority);
            }
        },
    };
    Tasks.elAddButton.onclick = Tasks.resetInput;
