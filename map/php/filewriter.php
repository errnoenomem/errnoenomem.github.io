<?php
ini_set('display_errors', 1);

$filename = getRealIpAddr();

//if ( !file_exists($filename) ) {
//    throw new Exception('File not found! ' . $filename);
//}

$myfile = fopen("logs/" . $filename . ".txt", "a");

if ( !$myfile ) {
    throw new Exception('File failed to open');
}

$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['number'];
fwrite($myfile, "name: " . $name . PHP_EOL . "email: " . $email . PHP_EOL . "number: " . $number . PHP_EOL);
fwrite($myfile, "----------------------------------------------------------------------------------------------------------------------" . PHP_EOL);
fclose($myfile);


function getRealIpAddr()
{
    if (!empty($_SERVER['HTTP_CLIENT_IP']))   //check ip from share internet
    {
        $ip=$_SERVER['HTTP_CLIENT_IP'];
    }
    elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))   //to check ip is pass from proxy
    {
        $ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
    }
    else
    {
        $ip=$_SERVER['REMOTE_ADDR'];
    }
    return $ip;
}

?>

