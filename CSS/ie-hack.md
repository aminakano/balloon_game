## `display: flex;` does not work on IE and Edge


```
display: flex;
justify-content: space-evenly;
```
![Flexbox](/images/flexbox.png)
```
<div class="parent">
  <ul class="flex-container">
    <li>
      <svg>icon</svg>
      <div>
        <h4>What is Lorem Ipsum?</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>
    </li>
    <li>
      <svg>icon</svg>
      <div>
        <h4>Why do we use it?</h4>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
      </div>
    </li>
    <li>
      <svg>icon</svg>
      <div>
        <h4>Where does it come from?</h4>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
        </p>
      </div>
    </li>
    <li>
      <svg>icon</svg>
      <div>
        <h4>Where can I get some?</h4>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
    </li>
  </ul>
</div>
```


I was working on a website that has to work on IE and Edge, but unfortunately, flex items were messed up in these browsers. `justify-content: space-evenly;` was the perfect value to display four items in a flex container, which I didn't want to compromise. There were two problems; 1. the flex container not fitting inside the page and 2. items inside it not being displayed correctly.

### The approaches I made to the flex container

#### 1. Set vendor prefixes

```
.flex-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
```
#### 2. Set container width
It was totally fine without setting width on Firefox, Chrome, Safari and mobile devices, but the container was horizontally overflowing on IE and Edge. After setting `width: 80%;` to the flex container, it displays as it's supposed to.
```
.flex-container {
  margin-right: 10%;
  margin-left: 10%;
}
```

Now, the items inside the flex-container are still not displayed correctly on IE and Edge.
#### 3. Set alternative values
![Flexbox](/images/flexbox_ie.png)
Since `justify-content: space-evenly;` is not available on IE, I put `justify-content: space-around;` as an alternative solution.

```
.flex-container {
  justify-content: space-around;
  justify-content: space-evenly;
}
```
*Remember: in CSS, the lower line has the priority, so the first one is to target IE and the second one for everything else*

##### Cool! The IE problem is solved!

...wait, it still looks the same on Edge.
`justify-content: space-evenly;` is applied on Edge, but not reflected properly. Then I want to use `justify-content: space-around;` instead.

#### 4. Target a specific browser

So, let's target Edge!
There are several way to do, and what I can think of is to use CSS and/or JavaScript.

##### 1. Use CSS
`@supports` *lets you specify declarations that depend on a browser's support for one or more specific CSS features.*
MDN: <https://developer.mozilla.org/en-US/docs/Web/CSS/@supports>

By checking `-ms-ime-align: auto` property, which Edge only supports, we can target it.
```
@supports (-ms-ime-align: auto) {
  .flex-container {
    justify-content: space-around;
  }
}
```
##### 2. Use JavaScript & CSS
I would have chosen this approach if my project wasn't Server Side Rendering.
We can use a string that `window.navigator.userAgent` returns.
```
// JavaScript
const flexContainer = document.querySelector(".flex-container");
if (window.navigator.userAgent.includes("Edge")) {
  flexContainer.classList.add("edge");
}
// CSS
.flex-container.edge {
  justify-content: space-around;
}
```
##### DONE!!