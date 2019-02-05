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
	<h1>File Read by Character (PHP).</h1>
	<?php

	$f = fopen("welcome.txt", "r") or exit("Can't open file!");

	$numChars=0;
	while(!feof($f)){
		echo fgetc($f). "<br>";
		$numChars++;
	}
	echo "<p><b>Num. Chars:</b> ".$numChars."</p>";

	fclose($f);

	?>
</body>
</html>