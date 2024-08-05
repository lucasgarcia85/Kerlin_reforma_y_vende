<?php

if($_SERVER['REQUEST_METHOD'] != 'POST' ){
    header("Location: index.html" );
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/PHPMailer.php';
require 'phpmailer/Exception.php';
require 'phpmailer/SMTP.php';

$name = $_POST['name'];
$telephone = $_POST['telephone'];
$email = $_POST['email'];
$textarea = $_POST['textarea'];
$subject = 'Mensaje recibido desde www.kerlinreformas.com.ar';

$recaptcha_secret = "6LcymxcqAAAAAJSRk7g4GV__I2m3FuzPnCxWE5cE"; //Add secret key
$response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$recaptcha_secret."&response=".$_POST['g-recaptcha-response']);
$response = json_decode($response, true);

if( empty(trim($name)) ) $name = 'anonimo';

$body = <<<HTML
    <h1>Mensaje recibido desde www.kerlinreformas.com.ar</h1>
    <h2>DATOS DE LA PERSONA</h2>
    <p> $name | $email | $telephone</p>
    <h3>MENSAJE SOBRE LA PROPIEDAD A REFORMAR Y VENDER:</h3>
    <p>$textarea</p>
       
HTML;

$mailer = new PHPMailer(true);

try {
    //Server setting
    $mailer->SMTPDebug = 0;
    $mailer->isSMTP();
    $mailer->Host = 'c2162446.ferozo.com';
    $mailer->SMTPAuth = true;  
    $mailer->Username = 'info@kerlinreformas.com.ar';
    $mailer->Password = 'Rioparana7/';                          
    $mailer->SMTPSecure = 'ssl';
    $mailer->Port = 465;
    $mailer->AltBody = strip_tags($body);
    $mailer->CharSet = 'UTF-8';

    //Recipients
    $mailer->setFrom( $email, "$name" );
    $mailer->addAddress('info@kerlinreformas.com.ar','Sitio web');

    //Content
    $mailer->isHTML(true);
    $mailer->Subject = $subject;
    $mailer->msgHTML($body);
    $mailer->AltBody = strip_tags($body);
    $mailer->CharSet = 'UTF-8';

    if($response["success"] === true){
        $mailer->send();
        header("Location: thank-you.html" );
    } else {
        header("Location: 404.html" );
    }

} catch (Exception $e) {
    return "El mensaje no pudo ser enviado. Error: $mailer->ErrorInfo";
}

?>