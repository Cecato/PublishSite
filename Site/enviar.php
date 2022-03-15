<?php
date_default_timezone_set('America/Sao_Paulo');

require_once('src/PHPMailer.php');
require_once('src/SMTP.php');
require_once('src/Exception.php');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

if((isset($_POST['whatsapp']) && !empty(trim($_POST['whatsapp']))) &&(isset($_POST['mensagem']) && !empty(trim($_POST['mensagem'])))) {

	$nome = !empty($_POST['nome']) ? $_POST['nome'] : 'Não informado';
	$whatsapp = !empty($_POST['whatsapp']) ? $_POST['whatsapp'] : 'Não informado';
	$mensagem = !empty($_POST['mensagem']) ? $_POST['mensagem'] : 'Não informado';
	$data = date('d/m/Y H:i:s');

	$mail = new PHPMailer();
	$mail->isSMTP();
	$mail->Host = 'smtp.gmail.com';
	$mail->SMTPAuth = true;
	$mail->Username = 'EMAIL'; // Enviando
	$mail->Password = 'SENHA';
	$mail->Port = 587;

	// Recebendo
	$mail->setFrom('EMAIL');
	$mail->addAddress('EMAIL');

	$mail->isHTML(true);
	$mail->Subject = "Cliente";
	$mail->Body = "Nome: {$nome}<br>
				   Whatsapp: {$whatsapp}<br>
				   Mensagem: {$mensagem}<br>
				   Data/hora: {$data}";

	if($mail->send()) {
		echo 'Email enviado com sucesso.';
	} else {
		echo 'Email não enviado.';
	}
} else {
	echo 'Não enviado: informar o whatsapp e a mensagem.';
}
