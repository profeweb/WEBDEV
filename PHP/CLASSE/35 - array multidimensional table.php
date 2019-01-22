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

		$cars = array ( array("Volvo",100,96),
		 				array("BMW",60,59),
		 				array("Toyota",110,100),
		 				array("Seat", 220, 140));

		echo "<table border='1'>";
		for($f=0; $f<count($cars); $f++){
			echo "<tr>";
			for($c=0; $c<count($cars[$f]); $c++){
				echo "<td>".$cars[$f][$c]."</td>";
			}
			echo "</tr>";
		}
		echo "</table>";

	?>
</body>
</html>
