Copy from Word doc.

Tools
Google fonts
Bootstrap


# The Atmintis Game
- - - - 
[View the live project here](https://)

This is a website designed to teach children between the ages of 2 - 5 years of age how to count to ten in Lithuanian or English on a desktop computer. 

The game features cards on a board that users need to match the English number to the correct, corresponding Lithuanian number. There is a timer and a turn count, this can be used to see how the end user is improving, the aim here is to have highest number of seconds with the least number of turns.



# Website Objective Summary
 
* Fully functional website for parents to use with their children to learn how to count from 1 to 10 in Lithuanian or English.
* Numbers from 1 to 10 in both, Lithuanian and English, to be shown, helping the user learn before playing the game.
* To include a time for the end user to measure their improvement against.
* To include a turn count for the end user to measure their improvement against.
* Background sound to make the game fun for children.
* Turn sound to make the game fun for children.
* Winner sound to make the game fun for children.
* Game Over sound to make the game fun for children.
* Successful match sound to make the game fun for children.
* The website must be children friendly as well as accessible.
* Contact Developer option should Parents want more games or Languages.
* Game must have a start and end trigger for good user experience.
* Memory and learning go hand in hand, this website willl use both skilld to help teach the user count to ten in another language.



# UX

The game is for children (and their parents) who would like to learn to count in Lithuanian or English. The easy to use interface features timers, graphics and sounds that make learning fun, encouraging repetition which will aid retention of the concepts. 



*Who are the users - in order*

1) Children
2) Parents


*What will they be using the site for:*

### Children
A fun way to count to ten in another language, as well as trainning the brain with the memory board.

### Parents

A fun way to teach their children and themselves another language, as well as trainning the brain with the memory board.



**User Stories:**

* Parent -  I am English and my wife is Lithuanian, we need a platform to teach our child how to count to ten in both languages<br>
* Parent -  It is hard to get my child to concentrate and learn Lithuanian, I need a platform that is fun while learning<br>
* Parent -  I would like a platform that gives some type of bench marker for improvment<br>
* Child - I want to learn Lithuanian as my mum comes from Lithuania<br>
* Child - I want to learn Lithuanian using a fun platform where I can see improvments<br>
* Parent - I would like other learning subjects not just counting to ten.



# Wireframes
[The Atmintis Game]()<br>
[Click to start]()<br>
[winner message]()<br>
[Game Over message]()<br>
[mobile view (not for mobile)]()<br>
[tablet view (not for tablet)]()<br>

## Design 

### Colour and font
Colour and font were taken into account in order to make the interface eye catching for children, but also incorporated best practices in terms of accessibility, in order to cater for users of all learning abilities. 
### Images
I designed all the images myself using a free image website: https://www.shutterstock.com/, I then copied and designed these on a word doc, converting to PNG files. I would in future source this out or take a design course. 
The images had to be friendly and fun.
### Sound
I downloaded my sounds from: https://www.zapsplat.com/. I selected the sound for children, helping the game to be fun adnd happy
- - - -

## Learn Section

This sections has Lithuanian numbers 1 t 10 on buttons, when you hover over the button you will see the English version of this number.

**Related user story addressed:**

* Parent -  I am English and my wife is Lithuanian, we need a platform to teach our child how to count to ten in both languages.
* Child - I want to learn Lithuanian as my mum comes from Lithuania.

### Click to Start

Once the user feels confident, the can start the game buy clicking on the box "click to start" This will then start a funny countdown along with a timer and turn count.

### Timer - Count Down 

I have included a countdown for the end user so they can countify their learning, they have 110 seconds to match all the English numbers with their corresponding Lithuanian number. This feature allows the end user to see how long it took and also encourage them to come back and beat the time they set. If the time reaches 0 seconds, a game over message will appear along with a message "click to start again".

**Related user story addressed:**

* Parent -  I would like a platform that gives some type of bench marker for improvment.
* Child - I want to learn Lithuanian using a fun platform where i can see improvments.
* Parent -  It is hard to get my child to concentrate and learn Lithuanian, I need a platform that is fun while learning.


### Turn - counter

I have also included a turn counter, like the timer but intead increasing as the user clicks on a card. this is another way for the user to test themselves, it also gives them a score to beat.

**Related user story addressed:**

