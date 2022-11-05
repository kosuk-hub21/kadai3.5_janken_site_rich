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
     view2=`
     <h2 class="aa">勝ったら押せます</h2> 
     <div class="bb">
      <p>あなたが欲しいのは</p>
     <button type="button" id="btn"class="button">金の斧</button>
     <button type="button" id="cho"class="button">銀の斧</button>
     <button type="button" id="par"class="button">〇〇の斧</button>
     </div> 
     `;

}
else  if(r==3){
     view1="<img src='img/par.jpg'>";
     view2="負け";
}

//   3.表示処理
$("#pc_hands").html(view1);
$("#judgement").html(view2);

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
   });

   console.log("aaテスト")


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
   });

   function  buttonClick(){
     // location.hrefにURLを代入することで画面遷移する
     location.href = "https://gsacademy.jp/?utm_source=google&utm_medium=cpc&utm_campaign=GoogleAd_TYO_SRCH_AT-Brand_2021-03-07&gclid=CjwKCAjwzY2bBhB6EiwAPpUpZiQ-JOP-4zbDCUClnC2sjLXbK--dOdMQb58nTGQWizIF2WhXAETMYRoCoBwQAvD_BwE";
   }
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
     // view2="勝ち";
view2=`
<h2 class="aa">勝ったら押せます</h2> 
<div class="bb">
 <p>あなたが欲しいのは</p>
<button type="button" id="btn"class="button">金の斧</button>
<button type="button" id="cho"class="button">銀の斧</button>
<button type="button" id="par"class="button">〇〇の斧</button>
</div> 
`;
}
    
//   3.表示処理
$("#pc_hands").html(view1);
$("#judgement").html(view2);
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
   });




   $(".aa").on("click", function () {
     
     // alert(1);
     // $(".aa").fadeOut(2000); // 1000は1秒, 2000は2秒になります🤗
     // 下は削除しない
     // クリックされたら class="bb"を表示する
     // そのためには注意！必ず最初に「非表示」にする必要があります🤗
     // cssの場合はdisplay:none;をつける
     $(".bb").fadeOut(100000);
     document.designMode = "on";
   });

   function  buttonClick(){
     // location.hrefにURLを代入することで画面遷移する
     location.href = "https://gsacademy.jp/?utm_source=google&utm_medium=cpc&utm_campaign=GoogleAd_TYO_SRCH_AT-Brand_2021-03-07&gclid=CjwKCAjwzY2bBhB6EiwAPpUpZiQ-JOP-4zbDCUClnC2sjLXbK--dOdMQb58nTGQWizIF2WhXAETMYRoCoBwQAvD_BwE";
   }
   
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
     view2=`
     <h2 class="aa">勝ったら押せます</h2> 
     <div class="bb">
      <p>あなたが欲しいのは</p>
     <button type="button" id="btn"class="button">金の斧</button>
     <button type="button" id="cho"class="button">銀の斧</button>
     <button type="button" id="par"class="button">〇〇の斧</button>
     </div> 
     `;
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
   });

   console.log("aaテスト")


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
   });

   function  buttonClick(){
     // location.hrefにURLを代入することで画面遷移する
     location.href = "https://gsacademy.jp/?utm_source=google&utm_medium=cpc&utm_campaign=GoogleAd_TYO_SRCH_AT-Brand_2021-03-07&gclid=CjwKCAjwzY2bBhB6EiwAPpUpZiQ-JOP-4zbDCUClnC2sjLXbK--dOdMQb58nTGQWizIF2WhXAETMYRoCoBwQAvD_BwE";
   }
});




 
// console.log("テスト");

//  $(".aa").on("click", function () {
//      //
//      // alert(1);
//      // $(".aa").fadeOut(2000); // 1000は1秒, 2000は2秒になります🤗
//      // 下は削除しない
   
//      // クリックされたら class="bb"を表示する
//      // そのためには注意！必ず最初に「非表示」にする必要があります🤗
//      // cssの場合はdisplay:none;をつける
//      $(".bb").fadeIn(2000);
//      document.designMode = "on";
//    });

//    console.log("aaテスト")


//    $(".aa").on("click", function () {
     
//      //
//      // alert(1);
//      // $(".aa").fadeOut(2000); // 1000は1秒, 2000は2秒になります🤗
//      // 下は削除しない
   
//      // クリックされたら class="bb"を表示する
//      // そのためには注意！必ず最初に「非表示」にする必要があります🤗
//      // cssの場合はdisplay:none;をつける
//      $(".bb").fadeOut(100000);
//      document.designMode = "on";
//    });


//    function buttonClick(){
//      // location.hrefにURLを代入することで画面遷移する
//      location.href = "https://gsacademy.jp/?utm_source=google&utm_medium=cpc&utm_campaign=GoogleAd_TYO_SRCH_AT-Brand_2021-03-07&gclid=CjwKCAjwzY2bBhB6EiwAPpUpZiQ-JOP-4zbDCUClnC2sjLXbK--dOdMQb58nTGQWizIF2WhXAETMYRoCoBwQAvD_BwE";
//    }
   
