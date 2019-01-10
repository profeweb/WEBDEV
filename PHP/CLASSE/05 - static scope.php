<!DOCTYPE html>
<html>
<head>
	<title>Static Scope</title>
	<style>
		* {
			margin-left:20px;
		}
	</style>
</head>
<body>
	<h1>Local Scope (PHP).</h1>
	<?php

		function myTest(){
			static $x=0;
			echo $x;
			$x++;
		}

		myTest();
		myTest();
		myTest();
	?>
</body>
</html>
