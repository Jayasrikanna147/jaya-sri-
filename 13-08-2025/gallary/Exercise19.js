// Array of image file paths
const images = [
    "gallaryimages/img1.jpg",
    "gallaryimages/img2.jpg",
    "gallaryimages/img3.jpg",
    "gallaryimages/img4.jpg",
    "gallaryimages/img5.jpg",
    "gallaryimages/img6.jpg",
    "gallaryimages/img7.jpg",
    "gallaryimages/img8.jpg",
    "gallaryimages/img9.jpg",
    "gallaryimages/img10.jpg"
  ];
  
  let currentIndex = 0;
  
  const gallaryImage = document.getElementById("gallaryImage");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  
  // Show image at given index
  function showImage(index) {
    gallaryImage.src = images[index];
  }
  
  // Show first image on page load
  showImage(currentIndex);
  
  // Next button click
  nextBtn.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    showImage(currentIndex);
  });
  
  // Prev button click
  prevBtn.addEventListener("click", function () {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    showImage(currentIndex);
  });
  