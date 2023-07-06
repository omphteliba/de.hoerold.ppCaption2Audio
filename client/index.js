var csInterface = new CSInterface();

function openTab(tabId) {
    var tabs = document.getElementsByClassName('tab');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    }
    document.getElementById(tabId).style.display = 'block';
}

// Simple encryption function
function encrypt(text) {
    var encryptedText = window.btoa(text); // Base64 encoding
    return encryptedText;
}

// Simple decryption function
function decrypt(encryptedText) {
    var text = window.atob(encryptedText); // Base64 decoding
    return text;
}

function saveSettings() {
    var language = document.getElementById('language').value;
    var deeplKey = encrypt(document.getElementById('deepl-key').value);
    var labs11Key = encrypt(document.getElementById('11labs-key').value);

    var settings = {
        language: language,
        deeplKey: deeplKey,
        labs11Key: labs11Key
    };

    var settingsStr = JSON.stringify(settings);

    var script = "try {" +
                 "    var folder = new Folder('~/Documents/ppCaption2Audio');" +
                 "    if (!folder.exists) {" +
                 "        folder.create();" +
                 "    }" +
                 "    var file = new File(folder.fsName + '/settings.txt');" +
                 "    file.open('w');" +
                 "    file.write('" + settingsStr + "');" +
                 "    file.close();" +
                 "    'Settings saved successfully.';" +
                 "} catch (error) {" +
                 "    'Error: ' + error.toString();" +
                 "}";

    csInterface.evalScript(script, function(result) {
        console.log(result); // Log the result
    });
}

window.onload = function() {
    var script = "try {" +
                 "    var folder = new Folder('~/Documents/ppCaption2Audio');" +
                 "    if (!folder.exists) {" +
                 "        folder.create();" +
                 "    }" +
                 "    var file = new File(folder.fsName + '/settings.txt');" +
                 "    file.open('r');" +
                 "    var settingsStr = file.read();" +
                 "    file.close();" +
                 "    settingsStr;" +
                 "} catch (error) {" +
                 "    'Error: ' + error.toString();" +
                 "}";

    csInterface.evalScript(script, function(result) {
        if (result.startsWith('Error:')) {
            console.log(result); // Log the error
        } else {
            var settings = JSON.parse(result);

            if (settings.language) {
                document.getElementById('language').value = settings.language;
            }
            if (settings.deeplKey) {
                document.getElementById('deepl-key').value = decrypt(settings.deeplKey);
            }
            if (settings.labs11Key) {
                document.getElementById('11labs-key').value = decrypt(settings.labs11Key);
            }
        }
    });
};
