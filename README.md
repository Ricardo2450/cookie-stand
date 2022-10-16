# cookie-stand

> ## Day 1
Problem Domain
Your friend Pat has come up with a business idea by combining his love for sweets and his passion for healthy ecosystems. Pat has developed a recipe for a coffee-time confection called Salmon Cookies. These cookies made into the shape of a salmon and are suitable for both humans and salmon to enjoy.

Pat needs some help with the branding of the business, as well as some help with internal data management for the company, and has enlisted your assistance because of your extensive and proven work in developing web applications.

Pat’s Salmon Cookies, soon with franchises internationally, needs a proof of concept application to calculate the number of cookies each location must make every day so that it can manage its supplies inventory and baking schedule. The number of cookies to make depends on the hours of operation (6:00 AM to 8:00 PM for all locations) and a few factors unique to each location:

The minimum number of customers per hour.
The maximum number of customers per hour.
The average number of cookies purchased per customer.

Because we are early in the life of this business, we will need to build an application that is adaptable. Pat will need to be able to add and remove locations from the daily projections report, and Pat will also need to be able to easily modify the input numbers for each location based on day of the week, special events, and other factors. Pat would like to see these numbers with nice formatting in a web application.

Pat needs you to take a leading role in doing the design work and construction of a public-facing page, too. They already have a logo image picked out (below), but Pat is requesting your assistance in the design of the documents, color scheme, fonts, and any additional images for the public facing site.

So, in addition to building an application that calculates daily sales projections for each location (on a page called sales.html), you also need to create a public-facing page (on the homepage index.html) that is colorful, eye-catching, readable, useful, and informative.

You’ve got a lot to do. Plan your work, and work your plan.

Instructions
Before you begin, create a new repository within GitHub called “cookie-stand”. Make sure that this repository is properly set up with a license and a readme. Clone this repo down to your local machine.

Create two new pages within your project. One for Sales Data (sales.html) and another for the homepage (index.html). You’ll also need to create at least one JavaScript file. Example: app.js.

Sales Data
Within your javascript file, create separate JS object literals for each shop location. Each location will be responsible for generating sales data and providing output on an html document. You should be able to perform the following tasks in your javascript file:

Store the min/max hourly customers, and the average cookies per customer, in object properties.
Use a method of that object to generate a random number of customers per hour. Objects/Math/random
Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.
Store the results for each location in a separate array… perhaps as a property of the object representing that location.
Display the values of each array as unordered lists in the browser.
Calculating the sum of these hourly totals; your output for each location should look like this:

Seattle

6am: 16 cookies
7am: 20 cookies
8am: 35 cookies
9am: 48 cookies
10am: 56 cookies
11am: 77 cookies
12pm: 93 cookies
1pm: 144 cookies
2pm: 119 cookies
3pm: 84 cookies
4pm: 61 cookies
5pm: 23 cookies
6pm: 42 cookies
7pm: 57 cookies
Total: 875 cookies
Display the lists on sales.html. We will be adding features to this application and working with its layout in the upcoming labs.

Here are the starting numbers that you’ll need to build these objects:

Location	Min / Cust	Max / Cust	Avg Cookie / Sale
Seattle	23	65	6.3
Tokyo	3	24	1.2
Dubai	11	38	3.7
Paris	20	38	2.3
Lima	2	16	4.6
These numbers are simply Pat’s estimates for now, but eventually, once there has been some history collected that provides more accurate numbers, we’ll want the ability to update these numbers for each location, and to add/remove locations. But we’ll not build all of that today. Make sure to make each location is its own JavaScript object.

Home Page
Read below for the requirements of your index.html page.

Note: Everything listed below is a stretch goal for lab 06. All of these requirements will be required for the final submission of the project, so start implementing these early.

In addition to the provided picture of the fish, your index.html file should contain:

A custom sans-serif Google Font for use in heading tags (<h# />)
A specified standard sans-serif web font for sales data (such as Arial, Verdana, or Helvetica).
A specified standard serif web font for text (such as Georgia, Times).
Specified different font colors for all three font uses.
A background color for the default page background (make sure font colors have good contrast and are readable on this background).
A different background color for elements such boxes and tables (so make sure the font colors contrast against this well, too!).
Anything else you’d like to add related to style. But remember: simplicity, clarity, and consistency are good things in design.
Be thoughtful about layout and overall organization of the page.
Include all of the typical stuff that you’ll find on the home page of a business: locations, hours, contact information, some text about how awesome the business is, etc. Be creative, and again, think about what is meaningful to a typical end user.

> ## Day 2

Instructions
Create a new branch for today’s lab. Make sure it has all of your changes from lab 06 so that you can extend the functionality.

Replace all of your object literals for the salmon cookie stand with a single constructor function that, when called with the ‘new’ keyword, it creates a new instance.

Replace the lists of your data for each store and build a single table of data instead. It should look similar to the following:

Display each stores data in a table format similar to what is below. Break each column by the hour and complete each row with a “Daily Location Total”.

> ## Day 3

Instructions
Continue working on the functionality of your sales.html page if you do not have it working 100% yet, including the row of totals across the bottom.

Pat has provided you 7 additional images that they would like to see on the home page of the site. These images are located in your daily class GitHub repo: class-08/lab-b/assets/.

Your public-facing index.html page should include the following:

locations with addresses,
hours open
contact information
Anything else you feel necessary.
A link to your sales.html page
Be sure to also include a link to your index.html page on your sales.html pages as well.

> ## Day 4

Instructions
Today you will be adding a form to your existing cookie stand project so that you can add new locations to the table by simply inputting their information with the form.

Create a new HTML form to accept the information for a new cookie stand. Be sure to utulize the <fieldset> tag to help you style it.

Upon submission of the HTML form, create an event handler that creates a new instance of a cookie stand that appends to the table upon form submission.

Use the constructor function as your guide to determine what input fields your form needs (hint: also consider what is passed in when creating instances!).

If not complete from lab 7, write a stand-alone function to generate a footer row which will display the total number of cookies sold per hour for all locations. When a new store is added using your form, the totals in the footer row should update to include these new sales numbers.

Anywhere you have repeated chunks of code, apply some DRY principles. Generally, once some chunk of code is appearing for a 3rd time or so, that’s when you want to consider refactoring.

Validate your html through HTML5 validation.

Confirm that your code is following the single responsibility rule. Each function should only do one thing, with the capability to break it out further as needed.

> ## Day 5

Finish up your Salmon Cookies project. Ensure that you meet all minimum functionality described in prior labs as well as succesfully implemented all of the requirements for the index.html file listed in Lab 06. Here they are, listed below:

A custom Google font for highlights

A specified standard sans-serif web font for data (such as Arial, Verdana, or Helvetica)

A specified standard serif web font for text (such as Georgia, Times, etc.)
Specified different font colors for all three font usages

A background color for the default page background (make sure font colors have good contrast and are readable on this background)

A different background color for elements such boxes and tables (so make sure the font colors contrast against this well, too!)

Anything else you’d like to add related to style. But remember: simplicity, clarity, and consistency are good things in design.

Be thoughtful about layout and overall organization of the page.

Include all of the typical stuff that you’ll find on the home page of a business: locations, hours, phone number, email address, some text about how awesome the business is, etc. Be creative, and again, think about what is meaningful to a typical end user.


### Author: Student/Group Name

### Partners:
* Aubrey
* Angelo
* Jason
* Cody
* Harper

### Links and Resources
* Google
* w3school
* MD docs

### Reflections and Comments
