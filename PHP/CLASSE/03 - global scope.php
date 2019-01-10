<!DOCTYPE html>
<html>
<head>
	<title>Global Scope</title>
	<style>
		* {
			margin-left:20px;
		}
	</style>
</head>
<body>
	<h1>Local Scope (PHP).</h1>
	<?php

		$x = 5;
		$y = 10;

		function myTest(){
			global $x, $y;
			echo $x+$y;
		}

		myTest();
	?>
</body>
</html>
