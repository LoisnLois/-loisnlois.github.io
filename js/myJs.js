function display(li) {
	var subnavi = li.getElementsByTagName("ul")[0];
	subnavi.style.visibility = "visible";
	subnavi.className ='lightUp';
}

function hide(li){
	var subnavi = li.getElementsByTagName("ul")[0];
	subnavi.style.visibility = "hidden";
	subnavi.className = 'fadeAway';
}

function menuFix() { 
	var hideEls = document.getElementById("head-navi").getElementsByTagName("li");

	for (var i=0; i<hideEls.length; i++) { 
		var hidelis = hideEls[i].getElementsByTagName("li");
		for (var j=0; j<hidelis.length; j++) {
			hidelis[j].onmouseover = function() { 
				this.style.background = "#7CB447"; 
		 	}
		}		
	} 

	for (var i=0; i<hideEls.length; i++) { 
		var hidelis = hideEls[i].getElementsByTagName("li");
		for (var j=0; j<hidelis.length; j++) {
			hidelis[j].onmouseout = function() { 
				this.style.background = "black"; 
		 	}
		}		
	} 
}

