## bind and this

```
let dog = {
  sound: “woof”,
  talk: function(){
    console.log(this.sound)
  }
}

dog.talk() // “woof”
```

Reassign the “talk” method inside dog object to a variable

```
let talkFunction = dog.talk;

talkFunction() // undefined 
```

Why?

Because the assigned “dog.talk” became a global function.
```
function(){
  console.log(this.sound)
}
```

Therefore, “this” is no longer “dog” object, and now “this” is a window object. That’s why we are referring the function which doesn’t contain anything. Thus the result of talkFunction() is “undefined”.

Here comes a bind!

```
let boundFunction = talkFunction.bind(dog)
boundFunction() //“woof”
```

What happened?
`.bind(dog)` forces talkFunction to refer “dog” as its `this`.