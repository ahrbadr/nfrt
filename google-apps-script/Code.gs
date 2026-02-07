/**
 * NFRT Waitlist - Google Apps Script
 * 
 * 1. Create a Google Sheet with headers in row 1: Email | Timestamp
 * 2. Extensions > Apps Script
 * 3. Paste this code and save
 * 4. Deploy > New deployment > Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the web app URL into script.js (GOOGLE_SHEETS_WEB_APP_URL)
 */

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    const email = data.email || '';
    
    if (email) {
      sheet.appendRow([email, new Date()]);
      return ContentService
        .createTextOutput(JSON.stringify({ result: 'success' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    throw new Error('No email provided');
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
