<?php 

$to = "radiheg548@mayhco.com"; // Почтовый адрес получаетеля письма!
$from = $_SERVER['HTTP_HOST']; 
$message = "Имя: ".$_POST['name']."<br>";//присвоить переменной значение, полученное из формы name=name
$message .= "E-mail: ".$_POST['email']."<br>"; //полученное из формы name=email
$message .= "Номер телефона: ".$_POST['phone']."<br>"; //полученное из формы name=phone

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer();
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 1;                               // Enable verbose debug output


$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'cojsmailer@gmail.com';                 // Наш логин
$mail->Password = '52581622';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom("cojsmailer@gmail.com", 'Отклик с сайта');   // От кого письмо 
$mail->addAddress($to);     
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Разрешить HTML верстку

$mail->Subject = 'Заявка';
$mail->Body    = $message;

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>