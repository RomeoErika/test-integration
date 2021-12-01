window.onload = () =>{
    var splide = new Splide( '.splide', {
        type   : 'loop',
        perPage: 4,
        focus  : 'center',
      } );
      
    splide.mount();
	const navButton = document.querySelector("#navigation-menu");
	const navigation = document.querySelector(".navigation-list-right");
	navButton.addEventListener("click",function () {
		navigation.classList.toggle("show");
	})
    this.addEventListener('scroll',()=>{
        navigation.classList.remove("show");
    })
}