<?php

$conn = new mysqli("localhost", "root", "password", "database");
$stmt = $conn->prepare("SELECT * FROM oficina ORDER BY nom");
$stmt->execute();
$result = $stmt->get_result();

# Build GeoJSON feature collection array
$geojson = array(
   'type'      => 'FeatureCollection',
   'features'  => array()
);
# Loop through rows to build feature arrays
while($row = mysql_fetch_assoc($result)) {
    $feature = array(
        'id' => $row['partnership_id'],
        'type' => 'Feature', 
        'geometry' => array(
            'type' => 'Point',
            # Pass Longitude and Latitude Columns here
            'coordinates' => array($row['longitude'], $row['latitude'])
        ),
        # Pass other attribute columns here
        'properties' => array(
            'name' => $row['Name'],
            'description' => $row['Description'],
            'sector' => $row['Sector'],
            'country' => $row['Country']
            )
        );
    # Add feature arrays to feature collection array
    array_push($geojson['features'], $feature);
}
header('Content-type: application/json');
echo json_encode($geojson, JSON_NUMERIC_CHECK);
$conn = NULL;
?>