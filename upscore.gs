function doPost(e) {
  var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/150IPBmd2mntHubGU2nb-y0WAwe7QvMUjdJkgJZCC4Bs/edit#gid=0");
  var sheet = ss.getSheetByName("data");
  var data = JSON.parse(e.postData.contents);
  var score = data.score;
  var uid = data.thuid;
  var name = data.thname;
  var ssuid = sheet.getRange(2, 1, sheet.getLastRow(),sheet.getLastColumn()).getValues();
  var ssscore = sheet.getRange(2, 2, sheet.getLastRow(),sheet.getLastColumn()).getValues();
  var duplicate = false;
  for(var i = 0;i<ssuid.length; i++){
      if(uid == ssuid[i][0]){
        duplicate = true;
        var xscore = sheet.getRange(i+2,2).getValue();
        if(xscore <= score){
        sheet.getRange(i+2,2).setValue(score);
        }
        else{}
        }
        }
        if (!duplicate) {
        sheet.appendRow([uid, score, name]);
        }
}
