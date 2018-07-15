function listSchema(startsWith) {
    url = "/list-schema";
    $.get(url, function(res) {
        if (res) {
            var resultsJson = JSON.parse(res);
            if (resultsJson) {
                document.getElementById("all_users").style.display = 'block';
                getUsersapp.allUsers = resultsJson;
            }
        }
    });


}