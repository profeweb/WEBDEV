<!DOCTYPE html>
<html>
<head>
	<title>Parameter Scope</title>
	<style>
		* {
			margin-left:20px;
		}
	</style>
</head>
<body>
	<h1>Local Scope (PHP).</h1>
	<?php

		function myTest($x){
			echo $x;
		}

		myTest(0);
		myTest(1);
		myTest(2);
	?>
</body>
</html>
