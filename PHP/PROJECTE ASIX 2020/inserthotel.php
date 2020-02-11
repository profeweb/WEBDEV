<!DOCTYPE html>
<html>
<head>
	<title>Welcome PHP</title>
</head>
<body>
	<h1>Welcome INSERT.</h1>
	<?php

		require('connexio.php');

		$sql = "INSERT INTO hotel (nom, adreca, poblacio, telefon, fax, web, lat, longi, foto, id_provincia, id_pais) VALUES ('".$_REQUEST['nom']."', '".$_REQUEST['adreca']."', '".$_REQUEST['poble']."', '".$_REQUEST['telefon']."', '".$_REQUEST['fax']."', '".$_REQUEST['web']."', '".$_REQUEST['lat']."', '".$_REQUEST['long']."', 'foto2.jpg', '".$_REQUEST['provincia']."', '".$_REQUEST['pais']."')";

		//echo $sql."<br/>";

		mysqli_query($con, $sql) or die();

		echo "Insert realitzat correctament.";

		require('close.php');

	?>
</body>
</html>