* Parent -  I would like a platform that gives some type of bench marker for improvment.
* Child - I want to learn Lithuanian using a fun platform where i can see improvments.
* Parent -  It is hard to get my child to concentrate and learn Lithuanian, I need a platform that is fun while learning.

### Gameboard

The gameboard has 20 cards. Ten times 2 sets, with 1 to 10 for each language (English and Lithuanian). When the game starts the cards are facedown and shuffled. 

The user clicks on a card, this will turn the card over and the image will shake while you are hovering, turning the card is accompanied with a turning sound, the user then has select another card, the goal here is to find the opposite language number. If the cards match the cards stay put and the user will get a matched sound. If the cards do not match they turn back over for the user to start searching again.

Every click will increase the turn counter, while the clock is ticking down. If the user completes the game by matching all the cards on the board before the time runs out, they are presented wiuth a winner message and the option to click and try again.

**Related user story addressed:**

* Parent -  I am English and my wife is Lithuanian, we need a platform to teach our child how to count to ten in both languages<br>
* Parent -  It is hard to get my child to concentrate and learn Lithuanian, I need a platform that is fun while learning<br>
* Parent -  I would like a platform that gives some type of bench marker for improvment<br>
* Child - I want to learn Lithuanian as my mum comes from Lithuania<br>
* Child - I want to learn Lithuanian using a fun platform where I can see improvments<br>


### Contact Developer

On this page you have a section for any parent that wishes to exspand the game or ask for it in another language. This uses EmailJS 

**Related user story addressed:**

* Parent - I would like other learning subjects not just counting to ten.


### Features Left to Implement

* Counting is the first of this game’s features. Further features to implement include learning letters of the alphabet, colours, and animals. 
* The learning section will be a signle page with picture and animations against the numbers, once the user is ready then will then be passed to 'The Antmintis Game'
* I have uploaded single numbers to the gamne that are currently hidden, the plan here is to have them grow and dance once the user hits a match, unfortunatly the images are poor and i would rather have a designer develop them. For now i used the images and the scource as the identifier for the match.
* I want to add a click function to the numbers under the learn section. On Click you will have a voice speaking the number in Lithuanian, this will help the end user pronounce the words correctly.


- - - -

## Technologies Used

* HTML5 is the markup language used for rendering the website.
[HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)

* CSS3 is the style sheet language used to style the HTML website.
[CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3)

