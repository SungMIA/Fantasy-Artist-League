
export const renderUserCard = function(doc) {
    let result = $('#searchResult');
    let userName = doc.username;
    let name = '<div class="name" id="'+userName+'">'+userName+'</div>';

    $(result).append(name);
    return result;
}

export const renderEditUserCard = function(user) {
    let editCard = $('#editCard');
    let editInput = $('<div id="editInput">');
    let editContent = $('<form id="editForm"></form>');
    let editTitle = '<h1 class="editTitle">Edit Your Account Information</h1>';
    $(editInput).append(editTitle);
    let editUserName = '<div class="field"><label class="editLabel">Username: </label><input class="editing" id="'+user.username+'" value="'+user.username+'"></div>';
    let editFirst = '<div class"field"><label class="editLabel">First Name: </label><input class="editing" id="'+user.first+'" value="'+user.first+'"></div>';
    let editLast = '<div class="field"><label class="editLabel">Last Name: </label><input class="editing" id="'+user.last+'" value="'+user.last+'"></div>';
    let editEmail = '<div class="field"><label class="editLabel">Email: </label><input class= "editing" id="'+user.email+'" value="'+user.email+'"></div>';
    $(editContent).append(editUserName, editFirst, editLast, editEmail);

    let cancel = '<button id="cancelEdit" type="button">Cancel</button>';
    let save = '<button id="saveEdit" type="submit">Save</button>';
    $(editContent).append(cancel, save);

    $(editInput).append(editContent);
    $(editCard).append(editInput);
    return editCard;
}
export const handleSubmitSearch = function(event) {
    event.preventDefault();
    let searchingFor = document.getElementById("userInput");
    firebase.firestore().collection("users").where("username", "==", searchingFor.value)
    .get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            let userData = doc.data();
            renderUserCard(userData);
        })
    })
}
export const handleLogoutButton = function(event) {
    event.preventDefault();
    firebase.auth().signOut();
    location.href = "/index.html";
}

export const handleEditButton = function(event) {
    let user = event.target;
    renderEditUserCard(user);
}


$(document).ready(function() {
    $('#logout').on('click', handleLogoutButton);
    $('#submitSearch').on('click', handleSubmitSearch);
    $('#edit').on('click', handleEditButton);
});