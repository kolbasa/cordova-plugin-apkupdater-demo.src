function onDeviceReady(fn) {
    document.addEventListener('deviceready', fn, false);
}

function printAppVersion() {
    cordova.getAppVersion.getVersionNumber().then(function (version) {
        console.log('Installed App-Version: ' + version);
    });
}

onDeviceReady(function() {
    window.navigator.splashscreen.hide();
    printAppVersion();
})

function addButtonClickListener(id, fn) {
    return document.getElementById(id).addEventListener('click', fn);
}

var initialHref = window.location.href;
document.getElementById('reload-app').addEventListener('click', function () {
    window.navigator.splashscreen.show();

    setTimeout(function () {
        window.location = initialHref;
    }, 1000);
});

