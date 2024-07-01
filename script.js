var opacity = 0.1

function makeGrid(num) {
    for (let i = 0; i < num; i++) {
        var container = document.createElement('div');
        container.classList.add("container");
        container.style.height = 800/num + "px";

        for (let j=0; j < num; j++){
            let item = document.createElement('div');
            item.classList.add("item");
            container.appendChild(item);
        }

        document.body.appendChild(container);
    }  
}
function randomColor(){
    return Math.floor(Math.random()*255)
}

function checkMouseOver(){
    let items = document.querySelectorAll(".item");
    items.forEach(function(elem) {
        elem.addEventListener("mouseover", function() {
            if (!elem.classList.contains("clicked")){
                elem.style.opacity = opacity;
                opacity += 0.1;
                elem.style.backgroundColor= `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
                elem.classList.add('clicked')

            }
            
        });
    });
}

let button = document.getElementById('button');
button.addEventListener("click", ()=>{
    document.querySelectorAll(".container").forEach(e => e.remove());
    var response = prompt("How many squares per side? 100 is maximum")
    try {
        
        if (Number(response) == NaN){
            throw new TypeError;
        };
        if (response>100){
            throw new TypeError;
        };
        try {
            var response = Number(response);
            makeGrid(response)
            checkMouseOver();
            
        }
        catch {

        }
    }
    catch {
        alert('your response is invalid');
    }
})


