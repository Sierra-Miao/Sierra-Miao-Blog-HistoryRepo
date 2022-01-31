window.onload = $('#mask').hide();
function showMask(player,computer,playerResultString,computerResultString){
    let mask = document.getElementById('mask');
    mask.innerHTML = `
    <div style="margin-top:5vh;display:flex;flex-direction:row;flex-wrap:no-wrap;">
        <div>
            <img class="icon" src="./${computer}.png"/>
        </div>
        <div class="mdui-card" style="width:26vw;">
            <div class="mdui-card-media">
                <img src="./${computerResultString}.png"/>
            </div>
        </div>
    </div>
    <div style="height:55vh;"></div>
    <div style="margin-bottom:5vh;display:flex;flex-direction:row;flex-wrap:no-wrap;">
        <div>
            <img class="icon" src="./${player}.png"/>
        </div>
        <div class="mdui-card" style="width:26vw;">
            <div class="mdui-card-media">
                <img src="./${playerResultString}.png"/>
            </div>
        </div>
    </div>
    `
    $('#mask').show(500);
    setTimeout("$('#mask').hide(500);",2000);
}

function showWinMask(){

}

function showLoseMask(){

}

function getResultString(Result){
    if(Result == 0)
        return 'scissors';
    else if(Result == 1)
        return 'rock';
    else if(Result == 2)
        return 'paper';
}
var start = document.getElementById('start');
var div = document.getElementById('ui');
start.onclick = function(){
    div.innerHTML=`
    <div class="mdui-chip mdui-color-pink" style="margin-top: 5vh">
        <span class="mdui-chip-title">请选择你的英雄</span>
    </div>
    <div class="mdui-card mdui-color-pink-100" style="margin: 10px;">
        <div class="mdui-card-media">
            <img src="./haoye.png"/>
            <div class="mdui-card-media-covered">
                <div class="mdui-card-primary">
                    <div class="mdui-card-primary-title">好耶</div>
                    <div class="mdui-card-primary-subtitle">我有三滴血！我可以偷看对面一次噢！</div>
                </div>
            </div>
        </div>
        <div class="mdui-card-actions">
            <button id="haoye" class="mdui-btn mdui-ripple mdui-color-pink" style="color: white;">就他了！</button>
        </div>
    </div>
    <div class="mdui-card mdui-color-pink-100" style="margin: 10px;">
        <div class="mdui-card-media">
            <img src="./qifei.png"/>
            <div class="mdui-card-media-covered">
                <div class="mdui-card-primary">
                    <div class="mdui-card-primary-title">起飞</div>
                    <div class="mdui-card-primary-subtitle">我不能偷看~但是我有五滴血！</div>
                </div>
            </div>
        </div>
        <div class="mdui-card-actions">
            <button id="qifei" class="mdui-btn mdui-ripple mdui-color-pink" style="color: white;">就他了！</button>
        </div>
    </div>
    `;
    var haoye = document.getElementById('haoye');
    var qifei = document.getElementById('qifei');
    var skill_haoye = true;
    haoye.onclick = function(){
        div.innerHTML = `
        <div style="margin-top: 3vh;display: flex;align-items: center;flex-direction: column;">
            <div>
                <img class="icon" src="./qifei.png"/>
            </div>
            <div class="mdui-chip mdui-color-blue-300" style="margin: 1vh;">
                <span style="color:white;" id="computerHpSpan" class="mdui-chip-title"></span>
            </div>
            <div class="mdui-chip mdui-color-blue-300" style="margin: 1vh;z-index:1001;">
                <span style="color:white;z-index:1001;" id="computerResultSpan" class="mdui-chip-title">我要出……</span>
            </div>
        </div>

        <div class="mdui-card mdui-color-red-400" style="height: 10vh;width:94vw;margin: auto 3vw;">
            <div id="box" class="mdui-card-content">请出拳……</div>
        </div>

        <div style="margin-bottom: 3vh;display: flex;align-items: center;flex-direction: column;">

            <div style="display: flex; flex-direction: row;flex-wrap: no-wrap;margin-top: 3vh;">
                <div id="scissors" class="mdui-card" style="width:26vw;">
                    <div class="mdui-card-media">
                        <img src="./scissors.png"/>
                        <div class="mdui-card-media-covered">
                            <div class="mdui-card-primary">
                                <div class="mdui-card-primary-title">毒龙剪</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="rock" class="mdui-card" style="width:26vw;">
                    <div class="mdui-card-media">
                        <img src="./rock.png"/>
                        <div class="mdui-card-media-covered">
                            <div class="mdui-card-primary">
                                <div class="mdui-card-primary-title">重拳</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="paper" class="mdui-card" style="width:26vw;">
                    <div class="mdui-card-media">
                        <img src="./paper.png"/>
                        <div class="mdui-card-media-covered">
                            <div class="mdui-card-primary">
                                <div class="mdui-card-primary-title">如来神掌</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style="margin-top:2vh;">
                <button id="toukan" class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-pink">偷看！</button>
            </div>

            <div class="mdui-chip mdui-color-pink-300" style="margin: 1vh;z-index:1001;">
                <span style="color:white;" id="playerResultSpan" class="mdui-chip-title">我要出……</span>
            </div>
            <div class="mdui-chip mdui-color-pink-300" style="margin: 1vh;">
                <span style="color:white;" id="playerHpSpan" class="mdui-chip-title"></span>
            </div>
            <div>
                <img class="icon" src="./haoye.png"/>
            </div>

        </div>
        `
        var playerHP = 3;
        var computerHP = 5;
        printHP(playerHP,computerHP);

        let computerResult = Math.floor(Math.random()*3);
        let scissors = document.getElementById('scissors');
        let rock = document.getElementById('rock');
        let paper = document.getElementById('paper');
        let toukan = document.getElementById('toukan');

        toukan.onclick = function(){
            let box = document.getElementById('box');
            if(skill_haoye == true){
                box.innerHTML = `好耶偷看了起飞，起飞要出的是`;
                if(computerResult == 0)
                    box.innerHTML += `毒龙剪!`;
                else if(computerResult == 1)
                    box.innerHTML += `重拳!`;
                else if(computerResult == 2)
                    box.innerHTML += `如来神掌!`;
                skill_haoye = false;
            }
            else if(skill_haoye == false){
                box.innerHTML = `坏好耶你已经偷看过一次了!不能再偷看了!`;
            }
        }
        scissors.onclick = function(){
            ResultDisplay(0,computerResult);
            let playerResultString = getResultString(0);
            let computerResultString = getResultString(computerResult);
            showMask('haoye','qifei',playerResultString,computerResultString);

            if(computerResult == 0){
                let box = document.getElementById('box');
                box.innerHTML = `看来还是旗鼓相当的对手~继续出拳!`;
                let drawAudio = new Audio('./draw.m4a');
                drawAudio.play();
            }
            else if(computerResult == 1){
                let box = document.getElementById('box');
                box.innerHTML = `啊啊,我的香蕉!我要继续出拳拿回来!`;
                let loseAudio = new Audio('./lose.m4a');
                loseAudio.play();
                playerHP--;
            }
            else if(computerResult == 2){
                let box = document.getElementById('box');
                box.innerHTML = `嘿嘿,拿下一分!继续出拳!`;
                let winAudio = new Audio('./win.m4a');
                winAudio.play();
                computerHP--;
            }

            printHP(playerHP,computerHP)
            
            if(playerHP == 0)
                showLoseMask();
            if(computerHP == 0)
                showWinMask();

            computerResult = Math.floor(Math.random()*3);
        }

        rock.onclick = function(){
            ResultDisplay(1,computerResult);
            let playerResultString = getResultString(1);
            let computerResultString = getResultString(computerResult);
            showMask('haoye','qifei',playerResultString,computerResultString);

            if(computerResult == 0){
                let box = document.getElementById('box');
                box.innerHTML = `嘿嘿,拿下一分!继续出拳!`;
                let winAudio = new Audio('./win.m4a');
                winAudio.play();
                computerHP--;
            }
            else if(computerResult == 1){
                let box = document.getElementById('box');
                box.innerHTML = `看来还是旗鼓相当的对手~继续出拳!`;
                let drawAudio = new Audio('./draw.m4a');
                drawAudio.play();
            }
            else if(computerResult == 2){
                let box = document.getElementById('box');
                box.innerHTML = `啊啊,我的香蕉!我要继续出拳拿回来!`;
                let loseAudio = new Audio('./lose.m4a');
                loseAudio.play();
                playerHP--;
            }

            printHP(playerHP,computerHP)
            
            if(playerHP == 0)
                showLoseMask();
            if(computerHP == 0)
                showWinMask();
                                
            computerResult = Math.floor(Math.random()*3);
        }

        rock.onclick = function(){
            ResultDisplay(1,computerResult);
            let playerResultString = getResultString(1);
            let computerResultString = getResultString(computerResult);
            showMask('haoye','qifei',playerResultString,computerResultString);

            if(computerResult == 0){
                let box = document.getElementById('box');
                box.innerHTML = `嘿嘿,拿下一分!继续出拳!`;
                let winAudio = new Audio('./win.m4a');
                winAudio.play();
                computerHP--;
            }
            else if(computerResult == 1){
                let box = document.getElementById('box');
                box.innerHTML = `看来还是旗鼓相当的对手~继续出拳!`;
                let drawAudio = new Audio('./draw.m4a');
                drawAudio.play();
            }
            else if(computerResult == 2){
                let box = document.getElementById('box');
                box.innerHTML = `啊啊,我的香蕉!我要继续出拳拿回来!`;
                let loseAudio = new Audio('./lose.m4a');
                loseAudio.play();
                playerHP--;
            }

            printHP(playerHP,computerHP)
            
            if(playerHP == 0)
                showLoseMask();
            if(computerHP == 0)
                showWinMask();
                                
            computerResult = Math.floor(Math.random()*3);
        }

        paper.onclick = function(){
            ResultDisplay(2,computerResult);
            let playerResultString = getResultString(2);
            let computerResultString = getResultString(computerResult);
            showMask('haoye','qifei',playerResultString,computerResultString);

            if(computerResult == 0){
                let box = document.getElementById('box');
                box.innerHTML = `啊啊,我的香蕉!我要继续出拳拿回来!`;
                let loseAudio = new Audio('./lose.m4a');
                loseAudio.play();
                playerHP--;
                
            }
            else if(computerResult == 1){
                let box = document.getElementById('box');
                box.innerHTML = `嘿嘿,拿下一分!继续出拳!`;
                let winAudio = new Audio('./win.m4a');
                winAudio.play();
                computerHP--;
            }
            else if(computerResult == 2){
                let box = document.getElementById('box');
                box.innerHTML = `看来还是旗鼓相当的对手~继续出拳!`;
                let drawAudio = new Audio('./draw.m4a');
                drawAudio.play();
            }

            printHP(playerHP,computerHP)
            
            if(playerHP == 0)
                showLoseMask();
            if(computerHP == 0)
                showWinMask();
                                
            computerResult = Math.floor(Math.random()*3);
        }

        ;
    }

    qifei.onclick = function(){
        div.innerHTML = `
        
        `
        ;
    }
}


