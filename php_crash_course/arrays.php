<?php 
	
	// Indexed Arrays
	
	$peopleOne = ['John', 'Dave', 'Peter', 'Jane'];

	$peopleTwo = array('Ken', 'Sarah', 'Harry');

	echo $peopleOne[2];

	$ages = [20, 40, 35, 50];

	$ages[1] = 45;

	$ages[] = 60; // Add new value

	array_push($ages, 15);

	echo count($ages); // Length of array

	$peopleThree = array_merge($peopleOne, $peopleTwo);

	print_r($peopleThree); 

	// Associative Arrays (key & value pairs)

	$ninjasOne = ['John'=>'black', 'Jane'=>'white', 'Harry'=>'red', 'Mario'=>'green'];

	$ninjasTwo = array('Ross'=>'brown', 'Ron'=>'yellow');

	echo $ninjasOne['Jane'];

	$ninjasTwo['Toad'] = 'blue';

	$ninjasTwo['Ross'] = 'green';

	$ninjasThree = array_merge($ninjasOne, $ninjasTwo);

	print_r($ninjasThree);

?>


<!-- Embedding php into html -->
<!DOCTYPE html>
<html>
<head>
	<title>PHP Tutorials</title>
</head>
<body>

	

</body>
</html>
