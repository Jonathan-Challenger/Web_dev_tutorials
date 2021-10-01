<?php 
	
	$stringOne = 'My email is ';
	$stringTwo = 'john.doe@example.com';

	// Concat strings
	// echo $stringOne . $stringTwo;

	$name = 'Mario';

	// echo 'Hi, my name is ' . $name;

	// With double quotes can put variables in string
	// echo "Hey, my name is $name";

	// Escaping characters
	// echo "The ninja screamed \"whaaaaaa\".";

	// Can use indexing to find characters
	// echo $name[1];

	// Built in String Functions
	echo strlen($name) . "\r\n";
	echo strtoupper($name) . "\r\n";
	echo strtolower($name) . "\r\n";
	echo str_replace('M', 'W', $name) . "\r\n";
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
