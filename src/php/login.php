<?php
	include "public.php";
	$phone = $_REQUEST["phone"];
	$pwd = $_REQUEST["pwd"];
	$sql = "SELECT * FROM `wphuser` WHERE phone='$phone'";
	$res = mysqli_query($conn,$sql);
	$n = mysqli_num_rows($res);
	if(!$n) {
		echo json_encode(array(
			"status"=>0,
			"info"=>"用户名不存在"
		));
	} else {
		$data = mysqli_fetch_assoc($res);
		if($data["pwd"] == $pwd) {
			echo json_encode(array(
				"status"=>1,
				"info"=>"登录成功"
			));
		} else {
			echo json_encode(array(
				"status"=>-1,
				"info"=>"密码错误"
			));
		}
	}
?>