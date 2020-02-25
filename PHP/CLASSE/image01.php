<?php

$width=100;
$height=30;

$image=imageCreate($width,$height);

$yellow=ImageColorAllocate($image,255,255,0);

ImageFill($image,0,0,$yellow);

$red=ImageColorAllocate($image,255,0,0);

$randomNumber=rand(100000,999999);
ImageString($image,5,25,5,$randomNumber,$red);


for($c=0;$c<=5;$c++){
	$x1=rand(0,$width);
	$y1=rand(0,$height); 
	$x2=rand(0,$width);
	$y2=rand(0,$height);
	ImageLine($image,$x1,$y1,$x2,$y2,$red);
}


Header ("Content-type: image/jpeg");
ImageJPEG ($image);
ImageDestroy($image);
?>