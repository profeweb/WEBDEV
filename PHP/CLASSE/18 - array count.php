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
	<h1>Array Count (PHP).</h1>
	<?php

		$cars=array("Volvo","BMW","Toyota"); 
		$n = count($cars);
		echo "There are " . 
		     $n . " cars in the array."; 
	?>
</body>
</html>
