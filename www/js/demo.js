/**
 * @param {string} message
 * @param {object=} data
 */
function formatLog(message, data) {
    console.log(message + (data == null ? '' : (':' + '\n' + JSON.stringify(data, ' ', 2))) + '\n');
}

/**
 * @param {object} error
 */
function formatError(error) {
    console.error(error.message + '\n' + error.stack + '\n');
}

addButtonClickListener('getInstalledVersion', function () {
    ApkUpdater.getInstalledVersion(
        function (resp) {
            formatLog('Currently installed version', resp);
        },
        formatError
    );
});

addButtonClickListener('download', function () {
    console.log('Starting download...');
    ApkUpdater.download(
        'https://raw.githubusercontent.com/kolbasa/cordova-plugin-apkupdater-demo/master/update/update.zip',
        {
            zipPassword: 'aDzEsCceP3BPO5jy',
            onDownloadProgress: function (e) {
                console.log('Downloading: ' + e.progress + '%');
            },
            onUnzipProgress: function (e) {
                console.log('Unzipping: ' + e.progress + '%');
            }
        },
        function (resp) {
            formatLog('Update can be installed now', resp);
        },
        formatError
    );
});

addButtonClickListener('stop', function () {
    ApkUpdater.stop(formatLog, formatError);
});

addButtonClickListener('getDownloadedUpdate', function () {
    ApkUpdater.getDownloadedUpdate(
        function (resp) {
            formatLog('Cached update', resp);
        },
        formatError
    );
});

addButtonClickListener('reset', function () {
    ApkUpdater.reset(formatLog, formatError);
});

addButtonClickListener('canRequestPackageInstalls', function () {
    ApkUpdater.canRequestPackageInstalls(formatLog, formatError);
});

addButtonClickListener('openInstallSetting', function () {
    ApkUpdater.openInstallSetting(formatLog, formatError);
});

addButtonClickListener('install', function () {
    ApkUpdater.install(formatLog, formatError);
});

addButtonClickListener('requestRootAccess', function () {
    ApkUpdater.requestRootAccess(formatLog, formatError);
});

addButtonClickListener('isDeviceRooted', function () {
    ApkUpdater.isDeviceRooted(formatLog, formatError);
});

addButtonClickListener('rootInstall', function () {
    ApkUpdater.rootInstall(formatLog, formatError);
});

addButtonClickListener('ownerInstall', function () {
    ApkUpdater.ownerInstall(formatLog, formatError);
});

addButtonClickListener('isDeviceOwner', function () {
    ApkUpdater.isDeviceOwner(formatLog, formatError);
});