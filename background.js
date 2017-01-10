//available only in background environment
chrome.contextMenus.create({
    title:"Twitter Social Toolkit",
    contexts:["selection"],
    onclick:myfunction 
});

function myfunction(selectedText){
    //alert(selectedText.selectionText);
    chrome.tabs.create({url:"https://twitter.com/intent/tweet?text="+selectedText.selectionText});
}