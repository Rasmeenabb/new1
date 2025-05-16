// script.js

// Form toggle logic
function toggleForm(formType) {
  const signInForm = document.getElementById("signin-form");
  const signUpForm = document.getElementById("signup-form");

  if (formType === 'signup') {
    signInForm.classList.add("hidden");
    signUpForm.classList.remove("hidden");
  } else {
    signInForm.classList.remove("hidden");
    signUpForm.classList.add("hidden");
  }
}

// Video upload preview
document.addEventListener("DOMContentLoaded", () => {
  const videoInput = document.getElementById("videoInput");
  const videoPreview = document.getElementById("videoPreview");

  if (videoInput && videoPreview) {
    videoInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const url = URL.createObjectURL(file);
        videoPreview.src = url;
        videoPreview.style.display = "block";
      }
    });
  }
});
