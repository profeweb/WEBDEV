<?php
	session_start();
	session_destroy();
	echo "<h1>SESSION DELETED.</h1>";
	echo "<a href='59 - sessionsWelcome.php'>Go Back</a>";
?>