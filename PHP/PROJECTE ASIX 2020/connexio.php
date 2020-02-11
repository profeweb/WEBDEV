<?php

	$con = mysqli_connect("localhost", "root", "mitjanit3", "hotels");

	if(mysqli_connect_errno($con)){
			echo "Error connectat correctament a la BBDD!";
	}
	else {
		//echo "Connectat correctament a la BBDD";
	}

?>
