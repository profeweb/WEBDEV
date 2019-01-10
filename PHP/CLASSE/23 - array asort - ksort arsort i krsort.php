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
	<h1>Sorted Array Associative (PHP).</h1>
	<?php
		$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43"); 
	?>
	<h2>Ascending Order by Value</h2>
	<?php
		echo "<ul>";
		asort($age);
		foreach($age as $key=>$value)  {  
			echo "<li>Key=" . $key . 
			     ", Value=" . $value;  
			echo "</li>";  
		}
		echo "</ul>";
	?>
	<h2>Descending Order by Value</h2>
	<?php
		echo "<ul>";
		arsort($age);
		foreach($age as $key=>$value)  {  
			echo "<li>Key=" . $key . 
			     ", Value=" . $value;  
			echo "</li>";  
		}
		echo "</ul>";
	?>
	<h2>Ascending Order by Key</h2>
	<?php
		echo "<ul>";
		ksort($age);
		foreach($age as $key=>$value)  {  
			echo "<li>Key=" . $key . 
			     ", Value=" . $value;  
			echo "</li>";  
		}
		echo "</ul>";
	?>
	<h2>Descending Order by Key</h2>
	<?php
		echo "<ul>";
		krsort($age);
		foreach($age as $key=>$value)  {  
			echo "<li>Key=" . $key . 
			     ", Value=" . $value;  
			echo "</li>";  
		}
		echo "</ul>";
	?>
</body>
</html>
