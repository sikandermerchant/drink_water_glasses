const smallCups = document.querySelectorAll('.cup-small');
const litres = document.getElementById('litres');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

smallCups.forEach((cup, index) => {
  cup.addEventListener('click', () => highlightCups(index))
});

const highlightCups = (index) => {
  if(smallCups[index].classList.contains('full') && !smallCups[index].nextElementSibling.classList.contains('full')){
    index--
  }
  smallCups.forEach( (cup, idx)=> {
    if(idx <= index){
      cup.classList.add('full');
    }else{
      cup.classList.remove('full');
    }
  });
}
