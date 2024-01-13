document.addEventListener('DOMContentLoaded', function () {
  const newDiv = document.createElement('myDiv');
  newDiv.id = 'myDiv';

  document.body.appendChild(newDiv);
  console.log(newDiv);

  const newP = document.createElement('p');
  newP.textContent = 'lorem epsum';
  document.body.appendChild(newP);
  console.log(newP);
});
