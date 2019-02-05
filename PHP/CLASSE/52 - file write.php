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
	<h1>File Write (PHP).</h1>
	<?php

	$f = fopen("information.txt", "w") or exit("Can't open file!");

	$n=1;
	while($n<=10){
		fputs($f, $n."\n");
		echo "<p>Writing ".$n." in the file.</p>";
		$n++;
	}

	fclose($f);

	?>
</body>
</html>