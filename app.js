$(document).ready(function(){
  
function isNumber(n) {
      if(!isNaN(parseInt(n)) && isFinite(n)) 
        return true;
      return false;
    };

  /**/

  function addFizzBuzz(n) {
  $("#fizzbuzz").empty();
  for(var number=0; number<=n; number++)
  {
    if((number%3==0)&& (number%5==0))
      $('#fizzbuzz').append('<p style=\"color:blue;\">'+ 'FizzBuzz' +'</p>');
    else if(number%3==0)
      $('#fizzbuzz').append('<p style=\"color:red;\">'+ 'Fizz' +'</p>');
    else if(number%5==0)
      $('#fizzbuzz').append('<p style=\"color:orange;\">'+ 'Buzz' +'</p>');
    else 
      $('#fizzbuzz').append('<p style=\"color:green;\">'+ number +'</p>');
    };
  };


$('#print').click(function()
{
  
  var count = $('#count').val();
  if(isNumber(count))
    addFizzBuzz(count);
  else
    alert("Enter Integer");
});;


});



