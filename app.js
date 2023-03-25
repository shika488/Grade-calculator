'use strict';

//「名前」入力欄
const nameForm = document.getElementById('name');

//「点数」入力欄
const point = document.getElementsByClassName('point');

//「評価」表示
const result = document.getElementsByClassName('result');

//「評価」ボタン
const btn = document.getElementById('btn');

//リセットボタン
const reset = document.getElementById('reset');


//「名前」入力欄にフォーカスを当てる
nameForm.focus();


//「評価」ボタンで「評価」欄に表示
btn.onclick = function () {

    //入力された数字を数値に変換して配列にする(pointList作成)
    let pointList = [];
    function addPoint () {
        for(let i = 0; i < point.length; i++){
            pointList.push(Number(point[i].value));
        }
    }
    addPoint();
    
    //pointListを新たな配列にする(groupList作成)
    let groupList = pointList.map(function(p) {
        if (p == 100) {         //100点
            return "S";
        } else if (p > 90 ) {   //91~99点
            return "A";
        } else if (p > 80) {   //81~90点
            return "B";
        } else if (p > 70) {   //71~80点
            return "C";
        } else if (p > 59) {   //60~70点
            return "D";
        } else {               //0~59点
            return "F"; 
        }
    });

    //「評価」に表示
    for(let i = 0; i < groupList.length; i++){
            result[i].innerHTML = groupList[i];
            result[i].style.background = '#ffe4e1';
    }

};


//リセットボタンでリロード
reset.onclick = function () {
    location.reload();
};