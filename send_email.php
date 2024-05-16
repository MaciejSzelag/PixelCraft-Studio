<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"> -->
    <meta name="robots" content="index,follow">

    <title>Maciej Szelag | Creative websites | Websites for small and medium-sized companies and more. </title>
    <meta name="description"
        content="Looking for web design, printing, SEO, and sign agency? ransforming ideas into stunning digital experiences, our Plymouth-based web developer and designer crafts visually captivating websites tailored to your unique needs.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500&display=swap"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Vina+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        integrity="sha512-Avb2QiuDEEvB4bZJYdft2mNjVShBftLdPG8FJ0V7irTLQ8Uo0qcPxh4Plq7G5tGm0rU+1SPhVotteLpBERwTkw=="
        crossorigin="anonymous" referrerpolicy="no-referrer">
    <link rel="stylesheet" href="css/style.min.css">
</head>
<?php

if (isset($_SERVER["REQUEST_METHOD"]) == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['subject'];

    // Adres e-mail odbiorcy
    $to = "webby.maciej@gmail.com";

    // Temat wiadomości
    $subject = "Nowa wiadomość od $name";

    // Treść wiadomości
    $body = "Wiadomość od: $name\nEmail: $email\nTreść wiadomości:\n$message";

    // Nagłówki wiadomości
    $headers = "From: $email";

    // Wysłanie wiadomości e-mail
    if (mail($to, $subject, $body, $headers)) {
        ?>
<section class="alert ">
    <div class="alert_content success">
        <p>Thank you, your email has been sent. I will contact you within 24 hours maximum.</p>
        <a href="/">Go Back</a>
    </div>
</section>

<?php
} else {
        ?>
<section class="alert ">
    <div class="alert_content wrong">
        <p>Something went wrong. Try again.</p>
        <a href="/">Go Back</a>
    </div>
</section>
<?php
}
}

?>



</body>

</html>