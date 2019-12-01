function Control() {
    setInterval(function (){
        if(!localStorage.getItem("Timer")) timer = 0
        else var timer = parseInt(localStorage.getItem("Timer"));
        timer+= 1;
        localStorage.removeItem("Timer");
        localStorage.setItem("Timer", timer);
        for(var i = 1; i <= 6; i++) {
            var time = parseInt(localStorage.getItem("PCTime" + i));
            var time = time - 1;
            if(time == 0) {
                var id = "PC" + i;
                var botao = document.getElementById(id);
                botao.disabled = false;
                botao.innerHTML = "Ocupar"
                botao.classList.remove("btn-danger");
                botao.classList.add("btn-primary");
                var info = "infocd" + i;
                var information = document.getElementById(info);
                var newtime = timetransform(time);
                information.innerHTML = "Situação: Disponivel";
                localStorage.setItem("PCOcup" + i, "0");
            }
            localStorage.setItem("PCTime" + i, time);
            if(localStorage.getItem("PCOcup" + i) == "1") {
                var info = "infocd" + i;
                var information = document.getElementById(info);
                var newtime = timetransform(time);
                information.innerHTML = "Situação: Ocupado  Tempo: " + newtime;
            }
        }
    }, 1000);
    
}

function timetransform(s){
    function duas_casas(numero){
      if (numero <= 9){
        numero = "0"+numero;
      }
      return numero;
    }
    hora = duas_casas(Math.round(s/3600));
    minuto = duas_casas(Math.floor((s%3600)/60));
    segundo = duas_casas((s%3600)%60);
    formatado = hora+":"+minuto+":"+segundo;
    return formatado;
  }