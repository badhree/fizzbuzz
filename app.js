$(function() {
  
  addFizzBuzz();

  function addFizzBuzz() {
  
  for(var number=0; number<=100; number++)
  {
  	if((number%3==0)&& (number%5==0))
  		$('#fizzbuzz').append('<p style=\"color:blue;\">'+ 'FizzBuzz' +'</p>');
  	else if(number%3==0)
  		$('#fizzbuzz').append('<p style=\"color:red;\">'+ 'Fizz' +'</p>');
  	else if(number%5==0)
  		$('#fizzbuzz').append('<p style=\"color:orange;\">'+ 'Buzz' +'</p>');
  	else 
  		$('#fizzbuzz').append('<p style=\"color:green;\">'+ number +'</p>');
	}
}
});