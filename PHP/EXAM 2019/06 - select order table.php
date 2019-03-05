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
	<h1>Order Select Data Base (PHP).</h1>
	<form action="06 - select order table.php" method="get">
		<select name="ordre">
			<option value="ASC">ASC POSICIO</option>
			<option value="DESC">DESC POSICIO</option>
		</select>
		<input type="submit" value="ORDENA"/>
	</form>
	<?php
	// Create connection 
	include("connect.php");

	// Operate over Data Base
	// ......................................//
	$sql="SELECT nom, posicio, punts FROM equip";
	if(isset($_REQUEST['ordre'])){
		$sql.= " ORDER BY posicio ".$_REQUEST['ordre']; 
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
