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
	<h1>Delete Data Base (PHP).</h1>
	<?php
	// Create connection 
	include("connect.php");

	// Operate over Data Base
	// ......................................//

	// Insert table 
	$equip = $_REQUEST['equip'];

	$sql="DELETE FROM  equip WHERE id =".$equip;

	echo $sql."<br/>";

	if (mysqli_query($con,$sql))  {  
		echo "Deleted row successfully";  
	} else  {  
		echo "Error deleting row: " . mysqli_error($con);  
	} 

	// ......................................//


	mysqli_close($con);

	?>
</body>
</html>
