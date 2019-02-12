<!DOCTYPE html>
<html>
	<body>
	<h1>students</h1>
		<?php

			$xml=simplexml_load_file("classroom.xml");

			echo "<table border='1'>";
			foreach($xml->children() as $student){
			  echo "<tr>";
			  foreach($student->children() as $item){
				echo "<td>" . $item . "</td>";
			  }
			  echo "</tr>";
			}
			echo "</table>";

		?>
	</body>
</html>