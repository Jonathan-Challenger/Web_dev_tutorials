<?php 
	
	$radius = 25;
	$pi = 3.14;

	// Basic operators - *, /, +, -, **

	echo $pi * $radius**2;

	// Order of operations (BIDMAS)

	echo 2 * (4 + 9) / 3;

	// Increment and decrement

	echo $radius++;
	echo $radius--;

	// Shorthand operators

	$age = 20;

	$age += 10;
	$age -= 10;
	$age *= 2;

	echo $age;

	// Number functions

	echo floor($pi);
	echo ceil($pi);
	echo pi();



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
