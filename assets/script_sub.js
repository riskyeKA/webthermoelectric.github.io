var iter = -100;
setInterval(function(){
	if(iter!=0){
		slide = document.getElementById('slide');
		slide.style = "margin-left:"+iter+"%;transition: 3s linear;";

		if(iter==-600){
			iter=0;
		} else {
			iter=iter+-100;
		}
		return iter;
	} else {
		slide = document.getElementById('slide');
		slide.style = "margin-left:"+iter+"%;";

		if(iter==-600){
			iter=0;
		} else {
			iter=iter+-100;
		}
		return iter;
	}
}, 2000);