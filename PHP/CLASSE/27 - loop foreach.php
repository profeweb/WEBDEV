<!DOCTYPE html>
<html>
<head>
	<title>Loops</title>
	<style>
		* {
			margin-left:20px;
		}
	</style>
</head>
<body>
	<h1>Loop Foreach (PHP).</h1>
	<?php

		$nums = array("one", "two", "three");
		foreach($nums as $value){
			echo $value."<br>";
		} 
	?>
</body>
</html>
