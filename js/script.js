// Luas Persegi Page
document.getElementById("btn_luas_persegi").addEventListener("click", function(){
    
    document.getElementById("content-head-h1").innerHTML = "Luas Persegi";
    
    document.getElementById("desc-title").innerHTML = "Rumus Luas Persegi Yaitu";

    document.getElementById("desc-formula").innerHTML = "L = S X S";

    document.getElementById("desc-l").innerHTML = "L = Luas";

    document.getElementById("desc-s").innerHTML = "S = Sisi";
    
    document.getElementById("content-2-h1").innerHTML = "Luas";

    var result = document.getElementById("result");

    var inputs = document.getElementById("inputs");
    
    result.value = "Hasil";

    inputs.value = "";
    
    var luas = true;

    document.getElementById("btn-action-ht").addEventListener("click", function(){
        
        var inputs = parseInt(document.getElementById("inputs").value);
        
        if(luas == true){
        
            if(inputs === ""){
                
                document.getElementById("result").value = "";
            
            }
        
            var result = inputs * inputs;
        
            document.getElementById("result").value = result;
        }
    })
})

// Keliling Persegi Page
document.getElementById("btn_keliling_persegi").addEventListener("click", function(){
    
    document.getElementById("content-head-h1").innerHTML = "Keliling Persegi";
    
    document.getElementById("desc-title").innerHTML = "Rumus Keliling Persegi Yaitu";

    document.getElementById("desc-formula").innerHTML = "K = 4 x S";

    document.getElementById("desc-l").innerHTML = "K = Keliling";

    document.getElementById("desc-s").innerHTML = "S = Sisi";
    
    document.getElementById("content-2-h1").innerHTML = "Keliling";

    var result = document.getElementById("result");

    var inputs = document.getElementById("inputs");
    
    result.value = "Hasil";

    inputs.value = "";
    
    var keliling = true;

    document.getElementById("btn-action-ht").addEventListener("click", function(){
        
        var inputs = parseInt(document.getElementById("inputs").value);
        
        if(keliling == true){
        
            if(inputs === ""){
            
                document.getElementById("result").value = "";
        
            }
        
            var result = 4 * inputs;
        
            document.getElementById("result").value = result;
        }
    })
})

// form input reset
document.getElementById("btn-action-rt").addEventListener("click", function(){
    
    var result = document.getElementById("result");

    var inputs = document.getElementById("inputs");
    
    result.value = "Hasil";

    inputs.value = "";
    
})




