window.$ = window.jQuery = require('jquery');
window.Popper = require('popper.js');
require('bootstrap');

// Check dark or light mode for browser.
if (window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)").matches) {
    $('[rel="shortcut icon"]').attr('href', window.baseUrl + 'image/Adib-favicon-white.png');
} else {
    $('[rel="shortcut icon"]').attr('href', window.baseUrl + 'image/Adib-favicon-black.png');
}

// Use shorthand since .ready() deprecated
$(function() {
    // Set the main user parameter to return certain data instead of all.
    let mainUserParam = {
        'inc': 'name,login,picture,location'
    };

    // AJAX call to get user data.
    $.ajax({
        url: 'https://randomuser.me/api/?' + formatQueryParam(mainUserParam),
        type: 'GET',
        dataType: 'json', // added data type
        success: function(responseData) {
            // Set the main user data.
            let mainUser = responseData.results[0];

            // Replace name, image, job, location and icon link.
            $('.first-section .name').html(mainUser.name.first + ' ' + mainUser.name.last);
            $('.first-section .top-profile-image img').attr('src', mainUser.picture.large);
            $('.first-section .job-username span').html(mainUser.login.username);
            $('.first-section .location span.city').html(mainUser.location.city);
            $('.first-section .location span.state').html(mainUser.location.state);
            $('.first-section .social-media-box a.twitter').attr('href', 'https://twitter.com/' + mainUser.login.username);
            $('.first-section .social-media-box a.facebook').attr('href', 'https://facebook.com/' + mainUser.login.username);
            $('.first-section .social-media-box a.website').attr('href', 'https://' + mainUser.login.username + '.com');

            // Get number of following.
            let followingUser = randomNumber(50, 5000);
            $('.following .number').html(formatNumber(followingUser));

            // Get number of follower.
            let followerUser = randomNumber(1000, 4000000);
            $('.follower .number').html(formatNumber(followerUser));

            // Get number of user that you may know.
            let youMayKnow = randomNumber(0, 40);
            $('.followers-text .number').html(youMayKnow);

            // Remove extra spacing if the 'you may know' is 0.
            if (youMayKnow == 0) {
                $('.followers-text').addClass('p-0');
            } else {
                // Set the other user parameter to return certain data instead of all.
                let otherUserParam = {
                    'inc': 'picture',
                    'results': youMayKnow >= 6 ? 6 : youMayKnow
                };

                // AJAX call to get user data.
                $.ajax({
                    url: 'https://randomuser.me/api/?' + formatQueryParam(otherUserParam),
                    type: 'GET',
                    dataType: 'json', // added data type
                    success: function(otherResponseData) {
                        // HTML for the images.
                        let imageHtml = `
                            <div class="ymk-profile-image">
                                <img src="_repImg_" class="w-100 h-100">
                            </div>
                        `;

                        // Get other user images to be used.
                        let otherUsers = otherResponseData.results;
                        otherUsers.forEach(function (otherUserData) {
                            $('.list-of-user').append(imageHtml.replace('_repImg_', otherUserData.picture.thumbnail));
                        });

                        // Hide preloader.
                        $('.preloader').fadeOut();
                    }
                });
            }
        }
    });
});

function formatQueryParam(queryParam) {
    // Format the query parameters.
    let arrayQuery = [];

    for (let paramName in queryParam) {
        arrayQuery.push(paramName + '=' + queryParam[paramName]);
    }

    return arrayQuery.join('&');
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function formatNumber(n) {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
};

window.onbeforeunload = () => {
    // Show preloader.
    $('.preloader').fadeIn();
}
