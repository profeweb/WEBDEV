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
	<h1>Sorted Array (PHP).</h1>
	<?php
		$cars=array("Volvo","BMW","Toyota", "Seat", "Mini", "Ford"); 
	?>
	<h2>Ascending Order</h2>
	<?php
		echo "<ul>";
		
		sort($cars);
		$n = count($cars);
		for($i=0; $i<$n; $i++){
			echo "<li>".$cars[$i]."</li>"; 
		}
		echo "</ul>";
	?>
	<h2>Descending Order</h2>
	<?php
		echo "<ul>";
		
		rsort($cars);
		$n = count($cars);
		for($i=0; $i<$n; $i++){
			echo "<li>".$cars[$i]."</li>"; 
		}
		echo "</ul>";
	?>
</body>
</html>
