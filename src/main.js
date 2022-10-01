const { invoke } = window.__TAURI__.tauri;

window.onload = function() {
    let insertCss = document.getElementById("KrunkerFrame");
    let inject = insertCss.contentDocument;
    inject.body.innerHTML = inject.body.innerHTML + '<style>body {Display: none !important;}</style>'
}
