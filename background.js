chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    chrome.tabs.executeScript(null, { code:
        'var elem = document.getElementById("5oLVMexlQNYUMMmO");' +
        'if (elem === null) {' +
            'var style = document.createElement("style");' +
            'style.setAttribute("id", "5oLVMexlQNYUMMmO");' +
            'style.setAttribute("color", "black");' +
            'style.innerHTML = "123";' +
            'document.documentElement.appendChild(style);' +
        '}'
    });
});