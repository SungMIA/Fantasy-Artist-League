let container = document.querySelector('.container')
let recentCovers = []
let token = ""
let involved = []
let titles = []
// let currentClass = 'show-front';

const serialize = function(obj) {
  var str = [];
  for (var p in obj) {
      if (obj.hasOwnProperty(p)) {
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
  }
  return str.join("&");
}

// async function getToken() {
  
//   console.log(request.data.access_token)
// }
let songs;
container.addEventListener('click', event => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      firebase.firestore().collection("users").doc(user.uid).get().then(function(doc) {
          if(doc.exists) {
              songs = doc.data().songs
              console.log(songs)
          }
          let z = 0;
          function length(){
            z = (Object.keys(songs).length)/2
          } 
          function wut(){
            if(z > 6) {
              z = 6
              ;
            }
          }
          $.when(length()).then(wut())
          
          console.log(z)
          for(let i=0; i<z; i++) {
              let album = songs;
              let x = i + "i"
              let cover = album[x]
              // let artists = album[i]
              // let length = artists.length
              let title = album[i]
              console.log(cover)
              console.log(title)
              let a = ""
              titles[i] = title
              recentCovers[i] = cover; 
              switch(i) {
                default:
                  break;
                case (i=0):
                  $('.cube__face--front').css('background-image', 'url('+cover+')')
                  $('.cube__face--front').css('background-size', 'cover')
                  $('.cube__face--front').append('<div>'+title+'<br>'+a+'</div>')
                  $('.cube__face--front').css('line-height', '1.5vw')
                  $('.cube__face--front').css('font-size', '0.7vw')
                  $('.cube__face--front').css('text-align', 'center')
                  $('.cube__face--front').css('padding-top', '2vw')
                  $('.cube__face--front').css('text-shadow', '-.05vw 0 black, 0 .05vw black, .05vw 0 black, 0 -0.05vw black')
                  break;
                case (i=1):
                  $('.cube__face--right').css('background-image', 'url('+cover+')')
                  $('.cube__face--right').css('background-size', 'cover')
                  $('.cube__face--right').append('<div>'+title+'<br>'+a+'</div>')
                  $('.cube__face--right').css('line-height', '2vw')
                  $('.cube__face--right').css('font-size', '0.7vw')
                  $('.cube__face--right').css('text-align', 'center')
                  $('.cube__face--right').css('padding-top', '2.5vw')
                  $('.cube__face--right').css('text-shadow', '-.05vw 0 black, 0 .05vw black, .05vw 0 black, 0 -0.05vw black')
                  break;
                case (i=2):
                  $('.cube__face--back').css('background-image', 'url('+cover+')')
                  $('.cube__face--back').css('background-size', 'cover')
                  $('.cube__face--back').append('<div>'+title+'<br>'+a+'</div>')
                  $('.cube__face--back').css('line-height', '2vw')
                  $('.cube__face--back').css('font-size', '0.7vw')
                  $('.cube__face--back').css('text-align', 'center')
                  $('.cube__face--back').css('padding-top', '2.5vw')
                  $('.cube__face--back').css('text-shadow', '-.05vw 0 black, 0 .05vw black, .05vw 0 black, 0 -0.05vw black')
                  break;
                case (i=3):
                  $('.cube__face--left').css('background-image', 'url('+cover+')')
                  $('.cube__face--left').css('background-size', 'cover')
                  $('.cube__face--left').append('<div>'+title+'<br>'+a+'</div>')
                  $('.cube__face--left').css('line-height', '2vw')
                  $('.cube__face--left').css('font-size', '0.7vw')
                  $('.cube__face--left').css('text-align', 'center')
                  $('.cube__face--left').css('padding-top', '2.5vw')
                  $('.cube__face--left').css('text-shadow', '-.05vw 0 black, 0 .05vw black, .05vw 0 black, 0 -0.05vw black')
                  break;
                case (i=4):
                  $('.cube__face--top').css('background-image', 'url('+cover+')')
                  $('.cube__face--top').css('background-size', 'cover')
                  $('.cube__face--top').append('<div>'+title+'<br>'+a+'</div>')
                  $('.cube__face--top').css('line-height', '2vw')
                  $('.cube__face--top').css('font-size', '0.7vw')
                  $('.cube__face--top').css('text-align', 'center')
                  $('.cube__face--top').css('padding-top', '2.5vw')
                  $('.cube__face--top').css('text-shadow', '-.05vw 0 black, 0 .05vw black, .05vw 0 black, 0 -0.05vw black')
                  break;
                case (i=5):
                  $('.cube__face--bottom').css('background-image', 'url('+cover+')')
                  $('.cube__face--bottom').css('background-size', 'cover')
                  $('.cube__face--bottom').append('<div>'+title+'<br>'+a+'</div>')
                  $('.cube__face--bottom').css('line-height', '2vw')
                  $('.cube__face--bottom').css('font-size', '0.7vw')
                  $('.cube__face--bottom').css('text-align', 'center')
                  $('.cube__face--bottom').css('padding-top', '2.5vw')
                  $('.cube__face--bottom').css('text-shadow', '-.05vw 0 black, 0 .05vw black, .05vw 0 black, 0 -0.05vw black')
                  break;
              }
          }
      });
  }
  })
  // window.location('current.html')
}, {once: true});
// let songs;
// async function loadCover() {
//   let user = firebase.auth().currentUser
//   console.log(user)
    
