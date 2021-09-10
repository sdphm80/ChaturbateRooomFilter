# ChaturbateRooomFilter

Chaturbate is an Adult website for those 18 years and older to connect, share seuxually explicit
webcams, and offer tips to eachother in the form of tokens. I created this JavaScript tool for 
myself to filter Chaturbate rooms to suite **my prefernce** in finding people to chat / flirt with. 

It works by hiding filtering out rooms that are not outside of my prefered gender, age range or 
are only geared toward getting more tokens. It also adds a __Hide Room__  button on room thumbnails.

## Room Filter Rules - Hides rooms that:

- Have a subject with the words "private", "pvt" or "goal" 
- Have a subject asking for more than 200 tokcnes
- Have been broadcasting for more than 2 hours
- Have been broadcasting for less than 9 minuets
- Have more than 300 viewers (too many people for good conversation)
- Have fewer than 5 viewers 
- Are over my max prefered age of 50 (if listed)
- Is a sinlge female, or Trans/sissy gender

There is no UI for changing the rules, but feel free to update the Javascruot code to fit your needs.

##  Instructions using Chrome and **User JavaScript and CSS** extebsuib

To run this tool you'll either nneed to open the browsers developer tools, and paste the 
code into the console on each page load.

- OR --

Use an extension to inject the JS code for yo such as __User Javascipt and CSSS__ for Chrome

1.  Open google chrome (desktop only)
2.  Install [User JavaScript and CSS](https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld?hl=en)
3.  Open the Chaturbate website
4.  Click the <img src="https://lh3.googleusercontent.com/1TSw8ZPwr2VvUZlY1cbAPOWo5cisrfpazmTpfGH4YWGTLCJLUq23LMSKuS5ee-bBP5C0GL8wsbpV9iQ9zLEQ6Dv8Vw=w128-h128-e365" width=32 height=32 /> icon, an click on **+ Add New ** 
5.  Copy and past the JS from here to the JS side
6.  Save and refresh the page

