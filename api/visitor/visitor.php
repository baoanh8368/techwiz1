<?php
$conn = new mysqli("localhost", "root", "", "fit4life");



$sql = "UPDATE Counter SET visits = visits+1 WHERE vcid = 1";
$conn->query($sql);

$sql = "SELECT visits FROM Counter WHERE vcid = 1";
$result = $conn->query($sql);


while ($row = $result->fetch_assoc()) {
    $visits = $row["visits"];
}
echo $visits;

?>