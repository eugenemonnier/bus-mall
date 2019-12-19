## BusMall: Day 1

**1. As a user, I would like to display three unique products by chance so that the viewers can pick a favorite.**

* Create a constructor function that creates an object associated with each product, and has the following properties:
	* Name of the product
	* File path of image

* Create an algorithm that will randomly generate three unique product images from the images directory and display them side-by-side-by-side in the browser window.

* Attach an event listener to the section of the HTML page where the images are going to be displayed.

* Once the users ‘clicks’ a product, generate three new products for the user to pick from.
> Created constructor **GetProducts()**
> Created functions **genRandomNum()** and **displayImages()**
> Created a for loop to add event listener to image section
> Included **genRandomNum()** and **displayImages()** in new **picked()** function

**2. As a user, I would like to track the selections made by viewers so that I can determine which products to keep for the catalog.**
* In the constructor function define a property to hold the number of times a product has been clicked.

* After every selection by the viewer, update the newly added property to reflect if it was clicked.
> Added **score** property to **GetProducts()**
> Added statement in **picked()** to increase value of **score** for the image that was selected

**3. As a user, I would like to control the number of rounds a user is presented with so that I can control the voting session duration.**
* By default, the user should be presented with 25 rounds of voting before ending the session.
* Keep the number of rounds in a variable to allow the number to be easily changed for debugging and testing purposes.
> Added global variable **totalClicks** & **numOfRounds**
> Added if statement to **picked()** to verify **totalClicks** is less than **numOfRounds**

**4. As a user, I would like to view a report of results after all rounds of voting have concluded so that I can evaluate which products were the most popular.**
*  Create a property attached to the constructor function itself that keeps track of all the products that are currently being considered.
        
 *  After voting rounds have been completed, remove the event listeners on the product.
        
 *   Display the list of all the products followed by the votes received and number of times seen for each. Example:  `Banana Slicer had 3 votes and was shown 5 times`
> Added **selected** property to **GetProducts()**
> Removed event listeners in **picked()** when **totalClicks** === **numOfRounds** - 1
> Created method **displayResults** to populate **aside** and placed inside **picked()**

## BusMall: Day 2

**1. As a marketeer, I want to prevent users from seeing the same image in two subsequent iterations, so that they are not biased.**

-   Update your algorithm to randomly generate three unique product images from the images directory.
-   Update your algorithm so that new products are generated, confirm that these products are not duplicates from the immediate previous set.
> Updated **getRandomNum()** logic to prevent the same image from being seen in two subsequent iterations

**2. As a user, I would like to track how many times a product has appeared in a voting session, so that I can track analytics on each piece of data.**

-   Add an additional property to your constructor function that tracks the number of times the product has been shown.
-   Update this new property every time the product is shown as one of the three options on the screen for the viewer to choose.
> Added **viewed** property to **GetProducts()**
> Increased **viewed** property inside **displayImages()**

**3. As a marketing manager, I would like a visual representation of how many times a product was clicked so that I can visually analyze the results.**

-   Using ChartJS (imported from CDN), display the vote totals and the number of times a product was viewed in a bar chart format. (hint: don’t forget about the  `<canvas>`  tags)
-   Place the bar chart in the section located beneath your three product images
-   The bar charts should only appear  _after_  all voting data has been collected.
> Imported **ChartJS** library from CDN
> Created **renderChart()** and added to section of **picked()** that is called after voting data has been collected
> Placed charts in **footer** section

## BusMall: Day 3
**1. As a user, I would like my data to persistently track totals between page refreshes, so that I can keep track of the aggregate number of votes.**

-   Implement local storage into your current application
-   Make sure the data persists across both browser refreshes and resets
>Created functions **storeProducts()** & **getProducts** to store and retrieve **allProducts** data.
>Added statement to check if localStorage has content and either return stored data to or build new **allProducts** array objects

## Additional Features
> Every time the window loads three random products are shown
> Added two additional graphs
> Two of the graphs filter out products that have not been selected from their data
> Created previous & next buttons that will switch between graphs