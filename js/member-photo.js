/*
メンバー画像の切り替え
・通常画像ファイル名の後ろ -1.jpg (画像の形式はその他 .png など)
→ マウスオーバー時 -2.jpg (画像の形式はその他 .png など)
*/
$(function(){
  $('.member-photo').hover(
    function(){
      $(this).attr('src', $(this).attr('src').replace('-1', '-2'));
    }, 
    function(){
      $(this).attr('src', $(this).attr('src').replace('-2', '-1'));
    }
  );
});

/*
上記のための切り替え画像のプリロード
*/
$(function(){
  $('.members-photo').each(function(){
    if(String($(this).attr("src")).match(/_1\.(.*)$/)){
      var img = new Image();
      img.src = String($(this).attr("src")).replace(/_1\.(.*)$/,"_2.$1");
    }
  });
});




