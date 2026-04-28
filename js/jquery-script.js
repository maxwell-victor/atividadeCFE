//efeito de esconder formulário de cadastro
$(document).ready(function() {
  $("#bt-cadastrar").click(function() {
    $("#form-cadastrar").slideToggle("slow");
    $("#section-login").slideToggle("slow");
    $("#bt-cadastrar").hide();
  });
});
