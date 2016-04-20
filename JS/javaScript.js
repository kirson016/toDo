    var countBox = 1;
    var boxName = [];
    var number = 0;


    var Tasks = {
        elAddButton: document.getElementById('btn-AddNewTask'),
        elResponceSpan: document.getElementById('responce'),
        elTextInput: document.getElementById("taskName"),
        elValue0: document.getElementById("value0"),
        elValue1: document.getElementById("value1"),
        elValue3: document.getElementById("value3"),

        resetInput: function() {
            var priority;
            var z = boxName[number];
            var text = Tasks.elTextInput.value;
            Tasks.elResponceSpan.innerHTML += '<input type="checkbox" aria-label="...">     ' + text + '      '  ;
            countBox += 1;
            number += 1;
            alert(text);
        },
    };
    Tasks.elAddButton.onclick = Tasks.resetInput;
