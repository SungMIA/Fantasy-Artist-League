$(function () {
    let tags = [
        "helen",
        "sung",
        "sophia"
    ];
    $('#userInput').autocomplete({
        source: tags
    });
});