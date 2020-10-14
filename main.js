
let cube = document.querySelectorAll('.cube');
let currentClass = 'show-front';
let changeSide = (i) => {
  switch (currentClass) { // using switch in lieu of else/if as when a switch contains more than five tables, it's implemented using lookp table or hashlist. meaning, all ites get the same access time.
    case 'show-front':
      cube[i].classList.remove(currentClass);
      cube[i].classList.add('show-left');
      currentClass = 'show-left';
      break;
    case 'show-back':
      cube[i].classList.remove(currentClass);
      cube[i].classList.add('show-right');
      currentClass = 'show-right';
      break;
    case 'show-left':
      cube[i].classList.remove(currentClass);
      cube[i].classList.add('show-top');
      currentClass = 'show-top';
      break;
    case 'show-right':
      cube[i].classList.remove(currentClass);
      cube[i].classList.add('show-bottom');
      currentClass = 'show-bottom';
      break;
    case 'show-top':
      cube[i].classList.remove(currentClass);
      cube[i].classList.add('show-back');
      currentClass = 'show-back';
      break;
    case 'show-bottom':
      cube[i].classList.remove(currentClass);
      cube[i].classList.add('show-front');
      currentClass = 'show-front';
      break;
  }
}
//USE EVENT DELEGATION
let size = cube.length;
for(let i=0; i<size; i++) {
  cube[i].addEventListener( 'mouseenter', function () {changeSide(i)});
}