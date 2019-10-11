var url = window.location.href;
var sitesToSkip = ["youtube", "kissanime", "animeflix"];
var regex = new RegExp(sitesToSkip.join("|"), "i");
var skipSite = regex.test(url);
if (!skipSite) {
    var elem = document.getElementById("5oLVMexlQNYUMMmO");
    if (elem === null) {
        var style = document.createElement("style");
        style.setAttribute("id", "5oLVMexlQNYUMMmO");
        style.setAttribute("media", "screen");
        style.innerHTML = "html::before {" +
                "content: '' !important;" +
                "z-index: 100000000000000 !important;" +
                "pointer-events: none !important;" +
                "position: fixed !important;" +
                "left: 0 !important;" +
                "top: 0 !important;" +
                "width: 100% !important;" +
                "height: 100% !important;" +
                "background-color: rgba(0, 0, 0, 0.15) !important;" +
            "};";
        document.documentElement.appendChild(style);
    }
}