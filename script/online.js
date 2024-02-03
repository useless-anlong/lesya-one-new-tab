function getNetworkOnLineChange() {
    updateText("n", window.navigator.onLine);

    window.addEventListener("online", function () {
        updateText("n", window.navigator.onLine);
    });

    window.addEventListener("offline", function () {
        updateText("n", window.navigator.onLine);
    });
}