window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
  var menuToggle = document.querySelector(".toggle");
  menuToggle.classList.toggle("active");

  var menu = document.querySelector(".head-menu");
  menu.classList.toggle("active");
}
///////////////////////////////////////////////Contact Form//////////////////////////////////////////// 

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("contactForm").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent page reload

      emailjs.init("xPRzXoIvKA4MmKaOZ"); // Replace with your EmailJS Public Key

      let params = {
          from_name: document.getElementById("name").value,
          from_email: document.getElementById("email").value,
          message: document.getElementById("message").value
      };

      emailjs.send("service_41gt9jr", "template_n69bwpl", params)
          .then(function (response) {
              Swal.fire({
                  title: "Message Sent!",
                  text: "Your message has been sent successfully!",
                  icon: "success",
                  confirmButtonText: "OK",
                  confirmButtonColor: "#6a0dad", // Purple button color
                  background: "#2c003e", // Dark purple background
                  color: "#fff" // White text
              });

              document.getElementById("contactForm").reset(); // Clear form after submission
          }, function (error) {
              Swal.fire({
                  title: "Error!",
                  text: "Failed to send message!",
                  icon: "error",
                  confirmButtonText: "Try Again",
                  confirmButtonColor: "#6a0dad",
                  background: "#2c003e",
                  color: "#fff"
              });

              console.error("EmailJS Error:", error);
          });
  });
});


