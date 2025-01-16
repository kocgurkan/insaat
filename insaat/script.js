function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  }
  
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.");
  });
  