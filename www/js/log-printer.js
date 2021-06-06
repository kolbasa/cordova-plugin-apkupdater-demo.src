var log = [];

var autoScroll = true;

function normalizeLog(message) {
    return message.replace(/(?:\r\n|\r|\n)/g, '<br>');
}

var consoleLog = console.log;
console.log = function (message) {
    log.push({
        message: normalizeLog(message)
    });
    consoleLog(message);
    pushLog();
};

var consoleError = console.error;
console.error = function (message) {
    log.push({
        isError: true,
        message: normalizeLog(message)
    });
    consoleError(message);
    pushLog();
};

function scrollLogToBottom() {
    document.getElementById('log-bottom').scrollIntoView(true);
}

var logContainer = document.getElementById('log');

function pushLog() {
    if (log.length > 2000) {
        log.shift();
    }
    logContainer.innerHTML = log.map(function (logEntry, nIndex) {
        return '<div class="' + (logEntry.isError ? 'stderr' : '') + '"' + ((nIndex === log.length - 1) ?
            ' id="log-bottom"' : '') + '>' + logEntry.message + '</div>';
    }).join('');
    if (autoScroll) {
        scrollLogToBottom();
    }
}

var autoScrollButton = document.getElementById('autoscroll');
autoScrollButton.addEventListener('click', function () {
    autoScroll = !autoScroll;
    if (autoScroll) {
        autoScrollButton.classList.add('autoscroll-active');
        scrollLogToBottom();
    } else {
        autoScrollButton.classList.remove('autoscroll-active');
    }
});

document.getElementById('clear-log').addEventListener('click', function () {
    log = [];
    pushLog();
});