// };


    

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
  let id = event.target.id
  let cube = event.target;
  // console.log(id)
  // console.log(basicClass)
  if((basicClass === "cube")) {
    changeSide(cube);
  } 
//   else {
//     setTimeout(function (){
//     console.log("here");
//     changeSide(cube);
//     }, 1500);
//   };
}, true);


async function retrieveCubes() {
  // axios method to retrieve random song data, retrieve 50
  for(let i=1; i<=13; i++) {
    let cube = $('.container').append(cubeInterface(i))
  }
}


const cubeInterface = function(i) {
  let cube = $('<div class="cube" id="c'+i+'">')
  let f1 = $('<div class="cube__face cube__face--front"></div>')
  let f2 = $('<div class="cube__face cube__face--back"></div>')
  let f3 = $('<div class="cube__face cube__face--right"></div>')
  let f4 = $('<div class="cube__face cube__face--left"></div>')
  let f5 = $('<div class="cube__face cube__face--top"></div>')
  let f6 = $('<div class="cube__face cube__face--bottom"> </div>')
  // let na1 = $('<div class=titles>'+involved[0]+'</div>')
  // let na2 = $('<div class=titles>'+titles[0]+'</div>')
  // let nb1 = $('<div class=titles>'+involved[1]+'</div>')
  // let nb2 = $('<div class=titles>'+titles[1]+'</div>')
  // let nc1 = $('<div class=titles>'+involved[2]+'</div>')
  // let nc2 = $('<div class=titles>'+titles[2]+'</div>')
  // let nd1 = $('<div class=titles>'+involved[3]+'</div>')
  // let nd2 = $('<div class=titles>'+titles[3]+'</div>')
  // let ne1 = $('<div class=titles>'+involved[4]+'</div>')
  // let ne2 = $('<div class=titles>'+titles[4]+'</div>')
  // let nf1 = $('<div class=titles>'+involved[5]+'</div>')
  // let nf2 = $('<div class=titles>'+titles[5]+'</div>')
  // $(f1).append(na1,na2)
  // $(f2).append(nb1,nb2)
  // $(f3).append(nc1,nc2)
  // $(f4).append(nd1,nd2)
  // $(f5).append(ne1,ne2)
  // $(f6).append(nf1,nf2)
  let mf1 = $('<div onclick="openPage("signup.html")" class="cube__face cube__face--front"></div>');
  if(i == 7) {
    $(cube).append(mf1, f2, f3, f4, f5, f6)
  } else {
    $(cube).append(f1, f2, f3, f4, f5, f6)
  }
   let gridRow = 0
  let gridColumn = 0
  switch(i) {
    case(i=1):
      gridRow = 1;
      gridColumn = 3;
      break;
    case(i=2): case(i=3): case(i=4):  
      gridRow = 2;
      gridColumn = i;
      break;
    case(i=5): case(i=6): case(i=7): case(i=8): case(i=9):   
      gridRow = 3;
      gridColumn = i-4;
      break;
    case(i=10): case(i=11): case(i=12):  
      gridRow = 4;
      gridColumn = i-8;
      break;
    case(i=13):
      gridRow = 5;
      gridColumn = 3;
      break;
  };
  // console.log(gridRow)
  // console.log(gridColumn)
  $(cube).css("display", "grid")
  $(cube).css("grid-column", gridColumn)
  $(cube).css("grid-row", gridRow) 
  // $(f1).css('background-image', recentCovers[0])
  return cube
}


const loadPage = async function() {
  let container = $('.container')
  container.empty()
  retrieveCubes();
}

$(function() {
  // $.when(loadCover()).then(loadPage())
  loadPage()
  $('.container').append('<h4>Click a square to see your songs</h4>')
  $('#c7 .cube__face--front').append("<a href='signup.html'>Create New Account</a>");
  $('#c7 .cube__face--back').append("<a href='top.html'>USA Top 50</a>");
  $('#c7 .cube__face--left').append("<a href='current.html'>My Songs</a>");
  $('#c7 .cube__face--right').append("<a href='index.html'>New Releases</a>");
  $('#c7 .cube__face--top').append("<a href='login.html'>Log In</a>");
});