<?php
/* Осуществляем проверку вводимых данных и их защиту от враждебных 
скриптов */
$phoneNumber = htmlspecialchars($_POST["tel"]);
$email = htmlspecialchars($_POST["email"]);
$delivery = htmlspecialchars($_POST["delivery"]);
$addres = htmlspecialchars($_POST["addres"]);
$message = htmlspecialchars($_POST["messages"]);
$sizeA = htmlspecialchars($_POST["dim_a"]);
$sizeB = htmlspecialchars($_POST["dim_b"]);
$sizeC = htmlspecialchars($_POST["dim_c"]);
$sizeWindows = htmlspecialchars($_POST["wcount"]);
$sizeDoors = htmlspecialchars($_POST["dcount"]);
/* Устанавливаем e-mail адресата */
$myemail = "cork@ukr.net";
/* Проверяем заполнены ли обязательные поля ввода, используя check_input 
функцию */
// $your_name = check_input($_POST["your_name"], "Введите ваше имя!");
// $tema = check_input($_POST["tema"], "Укажите тему сообщения!");
// $email = check_input($_POST["email"], "Введите ваш e-mail!");
// $message = check_input($_POST["message"], "Вы забыли написать сообщение!");
/* Проверяем правильно ли записан e-mail */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
show_error("<br /> Е-mail адрес не существует");
}
/* Создаем новую переменную, присвоив ей значение */
$tema = "Новый заказ!";

$message_to_myemail = "Здравствуйте! 
Вашей контактной формой было отправлено сообщение! 
Номер отправителя: $phoneNumber 
E-mail: $email 
Выбран способ доставки: $delivery
По адресу: $addres
Данные помещения:
Длина А: $sizeA
Ширина В: $sizeB
Высота С: $sizeC
Площадь окон: $sizeWindows
Площадь дверей: $sizeDoors
Текст сообщения: $message 
Конец";
/* Отправляем сообщение, используя mail() функцию */
$from  = "From: $phoneNumber <$email> \r\n Reply-To: $email \r\n"; 
mail($myemail, $tema, $message_to_myemail, $from);
?>
<p>Ваше сообщение было успешно отправлено!</p>
<p>На <a href="index.html">Главную >>></a></p>
<?php
/* Если при заполнении формы были допущены ошибки сработает 
следующий код: */
function check_input($data, $problem = "")
{
$data = trim($data);
$data = stripslashes($data);
$data = htmlspecialchars($data);
if ($problem && strlen($data) == 0)
{
show_error($problem);
}
return $data;
}
function show_error($myError)
{
?>
<html>
<body>
<p>Пожалуйста исправьте следующую ошибку:</p>
<?php echo $myError; ?>
</body>
</html>
<?php
exit();
}
?>