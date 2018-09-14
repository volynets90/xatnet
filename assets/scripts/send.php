<?php
require_once  'recaptchalib.php';
$secret = "";
$response = null;
// Проверка вашего секретного ключа
$reCaptcha = new ReCaptcha($secret);
if ($_POST["g-recaptcha-response"]) {
$response = $reCaptcha->verifyResponse(
        $_SERVER["REMOTE_ADDR"],
        $_POST["g-recaptcha-response"]
    );
}

if ($_POST['g-recaptcha-response']){
  $to='example@gmail.com';
  $usrName = $_POST['usrName'];
  $phoneNumber=$_POST['usrtel'];
  $messageToMail=$_POST['message'];

  $usrName = htmlspecialchars($usrName);
  $phoneNumber=htmlspecialchars($phoneNumber);
  $messageToMail=htmlspecialchars($messageToMail);

  $usrName = urldecode($usrName);
  $phoneNumber=urldecode($phoneNumber);
  $messageToMail=urldecode($messageToMail);

  $usrName = trim($usrName);
  $phoneNumber=trim($phoneNumber);
  $messageToMail=trim($messageToMail);

  $subject = 'Повідомлення із сайта';
  $message = $usrName . " залишив повідомлення:" . "\n\n" . $messageToMail. "\n\n" . "Телефон відправника:". "\n\n" . $phoneNumber;
  $headers= 'From: xat.net.ua';
  $send = mail($to,$subject,$message,$headers);
}

if ($send == 'true') {
  echo '<p class="success">Дякуємо за Ваше звернення!</p>';
} 
else 
{
echo '<p class="fail"><b>Помилка. Заповніть всі поля!</b></p>';
}
?>
