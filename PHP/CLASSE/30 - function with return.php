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
	<h1>Function with Return (PHP).</h1>
	<?php

		function add($x, $y){
			return $x+$y;
		} 

		$z = add(5, 8);
		echo "5 + 8 = ".$z;
	?>
</body>
</html>
