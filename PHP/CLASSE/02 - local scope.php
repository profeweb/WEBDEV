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
	<h1>Local Scope (PHP).</h1>
	<?php

		$x = 5;

		function myTest(){
			$x =3;
			echo $x;
		}

		myTest();
	?>
</body>
</html>
