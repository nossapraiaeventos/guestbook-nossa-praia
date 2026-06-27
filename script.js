const whatsappNumber = "5521993677487";
const text = encodeURIComponent("Olá! Quero deixar um recado em vídeo/áudio para o evento pelo Guestbook Digital da Nossa Praia Eventos.");
document.getElementById("whatsappBtn").href = `https://wa.me/${whatsappNumber}?text=${text}`;

document.getElementById("guestbookForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();
  const media = document.getElementById("media").files[0];

  const guestbookData = {
    name,
    message,
    mediaName: media ? media.name : null,
    mediaType: media ? media.type : null,
    createdAt: new Date().toISOString()
  };

  console.log("Recado enviado:", guestbookData);

  document.getElementById("guestbookForm").classList.add("hidden");
  document.getElementById("success").classList.remove("hidden");
});
