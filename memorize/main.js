// 9:13 AM Have A and n functioning, odd spacing though... 20 minutes
    // 10:11 AM "And it came to pass" function ... 20 minutes
    // 10:45 AM researching a way to create the program simply by adding the text... 15 minutes
    // 11:48 AM - been coding for proably 45 minutes... built a little application
    // 12:28 PM - finished up for now .. 25 minutes

    // 10/26 - 8:45 AM - Working on adding sounds

    // 10/29 - 8:20 PM - working on adding a timer

    const d = new Date();   
    let date = d.toLocaleTimeString();
    timer.innerHTML = date;

    var mySound;

    mySound = new sound("audio/key4.wav");


    function sound(src) {
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
        this.play = function(){
            this.sound.play();
        }
        this.stop = function(){
            this.sound.pause();
        }    
    }

    let text = "";
    let text_length = 0;

    function hint() {
        if (text_length  < scripture.length){
                document.getElementById("hint").innerHTML = scripture[text_length];
        }
    }

    function myMove() {
        // console.log(" hello");
        // let id = null;
        // const elem = document.getElementById("hint");   
        // let pos = 0;
        // clearInterval(id);
        // id = setInterval(frame, 5);
        // function frame() {
        //     if (pos == 450) {
        //     clearInterval(id);
        //     } else {
        //     pos++; 
        //     elem.style.top = pos + "px"; 
        //     elem.style.left = pos + "px"; 
        //     }
        // }
    }

    
        window.addEventListener("keydown", (event) => {
            
            console.log(`${text_length} ${scripture.length}`);
            // makes it so text_length does not try to access a character that does not exist
            
            // Hint
            
            
            if (text_length !== scripture.length ){
                if (event.key === scripture[text_length]) {
                mySound.play();
                text += scripture[text_length];
                text_length++;
                document.getElementById("scripture_box").innerHTML = text;
                document.getElementById("hint").innerHTML = "";
                } else {
                    hint();
                    myMove();
                }
                if (text_length  === scripture.length){
                    document.getElementById("finished").innerHTML = "Congratulations you finished!";
                }
            }                
        }, true);