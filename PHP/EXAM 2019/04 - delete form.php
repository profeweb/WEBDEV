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
	<h1>Form Delete Data Base (PHP).</h1>
	<form action="04 - delete form2.php" method="GET">
		<?php

			include("connect.php");

			echo "EQUIP:<select name='equip'>";
			$sql="SELECT id, nom FROM equip"; 
			$rs = mysqli_query($con,$sql);
			while($row=mysqli_fetch_array($rs)){
				echo "<option value='".$row['id']."'>";
					echo $row['nom'];
				echo "</option>";
			}
			echo "</select>";

		?><br/>
		<input type="submit" value="DELETE"/>
	</form>
</body>
</html>
