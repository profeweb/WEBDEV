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
	<h1>Date (PHP).</h1>
	<?php

	// Year with 4 digits
	$year = date("Y");
	echo "<p>This year is: ".$year."</p>";
	// Month number (01-12)
	$month = date("m");
	echo "<p>This month is: ".$month."</p>";
	// Day of month (01 -31)
	$day = date("d");
	echo "<p>Today number is: ".$day."</p>";
	// Date
	echo "<p>Today is: ".date("d.m.Y")."</p>";
	// Hour
	$hour= date("H");
	echo "<p> The hour is: ".$hour."</p>";
	//Minutes
	$minutes = date("i");
	echo "<p> The minutes are: ".$minutes."</p>";
	//Seconds
	$seconds = date("s");
	echo "<p> The seconds are: ".$seconds."</p>";
	//Time
	echo "<p> The time now is: ".date("H:i:s")."</p>";

	?>
</body>
</html>
