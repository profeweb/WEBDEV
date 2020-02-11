<!DOCTYPE html>
<html>
<head>
	<title>Welcome PHP</title>
	
	<link rel="stylesheet" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css"/>

  <!-- js -->

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

  <script src="https://cdn.datatables.net/1.10.18/js/jquery.dataTables.min.js"></script>
</head>
<body>
	<h1>Welcome SELECT.</h1>
	<table id='dt' class='display' style='width:100%'>
		<thead>
			<tr><th>Hotel</th><th>Poble</th><th>Web</th><th>Telefon</th></tr>
		</thead>
		<tbody>
	<?php
		require('connexio.php');
		$sql = "SELECT * FROM hotel ORDER BY nom";
		$rs = mysqli_query($con, $sql) or die();
			while($row = mysqli_fetch_array($rs)){
				echo "<tr>";
					echo "<td>".$row['nom']."</td>";
					echo "<td>".$row['poblacio']."</td>";
					echo "<td>".$row['web']."</td>";
					echo "<td>".$row['telefon']."</td>";
				echo "</tr>";
			}
		require('close.php');
		?>
		</tbody>
	</table>

	<script>
		
		$(document).ready( function () {
	    	$('#dt').DataTable();
		} );

	</script>
</body>
</html>