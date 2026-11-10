(function(){
  // Giờ theo nguồn phụ Facebook (chưa PlacesSearch): T2–T7 08:30–19:30; CN 08:30–18:00
  var now=new Date(Date.now()+(7*60+new Date().getTimezoneOffset())*60000);
  var h=now.getHours()+now.getMinutes()/60, d=now.getDay();
  var close = (d===0)?18:19.5;
  var open=(h>=8.5&&h<close);
  var o=document.getElementById('open-now'), s=document.getElementById('open-sub');
  if(o){
    o.textContent=open?'Đang mở cửa':'Đã đóng cửa';
    o.style.color=open?'#4cd07d':'#e0624f';
    if(s) s.textContent=open?('Đóng cửa lúc '+(d===0?'18:00':'19:30')):'Mở cửa lúc 08:30';
  }
  var row=document.querySelector('.hours tr[data-d="'+d+'"]'); if(row) row.classList.add('today');
})();
