/* DOM Manipulation: Independent Practice

To complete this excercise, you must meet the following requirements:

- Change the value of the element with the name id to be whatever the user inputs when page first loads.
- When the user clicks the "#new-thing-button" button, add whatever is in the input box to the "#fav-list" list.
- Clear the input box when the user clicks the button.
- Bonus: only add item if the input box is not blank (hint: check innerHTML property)

*/

//Change the value of the element with the name id to be whatever the user inputs when page first loads.
window.onload = function() {
  var your_name = prompt("What is your name?"),
      button,
      thing_list;
  var nameElem = document.getElementById('name');
  nameElem.innerHTML = your_name;
};


document.getElementById("new-thing-button").addEventListener("click", function() {
   var  o  = document.getElementById("new-thing");
   var  v  = o.value;
   if( v!="" )
   {
      var ul  = document.getElementById( "fav-list" );
      var  h  = ul.innerHTML;
           h += "<li class='fav-thing'>" + v + "</li>";
      ul.innerHTML = h;
      o.value = "";
   }
});
