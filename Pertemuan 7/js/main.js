$(document).ready(function () {
$("#ContactForm").submit(function (e) {
e.preventDefault();

let name = $("#name").val().trim();
let email = $("#email").val().trim();
let message = $("#message").val().trim();

if (name === "") {
$(".message_box").html("<span style='color:red;'>Enter your name!</span>");
return;
}
if (email === "") {
$(".message_box").html("<span style='color:red;'>Enter your email!</span>");
return;
}
if (!validateEmail(email)) {
$(".message_box").html("<span style='color:red;'>Invalid email!</span>");
return;
}
if (message === "") {
$(".message_box").html("<span style='color:red;'>Enter your message!</span>");
return;
}

$.ajax({
type: "POST",
url: "ajax.php",
data: { name: name, email: email, message: message },
beforeSend: function () {
$(".message_box").html("<p>Sending...</p>");
},
success: function (response) {
$(".message_box").html(response);
$("#ContactForm")[0].reset();
}
});
});
});

function validateEmail(email) {
let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return pattern.test(email);
}