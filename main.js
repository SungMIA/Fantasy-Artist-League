
let container = document.querySelector('.container');
// let currentClass = 'show-front';
let changeSide = (cube) => {
  let currentClass = (cube.classList).toString().substring(5);
  switch (currentClass) { // using switch in lieu of else/if as when a switch contains more than five tables, it's implemented using lookp table or hashlist. meaning, all ites get the same access time.
    default:
      cube.classList.add('show-back');
      break;
    case 'show-front':
      cube.classList.remove(currentClass);
      cube.classList.add('show-left');
      currentClass = 'show-left';
      break;
    case 'show-back':
      cube.classList.remove(currentClass);
      cube.classList.add('show-right');
      currentClass = 'show-right';
      break;
    case 'show-left':
      cube.classList.remove(currentClass);
      cube.classList.add('show-top');
      currentClass = 'show-top';
      break;
    case 'show-right':
      cube.classList.remove(currentClass);
      cube.classList.add('show-bottom');
      currentClass = 'show-bottom';
      break;
    case 'show-top':
      cube.classList.remove(currentClass);
      cube.classList.add('show-back');
      currentClass = 'show-back';
      break;
    case 'show-bottom':
      cube.classList.remove(currentClass);
      cube.classList.add('show-front');
      currentClass = 'show-front';
      break;
  }
}
//USE EVENT DELEGATION
// let size = cube.length;
// for(let i=0; i<size; i++) {
//   cube[i].addEventListener( 'mouseenter', function () {changeSide(i)});
// }
// Event Delegation Implementation:
container.addEventListener('mouseenter', event => {
  let basicClass = event.target.className.substring(0, 4);
  if(basicClass === 'cube') {
    let cube = event.target;
    changeSide(cube);
  }
}, true)