    const makeRedButton = document.getElementById('make-red');
    console.log(makeRedButton)
    makeRedButton.onclick=makeRed;
    function makeRed(){
        document.body.style.backgroundColor='red';
    }

    function makeBlue(){
        document.body.style.backgroundColor='blue';
    }

    const makeOrangeColor=document.getElementById('make-orange');
    console.log(makeOrangeColor)
    makeOrangeColor.onclick=function makeOrange(){
        document.body.style.backgroundColor='orange';
    }
    const makePinkColor=document.getElementById('make-pink');
    console.log(makePinkColor)
    makePinkColor.addEventListener('click', makePink);
    function makePink(){
        document.body.style.backgroundColor='pink';
    }

    const makeGreenButton=document.getElementById('make-green');
    console.log(makeGreenButton)
    makeGreenButton.addEventListener('click',function(){
        document.body.style.backgroundColor='green';
    })

    document.getElementById('make-goldenrod').addEventListener('click',function(){
        document.body.style.backgroundColor='goldenrod';
    })