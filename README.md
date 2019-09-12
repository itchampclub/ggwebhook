# ggwebhook

 config
# webhook.gs
  var channelToken = ''; linebot token
  
  var ss = SpreadsheetApp.openByUrl(""); sheet url
  
  var sheet = ss.getSheetByName(""); sheetname
  
  line 50 :  var headers = {
             "contentType": "application/json",
    "headers":{"Authorization": "Bearer xxxxxxxx"} ใส่ linebot token แทนที่ xxx
             };
  
  Deploying a script as a web app
  
  https://developers.google.com/apps-script/guides/web
  
  ใช้ url ที่ได้เป็น webhook


# upscore.gs

  var ss = SpreadsheetApp.openByUrl(""); sheet url
  
  var sheet = ss.getSheetByName(""); sheetname
  
  
  Deploying a script as a web app
  
  https://developers.google.com/apps-script/guides/web
  
  ใช้ url ใส่ที่ var theUrl ในไฟล์ html_actuator.js
  
  
# 2048\js\html_actuator.js

line 144 : var theUrl = "";

สร้าง sheet ตามรูปแบบในไฟล์ภาพ

สร้าง liff game 2048 นำ url ใส่ line 649 : var mess = [{'type': 'text', 'text': 'line://app/xxx'}];

# คำสั่งบอท

-ส่ง location : bot reply สภาพอากาศและค่าดัชนีคุณภาพอากาศ

-พิมพ์ oil น้ำมัน ราคาน้ำมัน : bot reply ราคาน้ำมัน บางจาก

-พิมพ์ qr ตามด้วย ข้อความ,ลิงค์,เบอร์โทร : bot reply qr code (gen qr code จากข้อความหลัง วรรค)

-พิมพ์ 2048 : bot reply liffapp game 2048

-พิมพ์ myscore : bot reply คะแนนเกมส์ 2048 ของเรา

-พิมพ์ gametop10 : bot reply list top 10 game 2048
