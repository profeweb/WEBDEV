<?php
header("Content-Type: application/json; charset=UTF-8");
$name='';
$firstName='';
$address='';
if ($_REQUEST['dni']=='1'){
  $name="Juan";
  $firstName="Rodriguez";
  $address="Colon 123";
}
else if ($_REQUEST['dni']=='2'){
  $name='Ana';
  $firstName='Maldonado';
  $address='Lima 245';
}
else if ($_REQUEST['dni']=='3')
{
  $name='laura';
  $firstName='Pueyrredon';
  $address='Laprida 785';
}
echo '{"name":"'.$name.'","firstName":"'.$firstName.'","address":"'.$address.'"}';
?>