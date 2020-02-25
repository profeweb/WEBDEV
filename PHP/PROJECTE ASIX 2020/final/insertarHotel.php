<?php
	include("cap.php");
?>
<div class="container">
	<h1><i class='fa fa-hotel' aria-hidden='true'></i> Nou Hotel.</h1>
	<hr/>
	<form action="insertHotel.php" method="post">
		<div class="row">
			<div class="col form-group">
	    		<label for="nom">Nom:</label>
				<input type="text" name="nom"  class="form-control" />
			</div>
			<div class=" col form-group">
				<label for="adreca">Adreça:</label>
				<input type="text" name="adreca"  class="form-control" />
			</div>
		</div>
		<div class="row">
			<div class="col form-group">
	    		<label for="poble">Poble:</label>
	    		<input type="text" name="poble"  class="form-control" />
	    	</div>
	    	<div class="col form-group">
	    		<label for="telefon">Telefon:</label>
				<input type="text" name="telefon"  class="form-control" />
			</div>
			<div class="col form-group">
	    		<label for="fax">Fax:</label>
				<input type="text" name="fax"  class="form-control" />
			</div>
		</div>
		<div class="row">
			<div class="col form-group">
	    		<label for="web">Web:</label>
				<input type="text" name="web"  class="form-control" />
			</div>
			<div class="col form-group">
	    		<label for="lat">Latitud:</label>
	    		<input type="text" name="lat" size="5"   class="form-control" />
			</div>
			<div class="col form-group">
	    		<label for="long">Longitud:</label>
	    		<input type="text" name="long" size="5"  class="form-control" />
	    	</div>
	    </div>
	    <div class="row">
			<div class="col form-group">
	    		<label for="web">Provincia:</label>
				<select  name="provincia"  class="form-control">
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
					</select>
			</div>
			<div class="col form-group">
	    		<label for="web">Pais:</label>
				<select  name="pais"  class="form-control">
				<?php 
				$sql2 = "SELECT * FROM pais ORDER BY nom";
				$rs2 = mysqli_query($con, $sql2) or die();
				while($row2 = mysqli_fetch_array($rs2)){
					echo "<option value='".$row2['id']."' >";
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
				<input type="file" name="foto"  class="form-control" />
			</div>
		</div>
		<div class="row">
			<div class="col">
			<input type="submit" class="btn btn-primary" value="Inserir"/>
			</div>
		</div>
	</form>
<?php
	include("footer.php");
?>