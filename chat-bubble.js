(function () {
  var DEMO_URL = "https://kopi-kita-chatbot.onrender.com/";
  var loaded = false;

  var fab = document.createElement("button");
  fab.type = "button";
  fab.className = "chat-fab";
  fab.setAttribute("aria-expanded", "false");
  fab.setAttribute("aria-controls", "demo-chat");
  fab.innerHTML =
    '<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.5 7.2L4 20.5l1.4-4.6A8 8 0 1 1 21 12z"/></svg>' +
    "<span>Try the demo chat</span>";

  var panel = document.createElement("div");
  panel.id = "demo-chat";
  panel.className = "chat-panel";
  panel.hidden = true;
  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-label", "Demo chatbot for Kopi Kita Café");
  panel.innerHTML =
    '<div class="chat-panel-bar">' +
    '<span>Demo: Kopi Kita Café</span>' +
    '<button type="button" class="chat-close" aria-label="Close chat">&times;</button>' +
    "</div>" +
    '<div class="chat-panel-body">' +
    '<p class="chat-loading">Waking up the demo. This can take up to a minute the first time.</p>' +
    "</div>";

  document.body.appendChild(panel);
  document.body.appendChild(fab);

  var closeBtn = panel.querySelector(".chat-close");
  var body = panel.querySelector(".chat-panel-body");

  function open() {
    panel.hidden = false;
    fab.setAttribute("aria-expanded", "true");
    if (!loaded) {
      loaded = true;
      var frame = document.createElement("iframe");
      frame.src = DEMO_URL;
      frame.title = "Kopi Kita Café demo chatbot";
      frame.setAttribute("loading", "lazy");
      body.appendChild(frame);
    }
    closeBtn.focus();
  }

  function close() {
    panel.hidden = true;
    fab.setAttribute("aria-expanded", "false");
    fab.focus();
  }

  fab.addEventListener("click", function () {
    if (panel.hidden) open(); else close();
  });
  closeBtn.addEventListener("click", close);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !panel.hidden) close();
  });
})();
