<?php
	header("content-type:text/html;charset=utf8");
	$hostname = "localhost";
	$db_username = "root";
	$db_pwd = "root";
	$db_name = "db_1802";
	$conn = new mysqli($hostname,$db_username,$db_pwd,$db_name);
	if($conn->connect_error) {
		die("连接错误".$conn->connect_error);
	}
	$conn->query('set names utf8');
?>