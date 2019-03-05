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
	<h1>Filter Select Data Base (PHP).</h1>
	<form action="07 - select filter table.php" method="get">
		MINIM POINTS: <input type="number" name="filter" min="0"/>
		<input type="submit" value="FILTER"/>
	</form>
	<?php
	// Create connection 
	include("connect.php");

	// Operate over Data Base
	// ......................................//
	$sql="SELECT nom, posicio, punts FROM equip";
	if(isset($_REQUEST['filter'])){
		$sql.= " WHERE punts >= ".$_REQUEST['filter']; 
	}
	echo "<p>".$sql."</p>";

	// Select table 
	echo "<table border='1'>";
	echo "<tr><th>#</th><th>NOM</th><th>POINTS</th></tr>";
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
