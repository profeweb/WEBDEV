<!DOCTYPE html>
<html>
<head>
	<title>Arrays</title>
	<style>
		* {
			margin-left:20px;
		}
	</style>
</head>
<body>
	<h1>Array Multidimensional (PHP).</h1>
	<?php

	$n= 5;

		echo "<table border='1'>";
		for($f=0; $f<=10; $f++){
			echo "<tr>";
			echo "<td>";
			echo $n*$f;
			echo "</td>";
			echo "</tr>";
		}
		echo "</table>";

	?>
</body>
</html>
