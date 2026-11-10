(function(){
  // Giờ PlacesSearch: Monday–Sunday 8:30–19:40
  var now=new Date(Date.now()+(7*60+new Date().getTimezoneOffset())*60000);
  var h=now.getHours()+now.getMinutes()/60, d=now.getDay();
  var open=(h>=8.5&&h<19+40/60);
  var o=document.getElementById('open-now'), s=document.getElementById('open-sub');
  if(o){
    o.textContent=open?'Đang mở cửa':'Đã đóng cửa';
    o.style.color=open?'#4cd07d':'#e0624f';
    if(s) s.textContent=open?'Đóng cửa lúc 19:40':'Mở cửa lúc 08:30';
  }
  var row=document.querySelector('.hours tr[data-d="'+d+'"]'); if(row) row.classList.add('today');
})();
