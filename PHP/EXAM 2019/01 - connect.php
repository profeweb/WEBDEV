<!DOCTYPE html>
<html>
<head>
	<title>Date</title>
	<style>
		* {
			margin-left:20px;
		}
	</style>
</head>
<body>
	<h1>Connect Data Base (PHP).</h1>
	<?php
	
	include("connect.php");

	// Operate over Data Base

	mysqli_close($con);

	?>
</body>
</html>