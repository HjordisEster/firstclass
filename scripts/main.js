const room = new DivPicture("img/room2.jpg");
room.mynd.style.width ="1850px";

const fireplace = new ImgPicture("img/fireplace.png");
fireplace.mynd.style.position = "absolute";
fireplace.mynd.style.top = "590px";
fireplace.mynd.style.left = "713px";

const chair = new ImgPicture("img/stoll.png");
chair.mynd.style.height = "40%";
chair.mynd.style.position = "absolute";
chair.mynd.style.top = "732px";
chair.mynd.style.left = "997px";

const table = new ImgPicture("img/table2.png");
table.mynd.style.position = "absolute";
table.mynd.style.top = "777px";
table.mynd.style.left = "668px";
table.mynd.style.height = "70%";

const radio = new ImgPicture("img/radio.png")
radio.mynd.style.position = "absolute";
radio.mynd.style.top = "800px";
radio.mynd.style.left = "800px";
radio.mynd.style.height = "20%";

const clock = new ImgPicture("img/clock.png")
clock.mynd.style.position = "absolute";
clock.mynd.style.top = "356px";
clock.mynd.style.left = "574px";
clock.mynd.style.height = "40%";

const lion = new ImgPicture("img/lion.png")
lion.mynd.style.position = "absolute";
lion.mynd.style.top = "334px";
lion.mynd.style.left = "863px";
lion.mynd.style.height = "40%";

const cat = new ImgPicture("img/cat.png")
cat.mynd.style.position = "absolute";
cat.mynd.style.top = "634px";
cat.mynd.style.left = "863px";
cat.mynd.style.height = "40%";

chair.mynd.addEventListener("click", function(){
  loadDogSound("chair.mp3");

  chair.play();
  chair.delaySound(2.0);
  chair.play();
});

table.mynd.addEventListener("click", function(){
  loadDogSound("table.mp3");
});

fireplace.mynd.addEventListener("click", function(){
  loadDogSound("fireplace.mp3");
});
clock.mynd.addEventListener("click", function(){
  loadDogSound("clock.wav");
});
lion.mynd.addEventListener("click", function(){
  loadDogSound("lion.mp3");
});
radio.mynd.addEventListener("click", function(){
  loadDogSound("radio.wav");
});