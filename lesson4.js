document.body.style.backgroundColor ="red";
document.body.style.fontFamily ="sans-serif";
document.querySelector("h1").style.backgroundColor = "blue";
document.getElementById("nickname").innerHTML = "Xira";
document.getElementById("favorites").innerHTML = "Travelling, staring at the sky, documentaries";
document.getElementById("hometown").innerHTML = "Born in Utah, raised in North Dakota, a child of the world.";

var list = document.querySelectorAll("li");

for (i = 0; i < list.length; i++) {
    list[i].className = "listitem";
}


var mylist = document.querySelectorAll(".listitem");
//Note: Gotta remember the "." to identify that a class is being selected. Derp.
for (var i = 0; i < mylist.length; i++) {
	mylist[i].style.color = "red";
}

var Xira = document.createElement("img");
Xira.src = "http://i1376.photobucket.com/albums/ah17/Xiralynn/DezPic_zpsgpuqjvvt.jpg";
document.querySelector("body").appendChild(Xira);
