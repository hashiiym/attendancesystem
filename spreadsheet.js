function doPost(e) {
  var ss = SpreadsheetApp.openById("YOUR_SPREADSHEET_ID");

  var registrySheet = ss.getSheetByName("Card_Registry");
  var logSheet = ss.getSheetByName("Attendance_Log");

  var uid = e.parameter.uid;
  if (!uid) {
    return ContentService.createTextOutput("UID Missing");
  }

  uid = uid.toString().trim().toUpperCase();

  var data = registrySheet.getDataRange().getValues();
  var found = false;
  var name = "";
  var roll = "";

  for (var i = 1; i < data.length; i++) {
    if (data[i][0].toString().toUpperCase() === uid) {
      name = data[i][1];
      roll = data[i][2];
      found = true;
      break;
    }
  }

  if (!found) {
    return ContentService.createTextOutput("Card Not Registered");
  }

  var now = new Date();
  var date = Utilities.formatDate(now, "Asia/Kolkata", "yyyy-MM-dd");
  var time = Utilities.formatDate(now, "Asia/Kolkata", "HH:mm:ss");

  logSheet.appendRow([name, uid, roll, date, time]);

  return ContentService.createTextOutput("Attendance Marked");
}
