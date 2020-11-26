<?php

$marca = $_REQUEST['marca'];

$conn = new mysqli("localhost", "root", "", "concesionari");
$stmt = $conn->prepare("SELECT * FROM model WHERE marca=".$marca);
$stmt->execute();
$result = $stmt->get_result();

echo "<table border='1'>
<tr>
<th>NOM</th>
<th>PORTES</th>
<th>POTENCIA</th>
<th>PREU</th>
<th>MALETER</th>
<th>NUM.PLACES</th>
</tr>";
while($row = mysqli_fetch_array($result)) {
    echo "<tr>";
    echo "<td>" . $row['nom'] . "</td>";
    echo "<td>" . $row['portes'] . "</td>";
    echo "<td>" . $row['potencia'] . "</td>";
    echo "<td>" . $row['preu'] . "</td>";
    echo "<td>" . $row['maleter'] . "</td>";
    echo "<td>" . $row['places'] . "</td>";
    echo "</tr>";
}
echo "</table>";
mysqli_close($conn);
?>