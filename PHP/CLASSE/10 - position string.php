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
	<h1>Position of String (PHP).</h1>
	<?php

		$txt1 = "Hello World!";
		$txt2 = "W";
		$n = strpos($txt1, $txt2);
		echo $txt2 . " is at " . $n . " position in ".$txt1;
	?>
</body>
</html>
