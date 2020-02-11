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

		echo "<select>";
			while($row = mysqli_fetch_array($rs)){
				echo "<option value='".$row['id']."'>";
				echo $row['nom'];
				echo "</option>";
			}
		echo "</select>";


		require('close.php');

	?>
</body>
</html>