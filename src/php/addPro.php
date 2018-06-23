<?php
	include "public.php";
	$id = $_REQUEST['id'];
	$num = $_REQUEST["num"];
	$tit = $_REQUEST["title"];
	$img = $_REQUEST["img"];
	$price = $_REQUEST["price"];
	//添加购物车时，先查询数据库是否有商品，有则更新数量，无则插入商品
	$sql1 = "SELECT * FROM `wphcart` WHERE id='$id'";
	$res1 = mysqli_query($conn,$sql1);
	$n1 = mysqli_num_rows($res1);
	if($n1) {
		$data1 = mysqli_fetch_assoc($res1);
		$numOri = $data1["num"] + $num;
		//有则更新数量
		$sql2 = "UPDATE `wphcart` SET `num`='$numOri' WHERE id='$id'";
		$rows2 = mysqli_query($conn,$sql2);
		if($rows2) {
			echo json_encode(array(
				"status"=>1,
				"info"=>"数量更新成功"
			));
		} else {
			echo json_encode(array("status"=>-1,"info"=>"数量更新失败"));
		}
	} else {//购物车无该商品则插入商品
		$sql = "INSERT INTO `wphcart`(`id`, `num`, `title`, `img`, `price`) VALUES ('$id','$num','$tit','$img','$price')";
		$rows = mysqli_query($conn,$sql);
		if($rows) {
			echo json_encode(array("status"=>2,"info"=>"商品添加成功"));
		} else {
			echo json_encode(array("status"=>0,"info"=>"商品添加失败"));
		}		
	}
?>