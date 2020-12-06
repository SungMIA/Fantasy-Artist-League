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
    let form = $('<form class ="searchForm"></form>');
    let search = '<input id = "userInput" type="text" placeholder="Search your favorite artists..." name="search"><button id = "search" type="submit"><i class="fa fa-search"></i></button>';

    $(form).append(search);
    $(root).append(form);

    return root;

}

export const autocompletion = async function(event) {
        // let value = $(this).val();
        // let artistNames;

        // $.ajax({
        //     type: 'GET',
        //     url: 'https://api.spotify.com/v1/search',
        //     dataType: 'json',
        //     data: {
        //         type: 'artist',
        //         q: value
        //     }
        // }).then(function(res) {
        //     artistNames = res.artists.items.map(function(artist) {
        //         return artist.name;
        //     })
        // });

        // $('#userInput').autocomplete({
        //     source: artistNames
        // });   
        let tags = [
            "helen",
            "sung",
            "sophia"
        ];
        $('#userInput').autocomplete({
            source: tags
        });
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
    $('#userInput').on('keyup', autocompletion);
    $('#logout').on('click', handleLogoutButton);
});