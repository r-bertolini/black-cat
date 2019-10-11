chrome.tabs.executeScript(null, { code:
  'var elem = document.getElementById("5oLVMexlQNYUMMmO");' +
  'if (elem !== null && elem.innerHTML !== "") {' +
    'elem.innerHTML = "";' +
  '} else {' +
    'if (elem !== null) {' +
      'document.documentElement.removeChild(elem);' +
    '}' +
    'var style = document.createElement("style");' +
    'style.setAttribute("id", "5oLVMexlQNYUMMmO");' +
    'style.setAttribute("media", "screen");' +
    'style.innerHTML = "html:before {' +
        'content: \' \'; ' +
        'z-index: 100000000000000; ' +
        'pointer-events: none; ' +
        'position: fixed; ' +
        'left: 0; ' +
        'top: 0; ' +
        'width: 100%; ' +
        'height: 100%; ' +
        'background-color: rgba(0, 0, 0, 0.15); ' +
      '}";' +
    'document.documentElement.appendChild(style);' +
  '}'
});
window.close();