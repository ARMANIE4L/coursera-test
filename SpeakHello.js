( (window) => {
let helloSpeaker = {}
const speakWord = "Hello";
helloSpeaker.speak = (name) => {
  console.log(speakWord + " " + name);
}
  window.helloSpeaker = helloSpeaker
})(window);
