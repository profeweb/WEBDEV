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
	<h1>Length of String (PHP).</h1>
	<?php

		$txt = "Hello World!";
		$n = strlen($txt);
		echo $txt . " is " . $n . " characters long.";
	?>
</body>
</html>
