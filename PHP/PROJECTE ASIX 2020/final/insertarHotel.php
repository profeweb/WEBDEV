<?php
	include("cap.php");
?>
	<h1>FORM INSERT HOTEL.</h1>
	<form action="insertHotel.php" method="post">
			NOM:<input type="text" name="nom" /><br/>
			DIR:<input type="text" name="adreca" /><br/>
			POBLE:<input type="text" name="poble" /><br/>
			TELEFON:<input type="text" name="telefon" /><br/>
			FAX:<input type="text" name="fax" /><br/>
			WEB:<input type="text" name="web" /><br/>
			LAT / LONG:<input type="text" name="lat" size="5" /><input type="text" name="long" size="5" /><br/>
			ID_PROVINCIA:<select  name="provincia">
		<?php 
		require('connexio.php');
		$sql2 = "SELECT * FROM provincia ORDER BY nom";
		$rs2 = mysqli_query($con, $sql2) or die();
		while($row2 = mysqli_fetch_array($rs2)){
			echo "<option value='".$row2['id']."' >";
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
			echo "<option value='".$row2['id']."' >";
			echo $row2['nom'];
			echo "</option>";
		}
		?>
		</select><br/>
			FOTO:<input type="file" name="foto" /><br/>
			<input type="submit" value="INSERT"/>
	</form>
<?php
	include("footer.php");
?>