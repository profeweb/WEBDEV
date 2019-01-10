<!DOCTYPE html>
<html>
<head>
	<title>Conditionals</title>
	<style>
		* {
			margin-left:20px;
		}
	</style>
</head>
<body>
	<h1>Conditional SWITCH (PHP).</h1>
	<?php

		$favcolor="red";
		switch ($favcolor) { 
			case "red":  
				echo "Your favorite color is red!";  
				break; 
			case "blue":  
				echo "Your favorite color is blue!";  
				break;
			case "green":  
				echo "Your favorite color is green!";  
				break; 

			default:  
				echo "Your favorite color is neither red, blue, or green!"; 
			}
	?>
</body>
</html>
