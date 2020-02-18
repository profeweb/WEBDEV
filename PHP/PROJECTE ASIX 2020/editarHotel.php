<!DOCTYPE html>
<html>
<head>
	<title>Welcome PHP</title>
</head>
<body>
	<?php
		require('connexio.php');
		$sql = "SELECT * FROM hotel WHERE id='".$_GET['id']."'";
		$rs = mysqli_query($con, $sql) or die();
		$row = mysqli_fetch_array($rs);
	?>
	<h1>FORM EDITAR HOTEL.</h1>
	<form action="editahotel.php" method="post">
		<input type="hidden" name="id" value="<?php echo $row['id']; ?>" />
		NOM:<input type="text" name="nom" value="<?php echo $row['nom']; ?>" /><br/>
		DIR:<input type="text" name="adreca" value="<?php echo $row['adreca']; ?>" /><br/>
		POBLE:<input type="text" name="poble" value="<?php echo $row['poblacio']; ?>" /><br/>
		TELEFON:<input type="text" name="telefon" value="<?php echo $row['telefon']; ?>" /><br/>
		FAX:<input type="text" name="fax" value="<?php echo $row['fax']; ?>" /><br/>
		WEB:<input type="text" name="web" value="<?php echo $row['web']; ?>" /><br/>
		LAT / LONG:<input type="text" name="lat" size="5" value="<?php echo $row['lat']; ?>" /><input type="text" name="long" size="5" value="<?php echo $row['longi']; ?>" /><br/>
		ID_PROVINCIA:
		<select  name="provincia">
		<?php 
		$sql2 = "SELECT * FROM provincia ORDER BY nom";
		$rs2 = mysqli_query($con, $sql2) or die();
		while($row2 = mysqli_fetch_array($rs2)){
			if($row['id_provincia']==$row2['id']){
				echo "<option value='".$row2['id']."' selected='selected' >";
			}
			else {
				echo "<option value='".$row2['id']."' >";
			}
			echo $row2['nom'];
			echo "</option>";
		}
		?>
		</select><br/>
		ID_PAIS: <select  name="pais">
		<?php 
		$sql2 = "SELECT * FROM pais ORDER BY nom";
		$rs2 = mysqli_query($con, $sql2) or die();
		while($row2 = mysqli_fetch_array($rs2)){
			if($row['id_pais']==$row2['id']){
				echo "<option value='".$row2['id']."' selected='selected' >";
			}
			else {
				echo "<option value='".$row2['id']."' >";
			}
			echo $row2['nom'];
			echo "</option>";
		}
		?>
		</select><br/>
		FOTO:<input type="file" name="foto" /><br/>
		<input type="submit" value="INSERT"/>
	</form>
</body>
</html>