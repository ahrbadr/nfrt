# NFRT Waitlist → Google Sheets Setup

Follow these steps to connect the waitlist form to Google Sheets.

## 1. Create a Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com)
2. Create a new blank spreadsheet
3. In row 1, add headers: **Email** | **Timestamp**

## 2. Add the Apps Script

1. In your Google Sheet: **Extensions** → **Apps Script**
2. Delete any default code in `Code.gs`
3. Copy the contents of `Code.gs` from this folder and paste into the editor
4. Click **Save** (or Ctrl+S)

## 3. Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon → **Web app**
3. Set:
   - **Description:** NFRT Waitlist
   - **Execute as:** Me (your account)
   - **Who has access:** Anyone
4. Click **Deploy**
5. Authorize the app when prompted (Review permissions → your account → Allow)
6. **Copy the Web app URL** (looks like `https://script.google.com/macros/s/.../exec`)

## 4. Update Your Site

1. Open `script.js` in your nfrt project
2. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL` with your Web app URL:

```js
const GOOGLE_SHEETS_WEB_APP_URL = 'https://script.google.com/macros/s/YOUR_ID/exec';
```

3. Commit and push. New waitlist signups will be saved to your Google Sheet.
