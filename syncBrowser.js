//SYNC 
(function () {
    console.log("syncBrowser");
    var pageHash = 0;
    var pingCount = 0;
    function ping() {
        var xhr = new XMLHttpRequest;
        xhr.open('GET', '?ping&' + pingCount++);
        xhr.onload = function () {
            if (!pageHash)
                pageHash = xhr.response.length; //set length
            if (pageHash != xhr.response.length)
                location.reload(); //refresh updated page
        };
        xhr.send();
    }
    setInterval(ping, 3000); //3 seconding loop
})(); 
// /SYNC