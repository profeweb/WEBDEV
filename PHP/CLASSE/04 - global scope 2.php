<!DOCTYPE html>
<html>
<head>
	<title>Local Scope</title>
	<style>
		* {
			margin-left:20px;
		}
	</style>
</head>
<body>
	<h1>Global Scope (PHP).</h1>
	<?php

		$x = 5;
		$y = 10;

		function myTest(){
			echo $GLOBALS['x']+$GLOBALS['y'];
		}

		myTest();
	?>
</body>
</html>
