export const loadHeader = function() {
    let header = $('#header');
    let title = '<h1 id = "title">Playlist Visualizer</h1>'
    let collection = '<h3 id="collection">My Collection </h3>';
    let logout = '<button class = "button" id="logout">Logout</button>';
    $(header).append(title, collection, logout);

    return header;
}

export const renderSearchBar = function() {
    let root = $('#root');
    let form = $('<form autocomplete="off" class ="searchForm"></form>');
    let search = '<div class ="autocomplete"><input id = "userInput" type="text" placeholder="Search your favorite artists..." name="searching"><button id = "search" type="submit"><i class="fa fa-search"></i></button></div>';
    let result = '<table class ="content"><div id="results"></div></table>';
    $(form).append(search, result);
    $(root).append(form);

    return root;

}

export const autocompletion = async function(event) {
        
}

export const renderPage = function() {
    loadHeader();
    renderSearchBar();
}

export const handleLogoutButton = function(event) {
    event.preventDefault();
    firebase.auth().signOut().then(function() {
        window.location.href = "index.html";
    }).catch(errror => { });
}

$(function() {
    renderPage();
    $('#logout').on('click', handleLogoutButton);
});