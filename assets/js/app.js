  // ---------------------------------------->
// <------------------ Disabled Context Menu

document.addEventListener("contextmenu", function(riyad){
  riyad.preventDefault();
});

document.onkeydown = function (e){
  if(event.keyCode == 123){
    return false;
  }

  if(e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)){
    return false;
  }

  if(e.ctrlKey && e.keyCode == "C".charCodeAt(0)){
    return false;
  }

  if(e.ctrlKey && e.keyCode == "V".charCodeAt(0)){
    return false;
  }

  if(e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)){
    return false;
  }
  
  if(e.ctrlKey && e.keyCode == "U".charCodeAt(0)){
    return false;
  }
}

// --------------------------------------------------->
// <--------------------------------- Sticky Header Nav

const header = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
});

// --------------------------------------------------->
// <-------------------------------- Goto Button Active

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "flex";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#ff900e ${scrollValue}%, #ff8f0e8a ${scrollValue}%)`;
  };
  
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;

  
  //  Counter Up Active
  $(".number-counter").counterUp({
    delay: 10,
    time: 3000,
  });