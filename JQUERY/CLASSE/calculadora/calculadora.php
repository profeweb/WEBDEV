<?php 

$num1 = intval($_REQUEST['num1']);
$num2 = intval($_REQUEST['num2']);
$op   = $_REQUEST['op'];

if($op=="SUMA"){
	echo $num1 + $num2;
}
else if($op=="RESTA"){
	echo $num1 - $num2;
}
else if($op=="MULTIPLICA"){
	echo $num1 * $num2;
}
else if($op=="DIVISIO"){
	echo $num1 / $num2;
}

?>