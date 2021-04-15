# HTML ESSENTIAL TRAINING

## 0. What is HTML?

- HTML is used in websites, and is present in forms, webpages and other website components. It is the solid foundation on which web is built.
- HTML is the way we markup the text on web pages.

---

## 1. Role of HTML

- Websites are made up of HTML, CSS and JavaScript.

- `(HTML)` HyperText Markup Language, it tells the computer what things are and it provides access to the functionality that's already there in browser.

- `(CSS)` Cascading Style Sheets defines the styling of a site and layout and deals with color, typography and animations.

- `(JS)` JavaScript gives the ability to create more powerful interactivity. The more complex and rich an interface becomes, more likely are the chances that JS is used to create that website/app to offer seamless experience to the users.

- HTML is simple and has no logic, loops or functions, but only provides structure to the page. It is a declarative language where it declares a paragraph, list, and other items. It is the simplicity of HTML that gives it its resilience and robustness. If something is missing even then HTML is like eh, I will deliver to the browser whatever I have. HTML can take a lot of abuse in terms of code and still deliver.

- CSS has a bit more logical structure and makes it more powerful and fragile. When something goes wrong with CSS, browser skips just that section of the code and not apply that particular styling and reasons for error can be anything from wrong rgb value to incorrect option.

- JavaScript is the most powerful and JS is able to do so many things that HTML and CSS can't, but due to this it is most fragile. The browser will stop rendering the page at times if there is something wrong with javascript.

- Combining HTML, CSS and JS gives us resilience, robustness and power for our web apps. If you can do something in HTML, then do it in HTML, if you can't then use the other 2, CSS and JS.

---

## 2. Formatting Text in HTML

- HTML is made up of tags, tricky part is to remember which tags to use when. Broadly there are 2 kinds of tags opening and closing tags. E.g. Opening tag for para tag is `<p>` and closing tag for the same is `</p>`. Opening tag, content and closing tag together is called an element, e.g.:

```html
<p>This is paragraph tag.</p>
<h1>Level 1 headline</h1>
<article>This is an article</article>

<p>This paragraph has <em>text that's emphasized</em>for effect.</p>
```

- HTML provides a connection of meaning between things in human world and computer world. HTML pages are made up of nested elements, and this nesting creates what we call a `DOM tree.` DOM Tree tells who's related to who and in which way.

- `DOM Tree` Document Object Model Tree. The hierarchy and structure of HTML elements, often used for targeting elements using CSS and JS. DOM comes into play when we write CSS or JS code for a html web page. The browser then uses the DOM tree to create an accessibility tree (more on this later). Choice of HTML elements affects the experience of users on your website, including people with wide range of disabilities.

- `<p>` used to tell the browser given section is paragraph. There are 6 headlines, `<h1>` being the biggest and `<h6>` is the smallest headline.

- Bold and italics, have 2 tags each. The reason we have 2 tags for each of the style is one for visual only styling and other is visual with audio narration as per the element style. For `Italics` we have `<i>` when we only want visual only italics `<em>` for emphasis on italics. For bold we have `<b>` this means visual only, whereas we have `<strong>` whenever we want to give a sense of seriousness and urgency to screenreader.

- Lists are of 3 kinds ordered `<ol>`, unoredered lists `<ul>` and definition lists. `<li>` stands for list item. Ordered lists have sequence.

- Lists which represent key value pairs are known as definition lists and they have `<dt>` i.e. definition terms and `<dd>` definition description and `<dl>` is used to wrap definition list.

- `Quotes`: `<cite>` and `<blockquote>` used for block quotes. And `<q>` can be used for quotes such as `""`. Instead of typing the quotes manually we use the `<q>` element and let the browser provide quote marks as these may vary in different languages. Some of the elements such as `<q>, <b>` are what we call as inline elements, that is they are meant for wrapping phrases of content that are inline with some other content.

- Block level elements are `<blockquote>, <p>, <ul>` these elements each start a new block. However using css we can switch behaviour of these elements from block to inline and vice-versa.

- `Dates and Times`: Handling dates and times can get tricky in programming languages, not in HTML though. We use `<time>` element to format a time or date anything that is related to specific moment in time or range that computers can understand.

```html
<time>May 8, 2025</time>
<br />
<time>8 May 2025</time>
```

`<elementname attributename="attribute-value">` for date we do it as `<time datetime="2025-05-08">May 8, 2025</time>`. The time inside the datetime attribute needs to be in a particular format. There's a specific machine readable format for dates and time and **machine readable version** is `YYYY-MM-DD`. Some of the examples are

