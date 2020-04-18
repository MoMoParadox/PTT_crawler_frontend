$(document).ready(function() {
    $('#d1').css("display", "none");
    $('#d2').css("display", "none");
});


// $('#btn').onclick = "search()";

async function search() {
    console.log("start search");
    board = await document.getElementById('board').value;
    kw = document.getElementById('kw').value;

    if (board == "") board = "default";
    if (kw == "") kw = "default";
    console.log("board: %s, kw: %s", board, kw);

    // 處理 data
    var xhr1 = new XMLHttpRequest;
    var url1 = "https://cors-anywhere.herokuapp.com/https://crawler4ptt.herokuapp.com/search/" + board + "/" + kw;
    xhr1.open('GET', url1);
    xhr1.responseType = 'json';
    xhr1.send();
    xhr1.onload = await function() {
        let analyze_data = xhr1.response;
        searchdis(analyze_data);
    }
}

function searchdis(analyze_data) {
	$('#d1').css("display", "block");
	$('#d2').css("display", "block");
	console.log(analyze_data);

    result = analyze_data[0].posts;
    hot = analyze_data[0].hot_issue;
    wc_url = analyze_data[0].wc_gossip;
    
    console.log("url:%s\n hot:%s\n result:%s", wc_url, hot, result);
    document.getElementById('result').innerHTML = result;
    document.getElementById('hot').innerHTML = hot;
    document.getElementById('wc').src = wc_url;
}