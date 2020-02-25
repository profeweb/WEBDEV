<?php
	include("cap.php");
?>
	<?php
		require('connexio.php');
		$sql = "SELECT * FROM hotel WHERE id='".$_GET['id']."'";
		$rs = mysqli_query($con, $sql) or die();
		$row = mysqli_fetch_array($rs);
	?>
<div class="container">
	<h1><i class='fa fa-hotel' aria-hidden='true'></i> Edita Hotel.</h1>
	<hr/>
	<form action="editaHotel.php" method="post">
		<input type="hidden" name="id" value="<?php echo $row['id']; ?>" />
		<div class="row">
			<div class="col form-group">
	    		<label for="nom">Nom:</label>
				<input type="text" name="nom" value="<?php echo $row['nom']; ?>"  class="form-control" />
			</div>
			<div class=" col form-group">
				<label for="adreca">Adreça:</label>
				<input type="text" name="adreca" value="<?php echo $row['adreca']; ?>"   class="form-control"/>
				</div>
		</div>
		<div class="row">
			<div class="col form-group">
	    		<label for="poble">Poble:</label>
				<input type="text" name="poble" value="<?php echo $row['poblacio']; ?>" class="form-control" />
			</div>
	    	<div class="col form-group">
	    		<label for="telefon">Telefon:</label>
				<input type="text" name="telefon" value="<?php echo $row['telefon']; ?>" class="form-control" />
			</div>
			<div class="col form-group">
	    		<label for="fax">Fax:</label>
				<input type="text" name="fax" value="<?php echo $row['fax']; ?>" class="form-control" />
			</div>
		</div>
		<div class="row">
			<div class="col form-group">
	    		<label for="web">Web:</label>
				<input type="text" name="web" value="<?php echo $row['web']; ?>" class="form-control" />
			</div>
			<div class="col form-group">
	    		<label for="lat">Latitud:</label>
				<input type="text" name="lat" size="5" value="<?php echo $row['lat']; ?>" class="form-control" />
			</div>
			<div class="col form-group">
	    		<label for="long">Longitud:</label>
				<input type="text" name="long" size="5" value="<?php echo $row['longi']; ?>" class="form-control" />
	    	</div>
	    </div>
		<div class="row">
			<div class="col form-group">
	    		<label for="web">Provincia:</label>
				<select  name="provincia" class="form-control">
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
				</select>
			</div>
			<div class="col form-group">
	    		<label for="web">Pais:</label>
				<select  name="pais" class="form-control">
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
				</select>
				</div>
		</div>
		<div class="row">
			<div class="col form-group">
	    		<label for="foto">Foto:</label>
				<input type="file" name="foto" class="form-control" />
			</div>
		</div>
		<div class="row">
			<div class="col">
			<input type="submit" class="btn btn-primary" value="Editar"/>
			</div>
		</div>
	</form>
<?php
	include("footer.php");
?>