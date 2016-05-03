/*Create a Checklist: Independent Practice

You'll add the ability to complete tasks in the list. Your program must complete the following rules:

- Through jQuery add a "complete task" link at the end of each to-do item.
- When clicked, the link will cross out the current task (hint: add a class to the list that sets the text-decoration to strikeout).
- Each new task added by the user needs to also have the "complete task" link akt the end.
- Bonus: when user completes task, remove the task from the current list and add it to a completed list below. Do not show this list unless the there are completed items.
- Bonus 2: add the ability to restore items from the completed list to the first list.

*/

$(document).ready(function(){
   appendLink();
   setLink();

   $("#new-thing-button").click( function(){
      liCode = "<li class='fav-thing'>" + $("#new-thing").val() + "</li>";
      $("#fav-list").append( liCode );
      appendLink();
      setLink();
   });
});

function appendLink()
{
   $.each( $(".fav-thing"), function() {
      if( $(this).text().indexOf("complete task") == -1 )
      {
         $(this).append(' <a class="complete" href="#">- complete task - </a>');
      }
   });
}

function setLink()
{
   $(".complete").click( function() {
      $(this).parent().addClass( "strike" );
   });
}
