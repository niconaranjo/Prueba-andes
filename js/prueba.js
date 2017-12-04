

function balanza_der(){
    var der = document.getElementById('inp_der').value;
    
    var nizq = 100 - der;
    $('#inp_izq').val(nizq)

    

}

function balanza_izq(){
    var izq = document.getElementById('inp_izq').value;    
    var nder = 100 - izq;
    $('#inp_der').val(nder);
}

function balanza(izq, der){
    var Objder = document.getElementById('inp_der');
    var Objizq = document.getElementById('inp_izq');    
}