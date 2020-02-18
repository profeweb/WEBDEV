<?php

	require('connexio.php');
	$sql = "DELETE FROM hotel WHERE id='".$_REQUEST['id']."'";
	mysqli_query($con, $sql) or die();
	require('close.php');
	
	header("location: taulaHotel.php");
	exit();

?>