* Javascript is the programming language that conforms to the ECMAScript specification.
[Javascript] (https://www.javascript.com/)

* Bootstrap 4 Framework. 
I also used Bootstrap's core CSS for some of the styling and layout, buttons, forms and button. 
[Bootstrap 4](https://getbootstrap.com/)

* Pooper for the pop over function on my numbers
[Pooper] (https://popper.js.org/)

[Google Fonts](https://fonts.google.com/) - added in CSS

[Balsamiq](https://balsamiq.com/) - used for wireframes

[HTML and CSS Formatter](https://www.freeformatter.com/) - used on CSS and HTML to beautify code

[Free image site](https://www.shutterstock.com/,) - used with Microsoft word to build images.

[Free Sound downloading](https://www.zapsplat.com/) - used for all sound effects.




## Testing

Used [HTML Validator](https://validator.w3.org/) to check the markup on each page. All pages have the following message: Document checking completed. No errors or warnings to show.

Used [CSS3 Validator](https://jigsaw.w3.org/css-validator/) to check CSS3 for any errors. "Congratulations! No Error Found. This document validates as CSS level 3 + SVG !"



1. Marquee scrollbar - clicked on every page to make sure the detail flows to the customrs liking, also checked on mobile devices. Next, changed the text to team news, the outcome was what was expected.

* Issued found - The marquee scroll bar was tested throughout, and the marquee element was used at the start, after receiving errors on HTML validator, I realised that the element was deprecated and was not to be used in HTML5
Inspected/tested on both desktop and mobile device, using google chrome inspect feature. Looks good on both.


2. How to find us - iframe Google map
    1. Scroll down on indext.html to the how to find us map.
    2. Click on directions, top left corner.
    3. New tab opens, enter current location and hit directions.
    4. Enter your choice of travel, then proceed with direction.
Inspected/tested on both desktop and mobile device, using google chrome inspect feature. Looks good on both.

* Issue found - when entering the width of the map, I originally hit 100%, this was not right, changed to 600 only per research.

3. Club Sponsor
    1. Scroll to the bottom OF each page.
    2. Click on the LTS icon
    3. You are taken to the sponsor's website in a separate window.
This works on each page.
Inspected/tested on both desktop and mobile device, using google chrome inspect feature. Looks good on both.


4. Veterans League and Veterans Fixtures.
    1. Go to team page
    2. Click on both Veterans Leauge and Veterans Fixtures badges.
    3. Each one takes the end user to their expected destination in a separate window.
Inspected/tested on both desktop and mobile device, using google chrome inspect feature. Looks good on both.

5. Progress Bars on player stats.
    1. Go to team page.
    2. Visually the bars look great.
    3. Updated/changed states on Mark Culley in the team.html file and saved.
    4. Visually the change looks great and is what the customer asked for.
Inspected/tested on both desktop and mobile device, using google chrome inspect feature. Looks good on both.

6. Form on the Social page.
    1. Go to social page.
    2. Click on submit.
    3. Error shows for each of the required fields as intended.
    4. Enter the required fields and hit submit.
    5. User taken to codeinstitute holding site as intended.
This form will be completed once I learn how to send data to intended email address.
Inspected/tested on both desktop and mobile device, using google chrome inspect feature. Looks good on both.

7. Gallery page
    1. Go to social page.
    2. Click on image in the Gallery section.
    3. The image pops up with a toggle.
    4. Click to toggle for next image.
    5. Click on image to return back.
Inspected/tested on both desktop and mobile device, using google chrome inspect feature. Looks good on both.

* Issue found - Two images were not the same size and slightly moved some code, this was fixed by resizing the images.

8. Contact us form.
    1. Go to contact page.
    2. Click on submit.
    3. Error shows for each of the required fields as intended.
    4. Enter the required fields and hit submit.
    5. User taken to constitute a holding site, as intended.
This form will be completed once I learn how to send data to intended email address.
Inspected/tested on both desktop and mobile device, using google chrome inspect feature. Looks good on both.

9. The website has been tested on desktop and mobile devices using google chrome developer tools and is responsive on mobile and desktop devices. 

10. Management was given my github link to the website to test. 
    1. Management asked me to remove the placeholder image with another they provided, until they send a team photo.
    2. All users were asked to click on every page, link and icon on both mobile and desktop. Management Didn't find any issues with the website and are very happy.
    3. Management are looking forward to the future improvements, this will come after the assesment.




## Deployment

I published my website via GitHub, the below steps is how I did it:

1. Navigate to my Githubrepository: https://github.com/Leefarmer83/Great-Linford-Veterans-Football-Club
2. Click on settings
3. Under GitHub pages i clicked master branch 
4. I choose root as my folder
5. Clicked saved
6. Here is the url: https://leefarmer83.github.io/Great-Linford-Veterans-Football-Club/

For more detailed information on how to do the above, please find instruction [here.](https://github.com/Leefarmer83/Great-Linford-Veterans-Football-Club/settings)

If you wish to clone my repository, information on how can be found [here.](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

## Credit

Adam Pritchard - Markdown Cheatsheet to help me with the README file
https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

Ashley White - Gallery lightbox copied code for the gallery section.
http://ashleydw.github.io/lightbox/

Anna Greaves - for GitHub documentation in the deployment section.


## Content
The Gallery was copied from http://ashleydw.github.io/lightbox/ - Ashley White


## Media
The photos used in this site were obtained from Great Linford Management.

## Acknowledgements

I used https://github.com/Code-Institute-Solutions/readme-template as a template for the README file

Anna Greaves - for GitHub documentation in the deployment section. https://docs.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site and https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository

Adam Pritchard - Markdown Cheatsheet to help me with the README file
https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

Ashley White - Gallery lightbox copied code for the gallery section.
http://ashleydw.github.io/lightbox/

### NOTE - During this project I had to work from the hospital (first baby arrival) for the first three days, I created the header/footer/index.html and team.html pages. I was adding and committing every change while creating these pages. Once I got home, it looked like the commits did not save, in fact most the work did not. This left me stressed and worried. I created the pages from scratch again, but did not commit as much as I first did. 