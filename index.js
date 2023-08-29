var arr=document.querySelectorAll(".drum");
for(var i=0;i<arr.length;i++){
    arr[i].addEventListener("click",function (){
        // Method 1:
        // if(this.innerHTML=="w"){
        // var audio=new Audio("sounds/tom-1.mp3");
        // audio.play();
        // }
        // else if(this.innerHTML=="a"){
            
        //     var audio=new Audio("sounds/tom-2.mp3");
        //     audio.play();
            
        // }
        // else if(this.innerHTML=="s"){
        //     var audio=new Audio("sounds/tom-3.mp3");
        //     audio.play();

        // }
        // else if(this.innerHTML=="d"){
        //     var audio=new Audio("sounds/tom-4.mp3");
        //     audio.play();

        // }
        // else if(this.innerHTML=="j"){
        //     var audio=new Audio("sounds/snare.mp3");
        //     audio.play();

        // }
        // else if(this.innerHTML=="k"){
        //     var audio=new Audio("sounds/crash.mp3");
        //     audio.play();

        // }
        // else if(this.innerHTML=="l"){
        //     var audio=new Audio("sounds/kick-bass.mp3");
        //     audio.play();

        // }
        // Method 2:
           var button=this.innerHTML;
           makesSound(button);
        


    });
}
document.addEventListener("keypress",function(event){
        makesSound(event.key);
       


});
function makesSound(button){
    
           switch (button) {
               case "w":
                var audio=new Audio("sounds/tom-1.mp3");
                audio.play();        
                   break;
                case "a":
                var audio=new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
                case "s":
                var audio=new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
                case "d":
                var audio=new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
                case "j":
                var audio=new Audio("sounds/snare.mp3");
                audio.play();
                break;
                case "k":
                var audio=new Audio("sounds/crash.mp3");
                audio.play();
                break;
                case "l":
                var audio=new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;

           
               default:
                   break;
           }

}