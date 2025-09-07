function initializeSeats() {
  Object.keys(PERFORMANCE_SHEETS).forEach(timeslot => {
    const sheetIds = PERFORMANCE_SHEETS[timeslot];
    const ss = SpreadsheetApp.openById(sheetIds.seats);
    const sheet = ss.getSheetByName('Seats') || ss.insertSheet('Seats');
    sheet.clear();
    sheet.appendRow(['行','列','状態','予約者','チェックイン']);
    const rows = ['A','B','C','D','E'], cols = 12;
    for (let r = 0; r < rows.length; r++) {
      for (let c = 1; c <= cols; c++) {
        sheet.appendRow([rows[r], c, "空", "", ""]);
      }
    }
  });
}