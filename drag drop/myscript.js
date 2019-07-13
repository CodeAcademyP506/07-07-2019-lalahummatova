var flags = [
    { az: ["blue", "red", "green"] },
    { tr: ["red", "red", "red"] },
    { austria: ["red", "white", "red"] },
    { rus: ["white", "blue", "red"] },
    { ger: ["black", "red", "yellow"] },
    { argentina: ["blue", "white", "blue"] },

]




var bars = document.getElementsByClassName("bar")
for (let i = 0; i < bars.length; i++) {

}
var colors = document.getElementsByClassName("color");

for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener("dragstart", myDragStart)
}

var dropZones = document.querySelectorAll(".right div");

for (let i = 0; i < dropZones.length; i++) {
    dropZones[i].addEventListener("dragenter", myDragEnter);
    dropZones[i].addEventListener("dragleave", myDragleave);
    dropZones[i].addEventListener("dragover", myDragOver);
    dropZones[i].addEventListener("drop", myDragDrop)
}

function myDragEnter(e) {
    e.preventDefault()
}

function myDragleave(e) {
    e.preventDefault()
}

function myDragOver(e) {
    e.preventDefault()
}


function myDragStart(e) {
    e.dataTransfer.setData("c", e.target.style.backgroundColor);
}

function myDragDrop(e) {
    e.target.style.backgroundColor = e.dataTransfer.getData("c")

   

    if (bars[0].style.backgroundColor == flags[0].az[0] && bars[1].style.backgroundColor == flags[0].az[1] && bars[2].style.backgroundColor == flags[0].az[2]) {
        $(".left").append(" 1.Tebrikler siz Azerbaycan bayragini duzeltdiniz<br/>").css({ "color": "red"
    })
        $("#aze").css("text-decoration", "line-through")
       
    }

   
    if (bars[0].style.backgroundColor == flags[1].tr[0] && bars[1].style.backgroundColor == flags[1].tr[1] && bars[2].style.backgroundColor == flags[1].tr[2]) {
        $(".left").append(" 2.Tebrikler Siz Turkiye bayragini duzeltdiniz<br/>").css({ "color": "pink"
    })
        $("#tr").css("text-decoration", "line-through")
    }
    if (bars[0].style.backgroundColor == flags[2].austria[0] && bars[1].style.backgroundColor == flags[2].austria[1] && bars[2].style.backgroundColor == flags[2].austria[2]) {
        $(".left").append(" 3.Tebrikler Siz Austria bayragini duzeltdiniz<br/>").css({ "color": "purple"
    })
        $("#au").css("text-decoration", "line-through")
    }

    if (bars[0].style.backgroundColor == flags[3].rus[0] && bars[1].style.backgroundColor == flags[3].rus[1] && bars[2].style.backgroundColor == flags[3].rus[2]) {
        $(".left").append("4.Tebrikler Siz Rusiya bayragini duzeltdiniz<br/>").css({ "color": "blue"
    })
        $("#ru").css("text-decoration", "line-through")
    }
    if (bars[0].style.backgroundColor == flags[4].ger[0] && bars[1].style.backgroundColor == flags[4].ger[1] && bars[2].style.backgroundColor == flags[4].ger[2]) {
        $(".left").append("5.Tebrikler Siz Almaniya bayragini duzeltdiniz</br>").css({ "color": "red"
    })
        $("#ger").css("text-decoration", "line-through")
    }
    if (bars[0].style.backgroundColor == flags[5].argentina[0] && bars[1].style.backgroundColor == flags[5].argentina[1] && bars[2].style.backgroundColor == flags[5].argentina[2]) {
       
        $(".left").append("6.Tebrikler Siz Argentina bayragini duzeltdiniz").css({ "color": "red"
         })
       
        $("#arg").css("text-decoration", "line-through")
    }
    if(document.getElementById("aze").style.textDecoration=='line-through'&&document.getElementById("tr").style.textDecoration=='line-through'&&document.getElementById("au").style.textDecoration=='line-through'&&document.getElementById("ru").style.textDecoration=='line-through'&&document.getElementById("ger").style.textDecoration=='line-through'&&document.getElementById("arg").style.textDecoration=='line-through'){
        var img = document.createElement("img");
        img.src = "14-Congratulation-Card-Designs.jpg";
        img.style.width="100%"
        var src = document.getElementById("myAll")
        src.appendChild(img);
        document.getElementById("myAll").style.visibility = "visible";
        document.getElementById("myLeft").style.visibility="hidden";
        document.getElementById("myRight").style.visibility="hidden";
        document.getElementById("countries").style.visibility="hidden";
    }

  



}
($("p")[0]).click(function(){
    alert("hello world")
})