```html
<time datetime="2025-05-08">May 8</time>
<time datetime="2025-05-08">May 8, 2025</time>
<time datetime="2025-05-08">8 May 2025</time>
```

We don't have to write date on webpage, most of the websites uses time stamps, with phrases such as 5 hours ago, 10 days ago etc. But still for machines we follow the date format.

```html
<time datetime="2021-10-05">2 days ago </time>
<time datetime="2021-10-08">Tomorrow</time>
<time datetime="07:00">7:00 am</time>
<time datetime="20:15">08:15 pm</time>
<time datetime="12:00">Half past noon</time>
<!-- TIME: hh-mm-ss.ddd -->
<time datetime="14:15:28.5">14:15:28.5</time>
<!-- TIMEZONE in Time: hh-mm-ss.ddd+-hh:mm -->
<time datetime="15:45-05:00">3:45 pm in New York</time>
<!-- 03:45 PM and -5 hours from GMT -->

<!-- Date and time together, where date comes first -->
<time datetime="2020-11-04 19:00-0500">Wednesday, Nov 4th at 7PM</time>
```

- `Code, pre and br`: To write the code on HTML and make it stand out we use `<code>` tag. Code tag is an inline element. HTML entities are used when you want to show some html tag on web page instead of executing it. E.g. `&lt;` for less than < and `&gt;` for greater than >.

`<br>`: To leave some lines space on a webpage, we use br. It stands for a line break. `<br>` doesn't contain any content just marks line break.

`<pre>`: Used to preserve the spacing and indent defined in html doc and display it on webpage without change.

- `Subscripts, Superscripts and Small`: In H2O, 2 is subscript, In 5^2 2 is superscript. `<sub>` and `<sup>` are used to make text into subscript and superscript respectively.

```html
H<sub>2</sub>O
<br />
Something that has footnote.<sup>2</sup>
```

For mathematics on webpage one should look into `MathML`, a specialized markup language for math and it is more powerful than what HTML can do.

To mark something such as copyright information and other minor information that needs to be there, but not as main content, we put that in `<small>`.

---

## 3. Understanding the Power of HTML

- **Debugging in HTML**

Desktop Browsers these days have a secret cockpit of sort which contains information about what's happening with a website's code and performance related metrics. To open web developer tools we can either right click on webpage and click inspect element or we can go to `Tools > Web Developer > Inspector`. This will open up developer tools on Mozilla Firefox. You would see inspector tab along with other tabs such as Console, Debugger, Network, Style Editor, Performance etc.

There are 3 panes in Inspector tab, leftmost for html, middle pane for CSS and rightmost for fonts, and other settings.

In inspector HTML section we can see the DOM the browser has created for the web page and this is the code to display the webpage. We can use DOM tools to inspect any website on the internet and see how other developers are designing their sites. This is how you can decide when you aren't too sure about what markup to use, go to the site that has content similar to what you are trying to implement and then use dev tools to find out what elements that site uses.

We can also use HTML Inspector to find mistakes in our code and debug it with page and code side by side. If you are not sure what's happening, check developer tools in a browser to sort things out.

- **HTML Attributes**

We have only looked at basics of HTML so far, to add more power to any element using an attribute. Some attributes are element specific and work with only a specific kind of element, e.g. datetime attribute of time element.

`Global attributes`, these are the attributes that can be applied to any HTML element. 4 of the most useful ones attributes are:

1. `Class`: Allows us to target all elements with that class in our `CSS` or `JS` code.

```html
<p class="intro">This is introduction.</p>
```

2. `ID`: Allows us to target a unique element with that id in our CSS of JavaScript. ID is similar to class but we can only allowed to use unique names once in an entire HTML page. We can used an ID for targeting CSS but it's much more specific and that can be a problem, so due to this most of the time CSS devs try sticking to classes as much as they can.

IDs are particularly helpful to address particular elements with JavaScript or with a targeted link. The fact that there will ever be only one element with one particular ID name, becomes useful when interacting with JS or links as it helps to pin point that particular element.

Irrespective of use case, class and ID attributes give us a way to name certain HTML elements and to be able to refer them in other parts of the stack up code.

Other attributes that do things can be `contenteditable="true"` which allows the visitor to a page edit the content of the page. HTML only allows to display the user entered data in an editable element, backend developers still need to find a way for that content to be captured and saved.

3. `lang`: Lang attribtue tells the browser which language the content is in.

4. `dir`: This attribute tells the browser specifically in which `direction` the text flows, it could be left to right or right to left (rtl).

There is a list of all global attributes on MDN web docs.

```html
<p class="intro" id="article-intro">This is introduction.</p>
<p dir="ltr" lang="fr">Ce paragraphe est definit en francais.</p>
```

