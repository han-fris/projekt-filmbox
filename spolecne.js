const tlacitkoElement = document.querySelector('#menu-tlacitko');
const changePolozky = () => {
  const polozkyElement = document.querySelector('#menu-polozky');
  polozkyElement.classList.toggle('show');

  const iElement = document.querySelector('.fas');
  if (polozkyElement.classList.contains('show')) {
    iElement.classList.remove('fa-bars');
    iElement.classList.add('fa-xmark');
  } else {
    iElement.classList.remove('fa-xmark');
    iElement.classList.add('fa-bars');
  }
};

tlacitkoElement.addEventListener('click', changePolozky);
