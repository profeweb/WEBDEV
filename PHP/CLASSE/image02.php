<?php

$width=800;
$height=500;

$image=imageCreate($width,$height);

$yellow=ImageColorAllocate($image,255,255,0);

ImageFill($image,0,0,$yellow);

$black=ImageColorAllocate($image,0,0,0);


for($c=0;$c<$_REQUEST['punts'];$c++){
	$x=50 + 100*$c;
	$y=250; 
	Imagefilledellipse($image,$x,$y,50, 50, $black);
}


Header ("Content-type: image/jpeg");
ImageJPEG ($image);
ImageDestroy($image);
?>