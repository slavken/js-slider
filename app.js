const slider = document.querySelector('#slider');
const items = slider.querySelectorAll('.slider-item');

const nextButton = document.querySelector('#next');
const previousButton = document.querySelector('#previous');

items.forEach(item => item.hidden = true);
slider.firstElementChild.hidden = false;

nextButton.addEventListener('click', next);
previousButton.addEventListener('click', previous);

function next() {
  const active = slider.querySelector('.active');
  active.classList.toggle('active');
  active.hidden = true;

  const nextElement = active.nextElementSibling;
  if (nextElement) {
    nextElement.classList.toggle('active');
    nextElement.hidden = false;
  } else {
    const nextElement = slider.firstElementChild;
    nextElement.classList.toggle('active');
    nextElement.hidden = false;
  }
}

function previous() {
  const active = slider.querySelector('.active');
  active.classList.toggle('active');
  active.hidden = true;

  const nextElement = active.previousElementSibling;
  if (nextElement) {
    nextElement.classList.toggle('active');
    nextElement.hidden = false;
  } else {
    const nextElement = slider.lastElementChild;
    nextElement.classList.toggle('active');
    nextElement.hidden = false;
  }
}