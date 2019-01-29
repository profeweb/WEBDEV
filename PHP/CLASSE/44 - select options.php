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

	// Select 
	echo "<select>";
	$sql="SELECT nom, llinatges, edat FROM treballadors"; 
	$rs = mysqli_query($con,$sql);
	while($row=mysqli_fetch_array($rs)){
		echo "<option value='".$row['edat']."'>";
			echo $row['nom']." ".$row['llinatges'];
		echo "</option>";
	}
	echo "</select>";

	// ......................................//

	// Close connection
	mysqli_close($con);

	?>
</body>
</html>
