<?php
	include "public.php";
	$id = $_REQUEST['id'];
	$num = $_REQUEST["num"];
	$sql = "INSERT INTO `wphcart`(`id`, `num`) VALUES ('$id','$num')";
	$rows = mysqli_query($conn,$sql);
	if($rows) {
		echo json_encode(arrary("status"=>1));
	} else {
		echo json_encode(arrary("status"=>0));
	}
?>