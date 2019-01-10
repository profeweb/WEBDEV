<?php
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "mitjanit3", "concesionari");
$stmt = $conn->prepare("SELECT * FROM model");
if(isset($_POST['marca'])){
	$stmt = $conn->prepare("SELECT * FROM model WHERE marca=".$_REQUEST['marca']);
}
$stmt->execute();
$result = $stmt->get_result();
$outp = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($outp);
?>