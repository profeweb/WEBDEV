<!DOCTYPE html>
<html>
<body>
<h1>students</h1>
<?php
//Initialize the XML parser
$parser=xml_parser_create();

//Function to use at the start of an element
function start($parser,$element_name,$element_attrs){
  switch($element_name){
    case "CLASS":
    echo "<table border='1'>";
    break;
    case "STUDENT":
    echo "<tr>";
    break;
    case "NAME":
    echo "<td>";
    break;
    case "AGE":
    echo "<td>";
    break;
    case "MARK":
    echo "<td>";
    }
  }

//Function to use at the end of an element
function stop($parser,$element_name){
  switch($element_name){
    case "CLASS":
      echo "</table>";
      break;
    case "STUDENT":
      echo "</tr>";
      break;
    case "NAME":
      echo "</td>";
      break;
    case "AGE":
      echo "</td>";
      break;
    case "MARK":
      echo "</td>";
    }
  }

//Function to use when finding character data
function char($parser,$data){
  echo $data;
  }

//Specify element handler
xml_set_element_handler($parser,"start","stop");

//Specify data handler
xml_set_character_data_handler($parser,"char");

//Open XML file
$fp=fopen("classroom.xml","r");

//Read data
while ($data=fread($fp,4096)){
  xml_parse($parser,$data,feof($fp)) or
  die (sprintf("XML Error: %s at line %d",
  xml_error_string(xml_get_error_code($parser)),
  xml_get_current_line_number($parser)));
  }

//Free the XML parser
xml_parser_free($parser);

?>
</body>
</html>