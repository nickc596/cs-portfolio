var todo = document.getElementById('todolist');
var form = document.getElementById('myform');
var field = document.getElementById('newitem');
var colorVariable = document.getElementById('txtcolor').value;  

 
    
form.addEventListener( 'submit', function(evt) {
  var text = field.value;
  todo.innerHTML += '<div style="color:' + colorVariable +  '"  >' + text + '</div>';
   evt.preventDefault();
}, false);

todo.addEventListener( 'click', function(evt) {
  var tar = evt.target;


//removes the thing
 tar.parentNode.removeChild(tar);
  
  
  evt.preventDefault();
}, false);