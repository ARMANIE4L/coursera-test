(function (window) {
 let helloSpeaker = {}
 const speakWord = 'Hello'
 helloSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
 }
 window.helloSpeaker = helloSpeaker
})(window)
