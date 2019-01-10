<?php
/**
 * PHP GeoJSON Constructor
 */
# Connexió a la Base de Dades
$conn = new PDO('mysql:host=localhost;dbname=mydatabase','myusername','mypassword');
# Query de selecció de dades d la BBDD:
$sql = 'SELECT * from GDA_database WHERE user_query = whatever';
# Prova d'Error
$rs = $conn->query($sql);
if (!$rs) {
    echo 'An SQL error occured.\n';
    exit;
}
# Construir array de GeoJSON feature collection
$geojson = array(
   'type'      => 'FeatureCollection',
   'features'  => array()
);
# Bucle de les files per a generar l'array de features
while($row = mysql_fetch_assoc($dbquery)) {
    $feature = array(
        'id' => $row['partnership_id'],
        'type' => 'Feature', 
        'geometry' => array(
            'type' => 'Point',
            # Passam Longitud i Latitud
            'coordinates' => array($row['longitud'], $row['latitud'])
        ),
        # Passam altres atributs en la secció de properties
        'properties' => array(
            'name' => $row['Nom'],
            'description' => $row['Descripcio'],
            'sector' => $row['Sector'],
            'country' => $row['Pais'],
            'status' => $row['Estat'],
            'start_date' => $row['DataInici'],
            'end_date' => $row['DataFi']
            )
        );
    # Afegim la feature a l'array de features
    array_push($geojson['features'], $feature);
}
header('Content-type: application/json');
echo json_encode($geojson, JSON_NUMERIC_CHECK);
$conn = NULL;
?>