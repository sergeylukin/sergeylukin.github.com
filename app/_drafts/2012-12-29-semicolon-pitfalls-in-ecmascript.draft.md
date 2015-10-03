---
layout: post
tags: 
title: "Semicolon pitfalls in ECMAScript"
---

## Preface

Until recently I was always adding semicolon after every single statement in
JavaScript just in order to be on the safe side. However I finally  In this post
I'm going to expand on this topic from my perspective and feature some most
exciting examples of pitfalls you should be aware of when deciding whether to
omit a semicolon or not. And even if you decide to always add semicolon after
each statement, you might want to be aware of these cases before debugging code
written by someone else.

## Forgotten semicolon

Here is my favourite. Let's see if you can find a problem in the following
code:

{% highlight js %}
var a = function () {
  // some logic here..
  return 'abc';
}

(function() {
  // some logic here..
}())
{% endhighlight %}

Did you see the problem? Well, the problem is that because there is no
semicolon after variable `a` declaration, parser will assume that preceding
block of code surrounded with parenthesis is the anonymous function invocation
with an argument being a function. In result variable `a` will contain string
`abc` instead of a function.

## Unexpected semicolon

My another favourite example is not really related to adding a semicolon but is
related to ASI (Automatic Semicolon Insertion). Take a look at following and
see if you can find a problem:

{% highlight js %}
function a() {
  return
  {
    result: 'success'
  }
}
{% endhighlight %}

So the problem is that you expect function `a` to return literal object with
result info while it will return `undefined`. Actually this example is much
more interesting than it looks like because there are many things happening
here when parser parses it.


Resources:

- http://stackoverflow.com/questions/444080/do-you-recommend-using-semicolons-after-every-statement-in-javascript
- http://inimino.org/~inimino/blog/javascript_semicolons
- http://bclary.com/2004/11/07/#a-7.9
- http://mislav.uniqpath.com/2010/05/semicolons/
- http://dailyjs.com/2012/04/19/semicolons/
