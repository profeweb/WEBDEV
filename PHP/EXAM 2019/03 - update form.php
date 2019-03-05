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
	<h1>Form Update Data Base (PHP).</h1>
	<form action="03 - update form2.php" method="GET">
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
		NOM:<input type="text" name="nom" placeholder="Enter name" /><br/>
		POSICIO:<input type="number" name="posicio" min="1" max="20" /><br/>
		PUNTS:<input type="number" name="punts" min="0" max="114" /><br/>
		<input type="submit" value="SEND"/>
	</form>
</body>
</html>
