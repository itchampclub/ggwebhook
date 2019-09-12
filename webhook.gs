var channelToken = 'xxxxx';
  var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/");
  var sheet = ss.getSheetByName("xxx");

function replyMsg(replyToken, userMsg, channelToken) {
  var url = 'https://api.line.me/v2/bot/message/reply';
  var opt = {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + channelToken,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'replyToken': replyToken,
      'messages': userMsg
    })
  };
  UrlFetchApp.fetch(url, opt);
}
function pushMsg(usrId, message, channelToken) {
  var url = 'https://api.line.me/v2/bot/message/push';
  var opt = {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + channelToken,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'to': usrId,
      'messages': message
    })
  };
  UrlFetchApp.fetch(url, opt);
}
function doPost(e) {
  var value = JSON.parse(e.postData.contents);
  try {
    var events = value.events;
    if (events != null) {
      for (var i in events) {
        var event = events[i];
        var type = event.type;
        var replyToken = event.replyToken;
        var sourceType = event.source.type;
        var sourceId = LineHelpers.getSourceId(event.source);
        var userId = event.source.userId;
        var groupId = event.source.groupId;
        var timeStamp = event.timestamp;
        var url = "https://api.line.me/v2/bot/profile/"+userId;
        var headers = {
             "contentType": "application/json",
    "headers":{"Authorization": "Bearer xxxxxxx"}
             };
      var getprofile = UrlFetchApp.fetch(url, headers);
      var profiledata = JSON.parse(getprofile.getContentText());
      var displayName = profiledata.displayName;
      var pictureUrl = profiledata.pictureUrl;
        var ssuid = sheet.getRange(2, 1, sheet.getLastRow(),sheet.getLastColumn()).getValues();
        switch (type) {
          case 'postback':
            break;
          case 'message':
            var messageType = event.message.type;
            var messageId = event.message.id;
            var messageText = event.message.text;
            //**//
            if (messageType == "text"){
            if (messageText == "oil" || messageText == "น้ำมัน" || messageText == "ราคาน้ำมัน"){
            var url = 'https://crmmobile.bangchak.co.th/webservice/oil_price.aspx';
            var xml = UrlFetchApp.fetch(url).getContentText();
            var document = XmlService.parse(xml);
            var root = document.getRootElement();
            var oil_title = root.getChild('title').getText();
            var oil_update = root.getChild('update_date').getText();
            var items = root.getChildren('item');
            //oil
            var item0yesterday = items[0].getChild('yesterday').getText();
            var item0today = items[0].getChild('today').getText();
            var item0tomorrow = items[0].getChild('tomorrow').getText();
            //oil
            var item1yesterday = items[1].getChild('yesterday').getText();
            var item1today = items[1].getChild('today').getText();
            var item1tomorrow = items[1].getChild('tomorrow').getText();
            //oil
            var item2yesterday = items[2].getChild('yesterday').getText();
            var item2today = items[2].getChild('today').getText();
            var item2tomorrow = items[2].getChild('tomorrow').getText();
            //oil
            var item3yesterday = items[3].getChild('yesterday').getText();
            var item3today = items[3].getChild('today').getText();
            var item3tomorrow = items[3].getChild('tomorrow').getText();
            //oil
            var item4yesterday = items[4].getChild('yesterday').getText();
            var item4today = items[4].getChild('today').getText();
            var item4tomorrow = items[4].getChild('tomorrow').getText();
            //oil
            var item5yesterday = items[5].getChild('yesterday').getText();
            var item5today = items[5].getChild('today').getText();
            var item5tomorrow = items[5].getChild('tomorrow').getText();
            //oil
            var item6yesterday = items[6].getChild('yesterday').getText();
            var item6today = items[6].getChild('today').getText();
            var item6tomorrow = items[6].getChild('tomorrow').getText();
            //oil
            var item7yesterday = items[7].getChild('yesterday').getText();
            var item7today = items[7].getChild('today').getText();
            var item7tomorrow = items[7].getChild('tomorrow').getText();
            //oil
            var item8yesterday = items[8].getChild('yesterday').getText();
            var item8today = items[8].getChild('today').getText();
            var item8tomorrow = items[8].getChild('tomorrow').getText();
            var daymy = Utilities.formatDate(new Date(), "GMT+7", "dd-MM-yyyy")
            var mess = [
{  
  "type": "flex",
  "altText": "ราคาน้ำมัน",
  "contents":
{
  "type": "carousel",
  "contents": [
    {
      "type": "bubble",
      "size": "micro",
      "hero": {
        "type": "image",
        "url": "https://www.bangchak.co.th/img/%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%88%E0%B8%B2%E0%B8%81_%E0%B9%81%E0%B8%99%E0%B8%A7%E0%B8%99%E0%B8%AD%E0%B8%99.jpg",
        "size": "full",
        "aspectMode": "cover",
        "aspectRatio": "250:100"
      },
      "body": {
        "type": "box",
        "backgroundColor": "#ffffff",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "ราคามีผล ณ วันที่\n"+daymy,
            "color": "#016AB5",
            "weight": "bold",
            "align": "center",
            "size": "sm",
            "wrap": true
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                                    {
                    "type": "text",
                    "text": "::::::::::::::::::::",
                    "weight": "bold",
                    "wrap": true,
                    "align": "center",
                    "color": "#016AB5",
                    "size": "md",
                    "flex": 5
                  }
                ]
              }
            ]
          }
        ],
        "spacing": "sm",
        "paddingAll": "13px"
      }
    },{
      "type": "bubble",
      "size": "micro",
      "hero": {
        "type": "image",
        "url": "https://www.bangchak.co.th/img/logo-oil/logo-Hi-premium-diesel-s.png",
        "size": "full",
        "aspectMode": "cover",
        "aspectRatio": "250:100"
      },
      "body": {
        "type": "box",
        "backgroundColor": "#58519E",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "Hi Premium Diesel S",
            "color": "#ffffff",
            "weight": "bold",
            "align": "center",
            "size": "xs",
            "wrap": true
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                                    {
                    "type": "text",
                    "text": item0today+"\nบาท/ลิตร",
                    "wrap": true,
                    "align": "center",
                    "color": "#ffffff",
                    "size": "lg",
                    "flex": 5
                  }
                ]
              }
            ]
          },
        ],
        "spacing": "sm",
        "paddingAll": "13px"
      }
    },{
      "type": "bubble",
      "size": "micro",
      "hero": {
        "type": "image",
        "url": "https://www.bangchak.co.th/img/logo-oil/logo-Hi-diesel.png",
        "size": "full",
        "aspectMode": "cover",
        "aspectRatio": "250:100"
      },
      "body": {
        "type": "box",
        "backgroundColor": "#244D8B",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "Diesel S",
            "color": "#ffffff",
            "weight": "bold",
            "align": "center",
            "size": "xs",
            "wrap": true
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                                    {
                    "type": "text",
                    "text": item1today+"\nบาท/ลิตร",
                    "wrap": true,
                    "align": "center",
                    "color": "#ffffff",
                    "size": "lg",
                    "flex": 5
                  }
                ]
              }
            ]
          },
        ],
        "spacing": "sm",
        "paddingAll": "13px"
      }
    },{
      "type": "bubble",
      "size": "micro",
      "hero": {
        "type": "image",
        "url": "https://www.bangchak.co.th/img/logo-oil/B10noSbcpweb.jpg",
        "size": "full",
        "aspectMode": "cover",
        "aspectRatio": "250:100"
      },
      "body": {
        "type": "box",
        "backgroundColor": "#327449",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "HI DIESEL B10",
            "color": "#ffffff",
            "weight": "bold",
            "align": "center",
            "size": "xs",
            "wrap": true
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                                    {
                    "type": "text",
                    "text": item2today+"\nบาท/ลิตร",
                    "wrap": true,
                    "align": "center",
                    "color": "#ffffff",
                    "size": "lg",
                    "flex": 5
                  }
                ]
              }
            ]
          },
        ],
        "spacing": "sm",
        "paddingAll": "13px"
      }
    },{
      "type": "bubble",
      "size": "micro",
      "hero": {
        "type": "image",
        "url": "https://www.bangchak.co.th/img/logo-oil/B20s-Bangchak.jpg",
        "size": "full",
        "aspectMode": "cover",
        "aspectRatio": "250:100"
      },
      "body": {
        "type": "box",
        "backgroundColor": "#6DB456",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "HI DIESEL B20 S",
            "color": "#ffffff",
            "weight": "bold",
            "align": "center",
            "size": "xs",
            "wrap": true
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                                    {
                    "type": "text",
                    "text": item3today+"\nบาท/ลิตร",
                    "wrap": true,
                    "align": "center",
                    "color": "#ffffff",
                    "size": "lg",
                    "flex": 5
                  }
                ]
              }
            ]
          },
        ],
        "spacing": "sm",
        "paddingAll": "13px"
      }
    },{
      "type": "bubble",
      "size": "micro",
      "hero": {
        "type": "image",
        "url": "https://www.bangchak.co.th/img/logo-oil/logo-gasohol-e85.png",
        "size": "full",
        "aspectMode": "cover",
        "aspectRatio": "250:100"
      },
      "body": {
        "type": "box",
        "backgroundColor": "#D43B36",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "Gasohol E85 S",
            "color": "#ffffff",
            "weight": "bold",
            "align": "center",
            "size": "xs",
            "wrap": true
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                                    {
                    "type": "text",
                    "text": item4today+"\nบาท/ลิตร",
                    "wrap": true,
                    "align": "center",
                    "color": "#ffffff",
                    "size": "lg",
                    "flex": 5
                  }
                ]
              }
            ]
          },
        ],
        "spacing": "sm",
        "paddingAll": "13px"
      }
    },{
      "type": "bubble",
      "size": "micro",
      "hero": {
        "type": "image",
        "url": "https://www.bangchak.co.th/img/logo-oil/logo-E20s.png",
        "size": "full",
        "aspectMode": "cover",
        "aspectRatio": "250:100"
      },
      "body": {
        "type": "box",
        "backgroundColor": "#E18E37",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "Gasohol E20 S",
            "color": "#ffffff",
            "weight": "bold",
            "align": "center",
            "size": "xs",
            "wrap": true
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                                    {
                    "type": "text",
                    "text": item5today+"\nบาท/ลิตร",
                    "wrap": true,
                    "align": "center",
                    "color": "#ffffff",
                    "size": "lg",
                    "flex": 5
                  }
                ]
              }
            ]
          },
        ],
        "spacing": "sm",
        "paddingAll": "13px"
      }
    },{
      "type": "bubble",
      "size": "micro",
      "hero": {
        "type": "image",
        "url": "https://www.bangchak.co.th/img/logo-oil/logo-gasohol-91.png",
        "size": "full",
        "aspectMode": "cover",
        "aspectRatio": "250:100"
      },
      "body": {
        "type": "box",
        "backgroundColor": "#4FA598",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "Gasohol 91 S",
            "color": "#ffffff",
            "weight": "bold",
            "align": "center",
            "size": "xs",
            "wrap": true
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                                    {
                    "type": "text",
                    "text": item6today+"\nบาท/ลิตร",
                    "wrap": true,
                    "align": "center",
                    "color": "#ffffff",
                    "size": "lg",
                    "flex": 5
                  }
                ]
              }
            ]
          },
        ],
        "spacing": "sm",
        "paddingAll": "13px"
      }
    },{
      "type": "bubble",
      "size": "micro",
      "hero": {
        "type": "image",
        "url": "https://www.bangchak.co.th/img/logo-oil/logo-gasohol-95.png",
        "size": "full",
        "aspectMode": "cover",
        "aspectRatio": "250:100"
      },
      "body": {
        "type": "box",
        "backgroundColor": "#55A8DE",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "Gasohol 95 S",
            "color": "#ffffff",
            "weight": "bold",
            "align": "center",
            "size": "xs",
            "wrap": true
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                                    {
                    "type": "text",
                    "text": item7today+"\nบาท/ลิตร",
                    "wrap": true,
                    "align": "center",
                    "color": "#ffffff",
                    "size": "lg",
                    "flex": 5
                  }
                ]
              }
            ]
          },
        ],
        "spacing": "sm",
        "paddingAll": "13px"
      }
    },{
      "type": "bubble",
      "size": "micro",
      "hero": {
        "type": "image",
        "url": "https://www.bangchak.co.th/img/logo-oil/logo-NGV.png",
        "size": "full",
        "aspectMode": "cover",
        "aspectRatio": "250:100"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "NGV",
            "weight": "bold",
            "align": "center",
            "size": "xs",
            "wrap": true
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                                    {
                    "type": "text",
                    "text": item8today+"\nบาท/ลิตร",
                    "wrap": true,
                    "align": "center",
                    "color": "#000000",
                    "size": "lg",
                    "flex": 5
                  }
                ]
              }
            ]
          }
        ],
        "spacing": "sm",
        "paddingAll": "13px"
      }
    }
  ]
}
}
];
            replyMsg(replyToken, mess, channelToken);
            }
            else if(messageText.indexOf("qr ")>-1){
            var cutmessage = messageText.split(' ',2)[1];
            var exqr = "https://chart.googleapis.com/chart?chs=150x150&choe=UTF-8&cht=qr&chl="+cutmessage
            var mess = [{'type': 'text', 'text': "นี่คือ QR Code : "+cutmessage+"\nของคุณ "+displayName}, {'type': 'image', 'originalContentUrl': exqr, 'previewImageUrl': exqr}];
            replyMsg(replyToken, mess, channelToken);
            }
            else if(messageText.indexOf("myscore")>-1){
            var duplicate = false;
                    for(var i = 0;i<ssuid.length; i++){
                       if(userId == ssuid[i][0]){
                          var scoreans = sheet.getRange(i+2,2).getValue();
                          duplicate = true;
                           }
                           }
                             if (!duplicate) {
                           sheet.appendRow([userId, cutscore]);
                              }

            var mess = [{'type': 'text', 'text': "คะแนนสูงสุดของคุณ "+displayName+"\n"+scoreans+" คะแนน"}];
            replyMsg(replyToken, mess, channelToken);
            }
            else if(messageText.indexOf("2048")>-1){
            var mess = [{'type': 'text', 'text': 'line://app/xxx'}];
            replyMsg(replyToken, mess, channelToken);
            }
            else if (messageText == "gametop10"){
             var range = sheet.getRange("A2:C999");
             range.sort([{column: 2, ascending: false}, {column: 1, ascending: true}, {column: 3, ascending: true}]);
             var top1 = sheet.getRange(2,2).getValue();
var top2 = sheet.getRange(3,2).getValue();
var top3 = sheet.getRange(4,2).getValue();
var top4 = sheet.getRange(5,2).getValue();
var top5 = sheet.getRange(6,2).getValue();
var top6 = sheet.getRange(7,2).getValue();
var top7 = sheet.getRange(8,2).getValue();
var top8 = sheet.getRange(9,2).getValue();
var top9 = sheet.getRange(10,2).getValue();
var top10 = sheet.getRange(11,2).getValue();

if(top1 == ""){var top1 = "-";}else{var top1 = "1. "+sheet.getRange(2,3).getValue()+" คะแนน "+sheet.getRange(2,2).getValue()+"\n";}
if(top2 == ""){var top2 = "";}else{var top2 = "2. "+sheet.getRange(3,3).getValue()+" คะแนน "+sheet.getRange(3,2).getValue()+"\n";}
if(top3 == ""){var top3 = "";}else{var top3 = "3. "+sheet.getRange(4,3).getValue()+" คะแนน "+sheet.getRange(4,2).getValue()+"\n";}
if(top4 == ""){var top4 = "";}else{var top4 = "4. "+sheet.getRange(5,3).getValue()+" คะแนน "+sheet.getRange(5,2).getValue()+"\n";}
if(top5 == ""){var top5 = "";}else{var top5 = "5. "+sheet.getRange(6,3).getValue()+" คะแนน "+sheet.getRange(6,2).getValue()+"\n";}
if(top6 == ""){var top6 = "";}else{var top6 = "6. "+sheet.getRange(7,3).getValue()+" คะแนน "+sheet.getRange(7,2).getValue()+"\n";}
if(top7 == ""){var top7 = "";}else{var top7 = "7. "+sheet.getRange(8,3).getValue()+" คะแนน "+sheet.getRange(8,2).getValue()+"\n";}
if(top8 == ""){var top8 = "";}else{var top8 = "8. "+sheet.getRange(9,3).getValue()+" คะแนน "+sheet.getRange(9,2).getValue()+"\n";}
if(top9 == ""){var top9 = "";}else{var top9 = "9. "+sheet.getRange(10,3).getValue()+" คะแนน "+sheet.getRange(10,2).getValue()+"\n";}
if(top10 == ""){var top10 = "";}else{var top10 = "10. "+sheet.getRange(11,3).getValue()+" คะแนน "+sheet.getRange(11,2).getValue();}
            var mess = [{'type': 'text', 'text': "รายชื่อ TOP10 2048\n"+top1+top2+top3+top4+top5+top6+top7+top8+top9+top10}];
            replyMsg(replyToken, mess, channelToken);
               }
           /* else if(messageText.indexOf("score ")>-1){
            var date = new Date();
            var min = date.getMinutes();
            var hrs = date.getHours();
            var day = date.getDate();
           var xrefcode = ((min+2*3)*(hrs+2)*day)*2+7;
           var checkref = messageText.split(' : ',2)[1];
           var cutref = messageText.split('score ',2)[1];
           var cutscore = cutref.split(' : ',2)[0];
            if (xrefcode == checkref){
            var duplicate = false;
                    for(var i = 0;i<ssuid.length; i++){
                       if(userId == ssuid[i][0]){
                          sheet.getRange(i+2,2).setValue(cutscore);
                          duplicate = true;
                           }
                           }
                             if (!duplicate) {
                           sheet.appendRow([userId, cutscore]);
                              }
            var mess = [{'type': 'text', 'text': "บันทึกคะแนน "+cutscore+" เรียบร้อย"}];
            replyMsg(replyToken, mess, channelToken);
            }
            else{
            var mess = [{'type': 'text', 'text': "คะแนนไม่ถูกต้อง ไม่สามารถบันทึกได้"}];
            replyMsg(replyToken, mess, channelToken);
            }
            } */
            else{
            var url = "http://api.simsimi.com/request.p?key=19d86-8ec4-44bb-b28a-92ad788b79e8&lc=th&ft=1.0&text="+messageText;
            var headers = {"contentType": "application/json"};
            var getsimreply = UrlFetchApp.fetch(url, headers);
            var simreply = JSON.parse(getsimreply.getContentText());
            var sim = simreply.response;
            var mess = [{'type': 'text', 'text': "ไม่รู้สิ"}];
            replyMsg(replyToken, mess, channelToken);
            }
            }
            else if (messageType == "location"){
            var userLat = event.message.latitude;
            var userLong = event.message.longitude;
            //WEATHER
            var url = "https://api.openweathermap.org/data/2.5/weather?lat="+userLat+"&lon="+userLong+"&lang=th&units=metric&appid=bb32ab343bb6e3326f9e1bbd4e4f5d31";
            var headers = {"contentType": "application/json"};
            var getweatherdata = UrlFetchApp.fetch(url, headers);
            var weatherdata = JSON.parse(getweatherdata.getContentText());
            var name = weatherdata.name;
            var main = weatherdata.weather[0].main;
            var desc = weatherdata.weather[0].description;
            var temp = weatherdata.main.temp;
            //AQI
            var aqiurl = "https://api.waqi.info/feed/geo:"+userLat+";"+userLong+"/?token=2a31afdfaa1d335382564c79ae36b523d2a4d445";
            var aqiheaders = {"contentType": "application/json"};
            var getaqidata = UrlFetchApp.fetch(aqiurl, aqiheaders);
            var aqidata = JSON.parse(getaqidata.getContentText());
            var aqi = aqidata.data.aqi;
            var city = aqidata.data.city.name;
            var time = aqidata.data.time.s;
            if (aqi >= 201) {
    var aqitext = "ค่า AQI = "+aqi;
    var aqidecs = "คุณภาพอากาศมีผลกระทบต่อสุขภาพ";
    var aqicolor = "#ff0000";
  }
  else if (aqi >= 101) {
    var aqitext = "ค่า AQI = "+aqi;
    var aqidecs = "คุณภาพอากาศเริ่มมีผลกระทบต่อสุขภาพ";
    var aqicolor = "#c66900";
  }
  else if (aqi >= 51) {
    var aqitext = "ค่า AQI = "+aqi;
    var aqidecs = "คุณภาพอากาศปานกลาง";
    var aqicolor = "#c6af00";
  }
  else{
    var aqitext = "ค่า AQI = "+aqi;
    var aqidecs = "คุณภาพอากาศดี";
    var aqicolor = "#049b1b";
  }
            //Reply
            var mess = [{
        "type": "flex",
        "altText": "ค่าดัชนีคุณภาพอากาศ",
        "contents": {
        "type": "bubble",
        "body": {
          "type": "box",
          "layout": "vertical",
          "spacing": "md",
          "contents": [
      {
          "type": "text",
          "align": "center",
          "color": aqicolor,
          "text": " พื้นที่ : "+name
      },
      {
          "type": "text",
          "align": "center",
          "color": aqicolor,
          "text": "สภาพอากาศ : "+main
      },
      {
          "type": "text",
          "align": "center",
          "color": aqicolor,
          "text": "รายละเอียด : "+desc
      },
      {
          "type": "text",
          "align": "center",
          "color": aqicolor,
          "text": "อุณหภูมิ : "+temp
      },
      {
          "type": "text",
          "align": "center",
          "color": aqicolor,
          "text": aqitext
      },
      {
          "type": "text",
          "align": "center",
          "color": aqicolor,
          "text": aqidecs
      },
                        {
          "type": "text",
          "align": "center",
          "color": aqicolor,
          "text": city
      },
                        {
          "type": "text",
          "align": "center",
          "color": aqicolor,
          "text": time
      }
        ]
        }
        }
        }
];
            replyMsg(replyToken, mess, channelToken);
            }
            //**//
            break;
          case 'join':
            //replyMsg(replyToken, 'Bot！Hello！', channelToken);
            break;
          case 'leave':
            //replyMsg(replyToken, 'Good Bye！', channelToken);
            break;
          case 'memberLeft':
            //replyMsg(replyToken, 'Bot！Bye！', channelToken);
            break;
          case 'memberJoined':
            //replyMsg(replyToken, 'Bot！Hello~', channelToken);
            break;
          case 'follow':
          var mess = [          {
        "type": "flex",
        "altText": "Hello!!",
        "contents": {
        "type": "bubble",
        "body": {
          "type": "box",
          "layout": "vertical",
          "spacing": "md",
          "contents": [
        {
          "type": "text",
          "align": "center",
          "color": "#049b1b",
          "text": "สวัสดีครับพี่ "+displayName
        },
        {
        "type": "button",
        "style": "primary",
        "action": {
          "type": "message",
          "label": "วิธีการใช้งานบอท",
          "text": "ช่วยเหลือ"
        }
        }
        ]
        }
        }
        }];
            replyMsg(replyToken, mess, channelToken);
            break;
          case 'unfollow':
          var mess = [{'type': 'text', 'text': 'bye'}];
            replyMsg(replyToken, mess, channelToken);
            break;
          default:
            break;
        }
      }
    }
  } catch(ex) {
  }
}

var LineHelpers = (function (helpers) {
  'use strict';
  helpers.getSourceId = function (source) {
    try {
      switch (source.type) {
        case 'user':
          return source.userId;
          break;
        case 'group':
          return source.groupId;
          break;
        case 'room':
          return source.roomId;
          break;
        default:
          break;
      }
    } catch (ex) {
    }
  }; 
  return helpers;
})(LineHelpers || {});