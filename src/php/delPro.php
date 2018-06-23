<?php
	include "public.php";
	$id = $_REQUEST["id"];
	$sql = "DELETE FROM `wphcart` WHERE id='$id'";
	$rows = mysqli_query($conn,$sql);
	if($rows) {
		echo json_encode(array("status"=>1,"info"=>"删除成功"));
	} else {
		echo json_encode(array("status"=>0,"info"=>"删除失败"));
	}
?>