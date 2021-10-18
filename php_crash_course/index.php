<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Functions</title>
</head>
<body>

	<div class="container">

	<?php

		# Functions

		function simpleFunction(){
			echo 'Hello World!<br>';
		}

		simpleFunction();

		// Function w param

		function sayHello($name = 'Tim') {
			echo "Hello $name!<br>";
		}

		sayHello('Jonathan');


		function addNumbers($num1, $num2) {
			return $num1 + $num2;
		}

		echo addNumbers(2, 3);

		// By reference

		$myNum = 10;

		function addFive($num) {
			$num += 5;
		}

		function addTen(&$num) {
			$num += 10;
		}

		addFive($myNum);

		echo "Value: $myNum<br>";

		addTen($myNum);

		echo "Value: $myNum<br>";

	?>

	</div>

</body>
</html>


