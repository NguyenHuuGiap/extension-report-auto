// function renderImage(content) {
//   document.getElementById('content').innerHTML = content;
// }
//
// async function getGifUrl() {
//   debugger
//   let tag = document.getElementById('tag').value;
//   let url = 'https://api.giphy.com/v1/gifs/random?api_key=6Pgh4LEOfu6icOqx90WJfxFuOcjPabPG&tag='+tag;
//   let result = await fetch(url);
//   let jsonResult = await result.json();
//   return jsonResult.data;
// }
//
// document.getElementById('btn-add-cw').addEventListener('click', async () => {
//   renderImage('<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>');
//   var imageData = await getGifUrl();
//   renderImage('<a href="' + imageData.url + '" target="_blank"><img class="image img-responsive img-rounded" src="' + imageData.fixed_height_small_url + '" /></a>');
// });
// $(function () {
//     $("#btn-add-cw").click(function () {
//         $('.claim-button').click()
//         console.log("done");
//     });
// });
$(function () {
    // setInterval(function(){ runscript(); }, 300000);
    setTimeout(
        function() {
            runscript();
        },
        5000
    );
    chrome.tabs.onUpdated.addListener(function(tabId, object, tab) {
        if(object.url != undefined && (object.url.split('/')[2] == 'identity.bap.jp')){
            afterTabChange()
        }
    });
});


function runscript(){
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    // if((hour == 7 && 59 >= minute && minute >= 20) || (hour == 17 && 10 <= minute && minute <= 45)){
        chrome.tabs.executeScript(null, { file: "jquery.min.js" }, function() {
            chrome.tabs.executeScript(null, { file: "report.js"});
        });
    // }
}

function afterTabChange() {
    chrome.tabs.executeScript(null, { file: "jquery.min.js" }, function() {
        chrome.tabs.executeScript(null, { file: "after_tabs_change.js"});
    });
}