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
	<h1>Update Data Base (PHP).</h1>
	<?php
	// Create connection 
	include("connect.php");

	// Operate over Data Base
	// ......................................//

	// Insert table 
	$equip = $_REQUEST['equip'];
	$nom = $_REQUEST['nom'];
	$posicio = $_REQUEST['posicio'];
	$punts = $_REQUEST['punts'];

	$sql="UPDATE  equip SET  nom='".$nom."', posicio='".$posicio."', punts='".$punts."' WHERE id =".$equip;

	echo $sql."<br/>";

	if (mysqli_query($con,$sql))  {  
		echo "Updates row successfully";  
	} else  {  
		echo "Error updating row: " . mysqli_error($con);  
	} 

	// ......................................//


	mysqli_close($con);

	?>
</body>
</html>
