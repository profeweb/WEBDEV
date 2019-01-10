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
	<h1>Array Loop (PHP).</h1>
	<?php
		echo "<ul>";
		$cars=array("Volvo","BMW","Toyota", "Seat", "Mini", "Ford"); 
		$n = count($cars);
		for($i=0; $i<$n; $i++){
			echo "<li>".$cars[$i]."</li>"; 
		}
		echo "</ul>";
	?>
</body>
</html>
