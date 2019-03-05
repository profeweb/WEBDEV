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
	<h1>Select Data Base (PHP).</h1>
	<?php
	// Create connection 
	include("connect.php");

	// Operate over Data Base
	// ......................................//

	// Select table 
	echo "<table border='1'>";
	echo "<tr><th>#</th><th>NOM</th><th>POINTS</th></tr>";
	$sql="SELECT nom, posicio, punts FROM equip
		ORDER BY posicio ASC"; 
	$rs = mysqli_query($con,$sql);
	while($row=mysqli_fetch_array($rs)){
		echo "<tr>";
			echo "<td>".$row['posicio']."</td>";
			echo "<td>".$row['nom']."</td>";
			echo "<td>".$row['punts']."</td>";
		echo "</tr>";
	}

	echo "</table>";

	// ......................................//
	// Close connection
	mysqli_close($con);

	?>
</body>
</html>
