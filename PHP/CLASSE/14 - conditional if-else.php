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
	<h1>Conditional IF - ELSE (PHP).</h1>
	<?php

		$t=date("H"); 
		echo $t;
		if ($t<"20")  {  
			echo "Have a good day!";  
		}
		else  {  
			echo "Have a good night!";  
		}

	?>
</body>
</html>
