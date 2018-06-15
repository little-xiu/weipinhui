<?php
	include "public.php";
	$user = $_REQUEST["phone"];
	$pwd = $_REQUEST["pwd"];
	$sql = "INSERT INTO `wphuser`(`phone`, `pwd`) VALUES ('$user','$pwd')";
	$rows = mysqli_query($conn,$sql);
	if($rows) {
		echo json_encode(array(
				'status'=>1,
				'info'=>'成功'
		));
	} else {
		echo json_encode(array(
				'status'=>0,
				'info'=>'失败'
		));
	}
?>