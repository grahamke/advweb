$(document).ready(function() {
  $.getJSON("/api/todos")
  .then(addTodos);

  $('#todoInput').keypress(function(event) {
    if(event.which == 13) {
      createTodo();
    }
  });

  $('.list').on('click', 'li', function() {
    updateTodo($(this));
  });

  $('.list').on('click', 'span', function(event) {
    event.stopPropagation();
    removeTodo($(this).parent());
  });

});

function removeTodo(todo) {
  var deleteUrl = '/api/todos/'+todo.data('id');
  $.ajax({
    method: 'DELETE',
    url: deleteUrl
  })
  .then(function (data) {
    todo.remove();
  })
  .catch(function(err) {
    console.log(err);
  });
}

function addTodo(todo) {
  var newTodo = $('<li>'+todo.name+' <span>X</span></li>');
  newTodo.data('id',todo._id);
  newTodo.data('completed',todo.completed);
  newTodo.addClass("task");
  if(todo.completed) {
    newTodo.addClass("done");
  }
  $('.list').append(newTodo);
}

function addTodos(data) {
  data.forEach(addTodo);
}

function createTodo() {
  var userInput = $("#todoInput").val();
  $.post("/api/todos", {name: userInput})
  .then(function(todo) {
    $("#todoInput").val('');
    addTodo(todo);
  })
  .catch(function(err) {
    console.log(err);
  });
}

function updateTodo(todo) {
  var toggle = todo.data('completed');
  var updateUrl = '/api/todos/'+todo.data('id');
  $.ajax({
    method: 'PUT',
    url: updateUrl,
    data: { completed: !toggle }
  })
  .then(function(res) {
    todo.toggleClass("done");
    todo.data('completed',!toggle);
  })
  .catch(function(err) {
    console.log(err);
  });
}
