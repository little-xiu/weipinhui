<?php
	include "public.php";
	$id = $_REQUEST["id"];
	$num = $_REQUEST["num"];
	$sql = "SELECT * FROM `wphcart` WHERE id='$id'";
	$res = mysqli_query($conn,$sql);
	$n = mysqli_num_rows($res);
	if($n) {
		echo json_encode(array("status"=>1));
	} else {
		echo json_encode(array("status"=>0));
	}
?>