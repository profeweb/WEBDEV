	<?php
	// Create connection 
	$con=mysqli_connect("localhost","root","mitjanit3","futbol"); 

	// Check connection 
	if (mysqli_connect_errno($con))  {  
		echo "Failed to connect to MySQL: " . mysqli_connect_error();  
	}
	else {
		echo "<p>OK: Connected to the Database.</p>";
	}
?>