<!DOCTYPE html>
<html>
	<body>
		<h1>students</h1>
		<?php
			$xmlDoc = new DOMDocument();
			$xmlDoc->load("classroom.xml");
			$x = $xmlDoc->documentElement;
			echo "<table border='1'>";
			foreach ($x->childNodes AS $item){
			    echo "<tr><td>". $item->nodeValue . "</td></tr>";
			}
			echo "</table>";

			//////////////////////
			echo "<br>";

			$xmlDoc2 = new DOMDocument();
			$xmlDoc2->load("classroom.xml");
			$x = $xmlDoc2->documentElement;
			echo "<table border='1'>";
			foreach ($x->childNodes AS $student){
			    echo "<tr>";
			    foreach ($student->childNodes AS $item){
			       echo "<td>".$item->nodeValue . "</td>";
			    }
			    echo "</tr>";
			}
			echo "</table>";

		?>
	</body>
</html>