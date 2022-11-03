// alert(111);
// var hako = "はじめました"
// console.log(hako);


// $(".a").on('click',function(){
//     // 
// alert("h1が押されました！");

    //ついかしたもの
//  $(".a").css("color","red");

// var random = Math.floor(Math.random() * 3);
// console.log(random, "z");


// どこの何を表示している↑









$("#gu_btn").on("click",function(){
    // console.log("ランダムな数字");
    // alert("ok");
//   1.乱数(1~5)

const r=Math.floor(Math.random()*3);
// console.log(r, "じゃんけん");
//   2.if分岐処理

let view1="";
let view2="";
if(r==1){
     view1="<img src='img/gu.jpg'>";
     view2="あいこ";
}
else  if(r==2){
     view1="<img src='img/cho.jpg'>";
     view2="勝ち";

}
else  if(r==3){
     view1="<img src='img/par.jpg'>";
     view2="負け";
}

//   3.表示処理
$("#pc_hands").html(view1);
$("#judgement").html(view2);

});







$("#cho_btn").on("click",function(){
    // console.log(r,"ランダムな数字");
    // alert("ok");
//   1.乱数(1~5)

const r=Math.ceil(Math.random()*3);
// console.log(r, "じゃんけん");
//   2.if分岐処理

let view1="";
let view2="";
if(r==1){
     view1="<img src='img/gu.jpg'>";
     view2="負け";
}else if(r==2){
     view1="<img src='img/cho.jpg'>";
     view2="あいこ";

}else  if(r==3){
     view1="<img src='img/par.jpg'>";
     view2="勝ち";
}
    
//   3.表示処理
$("#pc_hands").html(view1);
$("#judgement").html(view2);

});









$("#par_btn").on("click",function(){
    // console.log(r,"ランダムな数字");
    // alert("ok");
//   1.乱数(1~5)

const r=Math.ceil(Math.random()*3);
// console.log(r, "じゃんけん");
//   2.if分岐処理

let view1="";
let view2="";
if(r==1){
     view1="<img src='img/gu.jpg'>";
     view2="勝ち";
}else  if(r==2){
     view1="<img src='img/cho.jpg'>";
     view2="負け";

}else  if(r==3){
     view1="<img src='img/par.jpg'>";
     view2="あいこ";
}
    
//   3.表示処理
$("#pc_hands").html(view1);
$("#judgement").html(view2);

});







// $(function(){
//      $('.js-modal-open').on('click',function(){
//          $('.js-modal').fadeIn();
//          return false;
//      });
//      $('.js-modal-close').on('click',function(){
//          $('.js-modal').fadeOut();
//          return false;
//      });
//  });

 
 $(".aa").on("click", function () {
     //
     // alert(1);
     // $(".aa").fadeOut(2000); // 1000は1秒, 2000は2秒になります🤗
     // 下は削除しない
   
     // クリックされたら class="bb"を表示する
     // そのためには注意！必ず最初に「非表示」にする必要があります🤗
     // cssの場合はdisplay:none;をつける
     $(".bb").fadeIn(2000);
     document.designMode = "on";
     // つけたり、けしたりしたいならこれ使ってね！って
   // jqueryの公式サイトに書いてるおまじないが[fadeToggle]
   });



   $(".aa").on("click", function () {
     //
     // alert(1);
     // $(".aa").fadeOut(2000); // 1000は1秒, 2000は2秒になります🤗
     // 下は削除しない
   
     // クリックされたら class="bb"を表示する
     // そのためには注意！必ず最初に「非表示」にする必要があります🤗
     // cssの場合はdisplay:none;をつける
     $(".bb").fadeOut(100000);
     document.designMode = "on";
 
     // つけたり、けしたりしたいならこれ使ってね！って
   // jqueryの公式サイトに書いてるおまじないが[fadeToggle]
   });

   function butotnClick(){

     // location.hrefにURLを代入することで画面遷移する
     location.href = "https://gsacademy.jp/?utm_source=google&utm_medium=cpc&utm_campaign=GoogleAd_TYO_SRCH_AT-Brand_2021-03-07&gclid=CjwKCAjwzY2bBhB6EiwAPpUpZiQ-JOP-4zbDCUClnC2sjLXbK--dOdMQb58nTGQWizIF2WhXAETMYRoCoBwQAvD_BwE";
   }
   
   let button = document.getElementById('btn');
   button.onclick = butotnClick;