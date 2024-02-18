var quotes = [
    {'quote' : "Resentment is like drinking poison and waiting for your enemies to die." ,
    'auther': "--Nelson Mandela"
},
    {'quote' : "The best revenge is massive success." ,
    'auther': "--Frank Sinatra"
},
    {'quote' : "It's not what happens to you, but how you react to it that matters.",
    'auther': "--Epictetus"
},
    {'quote' : "Do not take life too seriously. You will not get out alive." ,
    'auther': "--Elbert Hubbard"
},
    {'quote' : "You miss 100% of the shots you don't take." ,
    'auther': "--Wayne Gretzy"
}
    ]

function viewQuotes(){
        var nums =Math.floor( Math.random()*quotes.length)
        console.log(nums);
        document.getElementById("quote").innerHTML=quotes[nums].quote;
        document.getElementById("auther").innerHTML=quotes[nums].auther;
    }
    




















// var cartona = ""

// function help(){
//     document.getElementById('par1').innerHTML = cartona
// }
 
// if(cartona == ""){
//     var cartona =[ "The best revenge is massive success." , "--Frank Sinatra"]
// }else{
//    var cartona = "You miss 100% of the shots you don't take."
// }

