<?php

   // get data from forms

   $name = $_POST['inputName'];
   $email = $_POST['inputEmail'];
   $message = $_POST['inputMessage'];

   // formating data

   $name = htmlspecialchars($name);
   $email = htmlspecialchars($email);
   $message = htmlspecialchars($message);

   $name = urldecode($name);
   $email = urldecode($email);
   $message = urldecode($message);

   $name = trim($name);
   $email = trim($email);
   $message = trim($message);

   //  send data to mail

   if (mail("rettakecsgo@gmail.com",
            "Новое письмо с сайта",
            "Имя: ".$name."\n".
            "Почта: ".$email."\n".
            "Сообщение: ".$message."\n".
            "From: no-reply@my-domain.ru \r\n")
   )  { 
      echo ('Форма отправлена. Спасибо за заявку, мы свяжемся с вами в ближайшее время.');
   }

   else {
      echo ('Ошибка.. проверьте данные');
   }

?>