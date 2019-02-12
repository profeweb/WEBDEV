<?php
	session_start();
	$_SESSION['user']="PACO";
?>
<!DOCTYPE html>
<html>
<head>
	<title>Sessions</title>
	<style>
		* {
			margin-left:20px;
		}
	</style>
</head>
<body>
	<h1>SESSIONS (PHP).</h1>
	<?php
		echo "<h2>".$_SESSION['user']."</h2>";
	?>
</body>
</html>