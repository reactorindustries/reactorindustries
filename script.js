var sloganList = ["ayo where'd the slogan go?", "Stupid Software Solutions™", "we make bugs 🐛", "dafk.net/what", "I □ Unicode", "curb your enthusiasm", "made with TempleOS (not)", "we slightly know what we're doing", "Stack Overflow is our therapist", "we're not geniuses, but we're the closest you'll get for this price"];
var randomSecret;
var randomSlogan;
function randomizeSlogan(){
  randomSlogan = sloganList[Math.floor(Math.random() * 9)]
  randomSecret = sloganList[Math.floor(Math.random() * 99)]
  document.getElementById("slogan").innerHTML = randomSlogan;
  if(randomSecret == 69){
    window.location.href = "secret.html";
  }
}
<<<<<<< HEAD

function backToPage(){
    window.location.href = "index.html";
}


=======
>>>>>>> 9f8007188f50d04c24931fb8272c002c9bd41b64
document.onload = randomizeSlogan()
