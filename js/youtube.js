// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  new YT.Player('player', {     //html 부분에 id를 player로 지정해서 인수를 player로 해줘야함 
    videoId: 'EJF919p_hb0',        // 유튜브 ID
    playerVars: {     // 객체 데이터 할당
      autoplay : true,            // 자동재생 
      loop : true,              //반복 on
      playlist: 'EJF919p_hb0'         // 반복 재생할 유튜브 영상 ID목록
    },
    events: {           // 객체 데이터 할당
      onReady: function (event ) {    
        event.target.mute()     // 음소거
      }
    }
  });
};