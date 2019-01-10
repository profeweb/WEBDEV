<?php
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "mitjanit3", "concesionari");
$stmt = $conn->prepare("SELECT * FROM carroceria ORDER BY nom");
$stmt->execute();
$result = $stmt->get_result();
$outp = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($outp);
?>