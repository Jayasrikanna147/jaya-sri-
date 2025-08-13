const images = [
     images17/
            img1.jpg,
            img2.jpg,
            img3.jpg,
            img4.jpg,
            img5.jpg,
            img6.jpg,
            img7.jpg,
            img8.jpg,
            img9.jpg,
            img10.jpg
    
  ];
  
  let currentIndex = 0;
  
  const galleryImage = document.getElementById("galleryImage");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  
  function showImage(index) {
    galleryImage.src = images[index];
  }
  
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });
  
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });
  
  // Show the first image on page load
  showImage(currentIndex);
  