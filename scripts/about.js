function updateAbout() {
  html.innerHTML = "";
  html.innerHTML += /*HTML*/ `
        <div class="header">
            <div class="btn" onclick="updateView()">Home</div>
            <div class="btn" onclick="updateAbout()">About</div>
            <div class="btn" onclick="updateProject()">Projects</div>
            <div class="btn" onclick="updateSnippets()">Snippets</div>
            <div class="btn" onclick="updateContact()">Contact</div>
        </div>
        <div class="main">About ME</div>
        `;
}
