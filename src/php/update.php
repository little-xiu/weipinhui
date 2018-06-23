<?php
	include "public.php";
	$id = $_REQUEST['id'];
	$num = $_REQUEST['num'];
	$sql = "UPDATE `wphcart` SET `num`='$num' WHERE id='$id'";
	$rows = mysqli_query($conn,$sql);
	if($rows) {
		echo json_encode(array("status"=>1,"info"=>"数目更新成功"));
	} else {
		echo json_encode(array("status"=>0,"info"=>"数目更新失败"));
	}
?>