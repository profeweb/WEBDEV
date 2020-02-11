<!DOCTYPE html>
<html>
<head>
	<title>Welcome PHP</title>
</head>
<body>
	<h1>FORM INSERT HOTEL.</h1>
	<form action="inserthotel.php" method="post">
			NOM:<input type="text" name="nom" /><br/>
			DIR:<input type="text" name="adreca" /><br/>
			POBLE:<input type="text" name="poble" /><br/>
			TELEFON:<input type="text" name="telefon" /><br/>
			FAX:<input type="text" name="fax" /><br/>
			WEB:<input type="text" name="web" /><br/>
			LAT / LONG:<input type="text" name="lat" size="5" /><input type="text" name="long" size="5" /><br/>
			ID_PROVINCIA:<input type="text" name="provincia" /><br/>
			ID_PAIS:<input type="text" name="pais" /><br/>
			FOTO:<input type="file" name="foto" /><br/>
			<input type="submit" value="INSERT"/>
	</form>
</body>
</html>