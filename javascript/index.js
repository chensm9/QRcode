var qrcode;

function changImg(e){    
  var img = e.target.files.item(0);  
  if (!(/^image\/.*$/i.test(img.type))) {    
     alert("文件必须为图片！");
     return; 
  }

  var freader = new FileReader();    
  freader.readAsDataURL(img);    
  freader.onload = function(e) {    
    $("#img-Score").attr("src", e.target.result);
    if (qrcode == undefined) {
      qrcode = new QRCode('qrcode', {
        text: 'your content',
        width: 256,
        height: 256,
        colorDark : '#000000',
        colorLight : '#ffffff',
        correctLevel : QRCode.CorrectLevel.H
      });
    } else {
      qrcode.makeCode("666");
    }
  }
}