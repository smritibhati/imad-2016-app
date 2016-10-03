var button= document.getElementById('counter');
var counter = 0;

button.onClick = function() {

    var request = new XMLHttpRequest();
    
    request.onreadystatechange= function(){
        
        if (request.readyState === XMLHttpRequest.DONE){
            if( request.status === 200 ){
                counter = counter + 1;
                var span = document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
    };
    request.open('GET','http://smritibhati.imad.hasura-app.io/counter',true);
    request.send(null);
};