- **ARIA Roles**

ARIA roles arae another kind of attribute that can be added to any HTML element to give it more meaning and to make sure what browser understands what something is. Ideally, we won't need an ARIA role. If we use the proper HTML element we will communicate the right message about the semantics of web page.

As in many places it is illegal to make websites inaccessible to people with disabilities. Yeah HTML can be a Human Rights issue. ARIA roles are html attributes that provide accessible information about a specific element. Layer of information conveyed by ARIA tells screen readers, braille displays, magnifiers and other assistive technology things they need to know to make a site fully accessible.

ARIA was invented around the time when more and more web started to replace the web applications. It is especially useful in making sure the functionality of a complex interface in an app if fully usable by everyone.

In accessibility tab of firefox, we can see `accessibility tree`. Browser takes the original HTML and uses it to build DOM tree and from DOM tree browser builds the accessibility tree. Accessibility tree is what assitive devices use to provide an experience of the website through a screen reader.

`aria-hidden="true"` removes the element and its children from accessibility tree, it stays in DOM tree but removed for assistive devices. We want h1 to be seen by accessibility tree.

```html
<h1 aria-label="Hello World">
  <div class="grid" aria-hidden="true">
    <span>H</span>
    <span>e</span>
    <span>l</span>
    <span>l</span>
    <span>o</span>
    <span>W</span>
    <span>o</span>
    <span>r</span>
    <span>l</span>
    <span>d</span>
  </div>
</h1>
```

Look into aria roles if you are in a team that's struggling to write proper semantic HTML or if you are building a complex application interface.

ARIA roles provides you tools needed to make your site accessible for everyone.

- **Formatting HTML**

HTML doesn't care about space, tabs etc. but exception being when we use `<pre>`, `<code>` or `<textarea>` element or if we use CSS to change how whitespace is handled, in that case extra space, indentations can count. Most of the time browser ignores everything to do with spacing and puts one space automatically.

Commenting your code to explain what's going on for increased maintainability is a good idea too.

Doesn't matter if you capitalize or not your html tags, though more generally these days we see html being written with lowecase elements. Browsers support lower and uppercase.

HTML was invented in late 80s and 90s where computer scientists wanted to keep the code as small as they can, that's why some of the tags like `<i>` are really small but newer elements such as `<article> <video>` etc. use whole english words for increased readability instead of saving bits of space.

Newer HTML elements always have opening and closing tags like the video element which we will cover in chapter 6. Some old tags have no closing such as `<img>` tag. Lter on, the best practice changed to have a symbolic `/` around the element that didn't have a closing tag so `<img src="file.jpg">` became `<img src="file.jpg" />` it signifies element opens and closes itself.

- **Weird Characters & HTML Entities**

`<, > and &` characters are used by us to write HTML, but what if we want to show them on webpage? Sometimes these characters won't show up on webpage and that layer between html code and what you want on webpage gets merged and due to this reason we use what's called a `character entity`. HTML entities are formatted like this `&<some-short-code>;`. E.g. `&lt;` for `<`, `&gt;` for `>`, `&amp;` for `&`.

We type these character entities in HTML file and these gets converted on the webpage. `W3C` keeps track of all the character entities where you can mark them up.

`HTML Entities` can also be helpful for typing characters that aren't on your keyboard. E.g. `&copy;` for &copy; `&trade;` for &trade;, `&star;` for &star;.

`Non breaking space`: Normally space provides opportunities for sites to be responsive and lines of text to break, words stay whole and when there's not enough space for a whole sentence, the browser looks for a place to wrap the line of text. We can insert a non breaking space `&nbsp;` between 2 words instead of regular space and the browser will know to not break the line there and prevents unwanted wrapping. E.g. `Anmol&nbsp;Tomer`.

Non breaking space can also be used to force the browser to put more than one space, as browser by default ignores more than one space, so this is a good hack.

---

## 4. Linking and Navigation

- **Links**

We take links on webpages for granted, these days. The way link actually helped set the idea of web is actually profound. How one would make a link is really simple though. To make a link we use the `anchor <a> element`. E.g. `<a href="page.html">Link</a>`. On opening tag we need `href` attribute that holds the address of website or link you want to visit and the text contains shows up the link to that address and then we close the anchor element.

```html
<a href="www.google.com">Google</a>
```

Between opening and closing a tags we can put text, image, usually both that we want to be clickable. By default `a` element is an inline element. We can also put a link around more complex elements such as a teaser card and emojis etc.

`href` attribute can have absolute URLs i.e. complete address of a site/page on the internet or they can be used to link particular sections of the site we are on as well.

