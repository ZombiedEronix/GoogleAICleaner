document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get({ maxMessages: 12 }, (items) => {
        document.getElementById('maxMessages').value = items.maxMessages;
    });
});

document.getElementById('saveBtn').addEventListener('click', () => {
    const max = parseInt(document.getElementById('maxMessages').value, 10) || 12;

    chrome.storage.local.set({ maxMessages: max }, () => {
        const status = document.getElementById('statusText');
        status.textContent = '[Google AI Cleaner] Settings saved!';
        setTimeout(() => { status.textContent = ''; }, 1500);
    });
});
