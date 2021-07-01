# 2. CSS Essential Training

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

---

## 3. The Box Model

### Intro to the Box Model

- Now that we have seen some core CSS concepts, now we will see how HTML elements are rendered in the browser. We see text and images but to the browser every single element is displayed as a rectangular box, whether it's an image, paragraph or a link in a paragraph, each of these elements is an individual box. This is called CSS box model. It is a set of rules that defines how elements are sized, total amount of space these elements take up and where they are positioned in realtion to each other.

- Before we incorporate layout methods such as float, flexbox or grid, we first have to understand the box model. This is the foundation of layout on the web. We will see how elements occupy space on web page based on type of element, inline or block. Then we will see 5 properties that make up the box model: `Width, Height, Padding, Margin, Border`.

### Inline, Block and Display

- Here we see how HTML elements occupy space. There are 2 kinds of HTML elements inline and block-level. `Inline` elements take up the same space as their content contained within the tags. Elements are displayed in a line, from the left and elements will only wrap when they cannot fit on the same line within its container. Common inline elements are anchor tags, span and strong.

- `Block Elements` have the same height as their content but they span the entire width of their containing element, even if the content itself doesn't expands in entire width. This is the reason why block elements always start on a new line and stack on top of each other. The majority of elements are block level. Some common ones are paragraph, heading, article and section.

