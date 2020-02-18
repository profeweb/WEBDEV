<!DOCTYPE html>
<html>
<head>
	<title>Welcome PHP</title>
</head>
<body>
	<h1>Welcome UPDATE.</h1>
	<?php

		require('connexio.php');

		$sql = "UPDATE hotel SET nom = '".$_REQUEST['nom']."',
				adreca = '".$_REQUEST['adreca']."',
				poblacio = '".$_REQUEST['poble']."',
				telefon = '".$_REQUEST['telefon']."',
				fax = '".$_REQUEST['fax']."',
				web = '".$_REQUEST['web']."',
				lat = '".$_REQUEST['lat']."',
				longi = '".$_REQUEST['long']."',
				id_provincia = '".$_REQUEST['provincia']."',
				id_pais = '".$_REQUEST['pais']."' 
				WHERE id ='".$_REQUEST['id']."'";

		echo $sql."<br/>";

		mysqli_query($con, $sql) or die();

		echo "Update realitzat correctament.";

		header("location:taulaHotelEditarBorrar.php");
		exit();

		require('close.php');

	?>
</body>
</html>