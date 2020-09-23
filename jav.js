  function disp() {
    document.querySelector("#ezaz").style.display = "block";
  }
   
  function disp0() {
    document.querySelector("#ezaz").style.display = "none";
  }

  function fnc(x){
    x.style.backgroundColor = "black";
  }

  function fnc0(x){
    x.style.backgroundColor = "white";
  }

  function class1(){
    document.querySelectorAll(".cla1")[1].style.removeProperty("display");
    document.querySelectorAll(".cla1")[0].style.removeProperty("display");
    document.querySelectorAll(".cla2")[1].style.display ="none";
    document.querySelectorAll(".cla2")[0].style.display ="none";
  }

function class2(){
    document.querySelectorAll(".cla2")[0].style.removeProperty("display");
    document.querySelectorAll(".cla2")[1].style.removeProperty("display");
    document.querySelectorAll(".cla1")[0].style.display ="none";
    document.querySelectorAll(".cla1")[1].style.display ="none";
  }