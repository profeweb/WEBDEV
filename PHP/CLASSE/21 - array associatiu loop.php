<!DOCTYPE html>
<html>
<head>
	<title>Arrays</title>
	<style>
		* {
			margin-left:20px;
		}
	</style>
</head>
<body>
	<h1>Array Associative (PHP).</h1>
	<?php
		$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");

		foreach($age as $key=>$value)  {  
			echo "Key=" . $key . 
			     ", Value=" . $value;  
			echo "<br>";  
		}
	?>
</body>
</html>
