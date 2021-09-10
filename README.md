# ChaturbateRooomFilter

Chaturbate is an Adult website for those 18 years and older to connect, share seuxually explicit
webcams, and offer tips to eachother in the form of tokens.

I created this JavaScript tool for myself to filter Chaturbate rooms to suite 
**my prefernce** of finding people to chat / flirt with. It works by hiding rooms that 
are not my prefered gender, are outside of the age range I like or who ONLY want tokens.

The tool also adds a "Hide Room" when you hover over the thumbnail of a room.

> :warning: To use or modify this tool you will need to be comfortable working with Javascript.
> The tool has almost no user interface, so to changes the filters you must alter the code itself.


## Current Room Filter Rules 

Below is a summary of the filter rules that are applied. There is no user interface 
so if you want to changes these filters you will need to do so yourself in the javascript code.

### Hide any rooms that:

- Have a subject with the words "private", "pvt" or "goal" 
- Have a subject asking for more than 200 tokcnes
- Have been broadcasting for more than 2 hours
- Have been broadcasting for less than 9 minuets
- Have more than 300 viewers (too many people for good conversation)
- Have fewer than 5 viewers 
- Are over my max prefered age of 50 (if listed)
- Is a sinlge female, or Trans/sissy gender (sorry just not for me)


##  Instructions using Chrome and **User JavaScript and CSS** extebsuib

1.  Open google chrome (desktop only)
2.  Install [User JavaScript and CSS](https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld?hl=en)
3.  Open the Chaturbate website
4.  Click the <img src="https://lh3.googleusercontent.com/1TSw8ZPwr2VvUZlY1cbAPOWo5cisrfpazmTpfGH4YWGTLCJLUq23LMSKuS5ee-bBP5C0GL8wsbpV9iQ9zLEQ6Dv8Vw=w128-h128-e365" width=32 height=32 /> icon, an click on **+ Add New ** 
5.  Copy and past the JS from here to the JS side
6.  Save and refresh the page

