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



// $(function () {
//     // chrome.tabs.onUpdated.addListener(function(tabId, object, tab) {
//     //     background_img();
//     // });
//     setInterval(function(){ runscript(); }, 300000);
//     setInterval(
//         function() {
//             runscript();
//         },
//         600000
//     );
//     chrome.tabs.onUpdated.addListener(function(tabId, object, tab) {
//         if(object.url != undefined && (object.url.split('/')[2] == 'identity.bap.jp')){
//             afterTabChange()
//         }else{
//             if(object.url != undefined && (object.url.split('/')[3] == 'personal_timesheet')){
//                 chrome.tabs.executeScript(null, { file: "jquery.min.js" }, function() {
//                     chrome.tabs.executeScript(null, { code: "setTimeout(function(){$('.claim-button').click()}, 5000)" });
//                 });
//             }
//         }
//     });
// });


// function runscript(){
//     var date = new Date();
//     var hour = date.getHours();
//     var minute = date.getMinutes();
//     if((hour == 7 && 59 >= minute && minute >= 20) || (hour == 17 && 10 <= minute && minute <= 55)){
//         chrome.tabs.executeScript(null, { file: "jquery.min.js" }, function() {
//             chrome.tabs.executeScript(null, { file: "report.js"});
//         });
//     }
// }

// function afterTabChange() {
//     chrome.tabs.executeScript(null, { file: "jquery.min.js" }, function() {
//         chrome.tabs.executeScript(null, { file: "after_tabs_change.js"});
//     });
// }

// function background_img() {
//     chrome.tabs.executeScript(null, { file: "jquery.min.js" }, function() {
//         chrome.tabs.executeScript(null, { file: "img_bg.js"});
//     });
// }

$(function () {
    setDataScroll()
    var old_page = localStorage.getItem("old_page");
    getHtml(old_page);
    $(document).scrollTop(111);
    $('#wrap').css('background-color', "#8f8f90")
    // setTimeout(function(){ setScroll(); }, 1000);
    // setInterval(function(){ console.log(localStorage.getItem("scroll"))}, 3600);
    // console.log(localStorage.getItem("scroll"));
    $(document).on('click', '.submit-page', function() {
        var old_page = localStorage.getItem("old_page");
        var page = $('#page').val();
        localStorage.setItem("old_page", page);
        getHtml(page);
    });
    
    $(document).on('click', '.next-page', function() {
        var old_page = localStorage.getItem("old_page");
        var next_page = Number(old_page) + 1;
        localStorage.setItem("old_page", next_page);
        getHtml(next_page);
    })
    
    $(document).on('click', '.pre-page', function() {
        var old_page = localStorage.getItem("old_page");
        var pre_page = Number(old_page) - 1;
        localStorage.setItem("old_page", pre_page);
        getHtml(pre_page);
    })

});

function getHtml(page) {
    $.ajax({
        url: 'https://truyenfull.vn/de-ba/chuong-' + page,
        type: 'GET',
        success: function(data) {
            $('.container-rp').html(data);
            $('html, body').animate({ scrollTop: 0 }, 'slow');
            $('#wrap').css('background-color', "#8f8f90")

        }
    });
}

function setScroll() {
    setInterval(function(){ localStorage.setItem("scroll", $(document).scrollTop()); }, 3600);
}

function setDataScroll() {
    $('html, body').scroll(function() {
        console.log("scrollHeight", $(this).prop('scrollHeight'))
        console.log("Height", $(this).scrollTop())
        // if ($(this).scrollTop() === $(this).prop('scrollHeight') - $(this).innerHeight() && $(this).children().data('reload')) {
        //   requestChangeList($(this).children().data('path'), Number($(this).children().data('page'))+1)
        // }
    });
}
