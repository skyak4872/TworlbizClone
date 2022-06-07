$(function(){
  let GnbLeng = $("#Gnb > li").length;
  $("#Gnb > li",).mouseenter(function(){
    let nB_h = $(".subnavBox",this).height();
    let el_width = parseInt($(this).width());
    let sum_width = 0
    let el_left = $(this).offset().left;
    $("> a",this).addClass("active");
    $(".subnavBox",this).css("display","block");
    // $(".subnavBox",this).animate({height: nB_h},500,function(){
    //   $(this).css("display","block");
    // });
    $("#gnbLine").css("display","block").css("width",el_width).css("left",el_left);

  }).mouseleave(function(){
    $("a:first",this).removeClass("active");
    $(".subnavBox",this).css("display","none");
    $("#gnbLine").css("display","none");
  })

  // 메뉴 내용 여는 코드
  $(".sublist > li",".subnavBox").mouseenter(function(){
    $("> a",this).addClass("over");
    // if(this)
    if($(this).hasClass("submenu")){
      $(".depth3",this).css("display","none");
    }else {
      $(".depth3",this).css("display","block");
    }
  }).mouseleave(function(){
    $("> a",this).removeClass("over");
    $(".depth3",this).css("display","none");
  });
  $(".isList").click(function(){
    if($(".depth2_1").css("display") == "none"){
      $(".depth2_1").css("display","block");
      $(".submenu > .depth3:first").css("display","block");
      $(".depth2_1 > li:first > a").addClass("over2");
      if($(this).hasClass("over") == false){
        $(this).addClass("over");
      }
    }else if($(".depth2_1").css("display") == "block"){
      $(".depth2_1").css("display","none");
      $(this).removeClass("over");
    }
  });

  // 서브메뉴 코드
  $(".submenu").mouseenter(function(){
    $(".depth2_1",this).css("display","block");
    $("> .depth3:first",this).css("display","block");
    $(".depth2_1 > li:first > a",this).addClass("over2");
  }).mouseleave(function(){
    $(".depth2_1",this).css("display","none");
  })
  $(".depth2_1 > li").mouseenter(function(){
    let subNum = parseInt($(this).index());
    $("a:first",this).addClass("over2");
    $(".submenu > .depth3:eq("+subNum+")").css("display","block");
  }).mouseleave(function(){
    let subNum = parseInt($(this).index());
    $("a:first",this).removeClass("over2");
    $(".submenu > .depth3:eq("+subNum+")").css("display","none");
  });

 //슬라이더 수동 조작
 // console.log($(".bx-controls > .bx-pager:eq(4) > .bx-pager-item:eq(2)").index());

 // 전체 메뉴
 $(".btnAllMn").click(function(){
   $("#SiteMap").css("display","block");
 });
 $(".btnAllMnClose").click(function(){
   $("#SiteMap").css("display","none");
 });

 // visual 화면전환 ver 0.1
 $(".mainVisual .bx-pager .bx-pager-item").click(function(){
   let index = $(this).index();
   $(".mainVisual .slider .items").css("display","none");
   $(".mainVisual .slider .items:eq("+index+")").css("display","block");
 });

 $(".mainVisual .bx-next").click(function(){
   $(".mainVisual .slider .items").each(function(){
     console.log($(this).index(this));
   });
 });

 // service 화면전환 ver 0.1
 $(".svCategory li").click(function(){
   let index = $(this).index();
   $(".svCategory li").removeClass("on").removeClass("active");
   $(this).addClass("on").addClass("active");
   $(".mainSv .svList").css("display","none");
   $(".mainSv .svList:eq("+index+")").css("display","block");
 });

 // RecoSol 화면전환 ver 0.1
 $(".mainRecoSol .bx-pager .bx-pager-item").click(function(){
   let index = $(this).index();
   $(".mainRecoSol .bx-pager .bx-pager-item a").removeClass("active");
   $("a",this).addClass("active");
   if(index == 0){
     $(".mainRecoSol .slider .item1").css("display","block");
     $(".mainRecoSol .slider .item2").css("display","none");
   }else if(index == 1) {
     $(".mainRecoSol .slider .item1").css("display","none");
     $(".mainRecoSol .slider .item2").css("display","block");
   }

   $(".mainPlusSol .bx-pager .bx-pager-item").click(function(){
     let index = $(this).index();
     $(".mainPlusSol .bx-pager .bx-pager-item a").removeClass("active");
     $("a",this).addClass("active");
     if(index == 0){
       $(".mainPlusoSol .slider .item1").css("display","block");
       $(".mainPlusSol .slider .item2").css("display","none");
     }else if(index == 1) {
       $(".mainPlusSol .slider .item1").css("display","none");
       $(".mainPlusSol .slider .item2").css("display","block");
     }
 });
});
