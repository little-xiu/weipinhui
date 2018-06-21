<?php
	include "public.php";
	$sql = "SELECT * FROM `wphcart`";
	$res = mysqli_query($conn,$sql);
	$n = mysqli_num_rows($res);
	if($n) {
		$data = array(array("status"=>1),array());
		while($arr = mysqli_fetch_assoc($res)) {
			array_push($data[1],$arr);
		}
		echo json_encode($data);
	} else {
		$data = array(array("status"=>0));
		echo json_encode($data);
	}
?>