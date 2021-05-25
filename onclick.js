let startTime = null;//startTime変数
let displayArea = document.getElementById('display-area');
let onclickArea = document.getElementById('emoji');
function start(){
    startTime = Date.now();//上で用意した変数startTimeへ現在時刻のミリ秒を代入
    document.body.onclick = stop;
}
function stop() {
    let currentTime = Date.now();
    let seconds = (currentTime - startTime) / 1000;
    if ( 7 <= seconds && seconds < 8 ) {
        displayArea.innerText = `${seconds}秒でした！
        おめでとうございます！！
        ＼(^o^)／`;
    }else{
        displayArea.innerText = `${seconds}秒でした！
        (*>ω<)おしいです！ `;
    }
  document.body.onclick = null;
}
if(confirm(`OKを押して7秒経ったと思ったら☁️ を押してください。`)){
　　　　　//confirm関数は、戻り値が意味を持ち、OKを押されるとtrue、キャンセルが押されると
        //falseが返る
  start();
}

/*document.getElementById("emoji").addEventListener("click",function(){
    document.getElementById("emoji").textContent = "クリックされました。";
    alert("かおもじがクリックされました。")
});*/