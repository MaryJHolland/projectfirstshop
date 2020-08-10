<?php
include "conn.php";
if(isset($_GET['sid'])){
    $sid = $_GET['sid'];
    $result = $conn->query("SELECT * FROM taobaogoods where sid = $sid");
    echo json_encode($result->fetch_assoc());
}