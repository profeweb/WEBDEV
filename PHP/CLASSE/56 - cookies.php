<?php
	setcookie("user", "PACO", time()+3600);
	setcookie("idioma", "ENGLISH", time()+3600);
	setcookie("size", "BIG", time()+3600);
?>
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
		}
		else {
			echo "<h2>Hello User!!!</h2>";
		}

		echo "<p>Printing all the Cookies:</p>";
		print_r($_COOKIE);
	?>
</body>
</html>