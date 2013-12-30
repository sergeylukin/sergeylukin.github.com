---
layout: post
tags: [css]
title: "Styling the first N HTML elements"
---

Here's a little trick I learned today. Think of a table with rows.
Do you think that it's possible to only apply styles to first, let's
say 3, rows using CSS3 selector? Well, it turns out it is possible with
well known
[:nth-child()](http://www.w3.org/TR/css3-selectors/#nth-child-pseudo) pseudo
class selector. Let's look at it's basic usage first.


Basics
------

Besides accepting `odd` or `even` as an argument value `:nth-child()`
accepts argument in format: *a*n+*b* and iterates by
incrementing `n` starting with `n = 0` until it reaches the end of the
elements tree or until the resulting value is zero or negative.

So, assuming following markup:

{% highlight html %}
<ul>
  <li class="item">f</li>
  <li class="item">o</li>
  <li class="item">o</li>
  <li class="item">b</li>
  <li class="item">a</li>
  <li class="item">r</li>
</ul>
{% endhighlight %}

`.item:nth-child(2n+1)` will do something like:

1. `2 * 0 + 1` equals 1 and so first element will be selected
2. `2 * 1 + 1` equals 3 and so third element will be selected
3. `2 * 2 + 1` equals 5 and so fifth element will be selected
4. `2 * 3 + 1` equals 7 and so selector will stop iterating as seventh element
  doesn't exist (note that elements index start with `1` and not with `0`)


Now the real stuff
------------------

However, in the end of spec, there is this note:

> The value *a* can be negative, but only the positive values of *a*n+*b*, for n≥0,
> may represent an element in the document tree.

What this means is that if we pass `-1n+3` or shorter `-n+3` following
iteration starting with `n = 0` will happen:

1. `-1 * 0 + 3` equals 3 and so third element will be returned
2. `-1 * 1 + 3` equals 2 and so second element will be returned
3. `-1 * 2 + 3` equals 1 and so first element will be returned
4. `-1 * 3 + 3` equals 0 and so selector will stop as there is no element with
  index `0`

..which results in selecting first 3 elements! Done.
