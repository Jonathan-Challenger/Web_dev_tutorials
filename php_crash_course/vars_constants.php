<?php 
	
	// Creating variables
	$name = 'Yoshi';
	$age = 30;

	// Creating constant 
	define('NAME', 'Yoshi');

	// Can override variables
	$name = 'Mario';

?>


<!-- Embedding php into html -->
<!DOCTYPE html>
<html>
<head>
	<title>PHP Tutorials</title>
</head>
<body>

	<h1>User Profile Page</h1>

	<div><?php echo $name; ?></div>
	<div><?php echo NAME; ?></div>
	<div><?php echo $age; ?></div>

</body>
</html>
