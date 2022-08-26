

function dados(){
    var $nome = document.getElementById("nome").value;
    var $end = document.getElementById("end").value;
    var $email = document.getElementById("email").value;
    var $tel = document.getElementById("tel").value;
    var $num = document.getElementById("num").value;
    var $bar = document.getElementById("bairro").value;
    var $cid = document.getElementById("cid").value;
    var $uf = document.getElementById("uf").value;
    var clientes = {
        nome : $nome,
        end : $end,
        email : $email,
        tel: $tel,
        num: $num,
        bar: $bar,
        cid: $cid,
        uf: $uf

    }


    alert("O(a) cliente " + clientes.nome + "  mora em  " + clientes.cid + ", " + clientes.uf)
}



function impares(){
  var $num1 = document.querySelector("#num1").value;
  var $num2 = document.querySelector("#num2").value;  


  if($num1 < $num2){
    while($num1 < $num2){
        if($num1%2 != 0){
            alert($num1)
        }
        $num1++
    }
    
  }else if($num1 > $num2){
    while($num1 > $num2){
        if($num2%2 != 0){
            alert($num2)
        }
        $num2++
    }

 }else{
    alert('numeros iguais')
 }
}


function nivel(){
    var anos = document.querySelector("#anos").value
    if(anos>0 && anos<=2){
        alert("Nivel Junior")
    }else if(anos>=3 && anos<=5){
        alert("Nivel Pleno")
    }else{
        alert("Nível Senior")
    }
}