`HTTP vs HTTPS`: Hyptertext Transfer Protocol, this is the way that everything on the web talks to everything else. The protocol, the rules of the communication system and was invented during the 80s when the web was invented.

HTTPS stands for Hyptertext Transfer Protocol `Secure`. Originally all web addresses were HTTP, today all the experts agree every website should be using HTTPS instead.

- **URL Paths**

Absolute URLs are one of the ways to form a link, instead when we are linking to a section that's on the same site, or page that has the link, at that time we can use what's known as a relative URL. Say you are building `https://www.awesomefootball.com` and I am working on a local copy of the site adding a menu bar on the website. When we are working locally we want all the links to connect to the local copy of the files.

When we put the website on a testing server at that time we want all the links to point at pages and files on testing server, we want a method to leave out the awesomefootball.com part of the URL and have the browser still know where to find the files.

Creating a relative URL isn't just useful for the `a` element, this is a skill we will use to point to image files, video files, css, javascript files and anytime we specify path to a file.

`How to form a URL from scratch?`: We have to understand how our file are organized and what's the root directory and what's your working directory.
E.g. `/images/logo.gif` is a url relative to root level whereas if we do `../images/logo.gif` then it is relative to the file where url is typed out.

If you type out `https://www.awesomefootball.com/people/` then remember that everytime we type out the folder path and leave it without pointing to an html file then browser automatically looks for `index.html` file, in this case it will find and try to load `https://www.awesomefootball.com/people/index.html`. `index.html` is a special file name this gives us a way to make our URLs pretty or clean. Instead of creating a file name people.html we can create a folder called people and inside that folder we can put a file named index.html. This trick **only works for HTML** files, and don't do something like this with CSS, or iamges.

`Trailing /`: It doesn't matter if we include it or not if there is nothing to enter after trailing /. E.g. the following three point and behave in the same manner

```html
<li><a href="/people/index.html">People</a></li>
<li><a href="/people/">People</a></li>
<li><a href="/people">People</a></li>
```

Using relative URLs can be super helpful on a project that moves from server to server while it is being worked on.

- **Navigation**

Now that we have seen how to make links and how to structure our URLs, let's look at some of the most common ways to structure our URLs, some of the most common patterns for creating a menu or navigation bar. Say we want to make a main menu bar for our website

```html
<nav role="nav">
  <ul class="navbar">
    <li><a href="/">Home</a></li>
    <li><a href="/people"></a>People</li>
    <li><a href="/prices">Prices</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```

`<nav>`: Nav element is used for marking up navigation, it tells the browser which set of links are part of site navigation. We don't use it all the time, but only for a major blocks of navigational links.

We want screenreaders and other assistive devices to also know that this is the main menu for the site, so we will add few attributes to convey the purpose of this navigation bar. We add `role="navigation"` attribute in nav element, it is an aria role that is perfect for marking the main navigation of the page. `aria-label` of main menu it provides a label that can be read aloud by screenreaders to tell people what this is and to give them more context.

Example of footer is as follows:

```html
<footer>
  <a href="/about/privacy">Privacy Policy</a>
  <a href="/about/legal">Terms of Service</a>
</footer>
```

---

## 5. Images

- **Images**

The web is a web of text and images. We use `<img/>` element to put an image on the webpage. There are 4 attribtues we have to include for every img element and these are as follows:

1. `<src>`: Tells browser which image file to load, we provide path to image here.
2. `<alt>`: Acts as substitute for the image, whenever image is not loaded then this text is displayed, ideally this should be description of the image such as "Real Madrid team after winning champions league, LtR: Marcelo, Ronaldo, Ramos." Screenreaders read the alt text, this is what they experience of this image. Alt text can be funny or poetic, needn't necessarily be dry. If there's nothing for people to know about this image, then we can leave it blank. In cases if we not include alt attribute there are chances that image file name could be read out and this would lead to poor UX since image names are really long at times as the images are hosted on AWS S3.
3. `<width>`:Width of image. By default it means pixels. Order of attributes doesn't matters in HTML.
4. `<height>`: Specify height of image in pixels.

If we instead tell the browser how big the image is, then it doesn't have to wait for entire image to load, rather it takes the width and height, browser has a split second head start in calculating the layout. You might have seen that when you try to read an article with a slow internet connection that layout changes and paragraphs jump up and down as more and more images load, if you include the height and width attributes on webpage will fix this issue too.

- **Image Formats**

To put an image on webpage, image has to be in a file format that the web browsers will understand, there are several options when it comes to formats of image, we keep inventing new image formats in a quest between tiny size and gorgeous looking images. We want as much data as possible to make the site good looking, while having as little data as possible so that images load faster. Goal is to have `High Quality + Small File Size`.

