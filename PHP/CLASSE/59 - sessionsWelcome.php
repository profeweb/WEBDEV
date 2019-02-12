<?php
	session_start();
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
		if(isset($_SESSION["user"])){
			echo "<h2> Hello ".$_SESSION['user']."!!!</h2>";
	?>
		<form action="deleteSession.php" method="get">
			<input type="submit" value="DELETE SESSION" />
		</form>
	<?php 
		}
		else {
			echo "<h2>Hello User!!!</h2>";
	?>
		<form action="createSession.php" method="get">
			USER:<input type="text" name="user" />
			<input type="submit" value="CREATE SESSION" />
		</form>
	<?php 
		}
	?>
</body>
</html>