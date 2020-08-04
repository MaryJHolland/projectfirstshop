<?php
include "conn.php";

//设置单页数据条数
$pagesize = 15;
//获取all数据
$sql = "SELECT * FROM taobaogoods";
//获取数据的结果集
$result = $conn->query($sql);
//获取数据总条数
$num =$result->num_rows;
//获取页面数
$pagenum =ceil($num/$pagesize);

//获取前端传来的页面数 但没有的时候设置为1
if(isset($_GET['page'])){
    $pagevalue=$_GET['page'];
}else{
    $pagevalue=1;
}
//设置偏移量
$page=($pagevalue-1)*$pagesize;
$sql1="SELECT * FROM taobaogoods limit $page,$pagesize";
$resoutput=$conn->query($sql1);
$arr=array();
for($i=0;$i<$resoutput->num_rows;$i++){
    $arr[$i]=$resoutput->fetch_assoc();
}
echo json_encode($arr);