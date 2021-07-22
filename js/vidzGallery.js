"use strict";

/*
   Author: Felicito Rustique Jr.
   Date:   12 Juy 2021
   Filename: graphixGallery.js
*/

window.addEventListener("load", switchVid);

var vidShown = document.getElementById("vidShown");

function switchVid () {	
	document.getElementById("vidzThumb_1").onclick = function(){
		var iframeGraffoolery = document.getElementById("iframeGraffoolery");
		if(iframeGraffoolery){
			iframeGraffoolery.remove();
		}
		vidShown.style.height = "315px";
		vidShown.src = "Vidz/STISL_BlastOff.mp4";
	}
	
	document.getElementById("vidzThumb_2").onclick = function(){
		var iframeGraffoolery = document.getElementById("iframeGraffoolery");
		if(iframeGraffoolery){
			iframeGraffoolery.remove();
		}
		vidShown.style.height = "315px";
		vidShown.src = "Vidz/STISL_GIJoeReplica.mp4";
	}
	
	document.getElementById("vidzThumb_3").onclick = function(){
		var iframeGraffoolery = document.getElementById("iframeGraffoolery");
		if(iframeGraffoolery){
			iframeGraffoolery.remove();
		}
		vidShown.style.height = "315px";
		vidShown.src = "Vidz/STISL_Glitcher.mp4";
	}
	
	document.getElementById("vidzThumb_4").onclick = function(){
		var iframeGraffoolery = document.getElementById("iframeGraffoolery");
		if(iframeGraffoolery){
			iframeGraffoolery.remove();
		}
		vidShown.style.height = "315px";
		vidShown.src = "Vidz/STISL_Terminate.mp4";
	}
	document.getElementById("vidzThumb_5").onclick = function(){
		var iframeGraffoolery = document.getElementById("iframeGraffoolery");
		if(iframeGraffoolery){
			iframeGraffoolery.remove();
		}
		vidShown.style.height = "315px";
		vidShown.src = "Vidz/STISL_Waves.mp4";
	}
	
	document.getElementById("vidzThumb_6").onclick = function(){
		var iframeGraffoolery = document.getElementById("iframeGraffoolery");
		if(!iframeGraffoolery){
			vidShown.style.height = "0px";
			var vidzDisplay = document.getElementById("vidzDisplay");
			var iframeVid = document.createElement("iframe");
			iframeVid.setAttribute("id", "iframeGraffoolery");
			iframeVid.setAttribute("width", "600px");
			iframeVid.setAttribute("height", "315px");
			iframeVid.setAttribute("src", "https://www.youtube.com/embed/videoseries?list=PLLTJQKCxJsKuuj1PX-m6eH_Hq3n3lo6x1");
			iframeVid.setAttribute("title", "YouTube video player");
			iframeVid.setAttribute("frameborder", "0");
			iframeVid.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
			vidzDisplay.appendChild(iframeVid);
		}//close out if condition
	}
}//close switchVid

/*CREATE EMBEDDED STYLE SHEET RULES FOR THUMBNAILS & LARGE IMAGE:
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
//END EMBEDDED STYLE SHEET*/
