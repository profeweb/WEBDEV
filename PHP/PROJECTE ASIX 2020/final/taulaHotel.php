<?php
include("cap.php");
?>
<div class="container">
	<h1><i class='fa fa-hotel' aria-hidden='true'></i> Hotels</h1>
	<hr/>
	<a href="insertarHotel.php"><button type="button" class="btn btn-primary"><i class="fa fa-plus" aria-hidden="true"></i> Nou Hotel</button></a><br/><br/>
	<table id='dt' class='table table-striped table-bordered' style='width:100%' >
		<thead>
			<tr><th>Hotel</th><th>Poble</th><th>Web</th><th>Telefon</th><th>Fax</th><th>Editar</th><th>Borrar</th></tr>
		</thead>
		<tbody>
	<?php
		require('connexio.php');
		$sql = "SELECT * FROM hotel ORDER BY nom ASC";
		$rs = mysqli_query($con, $sql) or die();
			while($row = mysqli_fetch_array($rs)){
				echo "<tr>";
					echo "<td>".$row['nom']."</td>";
					echo "<td>".$row['poblacio']."</td>";
					echo "<td>".$row['web']."</td>";
					echo "<td>".$row['telefon']."</td>";
					echo "<td>".$row['fax']."</td>";
					echo "<td><a href='editarHotel.php?id=".$row['id']."'><button type='button' class='btn btn-warning'><i class='fa fa-pencil' aria-hidden='true'></i> Editar</button></a></td>";
					echo "<td><a href='deleteHotel.php?id=".$row['id']."'><button type='button' class='btn btn-danger'><i class='fa fa-trash' aria-hidden='true'></i> Borrar</button></a></td>";
				echo "</tr>";
			}
		require('close.php');
		?>
		</tbody>
	</table>
</div>
	<script>
		
		$(document).ready( function () {
	    	$('#dt').DataTable( {
	    	    dom: 'Bfrtip',
	    	    buttons: [
	    	        { 	extend:'copy', 
	    	        	attr: { id: 'bCopia' } 
	    	        }, 
	    	        	'csv', 'excel', 'pdf', 'print'
	    	    	]
	    	} );
		} );

	</script>
<?php
include("footer.php");
?>