
$(document).ready(function(){
    
    clouds();

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
        arr[i].vel = Math.floor((Math.random() * 5) + 1);
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
        }, 500);
        
    }
    setInterval(transition, 500);

    

}

