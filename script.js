var sloganList = ["ayo where'd the slogan go?", "Stupid Software Solutions™", "we make bugs 🐛", "dafk.net/what", "I □ Unicode", "curb your enthusiasm", "made with TempleOS (not)", "we slightly know what we're doing", "Stack Overflow is our therapist", "we're not geniuses, but we're the closest you'll get for this price"];
var randomSecret;
var randomSlogan;
var cheatedSecret = {cheater: false};
function randomizeSlogan(){
  randomSlogan = sloganList[Math.floor(Math.random() * 9)];
  randomSecret = Math.floor(Math.random() * 99);
  document.getElementById("slogan").innerHTML = randomSlogan;
  if(randomSecret == 69){
    cheatedSecret.cheater = false;
    window.location.href = "secret.html";
  }else{
    cheatedSecret.cheater = true;
  }
}
document.onload = randomizeSlogan();