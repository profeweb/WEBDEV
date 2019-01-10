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
	<h1>Conditional IF - ELSE IF (PHP).</h1>
	<?php

		$t=date("H"); 
		echo $t;
		if ($t<"10")  { 
			echo "Have a good morning.";
		} else if ($t<"20")  { 
			echo "Have a good day!";  
		} else  {  
			echo "Have a good night!"; 
		} 

	?>
</body>
</html>