Each file format takes different approach towards this goal. 4 file formats commonly used on web today, each is good at compressing certain kind of images, and these are as follows:

1. `GIF`: Does well compressing large areas of single color, limited color space of 256 colors, can make photographs pixelated, bad choice for photographs, unless you are looking for a retro look, can have multiple frames giving feel of a little movie.

2. `SVG`: Scalable Vector Graphics, images of this format are great for icons, logos and other kinds of illustration. Here instead of files made up of pixels, it is a vector file, it contains instructions for a drawing, as SVGs are made up of vector and math, these images can scale to be physically quite large or very small without ever losing any quality. SVG image won't get pixelated because there aren't any pixels, this makes the file size very small. If you can use an SVG, then definitely go for it. You can export SVG from illustrator.

3. `JPG`: This is a great format for compressing photoographs, most digital cameras infact save photos that you shoot as JPG files. When you put a JPG image on the web you want to make sure that either a human or robot resizes the iamge to an apt physical size and compresses it for the web.

4. `PNG`: PNGs are newer format for the web than GIFs or JPGs, they are a good solution when you have a photograph and you need part of the photo to be transparent. PNG sometimes does a better job than GIF at compressing the kind of images that the GIF format likes.

Consider the physical size of an image, the file format and the compression settings when making your image files.

- **Responsive Images**

Sometimes we want to display a big beautiful high-resolution image for people with big screens and then shrink it way down for people on smaller screens. CSS can do this, where one image file can be shown at any size. The problem is, a big high resolution image contains millions of pixels and all that data can make the file size pretty big, which takes a lot of time to download on the internet connection with a slow speed and can use up a huge chunk of data plans, and in some markets cost them a lot of money.

We don't want to deliver, unwanted high resolution data to small screens. This is where we use html, to deliver different size image based on device screen size. We can make several different files and list them as a set of options in HTML and let the browser decide which image to download, it can do so in coordination with the OS, while taking the device hardware capabilities and network speed into account as well.

More and more screens these days are not 1x, rather there are screens with pixel densite 2x, 3x and 4x screens these days. The simplest way to support these screens of different resolutions is to create multiple copies of our image in different resolutions and then tell the browser that those copies are available, the device can then decide what it wants to do, after looking at the screen density, the network connection, the user settings and decide which image to use. Even if someone has a high resolution screen the browser might decide to download

`srcset`: This attribute is used with `img` element where we pass in the different images and size such as 2x, 3x etc, so that browser can decide what image should be shown based on screen size.

```html
<img
  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-480.jpg"
  srcset="
    https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-960.jpg  2x,
    https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-1440.jpg 3x,
    https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-1920.jpg 4x
  "
  alt="shiny black dog looking pensive"
  width="480"
  height="360"
/>
```

- **Responsive Width**

We saw how we can use `img` element and `srcset` attribtue to list a set of image files and have the browser decide which file to download and display considering the pixel density of the screen. What if instead we wanted the browser to consider the width of the viewport and to choose a file based on the size of the screen as well as the density.

Here with srcset, instead of saying 1x, 2x, 3x, etc. we write 480w, 960w, and this tells the browser how wide each file is, 480w meaning 480 pixel wide. With this, browser will automatically choose which image to display based on combination of device density and viewport width.

`sizes`: sizes attribute is used to list which size image to use at which media query.

`srcset`: Allows us to specify multiple files to be used based on either viewport width or image pixel width.

Goal with sizes and srcset is to give the browser information about which image file to download in the HTML.

- **Responsive Pictures**

What if we want to do more than swapping a low res file for high res file based on viewport width? What if we want to display different image on small screen and another image on big screen?

Maybe we want image to be tall and narrow on mobile, whereas short and wide on desktop or even use a completely different photo altogether.

We wrap the `<img>` element in `<picture>` element and then we have the `<source>` attribute where we define the source i.e. which image to load on width of viewport. We can use srcset with source element and we tell the browser which image to load based on the width or pixel. On servers, you don't have to store and crop and deliver images of so many different formats.

Basically user uploads one images and there are workers or other services do all the work of creating image files of different resolutions.

- **Figure and figcaption**

Two elements related to images are `<figure> and <figcaption>` this provides the browser more semantic information about the content of the page. We wrap figcaptio inside figure, and figure contains img and figcaption. This provides the browser about this content, more context than if we'd only use a paragraph element for text below image. Search engines and AI will now know that these 2 piece of content have relationship.

---

## 6. Media

- **Audio**
