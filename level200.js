// TODO: Modify this function
function generateShortCode(storeId, transactionId) {
    // Logic goes here
    var valC = 15346;
    var s = Math.floor(Math.random() * (90 - 10 + 1)) + 10;
    var val = valC + s;
    var encode = (storeId * val) + transactionId;
    var ghex = encode.toString(16);
    console.log(ghex);
    var l = 7 - ghex.length;
    var arrR = ['R','T','Y','X','O','K'];
    for(let i = 1;i<=l;i++) {
      ghex += arrR[Math.floor(  Math.random() * (90 - 1 + 1) + 1)%arrR.length];
    }
    console.log(ghex);
    console.log(ghex + s.toString(16));
    return ghex + s.toString(16);
}

// TODO: Modify this function
function decodeShortCode(shortCode) {
    // Logic goes here
    var valC = 15346;
    var gC = "";
  var arrR = ['R','T','Y','X','O','K'];
    for(let i = 0;i<7;i++) {
      if(arrR.includes(shortCode[i])) {
        break;
      }
      gC += shortCode[i];
    }
  var l = shortCode[7] + shortCode[8];
  var l = parseInt(l,16);
  var gC = parseInt(gC,16);
  var newV = valC + l;
  console.log(Math.floor(gC/newV));
  console.log(gC%newV);
    
  
    return {
        storeId: Math.floor(gC/newV), // store id goes here,
        shopDate: new Date(), // the date the customer shopped,
        transactionId: gC%newV, // transaction id goes here
    };
}

// ------------------------------------------------------------------------------//
// --------------- Don't touch this area, all tests have to pass --------------- //
// ------------------------------------------------------------------------------//
function RunTests() {

    var storeIds = [175, 42, 0, 9]
    var transactionIds = [9675, 23, 123, 7]

    storeIds.forEach(function (storeId) {
        transactionIds.forEach(function (transactionId) {
            var shortCode = generateShortCode(storeId, transactionId);
            var decodeResult = decodeShortCode(shortCode);
            $("#test-results").append("<div>" + storeId + " - " + transactionId + ": " + shortCode + "</div>");
            AddTestResult("Length <= 9", shortCode.length <= 9);
            AddTestResult("Is String", (typeof shortCode === 'string'));
            AddTestResult("Is Today", IsToday(decodeResult.shopDate));
            AddTestResult("StoreId", storeId === decodeResult.storeId);
            AddTestResult("TransId", transactionId === decodeResult.transactionId);
        })
    })
}

function IsToday(inputDate) {
    // Get today's date
    var todaysDate = new Date();
    // call setHours to take the time out of the comparison
    return (inputDate.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0));
}

function AddTestResult(testName, testResult) {
    var div = $("#test-results").append("<div class='" + (testResult ? "pass" : "fail") + "'><span class='tname'>- " + testName + "</span><span class='tresult'>" + testResult + "</span></div>");
}