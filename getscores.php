<?php
header('Access-Control-Allow-Origin: *');

$host = "sql.free.fr"; // Host name
$username = "ycknok"; // Mysql username
$password = "aqwzsx94"; // Mysql password
$db_name = "ycknok"; // Database name
$tbl_name="scoreshector"; // Table name

// Connect to server and select database.
mysql_connect("$host", "$username", "$password")or die("cannot connect"); 
mysql_select_db("$db_name")or die("cannot select DB");

// Retrieve data from database 
$sql="SELECT * FROM scoreshector ORDER BY score DESC LIMIT 5";
$result=mysql_query($sql);

// Start looping rows in mysql database.
while($rows=mysql_fetch_array($result)){
echo $rows['name'] . "|" . $rows['score'] . "|";

// close while loop 
}

// close MySQL connection 
mysql_close();
?>