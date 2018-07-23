function displayProfile() {
    url = "/display-profile";
    $.get(url, function(res) {
        if (res) {
            var resultsJson = JSON.parse(res);
            if (resultsJson) {
                document.getElementById("vueapp-profile").style.display = 'block';
                document.getElementById("firstName").value= resultsJson.profile.firstName;
                document.getElementById("lastName").value= resultsJson.profile.lastName;
                document.getElementById("email").value= resultsJson.profile.email;
                document.getElementById("honorificPrefix").value= resultsJson.profile.honorificPrefix ;
                document.getElementById("title").value= resultsJson.profile.honorificPrefix;
                document.getElementById("nickName").value= resultsJson.profile.nickName;
                document.getElementById("linkedinUrl").value= resultsJson.profile.profileUrl;
                document.getElementById("mobilePhone").value= resultsJson.profile.mobilePhone;
                document.getElementById("primaryPhone").value= resultsJson.profile.primaryPhone;
                document.getElementById("streetAddress").value= resultsJson.profile.streetAddress;
                document.getElementById("city").value= resultsJson.profile.city;
                document.getElementById("state").value= resultsJson.profile.state;
                document.getElementById("country").value= resultsJson.profile.countryCode;
                document.getElementById("preferredLanguage").value= resultsJson.profile.preferredLanguage;
                document.getElementById("zipCode").value= resultsJson.profile.zipCode;
                document.getElementById("zipCode").value= resultsJson.profile.zipCode;
                document.getElementById("zipCode").value= resultsJson.profile.zipCode;
                document.getElementById("zipCode").value= resultsJson.profile.zipCode;


            }
        }
    });


}

function listUsers(startsWith) {
    url = "/list-users";
    if (startsWith != null && startsWith != '') {
        url += '?startsWith=' + startsWith;
    }
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

function listUser(user_id) {
    url = "/list-user";
    if (user_id != null && user_id != '') {
        url += '?user=' + user_id;
    }
    $.get(url, function(res) {
        if (res) {
            var resultsJson = JSON.parse(res);
            if (resultsJson) {
                document.getElementById("all_users").style.display = 'none';
                getUserapp.allUser = resultsJson;
                document.getElementById("firstName_up").value= resultsJson.profile.firstName;
                document.getElementById("lastName_up").value= resultsJson.profile.lastName;
                document.getElementById("email_up").value= resultsJson.profile.email;
                document.getElementById("role_up").value= resultsJson.profile.customer_role;
                if (resultsJson.status == 'STAGED' || resultsJson.status == 'PROVISIONED') {
                    document.getElementById("resend_email").style.display = 'block';
                }
                document.getElementById("user_id_up").value= user_id;
                document.getElementById("companyName_up").value= resultsJson.profile.companyName;
                document.getElementById("vueapp-updateusers").style.display = 'block';
            }
        }
    });


}

function addUser(firstName, lastName, email, role, activate) {
    url = "/add-users?";
    if (firstName != null && firstName != '') {
        url += 'firstName=' + firstName;
    }
    if (lastName != null && lastName != '') {
        url += '&lastName=' + lastName;
    }
    if (email != null && email != '') {
        url += '&email=' + email;
    }
    if (role != null && role != '') {
        url += '&role=' + role;
    }
    if (activate != null && activate != '') {
        url += '&activate=' + activate;
    }
    $.get(url, function(res) {
        if (res) {
            var resultsJson = JSON.parse(res);
        }
    });

}


function updateUser(firstName, lastName, email, honorificPrefix, title, nickName, linkedinUrl, mobilePhone, primaryPhone, streetAddress, city, state, country, zipCode, preferredLanguage, preferredImagingSoftware, favoriteFontStyle, activate, profile_stage) {
    url = "/update-user?";
    if (firstName != null && firstName != '') {
        url += 'firstName=' + firstName;
    }
    if (lastName != null && lastName != '') {
        url += '&lastName=' + lastName;
    }
    if (email != null && email != '') {
        url += '&email=' + email;
    }
    if (honorificPrefix != null && honorificPrefix != '') {
        url += '&honorificPrefix=' + honorificPrefix;
    }
    if (title != null && title != '') {
        url += '&title=' + title;
    }
    if (nickName != null && nickName != '') {
        url += '&nickName=' + nickName;
    }
    if (linkedinUrl != null && linkedinUrl != '') {
        url += '&linkedinUrl=' + linkedinUrl;
    }
    if (mobilePhone != null && mobilePhone != '') {
        url += '&mobilePhone=' + mobilePhone;
    }
    if (primaryPhone != null && primaryPhone != '') {
        url += '&primaryPhone=' + primaryPhone;
    }
    if (streetAddress != null && streetAddress != '') {
        url += '&streetAddress=' + streetAddress;
    }
    if (city != null && city != '') {
        url += '&city=' + city;
    }
    if (state != null && state != '') {
        url += '&state=' + state;
    }
    if (country != null && country != '') {
        url += '&country=' + country;
    }
    if (zipCode != null && zipCode != '') {
        url += '&zipCode=' + zipCode;
    }
    if (preferredLanguage != null && preferredLanguage != '') {
        url += '&preferredLanguage=' + preferredLanguage;
    }
    if (preferredImagingSoftware != null && preferredImagingSoftware != '') {
        url += '&preferredImagingSoftware=' + preferredImagingSoftware;
    }
    if (favoriteFontStyle != null && favoriteFontStyle != '') {
        url += '&favoriteFontStyle=' + favoriteFontStyle;
    }
    if (activate != null && activate != '') {
        url += '&activate=' + activate;
    }
    if (profile_stage != null && profile_stage != '') {
        url += '&profile_stage=' + profile_stage;
    }
    $.get(url, function(res) {
        if (res) {
            var resultsJson = '';
            window.location.href = 'http://localhost:8500/login-disco';
        }
    });

}
