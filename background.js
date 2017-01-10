//alert(document.location);
chrome.runtime.onMessage.addListener(function(response,sender,sendresponse){
        alert(response);
});