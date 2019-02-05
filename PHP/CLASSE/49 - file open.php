<!DOCTYPE html>
<html>
<head>
	<title>File</title>
	<style>
		* {
			margin-left:20px;
		}
	</style>
</head>
<body>
	<h1>File Open & Close (PHP).</h1>
	<?php

	$f = fopen("welcome.txt", "r") or exit("Can't open file!");


	fclose($f);

	?>
</body>
</html>