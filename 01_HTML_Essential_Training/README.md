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
