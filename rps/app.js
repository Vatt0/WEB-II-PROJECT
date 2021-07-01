let c_score = 0;
let p_score = 0;

function rock(){
    document.getElementById("pmg").src = "img/1.png"
    let x = Math.floor(Math.random()*3+1)
    document.getElementById("cmg").src = `img/${x}.png`
    if(x==2){
        c_score++;
    }
    if(x==3){
        p_score++;
    }
    document.getElementById("pscore").innerHTML = p_score;
    document.getElementById("cscore").innerHTML = c_score;
}

function pap(){
    document.getElementById("pmg").src = "img/2.png"
    let x = Math.floor(Math.random()*3+1)
    document.getElementById("cmg").src = `img/${x}.png`
    if(x==3){
        c_score++;
    }
    if(x==1){
        p_score++;
    }
    document.getElementById("pscore").innerHTML = p_score;
    document.getElementById("cscore").innerHTML = c_score;
}

function sciss(){
    document.getElementById("pmg").src = "img/3.png"
    let x = Math.floor(Math.random()*3+1)
    document.getElementById("cmg").src = `img/${x}.png`
    if(x==1){
        c_score++;
    }
    if(x==2){
        p_score++;
    }
    document.getElementById("pscore").innerHTML = p_score;
    document.getElementById("cscore").innerHTML = c_score;
}

function clearScore(){
    p_score = 0;
    c_score = 0;
    document.getElementById("pmg").src = "img/h1.png"
    document.getElementById("cmg").src = "img/h1.png"
    document.getElementById("pscore").innerHTML = p_score;
    document.getElementById("cscore").innerHTML = c_score;
}

