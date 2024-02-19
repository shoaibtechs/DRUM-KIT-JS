// Three parameters in EventListener(type, listener, )




// document.querySelector("button").addEventListener("click",handleClick)


// function handleClick()
// {

//     alert("I got clicked");

// }  


//The above code can be written as below with "ananomus function".s


// document.querySelector("button").addEventListener("click",function(){


//     alert("I got clicked");


// });



//The above code was only foer the one button but we want that funcion work for every button....


 
let numberOfDrumButtons = document.querySelectorAll(".drum").length; // no of buttons 



for (let i=0; i<numberOfDrumButtons; i++)
{

       //Detecting Button Click 
      
        document.querySelectorAll(".drum")[i].addEventListener("click",function(){

      
        let buttonInnerHTML = this.innerHTML;

        playSound(buttonInnerHTML);
        addAnimation(buttonInnerHTML);



});


  //Detecting the Keyword Press

  document.addEventListener("keypress", function(event){

      playSound(event.key); //This will give the 'key' which will be pressed...

      addAnimation(event.key);

      



  });



};



function playSound(k)
{

      switch(k)
      {
          case "w":
                let tom1 = new Audio('sounds/tom-1.mp3')
                tom1.play();
                break;
          
          
          case "a":
                let tom2 = new Audio('sounds/tom-2.mp3')
                 tom2.play();
                  break;
          
          case "s":
                let tom3 = new Audio('sounds/tom-3.mp3')
                 tom3.play();
                  break;

          case "d":
                let tom4 = new Audio('sounds/tom-4.mp3')
                 tom4.play();
                  break;

          case "j":
                let snare = new Audio('sounds/snare.mp3')
                    snare.play();
                    break;
                  

          case "k":
                let  crash = new Audio('sounds/crash.mp3')
                 crash.play();
                  break;

          case "l":
               let kick = new Audio('sounds/kick-bass.mp3')
                  kick.play();
                   break;
          
          
          default: console.log(buttonInnerHTML)
          
      
      }
   




}


function addAnimation(event)
{

      let activeButton = document.querySelector('.' +  event);
      activeButton.classList.add("pressed");



      setTimeout(function(){

            activeButton.classList.remove("pressed");


      },100)



}











 