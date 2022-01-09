function play() {
   document.getElementById("audio").play();
  }

function pause() {
   document.getElementById("audio").pause();
}

var state = {
   musicPlaying: false,
   firstClick: false,
   videos: [{        
      url: "media/NOT  Who Do I Trust Official Audio.mp3",
      title: "Who Do I trust $NOT"
      }]
}

document.getElementById("audio").src = state.videos[Math.floor(Math.random() * state.videos.length)].url


function musicSwitcher() {
   document.querySelector('.stateSwitch').addEventListener('click', stateSwitch)

   function stateSwitch() {
       if (state.musicPlaying) {
           state.musicPlaying = false;
           document.querySelector('.pause').style.display = 'none';
           document.querySelector('.play').style.display = 'inline-block';
           pause();
       } else {
           state.musicPlaying = true;
           document.querySelector('.play').style.display = 'none';
           document.querySelector('.pause').style.display = 'inline-block';
           play();
       }
   }
}

function firstClick() {
   if (!state.firstClick) {
       state.firstClick = true;
       init();
   };
};

function init(){
   document.querySelector('.play').style.display = 'none';
   document.querySelector('.pause').style.display = 'inline-block';
   state.musicPlaying = true;
   musicSwitcher();
}
document.addEventListener('click', firstClick);