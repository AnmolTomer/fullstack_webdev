# CSS Essential Training

## 0. Introduction

CSS is a fundamental part of web design, because it controls how your web pages look. Without it, websites would only be able to display text on white backgrounds. We use CSS to take our plain HTML websites to next level in terms of aesthetics and user experience.

In this course we cover all the foundations of CSS, we will cover how CSS is structured to frequently used CSS styles and the various ways CSS let's you layout a page.

You needn't know a lot, basic understanding of HTML, comfortable using a text editor is all that's needed.

All the exercises of this course can be found on CSS Essential Training Collection page. [🔗 Here](https://codepen.io/collection/DQgmdM/?grid_type=list)

---

## 1. Introduction

### **HTML and CSS**

HTML defines the structure of content on webpage, and adds semantic meaning to the content. CSS controls the appearence of the HTML elements and separates the presentation from the content.

### **Browser Developer Tools**

Every browser these days includes browser developer tools that you can access by pressing `F12`, `Right Click > Inspect` etc. and this can be used to inspect HTML, CSS and JS on any webpage.

### **Referencing CSS**

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

### **Project Overview and Setup**

`Code/css_portfolio` will be what we will work on in this course, and we will make it better as we learn things and progress through the course.

For placeholder text you can visit [Meet the Ipsums](https://meettheipsums.com/).

### **Optimizing Images and Retina Displays**

When using images within you websites, there are many ways to optimize for performance and search engine optimization. More on this at [shopify blog](https://www.shopify.com/blog/7412852-10-must-know-image-optimization-tips).

Choosing the right dimension of the image is very crucial. For instance if you use an image taken from phone, it will have a resolution of `4000x3000` pixels which would be really slow to load on any device irrespective of connection speed. For css_portfolio project, thumbnails will be only 300 pixels wide, so instead of loading a large image and resizing it using CSS, that would be an unnecessary load on the webpage. Especially for mobile phones, which may have restrictions on data or internet speeds. But instead of cropping the images to 300 pixels, we actually want it to be 600 pixels, reason for this is due to Apple's `Retina display`.

This is a trademark term coined by Apple which is used to describe their high pixel density screens. Not long after retina displays were introduced other manufacturers have their own versions of this technology. While retina is an apple specific term it's little easier to say that `high pixel density screen`. Pixel density refers to how many pixels are there within a space. Usually Pixel Density is measured by `pixels per inch (PPI)` or `dots per inch (DPI)`.

Retina displays have double the number of `PPI/DPI` and can fit two pixels within the same width and height of a non retina display. The more pixels there are within the same area, the smaller the pixels are which is how text and images appear smoother, cleaner and shows more detail. A simple way to support retina in non retina screens is to use the image twice the size. Say your thumbnail image area is 300 pixels wide, so if we use an image file that is 600 pixels wide, then resize it to 300 pixels with CSS, we are adding double the amount of pixels within the same dimension, just like Retina displays.

For both retina and non-retina screens this image will now be displayed as 300px wide, but for retina displays additionally image will appear more crisp.

For css_portfolio project we use project thumbnails as 600px width, for Background images 1400px to 2000px width images should work without any issues. When you resize the width of an image, the height gets resized automatically as well.

### **Relative Paths**

Building websites often includes linking different files together, such as embedding an image in the html, or referencing a CSS file etc. When linking files within the same project, use a relative path. The path is determined by where a file is located within the directory.

![](https://i.imgur.com/dyVJygd.png)

If file you are linking to is contained within a directory then folder name must also be included in the file path. We have included the vim_vs.png in our index.html and as we can see on `index.html` image displayed on webpage by default is same as image resolution. Now we use the css to resize the images.

We create a folder named css and inside it save our `styles.css` file.

### **Absolute Paths**

Absolute Paths refers to a resource located on a server, so the entire URL, including HTTP and full domain name must be referenced. Used for linking to pages outside our website. Websites have subsections and other pages that we can also link to.

There are services created for the purpose of hosting web resources for people to use. One such service is [picsum](https://picsum.photos/).

We will stick to absolute path for outside resources and relative paths for referencing files we have in our repo.

---

## 2. Core Concepts

### **CSS Specification and the W3C**

The World Wide Web Consortium (W3C) is an international community consisting of member organizations, a full-time staff and the public. Together they develop web standards and guidelines, including the technical specifications for CSS.

To stay informed and updated on CSS specifications you can check the standards and drafts on the w3.org site [here](https://www.w3.org/Style/CSS/). All the past, current and working drafts are published on the W3C website. Status codes are included to indicate what phase the particular module is at. So anything that's labeled recommendation is good to go. A superseded recommendation means that this specification has been replaced by a newer version. Features in draft stages are experimental and may not be supported by all the browsers.

You are not expected to remember all the CSS you include in your webpages,keeping a few go to resources for reference is recommended.

[MDN CSS Docs](https://developer.mozilla.org/en-US/docs/Web/CSS)

### **CSS Syntax and Terminology**

```css
img {
  /* Above img is a selector and selectors are used to determine which html element to apply the styles to */
  width: 300px; /* Declaration */
}
/* The entire snippet above is called a declaration block and may include one or more style rules wrapped in curly braces to contain the styles to the specific selector.*/
```

- Declarations are the style rules and are written using a property value pair, separated with a colon and ending with a semi-colon to indicate that the rule is complete. Width is a property which refers to the style characteristic to be applied to the element and values are specific to that property and vary depending on the property type.

- Many CSS properties can be written using a `shorthand` or longhand syntax. Shorthand allows us to make multiple declarations using a single declaration. For e.g. we will be using padding property which is shorthand for 4 other padding properties, the longhand and shorthand looks like following:

```css
/* longhand */
padding-top: 10px;
padding-right: 5px;
padding-bottom: 10px;
padding-left: 5px;

/* shorthand syntax allows us to make multiple declarations using a single declaration statement.*/
padding: 10px 5px;
```

- They way we declare values for shorthand and longhand depends on the properties. We will go over the syntax of different properties when we use them. Majority of CSS is selecting elements and applying style to them. We can also add comments using `/* comment in css */`. Browser doesn't reads comments and can be used to leave notes, organize code blocks, temporaily hide something, used to test and experiment without deleting the code.

- When writing CSS, there will be times when adding or removing spaces will be part of the syntax requirement. There are many style guides and one such guide is present at [codeguide](https://codeguide.co/#css). Some of the rules won't make sense but you can use it for reference later on. As you write more code try to use a consistent style throughout your project.

### CSS Values and units

- Each CSS property is defined by particular set of values ranging from different type of numerical values with or without units to a set of predefined keywords. These values are specific to the property and are not interchangeable among other properties. E.g. You can't set color property to 10px or font-size to red.

```css
color: red;
color: rgb(255, 0, 0);
font-size: 10px;
font-size: 1rem;
```

- `Numeric Values`: CSS uses lots of numerical values to specify height, width, and even how fast or slow to run an animation. Some numeric data types can be used with whole numbers only, some can be used with decimal points, others specify a dimension and require an unit attached to it.

```css
/* Numerical values */
width: 80%;
height: 10em;
border-width: 5px;
animation-iteration-count: 5;

/* Dimensions and degrees */
font-weight: 400;
font-size: 1.25rem;
transform: rotate(360deg);
animation-duration: 750ms;
```

- length datatype: used to specify sizing can be used with 2 types of units `absolute` and `relative`. Absolute length values are a fixed unit and are always the same size, regardless of any other settings declared in a related element such as the parent element. Relative units are relational settings, values declared in a parent or ancestor element will have an effect on the relative units used in the child or descendent element.

- Some numeric values do not require a unit and can be declared with just the number only if value is 0. There are some properties which use only keywords such as color, font-size/weight where units aren't required.

- In programming functions are associated with languages such JavaScript or Python, but in CSS there are many functions that can be used as property values.

```css
/* function values can have different units depending on the type of function */
transform: rotate(90deg);
width: calc(80%-20px);
background-image: url("myimage.png");
```

- Initial values are set by browser at times and in dev tools can be seen under styles, user agent stylesheet in the browser. If you want to use default values then you needn't declare these properties in your `style.css` file as these are applied by default.

- More on CSS Values and Units at MDN Page: [here](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)

### The color and functional values

- One of the property values that we use a lot in CSS is the color property, it can be used with many different types of values. Keyword values for color property includes colors such as red, blue, green or black. There are also other keywords that may not immediately come to mind such as mediumseagreen or oldlace, aliceblue, blanchedalmond etc. You can refer colors at W3C or you can check [neilorangepeel.com](https://colours.neilorangepeel.com/).

- We can also use RGB values to define colors as per their red, green and blue components, we can use a hexadecimal value or a functional value. Hexadecimal values start with # and have a combination of numbers from 0-9 and characters from A-F. First 2 values represent red, then green then blue. The letters in hexa notations are case-insensitive, also the hex value can be abbreviated if the rgb values are same. E.g. #rgb = #rrggbb, #f00 = #ff0000 and #000 = #000000.

- rgb() functions is defined using 3 ints between 0 to 255, or 3 % values between 0%-100%. E.g. rgb(0,0,0) = rgb(0%,0%,0%) and rgb(255,255,255) = rgb(100%,100%,100%). An optional alpha channel can also be added to change the opacity of the color. E.g. `rgba(0,0,0)` will have no alpha channel, `rgba(0,0,0,0)` will have 0% opacity, `rgba(0,0,0,0.5)` will have 50% opacity, `rgba(0,0,0,1)` will have 100% opacity. We can also use % to define the level of opacity.

- Keyword values can be expressed using the corresponding hex or RGB value, there are a limited number of keywords, so using a hex or rgb will provide more color variations.

- Another functional value is `hsl()`. This defines the color using hue, saturation and lightness properties. hsl() also includes optional alpha component `hsla()` for opacity. E.g. hsl(270,60%,70%), hsla(270,60%,70%,0.7). Hue is specified as an angle within the color wheel, the value can be declared with or without degree unit. The hue is specified as an angle within the color wheel relative to red. So red equals zero degrees or 360 degrees and the other colors are spread around the circle. Green equals 120 degrees, blue is at 240 degrees and so on.

- Saturation is the second value, represented with %. 0% is a shade of gray, and 100% is full saturation. Lightness is also represented as %. 100% lightness is white, 0% is black and 50% lightness is normal. Alpha channel can be represented as decimal or % representation. You can use [hsla explorer](https://css-tricks.com/examples/HSLaExplorer/) on css tricks to find out color codes of different colors in hsla.

- [Randoma11y](https://randoma11y.com/) is great for generating high contrast colors for those with color blindness, also another great website is [coolors.co](http://coolors.co/) to generate entire color palettes for your project.

### Type and Universal Selectors

- At the most basic level, css is selecting an element and applying style to it. CSS uses different types of selectors to create pattern matching rules to determine which element to apply style to. Type selectors are the most basic kind of selectors and they match to HTML elements by using the element name but without the angled brackets. E.g. to apply the style all the h1 elements h1{...} is the selector. Universal selector matches to all elements of any type on the HTML page and we use `*` for it.

```css
/* Apply the style to all h1 elements */

h1 {
  /* Styles to apply go here */
}

/* Universal selector using * to apply style to whole document */
* {
  border: 1px solid black;
}

/* select a paragraph and change the text color to blue */
p {
  color: blue;
}

/* select a link, nested in a list item and remove the underline */

li a {
  text-decoration: none;
}
```

- There are some specific uses for universal selector and we will be looking at it later on, but universal selectors are something that should be used sparingly. If we have two h2 elements and we want to apply style only to one of them in that case we make use of class and id selectors.

### Class and ID Selectors

- When type selectors are too general or you want to target a specific occurence of a particular element, say you have two `<h2>` elements and you only want to style one of them in a specific way, in that case we make use of class and id selectors. To use a class selector, we add the class attribute to the opening HTML tag of the element you want to apply the style to. Syntax is same as any other attribute. In CSS the value of the class in our case fancy will be selected using name of value with a `.` before it to target a class.

- `Class selectors` can be reused throughout the document, we can add the class to any element to apply all the styles defined for that class in our stylesheet/css file. It doesn't have to be same kind of element, that means h1 and p element both can have same kind of style properties applied if they are using same class. We can also use more than one class in the same element by adding another class name to the value, names of multiple class needs to be separated by a space and contained within the quotes. With multiple classes we can apply style to each class independent of each other.To specify a style only when both classes are present combine the class selectors with no space.

- `ID Selector`: Similar to using class selectors, IDs are also added as an attribute to the HTML element with a custom value. However, 2 main differences are there between classes and IDs

  1. ID selectors can being with `#` symbol.
  2. ID selectors are not reusable and can be used once per page.

- IDs also serve another function unrelated to CSS. IDs can be used for in-page linking using the ID value in the link's href attribute. You can use same ID value for in-page linking as well writing css style. When using class or ID name do not use spaces, alternates can be to use camelCase, snake_case or any other convention.

```html
<p class="fancy intro">Fancy Paragraph</p>
<p>Regular Paragraph</p>
<h1 class="fancy">Fancy Heading</h1>

<!-- id -->
<div id="container">
  <p>Paragraph in a header.</p>
</div>

<!-- In-page linking using href and ID -->
<a href="#example">Click here to visit example section </a>
<section id="example">This is link section</section>
```

```css
/* class selector in css */
.fancy {
  font-style: italic;
}

.intro {
  font-weight: 400;
}

/* Style rules when both the classes are present do not use space */
.fancy.intro {
  /* style rules when fancy and intro classes are used together */
}

/* ID */

#container {
  text-align: center;
}
```

### Descendant Selectors

- When an html tag is nested inside another tag, then relationship between the elements is created and this is described by the Document Object Model. The first level creates a parent child relationship and anything nested further is referred to as ancestor descendant relationship. The relationship between the elements nested within the same parent are referred to as sibling elements. Descendant selectors are used to apply styles specifically to elements nested within other elements. To select a descendant element use a space between the selectors to denote the nested relationship. One on left is the ancestor element and selector on right is its descendant element.

- More than two selectors can also be used to match two descendant elements. We can also mix different selector types or even skip levels, not required to follow the exact nested path of the HTML structure to select a descendant element.

```html
<section>
  <p>...</p>
</section>

<!-- Two selectors used in css to select a element which is inside section and p element -->
<section>
  <p>
    <a href="#link">Link</a>
  </p>
</section>
<p>...</p>

<section>
  <h1>Heading</h1>
  <p>Paragraph with a <span>span</span>.</p>
</section>
```

```css
/* selects only the paragraphs which are contained within a section */
section p {
  ...;
}

/* Selects only links, inside of paragraph inside a section */
section p a {
  ...;
}

.container h1 {
  style: value;
}

.container span {
  style: value;
}
```

- More on descendant selector on this [codepen](https://codepen.io/anmoltomer/pen/JjWdYLm?editors=1100).

### Grouping Selectors

- Using classes allows us to apply the same style to different elements. Sometimes we may want to apply only some of the same styles. We can group multiple selectors into one declaration block, separating each selector with a comma. This will apply style to all the matched elements in the list and we can also mix different types of selectors in the same list. The spaces are optional but the comma is not. Each selector in the grouped list are independent of each other. So when using descendent selectors, make sure to declare the full combination.

```css
/* applied to all h1 elements */
h1 {
  style: value;
}

/* applies to any element with this class */
.class {
  style: value;
}

/* applies to both h1 and h2 elements */
h1,
h2 {
  style: value;
}

/* applies to all of these elements */
h1,
h2,
.class,
#id {
  style: value;
}

/* applies to h1 of section and h2 */
section h1,
h2 {
  style: value;
}

h1,
h2,
h3 {
  font-weight: normal;
}

/* Combining Selectors: Use when both classes are included together */

.fancy.intro {
  style: value;
}
```

### Inheritance and Specificity

- Styles can be inherited from the ancestor to descendant elements, this makes it easier to apply style to several elements with one liner codes, rather than defining the style for each element.

```css
body {
  /* All descendants within body element will have their color set to #222 */
  color: #222;
}
```

- There are some properties that are not inheritable, you can check it out [here](https://www.w3.org/TR/CSS21/propidx.html). Using specific selectors refers to the concept of specificity which determines how browsers take precedence when there are conflicting declarations. The hierarchy is based on selectors type. The precedence order is as follows: `Universal (*) < type (p) < class (.example) < id (#example)`. Universal selector has the lowest specificity, i.e. all other selectors will override it. The only declarations the universal selector can override is `inherited styles`. Example [codepen](https://codepen.io/anmoltomer/pen/LYWVGpw?editors=1100)

![](https://i.imgur.com/Jyj79x9.png)

- Or better yet you can use online specifity calculation tool available [here](https://specificity.keegan.st/)

## The cascade and importance

- The Cascade in Cascading Style Sheeets refers to how style rules are applied based on specificity and source order. Style sheets are read from top to bottom. So if there are 2 rules applied to the same element and have the same specificity value then the declaration that was loaded last will take precedence. The cascade rule also applies to CSS declaration written in the same declaration block.

```css
p {
  font-size: 12px;
}

/* This will take precedence */
p {
  color: black;
  padding: 20px;
  font-size: 12px;
  /* This declaration of 16px will take precedence. */
  font-size: 16px;
}
```

- Source order matters, except when selector is more specific in that case one with higher specificity will be applied.

```css

/* Being a class this will take precedence due to higher specificity value */
.example {
  font-size: 16px;
}
p{
  font-size: 12px;
}

<p class="example">Paragraph</p>
```

- But to override the specificity and source order, we can use the specificity.

```css
p {
  /* This style takes precedence even though .example has higher specificity */
  font-size: 12px !important;
}

.example {
  font-size: 16px;
}

/* If you want to override the important then use selector with higher specificity and important keyword */

.example {
  /* will override the 2 above. */
  font-size: 18px !important;
}
```

- Generally using too many important to override the style is considered a bad practice. There are some special use cases, which you can see in the MDN article on specificity [here](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#the_!important_exception) . Aside from some rare cases, following the best practices and rules of cascade and specificity will go a long way.

### Project: Adding Colors

- Here we work on changes we do to our file in `Code/css_portfolio` folder.

### Psuedo-class selectors and links

- [Codepen Link](https://codepen.io/anmoltomer/pen/XWMbXov?editors=1100)
