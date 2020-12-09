// export const renderEditUserCard = function(user) {
//     let editCard = $('#editCard');
//     let editInput = $('<div id="editInput">');
//     let editContent = $('<form id="editForm"></form>');
//     let editTitle = '<h1 class="editTitle">Edit Your Account Information</h1>';
//     $(editInput).append(editTitle);
//     let editUserName = '<div class="field"><label class="editLabel">Username: </label><input class="editing" id="newUsername" value="'+user.username+'"></div>';
//     let editFirst = '<div class"field"><label class="editLabel">First Name: </label><input class="editing" id="newFirst" value="'+user.first+'"></div>';
//     let editLast = '<div class="field"><label class="editLabel">Last Name: </label><input class="editing" id="newLast" value="'+user.last+'"></div>';
//     let editEmail = '<div class="field"><label class="editLabel">Email: </label><input class= "editing" id="newEmail" value="'+user.email+'"></div>';
//     // let editPass ='<div class="field"><label class="editLabel">New Password: </label><input class="editing" id="newPass"></div>';
//     $(editContent).append(editUserName, editFirst, editLast, editEmail);
//     // $(editContent).append(editEmail, editPass);

//     let cancel = '<button id="cancelEdit" type="button">Cancel</button>';
//     let save = '<button id="saveEdit" type="submit">Save</button>';
//     $(editContent).append(cancel, save);

//     $(editInput).append(editContent);
//     $(editCard).append(editInput);
//     return editCard;
// }

// export const renderSearchResult = function(user) {
//     let searchResult = $('#searchResult');
//     let result = '<div id="result"><h2 id="resultUser">This collection was created by '+user.username+'</h2></div>';
//     $(searchResult).append(result);
//     return searchResult;
// }
// export const handleSubmitSearch = function(event) {
//     event.preventDefault();
//     let searchingFor = document.getElementById("userInput");
//     firebase.firestore().collection("users").where("username", "==", searchingFor.value)
//     .get().then(function(querySnapshot) {
//         querySnapshot.forEach(function(doc) {
//             renderSearchResult(doc.data());
//         });
//     });
// }
export const handleLogoutButton = function(event) {
    firebase.auth().signOut();
    location.href = "/index.html";
}

export const handleEditButton = function(event) {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            firebase.firestore().collection("users").doc(user.uid).get().then(function(doc) {
                if (doc.exists) {
                    // renderEditUserCard(doc.data()); //param: user
                    let editCard = $('#editCard');
                    let editInput = $('<div id="editInput">');
                    let editContent = $('<form id="editForm"></form>');
                    let editTitle = '<h1 class="editTitle">Edit Your Account Information</h1>';
                    $(editInput).append(editTitle);
                    let editUserName = '<div class="field"><label class="editLabel">Username: </label><input class="editing" id="newUsername" value="'+doc.data().username+'"></div>';
                    let editFirst = '<div class"field"><label class="editLabel">First Name: </label><input class="editing" id="newFirst" value="'+doc.data().first+'"></div>';
                    let editLast = '<div class="field"><label class="editLabel">Last Name: </label><input class="editing" id="newLast" value="'+doc.data().last+'"></div>';
                    // let editEmail = '<div class="field"><label class="editLabel">Email: </label><input class= "editing" id="newEmail" value="'+user.email+'"></div>';
                    // let editPass ='<div class="field"><label class="editLabel">New Password: </label><input class="editing" id="newPass"></div>';
                    $(editContent).append(editUserName, editFirst, editLast);
                    // $(editContent).append(editEmail, editPass);

                    let cancel = '<button id="cancelEdit" type="button">Cancel</button>';
                    let save = '<button id="saveEdit" type="submit">Save</button>';
                    $(editContent).append(cancel, save);

                    $(editInput).append(editContent);
                    $(editCard).append(editInput);
                    return editCard;
                }
            })
        }
    })
}

export const handleSaveEditButton = function(event) {
    let user = firebase.auth().currentUser;

    let newFirst = document.getElementById("newFirst").value;
    let newLast = document.getElementById("newLast").value;
    let newUsername = document.getElementById("newUsername").value;
    
    user.updateProfile({
        first: newFirst,
        last: newLast,
        username: newUsername,
    }).then(function() {
        location.href = "/userAccount.html";
    });
}

export const handleCancelEditButton = function(event) {
    let elmnt = document.getElementById("editCard");
    elmnt.remove();
}

$(document).ready(function() {
    $('#logout').on('click', handleLogoutButton);
    // $('#submitSearch').on('click', handleSubmitSearch);
    $('#edit').on('click', handleEditButton);
    $('#saveEdit').on('click', handleSaveEditButton);
    $('#cancelEdit').on('click', handleCancelEditButton);
});