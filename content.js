console.log("[Google AI Cleaner] Script loaded.");

let maxMessagesLimit = 50;

setInterval(() => {
    chrome.storage.local.get({ maxMessages: 12 }, (data) => {
        maxMessagesLimit = data.maxMessages;
    });
}, 1000);

setInterval(() => {
    const msg = document.querySelectorAll('div[data-scope-id="turn"]');

    if (msg.length > maxMessagesLimit) {
        const toRemoveCount = msg.length - maxMessagesLimit;
        for (let i = 0; i < toRemoveCount; i++) {
            if (msg[i]) {
                msg[i].remove();
            }
        }
        console.log(`[Google AI Cleaner] Removed blocks: ${toRemoveCount}`);
    }
}, 1500);