- `display`: The display property can be used to change the default behavior of inline and block level elements, using a value of `block`, `inline` or `inline-block`. A simple way to check if an element is block or inline is see how it displays when you add two elements next to each other. [CodePen Link](https://codepen.io/anmoltomer/pen/qBrdZgV?editors=1100)

### The box model and properties

- The CSS block model describes the rectangular boxes that are generated for each HTML element. Each box has 4 parts, content box has actual content between the HTML tags such as text, or an image. `Padding` area surrounds `content` area, then `border` surrounds the padding area and `margin` surrounds the entire element. These four together determine the total area of each element.

![](https://i.imgur.com/OY6CjnZ.png)

- There are 5 CSS box properties viz: `width` and `height` sets the width and height of content area, padding adds or removes the space within the element. Margin adds or removes the space around the element, and border is added between padding and margin.

![](https://i.imgur.com/4mtuUv3.png)

- We saw different types of CSS values and units. For box properties `%` and `length` data types are used. When % unit is used, it is defined by the size of its containing element. E.g. if container has width of 1000px, then inside container will be 500px if the width is set to 50%. If you change width of container then the % width will change as well.

- There are many types of absolute units such as cm, mm, inch, px, pc (1/6) of an inch, pt point = 1/72 of an inch. For websites if you are using an absolute length unit such as px then stick to that. Relative length unit are dependent on the length of another element. em and rem are defined by font-size of the parent element and the root element respt. More on font sizing with relative unit in typography section. Using relative units can be useful for making flexible layouts that display well across different screen sizes. `em` represents the inherited font size of the element, `rem` represents the font-size of the root element.

- Learning relative sizing can be a bit tricky when you are just getting started with CSS and can be a bit more advanced, so here we stick to px and % for using box properties.

### The box properties syntax and usage

- `width and height`: The width and height properties change the size of the content box. Inline elements require the display property with them.

```css
/* Block Element */
div {
  width: 100px;
  height: 100px;
}

/* Inline-element */
span {
  width: 100px;
  height: 100px;
  display: block;
  /* or */
  display: inline-block;
}
```

- `padding`: Padding property adds or removes the space inside of the element but around the content box.

```css
/* longhand */
padding-top: 2px;
padding-right: 2px;
padding-bottom: 2px;
padding-left: 2px;

/* shorthand  with 4 values in the order of as if you are making a square clockwise starting from 12 o'clock 🔝 ▶ ⤵ ⬅ */
padding: 2px 2px 2px 2px;

/* shorthand with 2 values means top & bottom, left and right */
padding: 2px; /* Same on all sides */
padding: 2px 10px; /* 2 px on top and bottom, 10px on left and right */
padding: 2px 10px 5px; /* 2 px on top, 10px on left and right, 5px on bottom bottom */

/* Mixing different types of length units */

padding: 10px 2%; /*top & bottom, right & left*/

/* If an element already has a default padding style, mostly defined in User Agent Stylesheet (UAS) in that case you can define padding to override that in your style.css by setting padding to 0 to remove the space*/

/* Some of the examples of overriding UAS */
padding: 0px;
padding: 0;
padding: 2px 0;

/* Can't have negative numbers so what we have below is invalid */
padding: 2; /*✅✅*/
padding: -10; /* ❌❌*/
```

- `margin`: Margin property is used to add or remove space around an element. Rules for margin and padding are almost same, there is a small addition in case of margins that **margin can also be used with the keyword** `auto` and negative values, more on this later.

```css
/* longhand */
margin-top: 2px;
margin-right: 2px;
margin-bottom: 2px;
margin-left: 2px;

/* shorthand */
margin: 2px;
```

- `border`: Border property display a border between the margin and padding of an element. Border property is shorthand for `border-width`, `border-style` and `border-color`. When using the shorthand syntax for border, `order of values do not matter`.

- For `border-width` property any length can be used as well as keywords `thin, medium and thick`, for `border-color` rgb, hex or any other kind of color values, for border-style we have lots of options to choose from such as: `none, hidden, dotted, dashed, solid, double, groove, ridge, inset, outset` etc. More on borders in MDN Documentation [here](https://developer.mozilla.org/en-US/docs/Web/CSS/border).

```css
/* shorthand */
border: 2px solid red;

/* longhand */
border-width: 2px;
border-style: solid;
border-color: red;
```

- The dimensions of all the properties contributes to the total amount of space an element occupies. Below we have a box with width of 400 px and when we add 30px of padding right&left, 20px of border right&left so the total width of the element will be 400 + (30 + 30) + (20 + 20) = 500px, margin won't be contributing to the total size of the element as it adds space around the element, but it does affect the amount of space element takes up.

![](https://i.imgur.com/9fi1o8r.png)

### Debugging the Box Model

- We can experiment by selecting various elements in our css file to see how changing padding and margin affects the elements, or we can make use of developer tools present in browser to inspect the element. Press `Ctrl+Shift+C` and click the element and then you will end up on the properties of that element in html file as well as CSS related to it will be shown, and if you scroll a little further in styles tab you will see box model representation as well where calculated values of border, padding etc. is all shown.

- You can hover over the box model so that border and elements are highlighted.

### Padding, Margin and Border

- [CodePen Link](https://codepen.io/anmoltomer/pen/KKWpOrB?editors=1100)

### Margin and Negative Values

- Block elements stack on top of each other based on their HTML order. When we use negative margin values to move elements outside of the default stacking position. This technique works best when you need to nudge the elements just a little bit. If you are using large values to move an element to a completely different position on html page, then it is better if you reorder the HTML or use another layout technique.

- Margins can be used for layout is to center align block level elements horizontally. A width is defined for the element and the margins left and right values are set to auto. Top and bottom margin can be any value, depending on how much space we want.

- [Codepen Link](https://codepen.io/anmoltomer/pen/ExWKZxj)

- Many html elements have default padding and margin styles. So some people prefer to start with a clean slate by adding a reset stylesheet that removes the spaces and default styles.

- When learning know default styles look like what, so that you can know tackle then when you come across those.

---

## 4. Typography

### Typography for the web

- Typography is the art of arranging type for readability and to engage with the reader. Typeface is a set of fonts, designed with common characteristics, composed of glyphs. While selecting typeface for our project we aim to choose something that's easier to read but also convery appropriate tone for the content. E.g. Times New Roman is often used for legal documents as they are thought to convey a traditional formality. Comic Sans was designed to be a casual font.

- There are 5 categories of typespaces. Script, Decorative and Monospace typefaces have more specific usages and Serif, Sans-Serif are typefaces which you will probably use the most often. Script typefaces have a hand-lettered look and are often difficult to read at small font-sizes. Script fonts convey an elegant feel and are often used for wedding invitations or greeting cards. For the web it is usually reserved for headlines or small decorative text details.

- Decorative typefaces are ornamental, since decorative fonts tend to have big personalities, they too are usually reserved for headings and declarative details.

- In Monospaced typefaces each character uses the same amount of horizontal space, each character is the same width. These typefaces are often used to display code.

- Serif typefaces are identified by small declarative line usually at the top or bottom of the letters. Viewed as traditional and formal.

- Sans Serif typefaces do not have decorative lines like serif, and are often thought of as contemporary and modern.

### Changing the font-family

- To set the typeface in CSS, use the `font-family` property. The value is a list containing one or more font options separated by commas. This list is sometimes known as `font stack`. The first value in list is our first choice, and the following options are alternative fonts in order of most preferred to least preferred. If the user doesn't have a particular font-family installed on their computer then it will load the next available font from the font stack.

- Choose fonts that look similar and always include a generic font at last since there's no guarantee that any of the font specified would be available. The generic font family names should match the typefaces declared in the fonts deck. The available values are serif, sans-serif and monospace, which match up to the typefaces within the same category.

- Other two generic typefaces are cursive and fantasy (decorative fonts). Cursive usually matches to script or decorative fonts, and fantasy for unconventional decorative fonts. 2 to 3 fonts are pretty standard, however there is no limit. Have your preferred font followed by generic fonts, having a font stack allows for some fallback alternatives.

- How do we know what fonts are available? This is where concept of `web-safe fonts` come into the picture. There are some fonts which come pre-installed on the majority of the computers and devices such as `Arial` and `Times New Roman`. [CssFontStack](http://cssfontstack.com/) is a handy reference for you to see web-safe fonts and vategorize them by typeface.

- However, not all operating systems have the same fonts installed or the user may have deleted the fonts we want. Well CSS has a couple of ways for us to expand our options, using web fonts with `@font-face` or online web services, which we will be discussing in an upcoming lesson. If font family name has spaces or other characters than hyphen then these needs to be wrapped in single or double quotes. Not required, but recommended to add quotes to the font-family names that contain spaces.

### Font-weight, font-style and Web Fonts with @font-face

- Font families often have different typefaces with varying amount of thickness and these vary from light, regular, semi-bold, bold, extra-bold. Use the font-weight property to define the style. Values can be numbers ranging from 100 to 900. 100 being the lightest or thinnest and 900 being the darkest or thickest fotn-face.

- CSS has normal equal to `font-weight` value 400 and is default for body text. `bold` has font-weight value of 700 and is default for headings and other bolded styles like strong text. There are 2 more keywords bolder and lighter which are relative to the inherited font-weight from a parent element.

- `font-style`: Includes 3 values, italic, oblique and normal. [CodePen Link](https://codepen.io/anmoltomer/pen/LYWNLve)

- Font files can be dowloaded just like any other resource such as images. Web fonts are added with `@font-face` rule. You have to declare in your stylesheet `@font-face` make sure to use the keyword as shown.

```css
@font-face {
  font-family: "My Font";
  src: url(path-to-font.woff) /*relative path*/
  src: url(http://example.com/fonts/font.woff) /*absolute path*/
}
```

- woff and woff2 font formats are supported for most of the modern browsers, ttf fro Safari browsers. [FontSquirrel](https://www.fontsquirrel.com/) is a great site which can create different filetypes of a font.

- Using [@font-face guide](https://css-tricks.com/snippets/css/using-font-face/) from csstricks.

- Another option of using fonts is with an online service such as [adobe fonts](http://fonts.adobe.com/) or [google fonts](https://fonts.google.com/). With web font services we link directly to the css stored on the server.

### Font-size Property

- Defines the size of the font and can be used with a variety of value types. Relative values are calculated based on the nearest ancestor element. Absolute values are fixed and are not affected by any ancestor elements. Both relative and absolute font sizes are inherited by descendant elements.

- Computer screens are measured in pixels, which is an absolute value. This is an ideal unit for accuracy. Numeric values with pixels are preferred and better if you stick to whole numbers as different browsers `interpret decimal values inconsistently`. Browser default size of document size is `16px` with exception of headings as it depends on level.

- `em` unit was historically used in typography to measure width. In CSS `em` is a relative unit and in terms of size it is related to its closest ancestor element's font size. Unlike pixels it is common to use decimal points with em based relative sizing. 1em = inherited font-size, and if no font-size is declared then one 1em becomes equal to default browser font-size. Changing the font-size in the parent or ancestor element will change the value of the child element.

- Rem stands for root em and was introduced after the em unit and is similar in usage. Rem is only relative to the root element i.e. html element. Sizing of the parent or ancestor element doesn't affects the rem unit.

- [CodePen Link](https://codepen.io/anmoltomer/pen/QWpNxga)

- Using relative values can be tricky initially but it can be useful especially for making changes for different screen sizes. E.g. we may want to reduce font sizes for smaller screens, instead of changing size for various elements we can use rem here and change the HTML value. When getting started with CSS pixels are a good way to get up and running. To learn more on length and keyword values you can chack out MDN docs on font-size [here](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size)

### Font Shorthand

- Font Shorthand is shorthand for 6 properties viz font-style, font-size, font-weight, font-family, font-variant and line height. Below we see a comparison between longhand and shorthand

```css
/* shorthand */
font: italic small-caps bold 24px/1.5 Helvetica, sans-serif;

/* longhand */
font-style: italic;
font-variant: small-caps;
font-weight: bold;
font-size: 24px;
line-height: 1.5;
font-family: Helvetica, sans-serif;
```

- Order matters in short hand. font-style, font-variant and font-weight must precede font-size. font-variant should only be specified using small-caps or normal value, line-height must immediately follow font-size preceded by `/`. font-family must be the last value specified.

- More information on MDN font docs [here](https://developer.mozilla.org/en-US/docs/Web/CSS/font)

### Text-decoration, text-align and line-height

- There are more properties to add various styles to text. `text-decoration:none` is used frequently to remove underline from links, we can also define color and style as text-decoration actually represents 3 longhand properties, below is a comparison between longhand vs shorthand. More on MDN docs [here](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)

```css
/* shorthand */
text-decoration: underline red solid;

/* longhand */
text-decoration-line: underline;
text-decoration-color: red;
text-decoration-style: solid;
```

- `text-align` used to align content within a block element. It can be added to the element itself or we can set the property in parent element so the style can be inherited. Another common property is line-height property that sets the height of the space between two lines of text. Closely related to font-size.

- `line-height` used to set space between the lines of the content. `line-height` can be used with pixels, unitless numeric values, or percentages.

- [CodePen Link](https://codepen.io/anmoltomer/pen/vYxGrqx)

---

## 5. Layouts: Float and Position

### Introduction to Float

- Before flexbox and grid layout modules were introduced, the float property was used for creating entire document layouts e.g. adding sidebar to the main content area, or creating multiple columns. We may still come across sites on legacy code where we have to support layouts with floats. Also floats area used for simple layouts, such as floating an image to have the text flow around it. That's why we will be looking at how floats work briefly here.

- Early websites were essentially a recreation of print designs. The float property allowed us to create magazine-style layouts with floated images and text flowing aroung those images. When developers realize, other elements could be floated too, this paved the way for float-based page layouts. The majority of structural HTML elements used to create page layouts are block-level elements. So by default, they are displayed at full width and are stacked on top of each other.

- The float property can be used to change the normal document flow by floating elements to the left or right side of their container. When elements are floated they are removed from the normal flow, though they remain part of the flow resulting in the change of the positioning of the surrounding elements. [CodePen Link](https://codepen.io/anmoltomer/pen/zYZqMNv?editors=1100)

- [CanIUse](https://caniuse.com/) is a great place to check browser compatitbility of different styling options. Try [this](https://codepen.io/anmoltomer/pen/qBrZLbx?editors=1100) codepen for seeing the clearfix, overflow hack and flow-root method.

### Layouts and the box model

- Earlier we saw how box model uses width, padding and border to interpret the size and space an element takes up. When creating layouts with multiple columns in the same container understanding the way elements are sized is very important. Let's say we want to create a sidebar with a main content area. To do so we need to make sure that whatever size we choose, the columns fit within the container.

- These days due to flexbox grid becoming popular, floats have declined in popularity. [CodePen Link](https://codepen.io/anmoltomer/pen/zYZqyNE?editors=1100)

- Position property can also be used to change the flow of the document. There are 5 different values, each responsible for different type of positioning as follows:

  1. `Static`: Elements are not positioned.
  2. `Relative`: Relative to current position.
  3. `Absolute`: Relative to containing element.
  4. `Fixed`: Relative to the viewport.
  5. `Sticky`: Relative to containing element and viewport.

- [CodePen Example](https://codepen.io/christinatruong/pen/zXLemj?editors=1100)

### Position and z-index

- We have seen how elements can be positioned along x and y axes, but there is also a third axis. Everytime an HTML element is added within the same container the elements are stacked in layers on the Z axis. This is known as stacking context. An element with higher stack level is rendered in front of the element with lower stack level. Most of the time it is hard to see how elements are stacked on the z index unless they overlap each other.

- [CodePen Link](https://codepen.io/anmoltomer/pen/jOBqdvK?editors=1100)

- To override the default stacking order we can use z-index property to change it, but it only works if element has some kind of position applied to it. Higher the z-index value, higher is the stacking level, so we can control the stack value among various elements by using a bigger or smaller number. If we want to make one of the elements higher in the stack, we just have to use the higher z-index value.

---

## 6. Layouts: Flexbox and Grid

### Introduction to Grid and Flexbox

- Both flexbox and grid are new layout modules that can be used to create layouts that are more advanced than preivously used techniques. While some of the syntax and properties are same for grid and flexbox, each of them have their own specialities.

- `Flexbox & Grid`: Elements are aligned on the single axis, described as being `one dimensional`. We can set the main axis to arrange items as rows or columns, `flexbox only deals with one dimension at a time`. `Grid layouts` are thought of as `two-dimensional` as it can arrange items into rows and columns at the same time. Flexbox is distribution of items across a single axis, whereas `grid is ideal for layouts that require more control with rows and columns`.

- Grid and flexbox introduced many new and flexible solutions for many different use cases, which means new terminology, properties and rules. These are whole new layout modules, not just a couple of properties.

- Float and sometimes displaying position were used to create various page layouts. While there are still uses for these properties, the flexible box has introduced more ways for aligning and sizing elements and creating more flexible layouts as a whole. `Flex container` refers to the parent element, and the `flex items` are the direct child elements of the `flex-container`.

- Flex items are laid out along the main axis, the `direction is horizontal` by default meaning flex elements are `arranged in rows` by default. However, we can change the direction of main axis to make it run vertically using `flex-direction` property. `Cross axis` will always run perpendicular to the direction of the flex items. Both axes have start and main end end for the main axis and cross start and cross end for the cross axis. To use flexbox the flex-container must be defined. Earlier we used the display property to change the behavior of inline and block level elements flex or inline-flex.

![](https://i.imgur.com/yuMilLX.png)

- When `display:flex` is added to the parent element, each child element is now a flex item. Flex items will automatically be displayed in a row and will be the same size as their content, but the flex-container will still span the width of its container.

![](https://i.imgur.com/bdi9YW6.png)

- If you set the display value to the `inline-flex`, the flex container will span the width of its content the flex items and displays inline to other flex-containers. `inline-flex` doesn't change how flex-items are displayed, rather it makes the flex-container display inline. Though the flex items resize themselves automatically to the size of their content, we can set a specific size as well. With flexbox `height` of each flex item `automatically adjusts to be the same height.` without adding any additional CSS.

![](https://i.imgur.com/UH5JuYZ.png)

### Flexbox: Orientation and Ordering

- Just by adding flex display value we already have a basic layout with `height of each flex item automatically adjusted to the same height`. The `flex-direction` property determines the direction of main axis using one of the four values: `row, row-reverse, column and column-reverse`. Row is the default value, the main start and main end `depends on the writing mode of the document`. E.g. if we are working on a left to right language such as english then the `main start and main end` will run from `left to right`.

- Column changes the main axis to a vertical direction. The flex items are stacked from top to bottom and will expand the width of its container. Both directions can also be flipped, `column-reverse` changes the order and alignment of the vertical items, and row-reverse changes the horizontal items.

![](https://i.imgur.com/e0ItNue.png)

- By default, flexbox only aligns items on a single axis. If there aren't enough flex items to fit within the whole container there will be some space left. If the total width of the items are larger than the container the items will automatically shrink to fit into one line. `flex-wrap: nowrap` is the default value i.e. flex items will not wrap. There are other additional flex properties that can be used to determine how items expand and shrink.

- Flex wrap can also be set to a value of wrap to layout the items over multiple rows instead of shrinking to fit into one line, by doing `flex-wrap: wrap`, the items that do not fit will wrap to the next line.

![](https://i.imgur.com/GQYXXE6.png)

- We can also change the direction using `wrap-reverse` value. Only cross start and cross end are reversed. The items still remain in the same order on the main axis.

![](https://i.imgur.com/rYZE9zj.png)

- `flex-wrap` and `flex-direction` can also be applied using the shorthand property `flex-flow`.

```css
/* Shorthand */
flex-flow: column wrap;
/* Longhand */
flex-direction: column;
flex-wrap: wrap;
```

### Flex Sizing

- 3 properties used to set the sizing of the flex-items:

  1. `flex-basis`: sets the initial size of the flex-items.
  2. `flex-grow`: Determines how items will expand if there is extra space in container
  3. `flex-shrink`: Determines how items will shrink if there isn't extra space in container

- W3C recommends using the shorthand property `flex: grow shrink basis` to avoid resetting any values that have not been specifically defined. Grow and shrink are defined by a unit-less numeric value whereas basis maybe used with % or key words.

![](https://i.imgur.com/I3rpTSg.png)

![](https://i.imgur.com/YiAFuMb.png)

![](https://i.imgur.com/RkdOJXN.png)

![](https://i.imgur.com/2WMZDJK.png)

- MDN Docs on [Flex](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)

### Flexbox exercise

- [CodePen Link](https://codepen.io/anmoltomer/pen/zYZZYxW?editors=1100)

- Flexbox alignment for justifying the content on main axis using `justify-content` whereas we use `align-items` to align items on the cross axis. To center align the item vertically and horizontally set the values for both properties to center. With justify content and align-items, we can do more than just center align-items. Both of these properties can also be used to distribute space between and around items.

- MDN Docs for [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)

### Introduction to CSS Grid, Implicit, Explicit grid

- CSS based grid is new, but using grid based layout has been a common part of web design for a long time. Grids are broken down into evenly spaced columns and rows that are used as a guide for laying out page components. Gutters are often included to have consistent spacing between columns. Page components are arranged within the colunms.

- CSS Grid is a layout method that includes new CSS properties and rules to make it possible to create grid-based designs that previously required hacks and other workarounds. Some grid terminology that you should be aware of: Similar to flexbox, the grid container is the parent element. The direct child elements are the grid items. Grid can be used with two values: `grid` or `inline-grid` to designate the child elements as grid items which will display in a single column. When using the value of grid, unless specified, the items will span the width of its container. When using the value of inline-grid the items will span the width of its content.

- When using the value of grid the container will be displayed as block-level element and stacked on top of other block level elements. For inline-grid the whole container will display inline, next to other inline containers.

- Grid lines are horizontal and vertical lines that divide the grid into columns and rows grid lines are also used to determine the postion of grid items and are referred to by a numerical index, or by custom name. Both vertical and horizontal lines start at 1, when using a numerical index. Grid lines can also be referred to as by a negative numerical index, which allows us to reference the opposite end of the grid. Grid cell is a single unit defined by where the grid row and grid olumn intersect. This space between two adjacent grid lines is the grid track, this is basically columns and rows.

- Grid tracks can optionally be separated by a gutter. When using grid layout, the ability to define the columns and rows collectively known as grid tracks into flexible and adaptive ways can be achieved by using explicit and implicit grids.

- To define specific number of grid lines and grid tracks use `grid-template-columns` and `grid-template-rows`. This will create an explicit grid. We declare these properties in grid container with the values expressed as a track list.

- `fr`: New flexible unit, represents a `fraction` of available space in the grid container.

![](https://i.imgur.com/CoUrllk.png)

- MDN Docs for [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/grid)

- [CodePen Demo](https://codepen.io/anmoltomer/pen/KKWWKLR?editors=1100)

- Read more on Implicit Grid, Explicit Grid, Grid Placement Properties, Grid Columns and Firefox Grid Inspector.

---

## 7. Advanced Selectors

### Intro to Advanced Selectors

- We have seen quite a lot of selectors so far and we will be looking at some advanced ones here. Descendant Selectors creates a matching patterns based on the relationship between nested elements.

- `Child Combinator:` Descendant selectors are used to match to any nested element. Child combinators only match to the direct child element, denoted by symbol `>`, the selector on the right must be the direct child of the element on left. Spaces aren't required before or after the `>` symbol.

```css
/* Descendant Selector */
parent child {
}
ancestor descendant {
}

/* child combinator */
parent > child {
}
```

- `Sibling Combinators: Adjacent (+)`: Combinators can be used to match to sibling elements, the elements that share the same parent. The adjacent sibling combinator uses the plus symbol, it matches only the next selector on the right, with the selector on the left.

![](https://i.imgur.com/dFCuv5v.png)

- `Sibling Combinators: General (~)`: To match to any sibling element after the selector on the left we use the `~` symbol and this is called general sibling combinator.

![](https://i.imgur.com/wVTMjat.png)

- [CodePen Demo](https://codepen.io/anmoltomer/pen/yLMMNMY?editors=1100)

### Psuedo-Class Selectors

- We can use psuedo-class selectors to style specific link states such as hover. There are also psuedo classes for selecting a specific child element based on its order. First child and last child can be used to apply a style to the first or the last child element. The parent element doesn't have to be specified unless you want to apply these styles within a specific container.

![](https://i.imgur.com/YnxKlCt.png)

![](https://i.imgur.com/RnX4TSW.png)

- `first-of-type` and `last-of-type` psuedo-selectors are similar but with one distinction. These selectors will match to the first or last-child element of its type, and will disregard child elements that do not match its type.

- [CodePen Demo](https://codepen.io/anmoltomer/pen/poeejer?editors=1100)

---

## Fluid and Responsive Layout

### Introduction to Responsive Design

- After the release of Opera Mobile Browser in 2005 and then iPhone in 2007 more and more users started to use their mobile devices as primary way to access the web, and that has only gone up with introduction of faster mobile phones, better screens and high data speeds.

- In 2010, Ethan Marcotte coined the term, Responsive Web Design, where he said: "Rather than tailoring disconnected designs to each and ever increasing number of web devices, we can treat them as facets of the same experience. We can design for optimal viewing experience, but embed standards based technologies into our designs to make them not only more flexible, but more adaptive to the media that renders them.". In short we need to practice responsive web design.

- The Responsive Design was once considered an extra feature has now become a standard for the majority of today's websites, and even mobile-first development is something that's been getting even more attention.

- Responsive Web Design is not a CSS layout module, rather it is the thought process behind using CSS to tailor your website for optimal viewer experiences on any device.

### Responsive Web Design Key Ingredients

- There are 3 key ingredients in a responsive web design:

1. A fluid layout
2. Flexible Images
3. Media Queries

- Original Article to understand the origins of responsive web design and thinking behind it. [Link](https://alistapart.com/article/responsive-web-design/)

- We can use fluid layout techniques. Instead of fixed-width pixels, we will update our project to percentage-based values and use min and max width properties to create a flexible foundation in design of our website.

- Fluid layouts may not solve everything, starting with flexible CSS wil set the foundation for optimizing the layouts for different screen sizes, rather than relying on media queries.

### Images

- Either you can add images in html if it is part of the content, if images are presentational then that should be added with css.

```html
<img src="image/project-courses.jpg" alt="course image" />
```

```css
section {
  background-image: url(path/to/image);
}
```

- [CodePen Demo](https://codepen.io/anmoltomer/pen/OJppyrW?editors=1100)

### Introduction to Media Queries

- Though the foundation of responsive web design is based on creating a fluid layout, what makes a design go from fluid to responsive is usage of media queries. Media Queries makes it possible to modify the CSS depending on specific conditions, defined with a media type and a media feature. Media queries are added to the CSS file using the `@media` rule.

```css
/* Query that checks if browser viewport is smaller than 1000px, then specific CSS is applied else CSS is ignored */
@media screen and (max-width: 1000px) {
  h1 {
    font-size: 16px;
  }
}
```

- Media Types is broad category of devices that displays the web documents. There are currently four types:

1. `all`: Matches to all devices.
2. `print`: Matches to printers and print-related displays, conditions when user wants to print by removing background to save ink and so on.
3. `speech`: Matches to screen reading devices that read out a page, promoting better accessibility.
4. `screen`: Matches all devices that aren't categorized as print or speech.

- We can combine multiple media features using and to write complex media queries.

```css
@media (orientation: landscape) {
  ...;
}

@media screen and (orientation: landscape) {
  ...;
}

@media screen and (min-width: 30em) and (orientation: landscape) {
  ...;
}
```

- [MDN Docs on Media Queries](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries)

- It is convention to add all the media queries either at the bottom of the CSS file or add the media query beneath the related CSS-style. This second method of writing media queries is more common when writing CSS with preprocessors such as Sass or Less.

- We can also write all our media queries in a separate stylesheet and then import them into the main CSS file. Instead of using `@media` this method will use `@import` rule to load the stylesheet into the main CSS file. Another method is to load the stylesheet into the html file using link tag.

![](https://i.imgur.com/tH6G7oK.png)

- Most commonly used media feature is width. When using media queries we need to specify a width before making a change to the layout. `Breakpoints` refer to the points where you choose to make adjustments to the design and layout, because it starts to break. Certain items may not fit or content becomes really squished. This means layout isn't optimized for current viewport size.

- 2 to 4 breakpoints are generally used to target each kind of device. Mobile, Laptops, Desktops and Tablets. In early days of responsive design, targetting the width of common devices was recommended, but with more and more number of mobile devices coming in these days it is really hard to even assume what is a common size anymore.

- We use a range of viewport value using max/min-width and this is better than exact width viewport size as it gives more flexible region. More on viewport at MDN [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag)

- Desktop First and Mobile First approaches:

![](https://i.imgur.com/bTHNAOE.png)

![](https://i.imgur.com/zX9t33A.png)

![](https://i.imgur.com/EeMPYGw.png)
