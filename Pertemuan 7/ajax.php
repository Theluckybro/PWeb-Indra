<?php
if (!empty($_POST['name']) && !empty($_POST['email'])) {

    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $messageContent = htmlspecialchars($_POST['message']);

    $to = "indrawahyu856@gmail.com";
    $subject = "Contact Form Message";
    $message = "
        <h3>New Message from $name</h3>
        <p>$messageContent</p>
        <p>Email: $email</p>
    ";

    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8\r\n";
    $headers .= "From: <$email>\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "<span style='color:green;font-weight:bold;'>Thank you! Your message was sent successfully.</span>";
    } else {
        echo "<span style='color:red;font-weight:bold;'>Sorry, message failed to send.</span>";
    }
}
?>
