(function (window) {
const names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (let i = 0; i < names.length; i++) { 
  let firstLetter = names[i].charAt(0).toLowerCase()
  if (firstLetter === 'J' || firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
  window.firstLetter = firstLetter
}
})(window)