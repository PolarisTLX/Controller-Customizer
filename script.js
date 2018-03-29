// const logos = document.getElementsByClassName("logo-caption");
// document.body.style.backgroundImage = 'url("media/images/dark-transparent-background.png"), url("media/images/PS4-background.jpg")';
// console.log(document.body.style.backgroundImage);
const logos = document.querySelectorAll('.logo-caption');
const logoColor = document.querySelectorAll('.logo');
// this for the logo that sits on top of the sticker
const stickerLogo = document.querySelector('#sticker-logos');
// console.log(stickerLogo);
//console.log(logos);
//console.log(logos[0]);

const highlight = document.createElement('span');
const footer = document.querySelector('.footer');

highlight.classList.add('highlight');

// document.body.append(highlight);
footer.append(highlight);


function highlightLink() {
  const footerCoords = footer.getBoundingClientRect();
  const linkCoords = this.getBoundingClientRect();

  highlight.style.width = `${linkCoords.width+10}px`;
  highlight.style.height = `${linkCoords.height+10}px`;

  // compensate for if window has been scrolled
  highlight.style.left = `${linkCoords.left-5 + window.scrollX}px`;
  highlight.style.top = `${linkCoords.top-5 - footerCoords.top + window.scrollY}px`;
  highlight.style.display = `block`;
}


// THIS FUNCTION CHANGES THE STICKER LOGO AND THE BACKGROUND IMAGE
function grabElementId() {
  // childNode[1] is used because the img is the second child inside the p element of class 'logo-caption'
  let logoId = this.childNodes[1].id;
  let game = logoId.slice(0,(logoId.length - 5));

  // sticker.src = `media/images/sticker-${game}-blue.png`;
  let current_background = document.body.style.backgroundImage.split(",");
  current_background[current_background.length-1] = `url('media/images/${game}-background.jpg')`;
  document.body.style.backgroundImage = current_background.join(",");
// this for the logo that sits on top of the sticker
  stickerLogo.src = `media/images/${game}-logo.png`;
  stickerLogo.style.visibility = "visible";
  sticker.style.visibility = "visible";
}

const colors = document.querySelectorAll('.colors');

// THIS FUNCTION CHANGES THE COLOR OF THE LOGOS, THE STICKER LOGOS & THE BACKGROUND GRADIENT
function changeColor() {
  let color = this.id;

  let current_background = document.body.style.backgroundImage.split(",");

  if (current_background.length > 2) {
    current_background[0] = `url('media/images/${color}-transparent-background.png')`;
  } else {
    current_background.unshift(`url('media/images/${color}-transparent-background.png')`);
  }

  document.body.style.backgroundImage = current_background.join(",");

  let hue_degree;
  switch (color) {
    case "pink":
      hue_degree = 70;
      break;
    case "blue":
      hue_degree = 0;
      break;
    case "red":
      hue_degree = 130;
      break;
    case "green":
      hue_degree = 280;
      break;
    // default:
  }
  // stickerLogo.style.-webkit-filter = ` hue-rotate(${hue-degree}deg)`;
  stickerLogo.style.webkitFilter = `hue-rotate(${hue_degree}deg)`;
  logoColor.forEach(element => element.style.webkitFilter = `hue-rotate(${hue_degree}deg)`);
  controller.style.webkitFilter = `hue-rotate(${hue_degree}deg)`;
}

colors.forEach(event => event.addEventListener('click', changeColor));


// when mouse moves over each element in "logos"
logos.forEach(event => event.addEventListener('mouseenter', highlightLink));
// this changes background and sticker when user clicks on any of the logos (or captions)
logos.forEach(event => event.addEventListener('click', grabElementId));
