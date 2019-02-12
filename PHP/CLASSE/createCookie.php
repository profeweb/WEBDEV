<?php
	setcookie("user", $_REQUEST['user'], time()+3600);
	echo "<h1>COOKIE CREATED.</h1>";
	echo "<a href='57 - cookiesWelcome.php'>Go Back</a>";
?>