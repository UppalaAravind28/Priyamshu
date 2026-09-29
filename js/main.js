// FBB AIS Fiber - host page behaviour.
// Opens the Kore.ai Agent Platform widget from the page's own "Start a chat" button.

(function () {
  var button = document.getElementById('open-chat');
  if (!button) return;

  button.addEventListener('click', function () {
    var widget = document.querySelector('agent-widget');
    if (!widget) return;

    // Preferred: the widget's public API, if this SDK build exposes one.
    if (typeof widget.open === 'function') {
      widget.open();
      return;
    }

    // Fallback: click the launcher button inside the widget's shadow root.
    var root = widget.shadowRoot;
    if (!root) return;
    var launcher =
      root.querySelector('button[aria-label="Open assistant"]') ||
      root.querySelector('button');
    if (launcher) launcher.click();
  });
})();