function computerResult(){
    return Math.floor(Math.random()*3);//0:剪刀 1:石头 2:布
}

function ResultDisplay(playerResult,computerResult){
    let computerResultSpan = document.getElementById('computerResultSpan');
    let playerResultSpan = document.getElementById('playerResultSpan');
    if(playerResult == 0)
        playerResultSpan.innerHTML = `毒龙剪，扎你个透心凉!`;
    else if(playerResult == 1)
        playerResultSpan.innerHTML = `必须重拳出击!`;
    else if(playerResult == 2)
        playerResultSpan.innerHTML = `呔!如来神掌，你接得住?`;

    if(computerResult == 0)
        computerResultSpan.innerHTML = `毒龙剪，扎你个透心凉!`;
    else if(computerResult == 1)
        computerResultSpan.innerHTML = `必须重拳出击!`;
    else if(computerResult == 2)
        computerResultSpan.innerHTML = `呔!如来神掌，你接得住?`;
}

function printHP(playerHP,computerHP){
    let playerHpSpan = document.getElementById('playerHpSpan');
    let computerHpSpan = document.getElementById('computerHpSpan');
    playerHpSpan.innerHTML = `HP:`;
    computerHpSpan.innerHTML = `HP:`;
    for(let cnt = 0; cnt < playerHP; cnt++){
        playerHpSpan.innerHTML += ` \u{1F34C}`;
    }
    for(let cnt = 0; cnt < computerHP; cnt++){
        computerHpSpan.innerHTML += ` \u{1F34C}`;
    }
}

