// CONFIGURAÇÃO BÁSICA
// Troque pelo WhatsApp da Nossa Praia Eventos com DDI/DD: 55 + DDD + número
const whatsappNumber = "5521993677487";

// Texto padrão que vai abrir no WhatsApp
const defaultWhatsappMessage = encodeURIComponent(
  "Olá! Quero deixar um recado em vídeo/áudio para o evento."
);

document.getElementById("whatsappBtn").href =
  `https://wa.me/${whatsappNumber}?text=${defaultWhatsappMessage}`;

document.getElementById("guestbookForm").addEventListener("submit", async function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();
  const media = document.getElementById("media").files[0];

  // Nesta primeira versão, ainda não estamos salvando em banco.
  // Aqui entra a integração com Supabase/Firebase/servidor.
  console.log({
    name,
    message,
    mediaName: media ? media.name : null,
    mediaType: media ? media.type : null
  });

  document.getElementById("guestbookForm").classList.add("hidden");
  document.getElementById("success").classList.remove("hidden");
});
