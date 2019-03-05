<!DOCTYPE html>
<html>
<head>
	<title>Data Base</title>
	<style>
		* {
			margin-left:20px;
		}
	</style>
</head>
<body>
	<h1>Form Insert Data Base (PHP).</h1>
	<form action="02 - insert form2.php" method="GET">
		NOM:<input type="text" name="nom" placeholder="Enter name" /><br/>
		POSICIO:<input type="number" name="posicio" min="1" max="20" /><br/>
		PUNTS:<input type="number" name="punts" min="0" max="114" /><br/>
		<input type="submit" value="SEND"/>
	</form>
</body>
</html>
