<?php
$conn = new mysqli("localhost", "root", "", "concesionari");
$stmt = $conn->prepare("SELECT * FROM marca ORDER BY nom");
$stmt->execute();
$result = $stmt->get_result();

while($row = mysqli_fetch_array($result)) {
	echo "<option value='".$row['nom']."'>".$row['nom']."</option>";
}
?>