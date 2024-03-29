function onOpen() {
  const ui = SpreadsheetApp.getUi();
  const menu = ui.createMenu('AutoFill');
  menu.addItem('createNewUop', 'createNewUop')
  menu.addToUi();
}

function createNewUop() {
  //This value should be the id of your document template that we created in the last step
  const googleDocTemplate = DriveApp.getFileById('#');
  
  //This value should be the id of the folder where you want your completed documents stored
  const destinationFolder = DriveApp.getFolderById('#')
  //Here we store the sheet as a variable
  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName('Uop')
  
  //Now we get all of the values as a 2D array
  const rows = sheet.getDataRange().getValues();
  
  //Start processing each spreadsheet row
  rows.forEach(function(row, index){
    //Here we check if this row is the headers, if so we skip it
    if (index === 0) return;
    //Here we check if a document has already been generated by looking at 'Document Link', if so we skip it
    if (row[2]) return;
    //Using the row data in a template literal, we make a copy of our template document in our destinationFolder
    const copy = googleDocTemplate.makeCopy(`${row[4]}, ${row[5]} Umowa` , destinationFolder)
    //Once we have the copy, we then open it using the DocumentApp
    const doc = DocumentApp.openById(copy.getId())
    //All of the content lives in the body, so we get that for editing
    const body = doc.getBody();
    //In this line we do some friendly date formatting, that may or may not work for you locale
    //const friendlyDate = new Date(row[6]).toLocaleDateString();
   // const friendlyDate1 = new Date(row[59]).toLocaleDateString();
   // const friendlyDate2 = new Date(row[91]).toLocaleDateString();
    //const friendlyDate3 = new Date(row[102]).toLocaleDateString();
    //const friendlyDate4 = new Date(row[113]).toLocaleDateString();
   // const friendlyDate5 = new Date(row[124]).toLocaleDateString();
   // const friendlyDate6 = new Date(row[135]).toLocaleDateString();
    const friendlyDate = row[7] ? new Date(row[7]).toLocaleDateString() : '';
    const friendlyDate1 = row[60] ? new Date(row[60]).toLocaleDateString() : '';
    const friendlyDate2 = row[92] ? new Date(row[92]).toLocaleDateString() : '';
    const friendlyDate3 = row[103] ? new Date(row[103]).toLocaleDateString() : '';
    const friendlyDate4 = row[114] ? new Date(row[114]).toLocaleDateString() : '';
    const friendlyDate5 = row[124] ? new Date(row[124]).toLocaleDateString() : '';
    const friendlyDate6 = row[136] ? new Date(row[136]).toLocaleDateString() : '';
   // const friendlyDate7 = row[5] ? new Date(row[6]).toLocaleDateString() : '';

    
    //In these lines, we replace our replacement tokens with values from our spreadsheet row
    body.replaceText('{{id}}', row[1]);
    body.replaceText('{{nazwisko}}', row[4]);
    body.replaceText('{{imie}}', row[5]);
    body.replaceText('{{drugie}}', row[6]);
    body.replaceText('{{pesel}}', row[8]);
    body.replaceText('{{date}}', friendlyDate);
    body.replaceText('{{kod_pocztowy}}', row[13]);
    body.replaceText('{{tel}}', row[10]);
    body.replaceText('{{email}}', row[11]);
    body.replaceText('{{tel}}', row[12]);
   // body.replaceText('{{kod_pocztowy}}', row[13]);
    body.replaceText('{{adres}}', row[15]);
    body.replaceText('{{nr_domu}}', row[16]);
    body.replaceText('{{nr_lokalu}}', row[17]);
    body.replaceText('{{szkola}}', row[24]);
    body.replaceText('{{rok}}', row[25]);
    body.replaceText('{{zawod}}', row[26]);
    body.replaceText('{{spec}}', row[27]);
    body.replaceText('{{st}}', row[28]);
    body.replaceText('{{tytul_zawodowy}}', row[29]);
    body.replaceText('{{tytul_naukowy}}', row[30]);
    body.replaceText('{{kwalifikacje}}', row[31]);
    body.replaceText('{{prawo_jazdy}}', row[32]);
    body.replaceText('{{orzeczenie}}', row[34]);
    body.replaceText('{{pracodawca}}', row[36]);
    body.replaceText('{{zatrudnienie_okres}}', row[37]);
    body.replaceText('{{zajmowane_stanowisko}}', row[38]);
    body.replaceText('{{pracodawca2}}', row[40]);
    body.replaceText('{{zatrudnienie_okres2}}', row[41]);
    body.replaceText('{{zajmowane_stanowisko2}}', row[42]);
    body.replaceText('{{pracodawca3}}', row[44]);
    body.replaceText('{{zatrudnienie_okres3}}', row[45]);
    body.replaceText('{{zajmowane_stanowisko3}}', row[46]);
    body.replaceText('{{imie2}}', row[58]);
    body.replaceText('{{nazwisko2}}', row[59]);
    body.replaceText('{{data2}}', friendlyDate1);
    body.replaceText('{{pesel2}}', row[61]);
    body.replaceText('{{nfz2}}', row[62]);
    body.replaceText('{{kto2}}', row[63]);
    body.replaceText('{{ksztalci2}}', row[64]);
    body.replaceText('{{gospodarstwo2}}', row[65]);
    body.replaceText('{{imie3}}', row[90]);
    body.replaceText('{{nazwisko3}}', row[91]);
    body.replaceText('{{data3}}', friendlyDate2);
     /* body.replaceText('{{pesel3}}', row[93]);
    //body.replaceText('{{nfz3}}', row[93]);
  
    body.replaceText('{{pokr3}}', row[94]);
    body.replaceText('{{ksztalci3}}', row[95]);
    body.replaceText('{{gospodarstwo3}}', row[96]);
    body.replaceText('{{imie4}}', row[100]);
    body.replaceText('{{nazwisko4}}', row[101]);
    body.replaceText('{{data4}}', friendlyDate3);
    body.replaceText('{{pesel4}}', row[103]);
    body.replaceText('{{nfz4}}', row[104]);
    body.replaceText('{{pokr4}}', row[105]);
    body.replaceText('{{ksztalci4}}', row[106]);
    body.replaceText('{{gospodarstwo4}}', row[107]);
    body.replaceText('{{imie5}}', row[111]);
    body.replaceText('{{nazwisko5}}', row[112]);
    body.replaceText('{{data5}}', friendlyDate4);
    body.replaceText('{{pesel5}}', row[114]);
    body.replaceText('{{nfz5}}', row[115]);
    body.replaceText('{{pokr5}}', row[116]);
    body.replaceText('{{ksztalci5}}', row[117]);
    body.replaceText('{{gospodarstwo5}}', row[118]);
    body.replaceText('{{imie6}}', row[122]);
    body.replaceText('{{nazwisko6}}', row[123]);
    body.replaceText('{{data6}}', friendlyDate5);
    body.replaceText('{{pesel6}}', row[125]);
    body.replaceText('{{nfz6}}', row[126]);
    body.replaceText('{{pokr6}}', row[127]);
    body.replaceText('{{ksztalci6}}', row[128]);  
    body.replaceText('{{gospodarstwo6}}', row[129]);
    body.replaceText('{{imie7}}', row[133]);
    body.replaceText('{{nazwisko7}}', row[134]);
    body.replaceText('{{data7}}', friendlyDate6);
    body.replaceText('{{pesel7}}', row[136]);
    body.replaceText('{{nfz7}}', row[137]);
    body.replaceText('{{pokr7}}', row[138]);
    body.replaceText('{{ksztalci7}}', row[139]);  
    body.replaceText('{{gospodarstwo7}}', row[140]);
    body.replaceText('{{nazwa_banku}}', row[82]);
    body.replaceText('{{nr_rachunku}}', row[81]);
    body.replaceText('{{miasto}}', row[13]);
    body.replaceText('{{dowod}}', row[85]);
    body.replaceText('{{8h}}', row[67]);
    body.replaceText('{{wyrazam99}}', row[68]);
    body.replaceText('{{zamierzam99}}', row[69]);
    body.replaceText('{{zamierzam98}}', row[70]);
    body.replaceText('{{rodzic99}}', row[72]);
    body.replaceText('{{niep2}}', row[65]);
    body.replaceText('{{niep3}}', row[97]);
    body.replaceText('{{niep4}}', row[108]);
    body.replaceText('{{niep5}}', row[119]);
    body.replaceText('{{niep6}}', row[130]);
    body.replaceText('{{niep7}}', row[141]);
    body.replaceText('{{poza}}', row[54]);
    body.replaceText('{{rozlaka}}', row[55]);
    body.replaceText('{{tel_wy}}', row[182]);
    body.replaceText('{{st_p9}}', row[181]);
    body.replaceText('{{zasilki}}', row[179]);
    body.replaceText('{{rejestr}}', row[53]);
    
    body.replaceText('{{kod_pocztowy2}}', row[143]);
    body.replaceText('{{miasto2}}', row[144]);
    body.replaceText('{{gmina2}}', row[145]);
    body.replaceText('{{ulica2}}', row[146]);
    body.replaceText('{{nr_domu2}}', row[147]);
    body.replaceText('{{nr_lokalu2}}', row[148]);
    body.replaceText('{{kod_pocztowy3}}', row[179]);
    body.replaceText('{{miasto3}}', row[150]);
    body.replaceText('{{gmina3}}', row[151]);
    body.replaceText('{{ulica3}}', row[152]);
    body.replaceText('{{nr_domu3}}', row[153]);
    body.replaceText('{{nr_lokalu3}}', row[154]);
    body.replaceText('{{kod_pocztowy4}}', row[155]);
    body.replaceText('{{miasto4}}', row[156]);
    body.replaceText('{{gmina4}}', row[154]);
    body.replaceText('{{nr_domu4}}', row[158]);
    body.replaceText('{{nr_lokalu4}}', row[159]);
    body.replaceText('{{kod_pocztowy5}}', row[160]);
    body.replaceText('{{miasto5}}', row[161]);
    body.replaceText('{{gmina5}}', row[162]);
    body.replaceText('{{nr_domu5}}', row[163]);
    body.replaceText('{{nr_lokalu5}}', row[164]);
    body.replaceText('{{ulica5}}', row[165]);
    body.replaceText('{{ulica4}}', row[166]);
    body.replaceText('{{kod_pocztowy6}}', row[167]);
    body.replaceText('{{miasto6}}', row[168]);
    body.replaceText('{{gmina6}}', row[169]);
    body.replaceText('{{ulica6}}', row[170]);
    body.replaceText('{{nr_domu6}}', row[171]);
    body.replaceText('{{nr_lokalu6}}', row[172]);
    body.replaceText('{{kod_pocztowy7}}', row[173]);
    body.replaceText('{{ulica7}}', row[174]);
    body.replaceText('{{gmina7}}', row[175]);
    body.replaceText('{{miasto7}}', row[176]);
    body.replaceText('{{nr_domu7}}', row[177]);
    body.replaceText('{{nr_lokalu7}}', row[178]);
*/

    //We make our changes permanent by saving and closing the document
    doc.saveAndClose();
    //Store the url of our new document in a variable
    const url = doc.getUrl();
    //Write that value back to the 'Document Link' column in the spreadsheet. 
    sheet.getRange(index + 1, 3).setValue(url)
    
  })
  
}
