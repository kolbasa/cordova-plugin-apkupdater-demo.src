onDeviceReady(function () {

    ApkUpdater.onDownloadProgress(function (e) {
        console.log('Downloading ' + e.chunksWritten + ' of ' + e.chunks + ' (' + e.progress + '%)');
    });

    ApkUpdater.onUnzipProgress(function (e) {
        console.log('Unzipping: ' + e.progress + '%');
    });

    ApkUpdater.debug(function (e) {
        if (e.stack == null) {
            console.log(e.message);
        } else {
            console.error(e.message);
            console.error(e.stack);
        }
    });

});

addButtonClickListener('check', function () {
    ApkUpdater.check(
        'https://raw.githubusercontent.com/kolbasa/cordova-plugin-apkupdater-demo/master/update/manifest.json',
        function (oResp) {
            console.log('\nDownloaded manifest file:\n' + JSON.stringify(oResp, ' ', 2) + '\n\n');
        }
    );
});

addButtonClickListener('download', function () {
    ApkUpdater.download(
        function () {
            console.log('Update can be installed now.');
        },
        function (oResp) {
            console.error(oResp);
        }
    );
});

addButtonClickListener('backgroundDownload', function () {
    ApkUpdater.backgroundDownload(
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
    ApkUpdater.install(
        function (oResp) {
            //
        },
        function (oResp) {
            console.error(oResp);
        }
    );
});

addButtonClickListener('stop', function () {
    ApkUpdater.stop(
        function (oResp) {
            //
        },
        function (oResp) {
            console.error(oResp);
        }
    );
});

addButtonClickListener('reset', function () {
    ApkUpdater.reset(
        function () {
            console.log('Reset successfully.');
        },
        function (oResp) {
            console.error(oResp);
        }
    );
});