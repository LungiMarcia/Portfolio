document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const submitButton = document.getElementById("submitBtn");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    submitButton.innerHTML = "Sending...";
    submitButton.disabled = true;

    const formData = new FormData(contactForm);

    fetch("https://formspree.io/f/mzybnyago", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        submitButton.innerHTML = "Submit";
        submitButton.disabled = false;
        contactForm.reset();
        window.location.href = "thankyou.html"; // Redirect to thank you page
      })
      .catch((error) => {
        console.error("Error:", error);
        submitButton.innerHTML = "Submit";
        submitButton.disabled = false;
      });
  });
});
