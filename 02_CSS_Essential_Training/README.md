# CSS Essential Training

## 0. Introduction

CSS is a fundamental part of web design, because it controls how your web pages look. Without it, websites would only be able to display text on white backgrounds. We use CSS to take our plain HTML websites to next level in terms of aesthetics and user experience.

In this course we cover all the foundations of CSS, we will cover how CSS is structured to frequently used CSS styles and the various ways CSS let's you layout a page.

You needn't know a lot, basic understanding of HTML, comfortable using a text editor is all that's needed.

All the exercises of this course can be found on CSS Essential Training Collection page. [🔗 Here](https://codepen.io/collection/DQgmdM/?grid_type=list)

---

## 1. Introduction

- **HTML and CSS**

HTML defines the structure of content on webpage, and adds semantic meaning to the content. CSS controls the appearence of the HTML elements and separates the presentation from the content.

- **Browser Developer Tools**

Every browser these days includes browser developer tools that you can access by pressing `F12`, `Right Click > Inspect` etc. and this can be used to inspect HTML, CSS and JS on any webpage.

- **Referencing CSS**

Different ways in which we can add CSS to our webpage are: `External`, `Inline` and `Internal`.

1. **External**: This method refers to using a separate CSS file and must be saved with CSS file extension. We can load external CSS file into the HTML with a `link` tag or `@import` method. `<link rel="stylesheet" href="css/styles.css">` Link method is added to head with attributes rel and href. The attribute `type="text/css"` was required for older HTML versions, but is no longer required in HTML5.

Using an external stylesheet is recommended as it separates the CSS from the HTML making it easier to manage. An external stylesheet can be reused throughout a project by linking the same CSS file to any HTML file as required, and any changes made to this CSS file would reflect on all the HTMl pages consistently.

You can use more than one CSS file, but having too many CSS files defeats the purpose of having separate stylesheets if you are maintaining a bunch of different files. However for larger projects, having one giant CSS file can also become unruly, so sometimes breaking the CSS files into smaller files can make it easier to manage and do changes.

Another external method is that we just add `@import` rule, which imports one or more stylesheets into HTML files or into another CSS file. This method can be used to import all the smaller CSS files into a single CSS file which is then loaded into the HTML document.

```css
/* styles.css  */
@import url("/styles/layout.css") @import url("/styles/typography.css") /*  */
  @import url("/styles/buttons.css");
```

```html
<!-- index.html -->
<head>
  <style>
    @import url("css/styles.css");
  </style>
</head>
```

This method isn't used these days as `@import` doesn't allow for parallel downloads and meaning the page must download an entire stylesheet before it loads rest of the page. More on this, from a blog by Steve Souders from 2009 that's still relevant. [Here](https://www.stevesouders.com/blog/2009/04/09/dont-use-import/)

Import method however is used with CSS preprocessors such as SASS and or LESS or when CSS files are compiled into one file.

![](https://i.imgur.com/3ZeaZtv.png)

`link` method is used and recommended if you are directly working with CSS on your project.

`Inline Method:` uses a style attribute which is added to the opening HTML tag, and we add CSS rules as value which applies style directly to the HTML element. The inline method should be used only when necessary as it is hard to manage and you have to edit it individually. Multiple styles must be added to the same style attribute and more you add, the harder it is to read. Also, CSS added by any other method is overwritten if you have inline CSS defined for an element, creating more potential for conflict with other CSS style rules.

`Internal Method:` This is the third option, and in this method in the head of the html page, we create `style` element and we enter CSS rules for each element just as we would've for external CSS file. This method if more flexible than inline method because instead of adding styles to each individual element, CSS selectors are used to apply a style to all the matched elements. More about selectors later on. While internal CSS works better than inline CSS, it is still inefficient, as you cannot import it, and CSS rules need to be copied to each HTML page manually, something you needn't do in external CSS as importing does the job. Internal method is best for short blocks of CSS that are page specific.

- **Project Overview and Setup**

`Code/css_portfolio` will be what we will work on in this course, and we will make it better as we learn things and progress through the course.

For placeholder text you can visit [Meet the Ipsums](https://meettheipsums.com/).

- **Optimizing Images and Retina Displays**

When using images within you websites, there are many ways to optimize for performance and search engine optimization. More on this at [shopify blog](https://www.shopify.com/blog/7412852-10-must-know-image-optimization-tips).

Choosing the right dimension of the image is very crucial. For instance if you use an image taken from phone, it will have a resolution of `4000x3000` pixels which would be really slow to load on any device irrespective of connection speed. For css_portfolio project, thumbnails will be only 300 pixels wide, so instead of loading a large image and resizing it using CSS, that would be an unnecessary load on the webpage. Especially for mobile phones, which may have restrictions on data or internet speeds. But instead of cropping the images to 300 pixels, we actually want it to be 600 pixels, reason for this is due to Apple's `Retina display`.

This is a trademark term coined by Apple which is used to describe their high pixel density screens. Not long after retina displays were introduced other manufacturers have their own versions of this technology. While retina is an apple specific term it's little easier to say that `high pixel density screen`. Pixel density refers to how many pixels are there within a space. Usually Pixel Density is measured by `pixels per inch (PPI)` or `dots per inch (DPI)`.

Retina displays have double the number of `PPI/DPI` and can fit two pixels within the same width and height of a non retina display. The more pixels there are within the same area, the smaller the pixels are which is how text and images appear smoother, cleaner and shows more detail. A simple way to support retina in non retina screens is to use the image twice the size. Say your thumbnail image area is 300 pixels wide, so if we use an image file that is 600 pixels wide, then resize it to 300 pixels with CSS, we are adding double the amount of pixels within the same dimension, just like Retina displays.

For both retina and non-retina screens this image will now be displayed as 300px wide, but for retina displays additionally image will appear more crisp.

For css_portfolio project we use project thumbnails as 600px width, for Background images 1400px to 2000px width images should work without any issues. When you resize the width of an image, the height gets resized automatically as well.

- **Relative Paths**

Building websites often includes linking different files together, such as embedding an image in the html, or referencing a CSS file etc. When linking files within the same project, use a relative path. The path is determined by where a file is located within the directory.

![](https://i.imgur.com/dyVJygd.png)

If file you are linking to is contained within a directory then folder name must also be included in the file path. We have included the vim_vs.png in our index.html and as we can see on `index.html` image displayed on webpage by default is same as image resolution. Now we use the css to resize the images.

We create a folder named css and inside it save our `styles.css` file.

- **Absolute Paths**

Absolute Paths refers to a resource located on a server, so the entire URL, including HTTP and full domain name must be referenced. Used for linking to pages outside our website. Websites have subsections and other pages that we can also link to.

There are services created for the purpose of hosting web resources for people to use. One such service is [picsum](https://picsum.photos/).

We will stick to absolute path for outside resources and relative paths for referencing files we have in our repo.
