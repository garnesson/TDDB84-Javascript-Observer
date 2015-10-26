function subject(callback, event) {
    // Doing stuff
    callback(event);
}

function screenWriter(event) {
    document.write(event);
}

(function() {
    // Executes on load
    subject(screenWriter, "Hello");
})();