/**
 * Lumina Finance - Google Sheets Backend
 * 
 * CARA PENGGUNAAN:
 * 1. Buka Google Sheets baru di https://sheets.google.com
 * 2. Klik Extensions > Apps Script
 * 3. Hapus semua kode di editor, lalu paste semua kode ini
 * 4. Klik tombol "Deploy" > "New deployment"
 * 5. Pilih type "Web app"
 * 6. Set "Execute as" = "Me"
 * 7. Set "Who has access" = "Anyone"
 * 8. Klik "Deploy", lalu izinkan akses jika diminta
 * 9. Salin URL web app yang diberikan
 * 10. Paste URL tersebut di halaman Settings Lumina Finance
 * 
 * STRUKTUR SPREADSHEET:
 * Sheet akan dibuat otomatis dengan kolom:
 * A = id | B = type | C = amount | D = description | E = category | F = date | G = createdAt
 */

const SHEET_NAME = 'Transactions';

function getOrCreateSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['id', 'type', 'amount', 'description', 'category', 'date', 'createdAt']);
    sheet.getRange(1, 1, 1, 7).setFontWeight('bold').setBackground('#e4e1ff');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

/**
 * GET: Ambil semua transaksi
 */
function doGet(e) {
  try {
    const sheet = getOrCreateSheet();
    const data = sheet.getDataRange().getValues();
    
    if (data.length <= 1) {
      return jsonResponse({ success: true, transactions: [] });
    }
    
    const headers = data[0];
    const transactions = [];
    
    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      if (!row[0]) continue; // skip empty rows
      const tx = {};
      headers.forEach((h, idx) => {
        let val = row[idx];
        // Convert date objects to string
        if (val instanceof Date) {
          val = Utilities.formatDate(val, Session.getScriptTimeZone(), 'yyyy-MM-dd');
        }
        tx[h] = val;
      });
      // Ensure amount is number
      tx.amount = Number(tx.amount) || 0;
      transactions.push(tx);
    }
    
    return jsonResponse({ success: true, transactions: transactions });
  } catch (err) {
    return jsonResponse({ success: false, error: err.message });
  }
}

/**
 * POST: Tambah transaksi baru
 */
function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    const sheet = getOrCreateSheet();
    
    if (payload.action === 'create') {
      const tx = payload.transaction;
      sheet.appendRow([tx.id, tx.type, tx.amount, tx.description, tx.category, tx.date, tx.createdAt]);
      return jsonResponse({ success: true, transaction: tx });
    }
    
    if (payload.action === 'update') {
      const tx = payload.transaction;
      const data = sheet.getDataRange().getValues();
      for (let i = 1; i < data.length; i++) {
        if (data[i][0] === tx.id) {
          sheet.getRange(i + 1, 1, 1, 7).setValues([[tx.id, tx.type, tx.amount, tx.description, tx.category, tx.date, tx.createdAt]]);
          return jsonResponse({ success: true, transaction: tx });
        }
      }
      return jsonResponse({ success: false, error: 'Transaction not found' });
    }
    
    if (payload.action === 'delete') {
      const id = payload.id;
      const data = sheet.getDataRange().getValues();
      for (let i = 1; i < data.length; i++) {
        if (data[i][0] === id) {
          sheet.deleteRow(i + 1);
          return jsonResponse({ success: true, deleted: id });
        }
      }
      return jsonResponse({ success: false, error: 'Transaction not found' });
    }
    
    if (payload.action === 'sync') {
      // Full sync: replace all data
      const txs = payload.transactions;
      // Clear existing data (keep header)
      const lastRow = sheet.getLastRow();
      if (lastRow > 1) {
        sheet.deleteRows(2, lastRow - 1);
      }
      // Write all
      if (txs.length > 0) {
        const rows = txs.map(tx => [tx.id, tx.type, tx.amount, tx.description, tx.category, tx.date, tx.createdAt]);
        sheet.getRange(2, 1, rows.length, 7).setValues(rows);
      }
      return jsonResponse({ success: true, synced: txs.length });
    }
    
    return jsonResponse({ success: false, error: 'Unknown action' });
  } catch (err) {
    return jsonResponse({ success: false, error: err.message });
  }
}

function jsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}