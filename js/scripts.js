/////////////BACK END LOGIC
function Tasks(taskName, equipment, timeFrame) {
  this.taskName = taskName;
  this.equipment = equipment;
  this.timeFrame = timeFrame;
}

var tasks = [];

Tasks.prototype.description = function() {
  return this.taskName + " will require " + this.equipment + ", and will take about " + this.timeFrame + " to complete.";
}







//////////FRONT END LOGIC
$(function () {
  $('.task').submit(function() {
    event.preventDefault();
    var task = $('#task').val();
    var equipment = $('#equipment').val();
    var timeFrame = $('#timeFrame').val();

    var newTask = new Tasks(task, equipment, timeFrame);

    $('.taskList').append("<li class='" +task+ "'><label class='" + task + "'>" + task + "</label> <input type='checkbox' class='"+task+"' id='" + task + "'></li>");
    tasks.push(newTask);
    console.log(tasks);


  })


  $(".taskList").click(function(event) {
    console.log(tasks)
    var target = event.target.className;
    for (i=0;i<tasks.length;i++) {
      if (tasks[i].taskName === target) {
        $("#result").text(tasks[i].description());
        console.log(tasks);
      } else {
        console.log(tasks);
      }
    }
  })

  // $("#describe").click(function (event) {
  //   event.preventDefault();
  //   console.log(tasks);
  //   for (i = 0; i < tasks.length; i++) {
  //     console.log(tasks);
  //     if ($("#" + tasks[i].taskName).is(':checked')) {
  //
  //       $("#result").text(tasks[i].description());
  //
  //     } else {
  //       console.log('sorry')
  //     }
  //   }
  // })


  $(".list").submit(function (event) {
    event.preventDefault();
    console.log(tasks);
    for (i = 0; i < tasks.length; i++) {
      console.log(tasks);
      if ($("#" + tasks[i].taskName).is(':checked')) {

        $("#" + tasks[i].taskName).detach();
        $("." + tasks[i].taskName).detach();
        $("#result").text("");

      } else {
        console.log('sorry')
      }
    }

  })
})
