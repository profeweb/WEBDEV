<!DOCTYPE html>
<html>
<head>
	<title>Functions</title>
	<style>
		* {
			margin-left:20px;
		}
	</style>
</head>
<body>
	<h1>Function with Params (PHP).</h1>
	<?php

		function printHello($nom){
			echo "Hello ".$nom."!<br>";
		} 

		printHello("Peter");
		printHello("John");
	?>
</body>
</html>
