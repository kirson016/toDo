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
            if (text.length<3 || TaskPriority == "none")
            {
              alert("Task name is to short! or didn't set Priority");
            }
            else{
            Tasks.elResponceSpan.innerHTML += '<input type="checkbox" aria-label="...">     ' + text + '      '  ;
            countBox += 1;
            number += 1;
            alert(TaskPriority);
          };
        },
    };
    Tasks.elAddButton.onclick = Tasks.resetInput;
