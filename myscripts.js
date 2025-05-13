document.addEventListener('DOMContentLoaded', () =>{

   function getGreetings(){
      const time = new Date().getHours();
      if (time < 12){
         return "Morning! Let's caffeinate!";
      }
      if (time < 18){
         return "Afternoon, time for a snack!";
      } else{
         return "Evening vibes only!";
      }
   
    }
   
    const dynamicGreeting = document.querySelector("h1.click");
    if (dynamicGreeting){
      dynamicGreeting.textContent = getGreetings();
    }

    //cassette audio
 const cassette = document.getElementById('disk1');
 const cassette2 = document.getElementById('disk2');
 const audio = document.getElementById('audio1');
 const audio2 = document.getElementById('audio2');

 cassette.addEventListener('mouseenter', () => {
    audio.currentTime = 0;
    audio.play();
 }); 

 cassette.addEventListener('mouseleave', () => {
    audio.pause();
    audio.currentTime = 0;
 });

 cassette2.addEventListener('mouseenter', () => {
    audio2.currentTime = 0;
    audio2.play();
 }); 

 cassette2.addEventListener('mouseleave', () => {
    audio2.pause();
    audio2.currentTime = 0;
 });

});


  //hobbies/skills js
  let likeCount = 0;
  const likeBtn = document.getElementById('likeBtn');
  const likeCountSpan = document.getElementById('likeCount');

  likeBtn.addEventListener('click', () => {
    likeCount++;
    likeCountSpan.textContent = likeCount;
    likeBtn.classList.add('liked');
  });


  

