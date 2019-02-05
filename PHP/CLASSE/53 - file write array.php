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


	$myArray = ['VOLVO', 'SEAT', 'FORD'];

	$f = fopen("information.txt", "w") or exit("Can't open file!");

	for($i=0; $i<count($myArray); $i++){
		$car = $myArray[$i];
		fputs($f, $car."\n");
		echo "<p>Writing ".$car." in the file.</p>";
	}

	fclose($f);

	?>
</body>
</html>