"use strict";

/*
   Author: Felicito Rustique Jr.
   Date:   12 Juy 2021
   Filename: graphixGallery.js
*/

window.addEventListener("load", setGallery);

function setGallery(){
//CREATE FIRST LARGE IMG ELEMENT TO INSERT INTO GRAPHIXDISPLAY:
	var largeImg = document.createElement("img");
	largeImg.setAttribute("id", "largeImg");
	largeImg.setAttribute("src", "Graphix/graphixLarge_1.jpg");
	largeImg.setAttribute("alt", "graphixLarge_1.jpg");
	document.getElementById("graphixDisplay").appendChild(largeImg);
//END CREATE FIRST LARGE IMG ELEMENT TO INSERT INTO GRAPHIXDISPLAY
	
//CREATE 6 THUMBNAILS FOR GRAPHIXTHUMBBOX W/ CORRESPONDING LARGE VERSIONS
//ONCLICK EVENT WILL GET MATCHING LARGE VERSION OF IMG TO SWAP INTO GRAPHIXDISPLAY:
	for (var i = 1; i < 19; i++) {
    var thumbBoxImg = document.createElement("img");
	thumbBoxImg.setAttribute("id", "thumbnail_" + i);
	thumbBoxImg.setAttribute("class", "thumbnails");
    thumbBoxImg.setAttribute("src", "Graphix/graphixThumb_" + i + ".jpg");
    thumbBoxImg.setAttribute("alt", "Graphix/graphixLarge_" + i + ".jpg");
	document.getElementById("graphixThumbBox").appendChild(thumbBoxImg);
    thumbBoxImg.onclick = function(e) {
		largeImg.src = e.target.alt;
		largeImg.alt = e.target.alt;
    };//close out anonymous function
    document.getElementById("graphixDisplay").appendChild(largeImg);
	}//close out for loop
//END CREATE 6 THUMBNAILS

//CREATE EMBEDDED STYLE SHEET RULES FOR THUMBNAILS & LARGE IMAGE:
	var thumbsStyle = document.createElement("style");
	document.head.appendChild(thumbsStyle); //add to head
	// Add style rules to the embedded style sheet. -1 indicates the first embedded style element
	document.styleSheets[document.styleSheets.length-1].insertRule( 
		".thumbnails { \
			display: inline-block; \
			max-width: 100px; \
			padding: 2px; \
			cursor: pointer}", 0); //0 represents the first set of rules	

	document.styleSheets[document.styleSheets.length-1].insertRule( 
		"div#graphixThumbBox img:hover { \
			outline: 1px solid red; \
			opacity: 0.50}", 1); //1 represents the second set of rules	

	document.styleSheets[document.styleSheets.length-1].insertRule(
		"#largeImg { \
			position: absolute; \
			top: 0px; \
			left: 0px; \
			max-width: 600px; \
			margin: 0px; \
			padding; 0px}", 2);
//END EMBEDDED STYLE SHEET
	
} //close out setGallery function