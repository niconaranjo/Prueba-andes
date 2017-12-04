
$(document).ready(function(){
    
    clouds();
    progressB();

});


function clouds(){
    var container = document.getElementById('cloud-container');
    var arr = [{
        posx:0,
        posy:0,
        vel:0
    }];

    var containerW = document.getElementById('main-info').offsetWidth;
    var containerH = document.getElementById('main-info').clientHeight;
    console.log(containerW);
    for(var i = 0; i< 5; i++ ){ 
        arr[i] = {
            posx:0,
            posy:0,
            vel:0
        };
        $( "#cloud-container" ).append('<img class="cloudy" src="img/cloud.png" alt="">');
        arr[i].posx= Math.floor((Math.random() * containerH) + 1);
        arr[i].posy = Math.floor((Math.random() * containerW) + 1);
        arr[i].vel = Math.floor((Math.random() * 10) + 1);
    }
    

    var cloudy = document.getElementsByClassName("cloudy");
    for(var i = 0; i< cloudy.length; i++ ){
        
            
            cloudy.item(i).style.top =  arr[i].posx + "px";
            cloudy.item(i).style.left =  arr[i].posy + "px";
        
        
    }
    
    function transition() {    
        setTimeout(function(){ 
            for(var i = 0; i< cloudy.length; i++ ){
                
                arr[i].posy = arr[i].posy - arr[i].vel;
                if( arr[i].posy  <  -200 ){
                    arr[i].posy =  containerW ;
                }
                cloudy.item(i).style.left =  arr[i].posy + "px";
                
            }    
        }, 0);
        
    }
    setInterval(transition, 380);


}

google.load('visualization', '1', {
    packages: ['table']
});
var visualization;

function drawVisualization() {
    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1cp_5XFXu6_Uxkq-yDIjytSXvDGWAxRo2XSPtZgNIIKY/edit?usp=sharing');
    query.setQuery('SELECT * where F = "Nicolas" AND G = 1234');
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    console.clear();
    var data = response.getDataTable();
    console.log(data)
    console.log(data.Nf[0].c[0].v)
    setSession(data.Nf[0].c[0].v, data.Nf[0].c[1].v, data.Nf[0].c[2].v, data.Nf[0].c[3].v);
   
    var valuef = 13325;
    var valn = data.Nf[0].c[4].v;
    var prog = (valn*100)/ valuef;
    
    var container = document.getElementById('progressB');
    var puntos = document.getElementById('puntos');
    var rest = document.getElementById('rest');

    puntos.innerHTML = valn;
    rest.innerHTML = valuef - valn;
    container.style.width =  prog + "%";
    function transition() {    
        valn = valn + 5;
        puntos.innerHTML = valn;
        prog = (valn*100)/ valuef;
        container.style.width =  prog + "%";
        
        rest.innerHTML = valuef - valn;
    }
    setInterval(transition, 5000);
    
}
google.setOnLoadCallback(drawVisualization);

function setSession(nombreS, apellidoS, correoS, facultadS){

    var nombre = document.getElementById('nombre');
    nombre.innerHTML = nombreS + " " + apellidoS ;
    
    var correo = document.getElementById('correo');
    correo.innerHTML = correoS;
    
    var facultad = document.getElementById('facultad');
    facultad.innerHTML = facultadS;
 
}