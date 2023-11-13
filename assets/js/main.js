
  /* função para rolar a pagina atraves do menu inicial*/
  var doc = ('html, body');
     ('.menu-item').click(function() {
        $doc.animate({
            scrollTop:$($.attr(this,'href')).offset().top
        }, 500);        
        return false;
    });
/* função para rolar a pagina atraves do menu inicial*/
