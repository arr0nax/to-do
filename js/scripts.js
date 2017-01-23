/////////////BACK END LOGIC








//////////FRONT END LOGIC
$(function () {
  $('.task').submit(function() {
    event.preventDefault();
    var newTask = $('#task').val();
    $('.list').append("<li>" + newTask + "</li>");


  })
  $("ul").click(function (event) {
    var target = $(event.target);
    target.remove();

  })
})
