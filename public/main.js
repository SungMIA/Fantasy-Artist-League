let container = document.querySelector('.container');
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

async function loadCover() {
  let req = await axios({
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + btoa(('cabfb3a7a5674d6caf828301b83073a2:8ff57e3fa6824df4855758bd5fb7e249'))
    },
    data: (serialize({
      grant_type : 'client_credentials'
    }))
  })
  let token = req.data.access_token
  let request = await axios({
    method: 'get',
    url: 'https://api.spotify.com/v1/browse/new-releases?country=US&limit=6',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token
    }
  })
  for(let i=0; i<6; i++) {
    let album = request.data.albums.items[i]
    let cover = album.images[0].url
    let artists = album.artists
    let length = artists.length
    let title = album.name
    let a = ""
    for(let j=0; j<length; j++) {
      if(j+1 >= length) {
        a += artists[j].name
      } else {
        a += artists[j].name+"+"
      }
    }
    involved[i] = a
    titles[i] = title
    console.log(album)
    console.log(a)
    console.log(title)
    recentCovers[i] = cover; 
    switch(i) {
      case (i=0):
        $('.cube__face--front').css('background-image', 'url('+cover+')')
        $('.cube__face--front').css('background-size', 'cover')
      case (i=1):
        $('.cube__face--right').css('background-image', 'url('+cover+')')
        $('.cube__face--right').css('background-size', 'cover')
      case (i=2):
        $('.cube__face--back').css('background-image', 'url('+cover+')')
        $('.cube__face--back').css('background-size', 'cover')
      case (i=3):
        $('.cube__face--left').css('background-image', 'url('+cover+')')
        $('.cube__face--left').css('background-size', 'cover')
      case (i=4):
        $('.cube__face--top').css('background-image', 'url('+cover+')')
        $('.cube__face--top').css('background-size', 'cover')
      case (i=5):
        $('.cube__face--bottom').css('background-image', 'url('+cover+')')
        $('.cube__face--bottom').css('background-size', 'cover')
    }
  }
}

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


async function retrieveCubes() {
  // axios method to retrieve random song data, retrieve 50
  for(let i=1; i<=25; i++) {
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

  $(cube).append(f1, f2, f3, f4, f5, f6)
  $(cube).css("display", "grid")
  let gridRow = 0
  let gridColumn = 0
  switch(i) {
    case (i<=5):
      gridRow = 1
      gridColumn = i
    case ((i>5) && (i<=10)):
      gridRow = 2
      gridColumn = i % 5
    case ((i>10) && (i<=15)):
      gridRow = 3
      gridColumn = i % 5
    case ((i>15) && (i<=20)):
      gridRow = 4
      gridColumn = i % 5
    case ((i>20) && (i<=25)):
      gridRow = 5
      gridColumn = i % 5
  }
  $(cube).css("grid-column" ,gridColumn)
  $(cube).css("grid-row",gridRow) 
  // $(f1).css('background-image', recentCovers[0])
  return cube
}

const loadPage = async function() {
  let container = $('.container')
  container.empty()
  retrieveCubes();
}

$(function() {
  loadCover();
  loadPage();
  getToken();
})