function searchPic() {
	let clientId = "59ujHmV6Wy_DwMR2HkxkLLPO-pT6DyMkXvEYDeBqtks";
	let query = document.getElementById("search").value; 
	let url = "https://api.unsplash.com/search/photos?client_id=" + clientId + "&query=wildlife " + query;

  //request
  fetch(url)
   .then(function(data){
   	return data.json();
   })
   .then(function (data) {
   		console.log(data);

   		data.results.forEach(photo =>{
			let result = `
   		 	<img src="${photo.urls.regular}">
   		 	<a href="${photo.links.download}">
   		 `;
   		 $("#result").append(result);
   		 
   	}); 
   });
}


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

