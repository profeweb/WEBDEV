<!DOCTYPE html>
<html>
<head>
	<title>Cookies</title>
	<style>
		* {
			margin-left:20px;
		}
	</style>
</head>
<body>
	<h1>COOKIES (PHP).</h1>
	<?php
		if(isset($_COOKIE["user"])){
			echo "<h2> Hello ".$_COOKIE['user']."!!!</h2>";
	?>
		<form action="deleteCookie.php" method="get">
			<input type="submit" value="DELETE COOKIE" />
		</form>
	<?php 
		}
		else {
			echo "<h2>Hello User!!!</h2>";
	?>
		<form action="createCookie.php" method="get">
			USER:<input type="text" name="user" />
			<input type="submit" value="CREATE COOKIE" />
		</form>
	<?php 
		}
	?>
</body>
</html>