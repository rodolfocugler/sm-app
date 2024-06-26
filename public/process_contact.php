<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['from'];
    $phone = $_POST['phone'];
    $text = $_POST['text'];

    $host = 'smtp.gmail.com';
    $username = '';
    $password = '';
    $port = 465;

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = $host;
        $mail->SMTPAuth = true;
        $mail->Username = $username;
        $mail->Password = $password;
        $mail->SMTPSecure = 'ssl';
        $mail->Port = $port;

        $mail->setFrom($username, '');
        $mail->addAddress('');

        $message = "E-mail enviado pelo site por $name </br></br>Responder para $email </br></br>Telefone $phone </br></br> $text";
        $mail->isHTML(true);
        $mail->Subject = 'Novo Contato do Site';
        $mail->Body    = $message;
        $mail->AltBody = $message;

        $mail->send();
        header("location:index.html");
    } catch (Exception $e) {
        echo "Erro ao enviar mensagem: {$mail->ErrorInfo}";
    }
} else {
    echo 'Método de requisição inválido';
}
