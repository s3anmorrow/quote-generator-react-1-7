<?php
// Read the file contents into a string variable,
// and parse the string into a data structure
$str_data = file_get_contents("quotes.json");
$data = json_decode($str_data,true);

header("Content-type: application/json");
// encode into a JSON string as response
echo json_encode($data);
?>