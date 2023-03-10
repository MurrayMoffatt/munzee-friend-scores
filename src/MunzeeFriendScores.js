// ==UserScript==
// @name         MunzeeFriendScores
// @namespace    MunzeeFriendScores
// @version      1.0.2
// @description  Calculate and display the point difference between you and your Munzee friends
// @author       Murray Moffatt
// @match        https://www.munzee.com/friends/
// @icon         https://www.google.com/s2/favicons?domain=munzee.com
// @grant        none
// @require      https://code.jquery.com/jquery-latest.js
// ==/UserScript==

var jQuery = window.jQuery;
jQuery(document).ready(function ($) {
    // Declare variables
    var userName, backColour, friendScore, scoreDifference;
    // Get the username of the currently logged in player
    var currentUserURL = $("ul.user-menu li a").attr("href");
    var currentUser = currentUserURL.split("/")[4];
    if (currentUser == "") {
        alert("Could not find your Munzee username");
    } else {
        // Loop through the friends list looking for the current user so we can get their score
        var currentUserScore = 0;
        $('.clan-member').each(function(i, obj) {
            userName = $(this).text().trim();
            if (userName == currentUser) {
                currentUserScore = $(this).next().next().next().next().text().replace(/,/g, '');
                return false;
            }
        });
        if (currentUserScore == 0) {
            alert("Could not find a score for " + currentUser);
        } else {
            // Loop through the friends list, get each players score and calculate the difference and insert
            $('.clan-member').each(function(i, obj) {
                userName = $(this).text().trim();
                friendScore = $(this).next().next().next().next().text().replace(/,/g, '');
                scoreDifference = friendScore - currentUserScore;
                if (scoreDifference > 0) {
                    backColour = "#FF0000";
                } else {
                    backColour = "#229922";
                }
                if (scoreDifference != 0) {
                    var html = '<div style="border: 1px solid #000; border-radius: 2px; font-size: 14px; padding: 3px; ' +
                        'text-align: center; color: #FFF; font-weight: bold; background-color: ' + backColour + '">' +
                        Math.abs(scoreDifference).toLocaleString() +
                        '</div>';
                    $(this).append(html);
                }
            });
        }
    }
});
