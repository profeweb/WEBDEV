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

	// Select table 
	echo "<table border='1'>";
	echo "<tr><th>#</th><th>NOM</th><th>LLINATGES</th><th>EDAT</th></tr>";
	$sql="SELECT nom, llinatges, edat FROM treballadors
		WHERE edat>=15
		ORDER BY edat ASC, llinatges DESC"; 
	$rs = mysqli_query($con,$sql);
	$i=1;
	while($row=mysqli_fetch_array($rs)){
		echo "<tr>";
			echo "<td>".$i."</td>";
			echo "<td>".$row['nom']."</td>";
			echo "<td>".$row['llinatges']."</td>";
			echo "<td>".$row['edat']."</td>";
		echo "</tr>";
		$i++;
	}


	echo "</table>";


	// ......................................//

	// Close connection
	mysqli_close($con);

	?>
</body>
</html>
