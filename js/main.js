(function(){
		var a=document.getElementsByClassName("cube");
		for(var i=0;i<a.length;i++){
			a[i].onmouseenter=function(e){
				a[1][i]=true;
				if(e.offsetX<5){
					e.target.children[1].style.animation="rotateInLeft 300ms";
				}else if(e.offsetX>e.currentTarget.offsetWidth-5){
					e.target.children[1].style.animation="rotateInRight 300ms";
				}else if(e.offsetY<5){
					e.target.children[1].style.animation="rotateInUp 300ms";
				}else if(e.offsetY>e.currentTarget.offsetHeight-5){
					e.target.children[1].style.animation="rotateInDown 300ms";
				}else{
					e.target.children[1].style.animation="zoomIn 300ms";
				}
				e.target.children[1].style.display="block";
			}
			a[i].onmouseleave=function(e){
				a[1][i]=false;
				if(e.offsetX<5){
					e.target.children[1].style.animation="rotateOutLeft 300ms";
				}else if(e.offsetX>e.currentTarget.offsetWidth-5){
					e.target.children[1].style.animation="rotateOutRight 300ms";
				}else if(e.offsetY<5){
					e.target.children[1].style.animation="rotateOutUp 300ms";
				}else if(e.offsetY>e.currentTarget.offsetHeight-5){
					e.target.children[1].style.animation="rotateOutDown 300ms";
				}
			}
			a[i].children[1].addEventListener("webkitAnimationEnd",function(eve){
				if(eve.animationName.indexOf("rotateOut")!=-1)
					eve.target.style.display="none";
			})
		}
	})();
	$(function(){
            $('.carousel').carousel();
        // $("#mybutton").button("toggle");
        // $("#mybutton").button("reset");
        
    });