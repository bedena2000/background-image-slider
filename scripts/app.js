// Get Pictures
const pictureCollection = document.querySelectorAll(".slider-item");
// Convert to Array
const arrayPictures = Array.from(pictureCollection);
// Get Number of Pictures
const numberOfPictures = arrayPictures.length;
// Get Picture Container
const pictureContainer = document.querySelector(".slider-container");
// Get buttons
const buttonLeft = document.querySelector(".slider-buttons-left");
const buttonRight = document.querySelector(".slider-buttons-right");

buttonLeft.addEventListener('click', (event) => {
  const style = getComputedStyle(pictureContainer);
  const stylePixels = style.left;
  if(stylePixels !== '0px') {
    let style = getComputedStyle(pictureContainer);
    let stylePixels = style.left;
    let slicePixels = stylePixels.split('px'); 
    let numberOfPixels = Number(slicePixels[0]);
    if(numberOfPixels === 0 || numberOfPixels % -1380 >= 0) {
      numberOfPixels += 1380;
      let finalVersion = `${numberOfPixels}px`;
      pictureContainer.style.left = finalVersion;
    }
  }
});

buttonRight.addEventListener('click', (event) => {
  const style = getComputedStyle(pictureContainer);
  const stylePixels = style.left;
  if(stylePixels !== `-${(numberOfPictures - 1) * 1380}px`) {
    let style = getComputedStyle(pictureContainer);
    let stylePixels = style.left;
    let slicePixels = stylePixels.split('px'); 
    let numberOfPixels = Number(slicePixels[0]);
    if(numberOfPixels === 0 || numberOfPixels % -1380 >= 0) {
      numberOfPixels -= 1380;
      let finalVersion = `${numberOfPixels}px`;
      pictureContainer.style.left = finalVersion;
    }
  }
});