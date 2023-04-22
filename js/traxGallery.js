"use strict";

/*
   Author: Felicito Rustique Jr.
   Date:   12 Juy 2021
   Filename: graphixGallery.js
*/

window.addEventListener("load", setGallery, changePlaylist);

function setGallery(){
	
//CREATE 5 THUMBNAILS FOR GRAPHIXTHUMBBOX W/ CORRESPONDING LARGE VERSIONS:
//ONCLICK EVENT WILL GET MATCHING LARGE VERSION OF THUMBNAIL:
	for (var i = 1; i < 6; i++){
    var thumbBoxImg = document.createElement("img");
	thumbBoxImg.setAttribute("id", "thumb_" + i);
	thumbBoxImg.setAttribute("class", "thumbnails");
	thumbBoxImg.setAttribute("onclick", "changePlaylist()");
    thumbBoxImg.setAttribute("src", "Graphix/trax200px_" + i + ".jpg");
    thumbBoxImg.setAttribute("alt", "Graphix/trax600px_" + i + ".jpg");
	document.getElementById("traxThumbBox").appendChild(thumbBoxImg);
	}//close out for loop
	/*thumbBoxImg.onclick = function(e){
		largeTrax.src = e.target.alt;
		largeTrax.alt = e.target.alt;
    document.getElementById("traxDisplay").appendChild(largeTrax);
	};//close out anonymous function*/
//END CREATE 5 THUMBNAILS

//CREATE EMBEDDED STYLE SHEET RULES FOR THUMBNAILS & LARGE IMAGE:
	var thumbsStyle = document.createElement("style");
	document.head.appendChild(thumbsStyle); //add to head
	// Add style rules to the embedded style sheet. -1 indicates the first embedded style element
	document.styleSheets[document.styleSheets.length-1].insertRule( 
		".thumbnails { \
			display: inline-block; \
			padding: 0px; \
			cursor: pointer}", 0); //0 represents the first set of rules	

	document.styleSheets[document.styleSheets.length-1].insertRule( 
		"div#traxThumbBox img:hover { \
			opacity: 0.50}", 1); //1 represents the second set of rules	

	document.styleSheets[document.styleSheets.length-1].insertRule(
		"#largeTrax { \
			position: absolute; \
			top: 0px; \
			left: 0px; \
			max-width: 600px; \
			margin: 0px; \
			padding: 0px}", 2);
//END EMBEDDED STYLE SHEET

} //close out setGallery function

function changePlaylist () {
	document.getElementById("thumb_1").onclick = function(){
		document.getElementById("styslPlaylist").src = "https://open.spotify.com/embed/album/6Ye9D0dujpJGDagHxt4CPr?utm_source=generator";
	}
	document.getElementById("thumb_2").onclick = function(){
		document.getElementById("styslPlaylist").src = "https://open.spotify.com/embed/album/1lCvuHW3xJSJk5Z5WrLZ6e?utm_source=generator";
	}
	document.getElementById("thumb_3").onclick = function(){
		document.getElementById("styslPlaylist").src = "https://open.spotify.com/embed/album/4rEAYutUQ3bLEC43GwUAki?utm_source=generator";
	}
	document.getElementById("thumb_4").onclick = function(){
		document.getElementById("styslPlaylist").src = "https://open.spotify.com/embed/album/2VEapn7W063ykvXxbgf4kR?utm_source=generator";
	}
	document.getElementById("thumb_5").onclick = function(){
		document.getElementById("styslPlaylist").src = "https://open.spotify.com/embed/album/56KnZxVHthJW0jTvJb87Os?utm_source=generator";
	}
	//document.getElementById("thumb_6").onclick = function(){
	//	document.getElementById("styslPlaylist").src = "";
	//}
}//close changePlaylist