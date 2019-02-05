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
	<h1>File Read by Line (PHP).</h1>
	<?php

	$f = fopen("welcome.txt", "r") or exit("Can't open file!");

	$line = 1;
	while(!feof($f)){
		echo $line.": ".fgets($f). "<br>";
		$line++;
	}

	fclose($f);

	?>
</body>
</html>