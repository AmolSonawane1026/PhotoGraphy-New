// navbar js
const menuToggle= document.querySelector(".menu-bars");
const nav = document.querySelector("nav ul");


menuToggle.addEventListener("click", () => {
  nav.classList.toggle("slide");
  });


  // wedding gallery js
  $(document).ready(function(){
    $("img").click(function(){
    var t = $(this).attr("src");
    $(".modal-body").html("<img src='"+t+"' class='modal-img'>");
    $("#myModal").modal();
  });
  
  $("video").click(function(){
    var v = $("video > source");
    var t = v.attr("src");
    $(".modal-body").html("<video class='model-vid' controls><source src='"+t+"' type='video/mp4'></source></video>");
    $("#myModal").modal();  
  });
  });//EOF Document.ready


  // contact js
  document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });
