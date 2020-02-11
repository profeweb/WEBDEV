<!DOCTYPE html>
<html>
<head>
	<title>Welcome PHP</title>
</head>
<body>
	<h1>Welcome SELECT.</h1>
	<?php

		require('connexio.php');

		$sql = "SELECT * FROM hotel ORDER BY nom";


		$rs = mysqli_query($con, $sql) or die();

		echo "<table border='1'>";
			echo "<tr><th>Hotel</th><th>Poble</th><th>Web</th><th>Telefon</th></tr>";
			while($row = mysqli_fetch_array($rs)){
				echo "<tr>";
					echo "<td>".$row['nom']."</td>";
					echo "<td>".$row['poblacio']."</td>";
					echo "<td>".$row['web']."</td>";
					echo "<td>".$row['telefon']."</td>";
				echo "</tr>";
			}
		echo "</table>";


		require('close.php');

	?>
</body>
</html>