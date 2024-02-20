  document.addEventListener("DOMContentLoaded", function () {
    // Function to smoothly scroll to the target section
    function scrollToSection(targetId) {
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    }

    // Event listeners for each navigation link
    document.querySelectorAll(".link").forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        scrollToSection(targetId);
      });
    });
  });

