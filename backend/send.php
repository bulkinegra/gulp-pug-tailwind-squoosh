<?php
/* Здесь проверяется существование переменных */
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['number'])) {$phone = $_POST['number'];}
 
/* Сюда впишите свою эл. почту */
$myaddres  = "EMAIL"; // кому отправляем
 
/* А здесь прописывается текст сообщения, \n - перенос строки */
$mes = "Тема: Заказ обратного звонка!\nТелефон: $phone\nИмя: $name";
 
/* А эта функция как раз занимается отправкой письма на указанный вами email */
$sub='Заказ'; //сабж
$email='Заказ обратного звонка'; // от кого
$send = mail ($myaddres,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");
 
// -------Телеграмм-------
$token = "TOKEN";
$chat_id = "CHAT_ID";

//Собираем в массив то, что будет передаваться боту
$arr = array(
    'Имя:' => $name,
    'Телефон:' => $phone
);

//Настраиваем внешний вид сообщения в телеграме
foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
};

//Передаем данные боту
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

//Выводим сообщение об успешной отправке
if ($sendToTelegram) {
    console.log('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
}

//А здесь сообщение об ошибке при отправке
else {
    console.log('Что-то пошло не так. Попробуйте отправить форму ещё раз.');
}

ini_set('short_open_tag', 'On');
header('Refresh: 3; URL=index.html');
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<!-- <meta http-equiv="refresh" content="3; url=index.html"> -->
<title>Спасибо! Мы свяжемся с вами!</title>
<meta name="generator">
<script type="text/javascript">
location.replace("thanks.html")
/*Изменить текущий адрес страницы через 3 секунды (3000 миллисекунд)*/
</script> 
</head>
<body>
</body>
</html>
