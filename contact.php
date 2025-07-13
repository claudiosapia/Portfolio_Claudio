<!DOCTYPE html>
 <html> 
    <head> 
        <link rel="stylesheet" href="./styles/style.css">
         <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous" />
         </head> <body> <main class="contact-main"><div class=" text-center contact-cont  w-100 h-100">
            
<?php if(isset($_POST['submit'])) { $name = $_POST['name']; $email = $_POST['email']; $message = $_POST['message'];

if(empty($name) || empty($email) || empty($message)) {
    header("Location: contact.html?error=Please fill in all fields"); 
} else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header("Location: contact.html?error=Please enter a valid email");
} else {
    $to = "ccoding0@gmail.com";
    $subject = "Contact form submitted by $name";
    $body = "$name ($email) sent you this message: \n$message";
    $headers = "From: $email";

    if(mail($to, $subject, $body, $headers)) {
        echo "<p class='contact-msg'>Thank you for submitting your message!</p>";
    } else {
        echo "<p class='contact-msg'>Sorry, there was a problem submitting your message. Please try again.</p>";
    }
}
}
?>

 <div class=" d-flex justify-content-center align-items-center text-center"> <button type="button" id="backButton" onclick="window.location.href='index.html'">Return to Homepage</button>
</div>
</div> </main> 
    <footer class="contact-footer text-white">
      <div class="container align-items-center text-center">
        <div class="row">
          <div class="col-12">
            <p class="mt-3 mb-4 pb-4">
              &copy; 2023 Claudio Sapia. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <div class="container align-items-center text-center">
        <div class="row align-items-center">
          <div class="col-6">
            <a
              target="_blank"
              href="https://facebook.com/claudio.sapia98">
              <span class="i-hover">
                <i class="fab fa-2x fa-facebook"></i>
              </span>
            </a>
          </div>
          <div class="col-6">
            <a
              target="_blank"
              href="https://linkedin.com/in/claudio-sapia">
              <span class="i-hover">
                <i class="fab fa-2x fab fa-linkedin-in"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>

</body> </html>