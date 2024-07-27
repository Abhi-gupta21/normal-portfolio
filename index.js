function joke(){
    $.get("https://v2.jokeapi.dev/joke/Programming?type=single", 
        function(result){
            if(result.length==0) return;
            console.log("From jokeapi: "+JSON.stringify(result));
            $(".response").html("A programming joke of the minute:  <br>" + '<i>' + result.joke + '</i>');
        }
    );
}
joke()
setInterval(joke,60000);