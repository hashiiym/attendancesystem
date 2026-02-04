function doGet(e) {

  // 🔴 UID check
  if (!e.parameter.uid) {
    return sendJSON("ERROR", "UID missing");
  }

  var uid = e.parameter.uid.trim().toUpperCase();

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var cardSheet = ss.getSheetByName("CardHolders");
  var attSheet = ss.getSheetByName("Attendance");

  var today = Utilities.formatDate(new Date(), "Asia/Kolkata", "yyyy-MM-dd");
  var timeNow = Utilities.formatDate(new Date(), "Asia/Kolkata", "HH:mm:ss");

  // 🔍 Find UID in CardHolders
  var cardData = cardSheet.getRange(2, 1, cardSheet.getLastRow(), 2).getValues();
  var name = "";

  for (var i = 0; i < cardData.length; i++) {
    if (cardData[i][0].toString() === uid) {
      name = cardData[i][1];
      break;
    }
  }

  if (name === "") {
    return sendJSON("UNKNOWN", "Card not registered");
  }

  // 🚫 Duplicate check (once per day)
  var attData = attSheet.getRange(2, 1, attSheet.getLastRow(), 4).getValues();

  for (var j = 0; j < attData.length; j++) {
    if (attData[j][0] === today && attData[j][2] === uid) {
      return sendJSON("DUPLICATE", name);
    }
  }

  // ✅ Add attendance row
  attSheet.appendRow([today, timeNow, uid, name]);

  return sendJSON("REGISTERED", name);
}

function sendJSON(status, message) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: status,
      name: message
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