function draw(){
    let box = document.getElementById('box');
    box.innerHTML = `看来还是旗鼓相当的对手~继续出拳!`;
    let drawAudio = new Audio('./draw.m4a');
    drawAudio.play();
}

function win(computerHP){
    let box = document.getElementById('box');
    box.innerHTML = `嘿嘿,拿下一分!继续出拳!`;
    let winAudio = new Audio('./win.m4a');
    winAudio.play();
    computerHP = computerHP--;
}

function lose(playerHP){
    let box = document.getElementById('box');
    box.innerHTML = `啊啊,我的香蕉!我要继续出拳拿回来!`;
    let loseAudio = new Audio('./lose.m4a');
    loseAudio.play();
    playerHP = playerHP--;
}

function caiquan(player,computer,playerHP,computerHP)
{
    if(player == 0){
        if(computer == 0){
            let box = document.getElementById('box');
            box.innerHTML = `看来还是旗鼓相当的对手~继续出拳!`;
            let drawAudio = new Audio('./draw.m4a');
            drawAudio.play();
        }
        else if(computer == 1){
            let box = document.getElementById('box');
            box.innerHTML = `啊啊,我的香蕉!我要继续出拳拿回来!`;
            let loseAudio = new Audio('./lose.m4a');
            loseAudio.play();
            playerHP--;
        }
        else if(computer == 2){
            let box = document.getElementById('box');
            box.innerHTML = `嘿嘿,拿下一分!继续出拳!`;
            let winAudio = new Audio('./win.m4a');
            winAudio.play();
            computerHP = computerHP--;
        }
    }
    else if(player == 1){
        if(computer == 0)
            win(computerHP);
        else if(computer == 1)
            draw();
        else if(computer == 2)
            lose(playerHP);
    }
    else if(player == 2){
        if(computer == 0)
            lose(playerHP);
        else if(computer == 1)
            win(computerHP);
        else if(computer == 2)
            draw();
    }
}
