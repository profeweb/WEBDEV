<?php
header("Content-Type: application/json; charset=UTF-8");
$dir   = 'img';
$files = scandir($dir);
echo json_encode($files);
?>