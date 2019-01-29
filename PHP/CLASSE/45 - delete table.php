<!DOCTYPE html>
<html>
<head>
	<title>Data Base</title>
	<style>
		* {
			margin-left:20px;
		}
	</style>
</head>
<body>
	<h1>Delete from DataBase (PHP).</h1>
	<?php
	// Create connection 
	$con=mysqli_connect("localhost","root","password","asix2018"); 

	// Check connection 
	if (mysqli_connect_errno($con))  {  
		echo "Failed to connect to MySQL: " .          mysqli_connect_error();  
	}
	else {
		echo "<p>OK: Connected to the Database.</p>";
	}

	// Operate over Data Base
	// ......................................//

	// Delete from table 
	$sql="DELETE FROM treballadors WHERE edat=22"; 
	if (mysqli_query($con,$sql))  {  
		echo "Deleted rows successfully";  
	} else  {  
		echo "Error deleting rows: " . mysqli_error($con);
	} 




	// ......................................//


	mysqli_close($con);

	?>
</body>
</html>
