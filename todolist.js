var todo = document.getElementById('todolist');
var form = document.getElementById('myform');
var field = document.getElementById('newitem');
var colorVariable = document.getElementById('txtcolor').value;  
var fontVar1  = document.getElementById('font1').value;
var fontVar2  = document.getElementById('font2').value;
// var fontVariable = document.getElementById('fontset').value;
// var fontVariable = "normal"
// var fontVar = document.getElementById('fonttype').value; 
// var fontVariable = field.value



form.addEventListener( 'submit', function(evt) {
    
      if(document.getElementById('font1').checked) {
         var fontVariable = "normal";
      }else if(document.getElementById('font2').checked) {
         var fontVariable = "bold";
      }
    
  var text = field.value;
// todo.innerHTML += '<div>' + colorVariable + fontVariable + '</div>';
//  todo.innerHTML += '<div>' + text + '</div>';
//  todo.innerHTML += '<div style="color:' + colorVariable +  '"  >' + text + '</div>';
  todo.innerHTML += '<div style="font-weight:'+fontVariable+'; color:' + colorVariable +  '"  >' + text + '</div>';
   evt.preventDefault();
}, false);

todo.addEventListener( 'click', function(evt) {
  var tar = evt.target;
  tar.parentNode.removeChild(tar);
  evt.preventDefault(); 
}, false);




function getCheckedValue(radioObj) {
	if(!radioObj)
		return "";
	var radioLength = radioObj.length;
	if(radioLength == undefined)
		if(radioObj.checked)
			return radioObj.value;
		else
			return "";
	for(var i = 0; i < radioLength; i++) {
		if(radioObj[i].checked) {
			return radioObj[i].value;
		}
	}
	return "";
}