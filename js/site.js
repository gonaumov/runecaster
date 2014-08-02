/***************************************************
 * Description of different spreads.
 * *************************************************/
var _description = new Array();
_description.push("This spread is used to find the forces acting on your life. It is a very popular and common spread as it gives a deep insight to your life. The left rune represents an important happening in the past. The middle rune represents a deciding element of the present. The top rune represents a force that will work for you. The bottom rune represents a force that will work against you. The right rune represents the final outcome of the situation.");
_description.push("This spread is used to understand hidden conflict. The bottom rune represents the basis of the issue. The left rune represents one of the forces acting on conflict. The right rune represents another of the forces acting on the issue. The top rune represents the outcome of the conflict.");
_description.push("This spread is used at a critical decision making point in life. The left rune indicates the first possible outcome. The right rune represents the second possible outcome. The bottom rune represents the critical factor that will decide which outcome will happen.");
_description.push("The rune on the far left indicates the first Norm, the subject or what the question is about. This indicates the set of events which occurred in the past that are responsible for the present situation. The middle rune indicates the second Norm, the course of actions that should be taken or the present situation. The right-most rune indicates the third Norm, the outcome of the problem.");
_description.push("This spread is used for daily casts. It provides a precise answer to a conflict or problem. It can give you the general overview for the day or an answer to a specific question.");
$(document).ready(function()
{
	$("#spread").change(function()
	{
		var _value = $(this).attr("value");
		if(_value != "-")
		{
			 $("#description_holder").text(_description[_value]);
		}
	});
	$("#cast").click(function()
	{
		 var _value = $("#spread").attr("value");
		 var question_value = $("#question_value").val();
		 if(_value == "-")
		 {
			$("#description_holder").text("You must choose spread!");
			return;
		 }
		 if(!question_value.length)
		 {
			$("#description_holder").text("Please type your question!");
			return;
		 }
		 window.location.href = "answer.html?spread="+_value;
	});
});