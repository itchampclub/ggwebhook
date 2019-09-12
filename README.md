# ggwebhook

config
webhook.gs
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


upscore.gs

  var ss = SpreadsheetApp.openByUrl(""); sheet url
  
  var sheet = ss.getSheetByName(""); sheetname
  
  
  Deploying a script as a web app
  
  https://developers.google.com/apps-script/guides/web
  
  ใช้ url ใส่ที่ var theUrl ในไฟล์ html_actuator.js
  
  
2048\js\html_actuator.js

line 144 : var theUrl = "";

สร้าง sheet ตามรูปแบบในไฟล์ภาพ

สร้าง liff game 2048 นำ url ใส่ line 649 : var mess = [{'type': 'text', 'text': 'line://app/xxx'}];
