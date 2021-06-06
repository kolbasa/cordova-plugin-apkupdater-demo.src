onDeviceReady(function () {
    cordova.plugins.apkupdater.setObserver(
        {
            downloadProgress: function (nPercentage, nBytes, nBytesWritten, nChunks, nChunksWritten) {
                console.log('Downloading ' + nChunksWritten + ' of ' + nChunks + ' (' + nPercentage + '%)');
            },
            unzipProgress: function (nPercentage) {
                console.log('Unzipping: ' + nPercentage + '%');
            },
            event: function (sEvent) {
                console.log(sEvent);
            },
            exception: function (sMessage, stack) {
                console.error(sMessage);
                if (stack != null) {
                    console.error(stack);
                }
            }
        }
    );
});

addButtonClickListener('check', function () {
    cordova.plugins.apkupdater.check(
        'https://raw.githubusercontent.com/kolbasa/cordova-plugin-apkupdater-demo/master/update/manifest.json',
        function (oResp) {
            console.log('\nDownloaded manifest file:\n' + JSON.stringify(oResp, ' ', 2) + '\n\n');
        }
    );
});

addButtonClickListener('download', function () {
    cordova.plugins.apkupdater.download(
        function () {
            console.log('Update can be installed now.');
        },
        function (oResp) {
            console.error(oResp);
        }
    );
});

addButtonClickListener('backgroundDownload', function () {
    cordova.plugins.apkupdater.backgroundDownload(
        5000, // Mobile speed
        function () {
            console.log('Update can be installed now.');
        },
        function (oResp) {
            console.error(oResp);
        }
    );
});

addButtonClickListener('install', function () {
    cordova.plugins.apkupdater.install(
        function (oResp) {
            //
        },
        function (oResp) {
            console.error(oResp);
        }
    );
});

addButtonClickListener('stop', function () {
    cordova.plugins.apkupdater.stop(
        function (oResp) {
            //
        },
        function (oResp) {
            console.error(oResp);
        }
    );
});

addButtonClickListener('reset', function () {
    cordova.plugins.apkupdater.reset(
        function () {
            console.log('Reset successfully.');
        },
        function (oResp) {
            console.error(oResp);
        }
    );
});