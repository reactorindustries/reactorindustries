var sloganList = ["ayo where'd the slogan go?", "Stupid Software Solutions™", "we make bugs 🐛", "dafk.net/what", "I □ Unicode", "curb your enthusiasm", "made with TempleOS (not)", "we slightly know what we're doing", "Stack Overflow is our therapist", "we're not geniuses, but we're the closest you'll get for this price"];
var randomSlogan = sloganList[Math.floor(Math.random()*9)]
function randomizeSlogan(){
  document.getElementById("slogan").innerHTML = randomSlogan;
}

document.onload = randomizeSlogan()
