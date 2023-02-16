# munzee-friend-scores
Calculate and display the point difference between you and your Munzee friends

## Problem
The [Friends page on the munzee.com website](https://www.munzee.com/friends/) shows your current score and the scores of all your friends. I wanted to see the point difference between my score and my friends.

## Solution
Using [Tampermonkey](https://www.tampermonkey.net) (a browser extension that allows users to write userscripts, small JavaScript programs that can be used to add new features or modify existing ones on web pages) I wrote a userscript that parsed the Munzee Friends page and pulled out my score, then looped through all of my friend's scores calculating the difference between their score and mine and inserted a new div after each friend's username that showed the difference. To make it more visual the background colour of the div was green for those whose scores were lower than mine and red for those whose scores were more than mine.

## Requirements
You obviously have to be a Munzee player and have some friends added to your Friends page.

## Installation
Install the [Tampermonkey](https://www.tampermonkey.net) browser extension then head over to [Greasy Fork](https://greasyfork.org/en/scripts/13493-munzeefriendscores) where you can install my userscript directly into Tampermonkey.

## Screenshots
In these screenshots my Munzee username is TheBitBandit.

![Original Friends screen](/res/images/munzeefriends-1.png?raw=true "Original Friends screen")

![Updated Friends screen showing score differences](/res/images/munzeefriends-2.png?raw=true "Updated Friends screen showing score differences")
