<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Scheduled message</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>

	<div class="container">

	<?php

		$dayOfWeek = date("w");

		switch ($dayOfWeek) {
			case 1:
				echo "<p>It is Monday!</p>";
				break;
			case 2:
				echo "<p>It is Tuesday!</p>";
				break;
			case 3:
				echo "<p>It is Wednesday!</p>";
				break;
			case 4:
				echo "<p>It is Thursday!</p>";
				break;
			case 5:
				echo "<p>It is Friday!</p>";
				break;
			case 6:
				echo "<p>It is Saturday!</p>";
				break;
			case 7:
				echo "<p>It is Sunday!</p>";
				break;
		}

	?>

	</div>

</body>
</html>
