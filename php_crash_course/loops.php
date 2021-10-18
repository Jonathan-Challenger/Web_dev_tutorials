<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Loops</title>
</head>
<body>

	<div class="container">

	<?php

		/* For, while, do...while, foreach */

		# For
		# @params - init, condition, inc
		
		for ($i = 0; $i < 10; $i++) {
			echo 'Number ' . $i;
			echo '<br>';
		}

		# While
		# @params - condition

		$i = 0;

		while($i < 10) {
			echo $i;
			echo '<br>';
			$i++;
		}

		# Do...while
		# @params - condition

		$i = 0;

		do {
			echo $i;
			echo '<br>';
			$i++;
		} while ($i <= 10);

		# Foreach

		$people = array('Brad' => 'brad@gmail.com', 'Jose' => 'jose@gmail.com', 'William' => 'william@gmail.com');

		foreach ($people as $person => $email) {
			echo $person . ': ' . $email;
			echo '<br>';
		}

	?>

	</div>

</body>
</html>


