
$(document).ready(function(){
    
    clouds();
    session();
    window.onresize = resize;

});


function resize()
{
    
    session()


}

function session(){
    var w = window.innerWidth;
    var h = window.innerHeight;
    var iniW = document.getElementById('inisec').offsetWidth;
    var iniH = document.getElementById('inisec').offsetHeight;
    var obj = document.getElementById('inisec');
    obj.style.top = (h/2) - (iniH/2)      + "px";
    obj.style.left =  (w/2) - (iniW/2)  + "px";
    
}

function clouds(){

    var container = document.getElementById('cloud-container');
    var arr = [{
        posx:0,
        posy:0,
        vel:0
    }];

    var containerW = document.getElementById('main-info').offsetWidth;
    var containerH = document.getElementById('main-info').clientHeight;
    //console.log(containerW);
    for(var i = 0; i< 5; i++ ){ 
        arr[i] = {
            posx:0,
            posy:0,
            vel:0
        };
        $( "#cloud-container" ).append('<img class="cloudy" src="img/cloud.png" alt="">');
        arr[i].posx= Math.floor((Math.random() * containerH/2) + 1);
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
function login(){
    var name = document.getElementById('nombreUS').value;
    var contra = document.getElementById('contraUS').value;
    
    if( name == "" || contra =="" ){
       
        var er = document.getElementById('alerta1');
        er.style.display =  "block";
        setTimeout(function(){ 
            er.style.display =  "none";
        }, 3000);

    }else{
        var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1cp_5XFXu6_Uxkq-yDIjytSXvDGWAxRo2XSPtZgNIIKY/edit?usp=sharing');
        query.setQuery('SELECT * where F = "'+name+'" AND G = '+contra+'');
        query.send(handleQueryResponse);
    }
    
}



function handleQueryResponse(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    
    var data = response.getDataTable();
    //console.log(data)
    if(data.Nf.length>0){
        window.location = "perfil.html?nombre="+ data.Nf[0].c[0].v +"";
    }else{
        var er = document.getElementById('alerta1');
        er.style.display =  "block";
        setTimeout(function(){ 
            er.style.display =  "none";
        }, 3000);
    }
    
    
}
