//0:剪刀 1:石头 2:布
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

function showResultMask(resultString,imgName){
    let mask = document.getElementById('mask');
    mask.innerHTML = `
    <div class="mdui-card mdui-color-pink-100" style="margin: auto;width:70vw;">
        <div class="mdui-card-media">
            <img src="./${imgName}.png"/>
            <div class="mdui-card-media-covered">
                <div class="mdui-card-primary">
                    <div class="mdui-card-primary-subtitle">${resultString}</div>
                </div>
            </div>
        </div>
        <div class="mdui-card-actions">
            <button onclick="location.reload();" class="mdui-btn mdui-ripple mdui-color-pink" style="color: white;">点击重开</button>
        </div>
    </div>
    `
    $('#mask').show(500);
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
                    <div class="mdui-card-primary-subtitle">我有五滴血！我可以偷看对面一次噢！</div>
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
                    <div class="mdui-card-primary-subtitle">我不能偷看~但是我有七滴血！</div>
                </div>
            </div>
        </div>
        <div class="mdui-card-actions">
            <button id="qifei" class="mdui-btn mdui-ripple mdui-color-pink" style="color: white;">就他了！</button>
        </div>
    </div>
    `;
    mdui.snackbar({
        message: '配音才是灵魂,开启声音体验更佳哦!'
    });
    var haoye = document.getElementById('haoye');
    var qifei = document.getElementById('qifei');
    var skill_haoye = true;
    haoye.onclick = function(){
        let chooseHaoyeAudio = new Audio('./chooseHaoye.m4a');
        chooseHaoyeAudio.play();
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
                                <div class=""mdui-card-primary-subtitle">毒龙剪</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="rock" class="mdui-card" style="width:26vw;">
                    <div class="mdui-card-media">
                        <img src="./rock.png"/>
                        <div class="mdui-card-media-covered">
                            <div class="mdui-card-primary">
                                <div class=""mdui-card-primary-subtitle">重拳</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="paper" class="mdui-card" style="width:26vw;">
                    <div class="mdui-card-media">
                        <img src="./paper.png"/>
                        <div class="mdui-card-media-covered">
                            <div class="mdui-card-primary">
                                <div class=""mdui-card-primary-subtitle">如来神掌</div>
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
        var playerHP = 5;
        var computerHP = 7;
        printHP(playerHP,computerHP);

        let computerResult = Math.floor(Math.random()*3);
        let scissors = document.getElementById('scissors');
        let rock = document.getElementById('rock');
        let paper = document.getElementById('paper');
        let toukan = document.getElementById('toukan');
        let qifeiCount = document.getElementById('computerHpSpan')
        let toukanCounter = 0;
        let qifeiCounter = 0;

        function haoyeResult(){
            if(playerHP == 0){
                let dieAudio = new Audio('./die.m4a');
                dieAudio.play();
                showResultMask(`好耶寄了!`,`haoye`);
            }
            if(computerHP == 0){
                let haoyeWinAudio = new Audio('./haoyeWin.m4a');
                haoyeWinAudio.play();
                showResultMask(`好耶赢了!恭喜获得起飞画像一张!`,`qifeiImg`);
            }
        }

        qifeiCount.onclick = function(){
            qifeiCounter++;
            if(computerHP > 1 && qifeiCounter == 10){
                computerHP--;
                qifeiCounter = 0;
                printHP(playerHP,computerHP)
            }
            else if(computerHP == 1 && qifeiCounter == 20){
                computerHP--;
                qifeiCounter = 0;
                printHP(playerHP,computerHP)
                let haoyeWinAudio = new Audio('./haoyeWin.m4a');
                haoyeWinAudio.play();
                showResultMask(`恭喜你搓烂了起飞的所有香蕉,他选择投降!恭喜获得起飞画像一张!`,`qifeiImg`);
            }
        }

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
                toukanCounter++;
                let toukanAudio = new Audio('./toukan.m4a');
                toukanAudio.play();
            }
            else if(skill_haoye == false){
                box.innerHTML = `坏好耶你已经偷看过一次了!不能再偷看了!`;
                toukanCounter++;
            }
            if (toukanCounter > 1 && toukanCounter <= 5){
                let toukan5Audio = new Audio('./toukan5.m4a');
                toukan5Audio.play();
            }
            else if (toukanCounter > 5){
                let toukan5moreAudio = new Audio('./toukan5more.m4a');
                toukan5moreAudio.play();
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
            setTimeout(haoyeResult,2500);
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
            setTimeout(haoyeResult,2500);
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
            setTimeout(haoyeResult,2500);
            computerResult = Math.floor(Math.random()*3);
        }

        ;
    }

    qifei.onclick = function(){
        let chooseQifeiAudio = new Audio('./chooseQifei.m4a');
        chooseQifeiAudio.play();
        div.innerHTML = `
        <div style="margin-top: 3vh;display: flex;align-items: center;flex-direction: column;">
            <div>
                <img id="haoyeCount" class="icon" src="./haoye.png"/>
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
                                <div class=""mdui-card-primary-subtitle">毒龙剪</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="rock" class="mdui-card" style="width:26vw;">
                    <div class="mdui-card-media">
                        <img src="./rock.png"/>
                        <div class="mdui-card-media-covered">
                            <div class="mdui-card-primary">
                                <div class=""mdui-card-primary-subtitle">重拳</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="paper" class="mdui-card" style="width:26vw;">
                    <div class="mdui-card-media">
                        <img src="./paper.png"/>
                        <div class="mdui-card-media-covered">
                            <div class="mdui-card-primary">
                                <div class=""mdui-card-primary-subtitle">如来神掌</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mdui-chip mdui-color-pink-300" style="margin: 1vh;z-index:1001;">
                <span style="color:white;" id="playerResultSpan" class="mdui-chip-title">我要出……</span>
            </div>
            <div class="mdui-chip mdui-color-pink-300" style="margin: 1vh;">
                <span style="color:white;" id="playerHpSpan" class="mdui-chip-title"></span>
            </div>
            <div>
                <img class="icon" src="./qifei.png"/>
            </div>

        </div>
        `
        var playerHP = 7;
        var computerHP = 5;
        printHP(playerHP,computerHP);

        let computerResult = Math.floor(Math.random()*3);
        let scissors = document.getElementById('scissors');
        let rock = document.getElementById('rock');
        let paper = document.getElementById('paper');
        let haoyeCount = document.getElementById('haoyeCount');
        let haoyeCounter = 0;

        haoyeCount.onclick = function(){
            haoyeCounter++;
            if(haoyeCounter == 66){
                computerHP = 0;
                printHP(playerHP,computerHP);
                let qifeiWinAudio = new Audio('./qifeiWin.m4a');
                qifeiWinAudio.play();
                showResultMask(`好耶坠机!恭喜你成功俘获了好耶!获得好耶画像一张!`,`haoyeImg`);
            }
        }

        function qifeiResult(){
            if(playerHP == 0){
                let dieAudio = new Audio('./die.m4a');
                dieAudio.play();
                showResultMask(`起飞寄了!`,`qifei`);
            }
            if(computerHP == 0){
                let qifeiWinAudio = new Audio('./qifeiWin.m4a');
                qifeiWinAudio.play();
                showResultMask(`起飞赢了!恭喜获得好耶画像一张!`,`haoyeImg`);
            }
        }

        function toukanBox(){
            let box = document.getElementById('box');
            box.innerHTML += `<br/>哎呀,起飞被好耶偷看了!`;
        }

        scissors.onclick = function(){
            
            if(skill_haoye == true){
                if(computerHP > 1){
                    let toukanOrNot = Math.floor(Math.random()*4);
                    if(toukanOrNot == 0){
                        skill_haoye = false;
                        computerResult = 1;
                        let toukanedAudio = new Audio('./toukaned.m4a');
                        toukanedAudio.play();
                        setTimeout(toukanBox,1000);
                    }
                }
                else if(computerHP == 1){
                    skill_haoye = false;
                    computerResult = 1;
                    let toukanedAudio = new Audio('./toukaned.m4a');
                    toukanedAudio.play();
                    setTimeout(toukanBox,1000);
                }
            }

            ResultDisplay(0,computerResult);
            let playerResultString = getResultString(0);
            let computerResultString = getResultString(computerResult);
            showMask('qifei','haoye',playerResultString,computerResultString);

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
            setTimeout(qifeiResult,2500);
            computerResult = Math.floor(Math.random()*3);
        }

        rock.onclick = function(){

            if(skill_haoye == true){
                if(computerHP > 1){
                    let toukanOrNot = Math.floor(Math.random()*4);
                    if(toukanOrNot == 0){
                        skill_haoye = false;
                        computerResult = 2;
                        let toukanedAudio = new Audio('./toukaned.m4a');
                        toukanedAudio.play();
                        setTimeout(toukanBox,1000);
                    }
                }
                else if(computerHP == 1){
                    skill_haoye = false;
                    computerResult = 2;
                    let toukanedAudio = new Audio('./toukaned.m4a');
                    toukanedAudio.play();
                    setTimeout(toukanBox,1000);
                }
            }

            ResultDisplay(1,computerResult);
            let playerResultString = getResultString(1);
            let computerResultString = getResultString(computerResult);
            showMask('qifei','haoye',playerResultString,computerResultString);

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
            setTimeout(qifeiResult,2500);
            computerResult = Math.floor(Math.random()*3);              
        }

        paper.onclick = function(){

            if(skill_haoye == true){
                if(computerHP > 1){
                    let toukanOrNot = Math.floor(Math.random()*4);
                    if(toukanOrNot == 0){
                        skill_haoye = false;
                        computerResult = 0;
                        let toukanedAudio = new Audio('./toukaned.m4a');
                        toukanedAudio.play();
                        setTimeout(toukanBox,1000);
                    }
                }
                else if(computerHP == 1){
                    skill_haoye = false;
                    computerResult = 0;
                    let toukanedAudio = new Audio('./toukaned.m4a');
                    toukanedAudio.play();
                    setTimeout(toukanBox,1000);
                }
            }
            
            ResultDisplay(2,computerResult);
            let playerResultString = getResultString(2);
            let computerResultString = getResultString(computerResult);
            showMask('qifei','haoye',playerResultString,computerResultString);

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
            setTimeout(qifeiResult,2500);
            computerResult = Math.floor(Math.random()*3);
        }
        ;
    }
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

let people = document.getElementById('people');
people.onclick = function(){
    div.innerHTML = `
    <ul class="mdui-list" style="margin:auto;background-color: rgba(225,225,225,0.9);width:70vw;">
        <li class="mdui-list-item mdui-ripple">
            <div class="mdui-list-item-content">
                <div class="mdui-list-item-title mdui-list-item-one-line">3A大作</div>
                <div class="mdui-list-item-text mdui-list-item-two-line">A cheater, a foolish and a monkey.</div>
            </div>
        </li>
        <li class="mdui-list-item mdui-ripple">
            <div class="mdui-list-item-content">
                <div class="mdui-list-item-title mdui-list-item-one-line">代码</div>
                <div class="mdui-list-item-text mdui-list-item-two-line">公鸭</div>
            </div>
        </li>
        <li class="mdui-list-item mdui-ripple">
            <div class="mdui-list-item-content">
                <div class="mdui-list-item-title mdui-list-item-one-line">美工</div>
                <div class="mdui-list-item-text mdui-list-item-two-line">滑滑</div>
            </div>
        </li>
        <li class="mdui-list-item mdui-ripple">
            <div class="mdui-list-item-content">
                <div class="mdui-list-item-title mdui-list-item-one-line">P图</div>
                <div class="mdui-list-item-text mdui-list-item-two-line">公鸭</div>
            </div>
        </li>
        <li class="mdui-list-item mdui-ripple">
            <div class="mdui-list-item-content">
                <div class="mdui-list-item-title mdui-list-item-one-line">配音</div>
                <div class="mdui-list-item-text mdui-list-item-two-line">滑滑</div>
            </div>
        </li>
        <li class="mdui-list-item mdui-ripple">
            <div class="mdui-list-item-content">
                <div class="mdui-list-item-title mdui-list-item-one-line">文案</div>
                <div class="mdui-list-item-text mdui-list-item-two-line">滑滑、公鸭</div>
            </div>
        </li>
        <li class="mdui-list-item mdui-ripple">
            <div id="tips" class="mdui-list-item-content">
                <div class="mdui-list-item-title mdui-list-item-one-line">小提示</div>
            </div>
        </li>
    </ul>
    <button onclick="location.reload();" class="mdui-btn mdui-btn-raised mdui-ripple" style="background-color: rgba(225,225,225,0.9);">返回</button>
    `
    let tipsOpen = false;
    let tips = document.getElementById('tips');
    tips.onclick = function(){
        if(tipsOpen == false){
            tipsOpen = true;
            tips.innerHTML += `
            <div class="mdui-list-item-text mdui-list-item-two-line">好耶的飞机可以被击毁，起飞的香蕉也可以被偷走噢！多次点击有惊喜！</div>
            `
        }
    }
}