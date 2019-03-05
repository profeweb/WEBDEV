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
	<h1>Connect Data Base (PHP).</h1>
	<?php
	// Create connection 
	include("connect.php");

	// Operate over Data Base
	// ......................................//

	// Insert table 
	$nom = $_REQUEST['nom'];
	$posicio = $_REQUEST['posicio'];
	$punts = $_REQUEST['punts'];

	$sql="INSERT INTO equip (nom, posicio, punts) values ('$nom', '$posicio', '$punts')"; 

	if (mysqli_query($con,$sql))  {  
		echo "Inserted row successfully";  
	} else  {  
		echo "Error inserting row: " . mysqli_error($con);  
	} 

	// ......................................//


	mysqli_close($con);

	?>
</body>
</html>
