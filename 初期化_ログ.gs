// 「ParentApplications」（ログ用）シート初期化関数（全時間帯対応）
function initializeLogSheet() {
  Object.keys(PERFORMANCE_SHEETS).forEach(timeslot => {
    const sheetIds = PERFORMANCE_SHEETS[timeslot];
    const ss = SpreadsheetApp.openById(sheetIds.log);
    const sheet = ss.getSheetByName('ParentApplications') || ss.insertSheet('ParentApplications');
    sheet.clear();
    sheet.appendRow(['タイムスタンプ', 'クラス', '氏名', 'メール', '座席リスト', '時間帯']);
  });
}