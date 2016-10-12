---
layout: Post
date: 2013-12-26
tags: [css]
title: "Styling HTML elements based on locale"
route: 2013/styling-html-elements-based-on-locale
image: /assets/css_locale.jpg
primaryColor: "#424242"
secondaryColor: "#E9E9E9"
linksColor: "#3299BB"
linksHoverColor: "#FF9900"
---


Here is a brain teaser. Apply styles just to paragraphs in
[Catalan](http://en.wikipedia.org/wiki/Catalan_language) language
assuming following markup and of course solution shouldn't be
tightened to paragraphs exact position, order or depth:

```html
<!doctype html>
<html lang="ca">
<head>
  <meta charset="utf-8">
  <title>Salut! Txin txin!</title>
</head>
<body>
  <p>No n'hi ha prou amb una llengua</p>
  <article lang="en">
    <h1>Phrase of the day</h1>
    <p>When the going gets tough, the tough get going</p>
  </article>
</body>
</html>
```

Before diving into the solving part let's refresh our minds on what is a
[lang](http://www.w3.org/TR/html401/struct/dirlang.html#h-8.1) attribute:

> `lang` attribute specifies the base language of an element's attribute values and
> text content. The default value of this attribute is unknown.

Refer to
[ISO 639 Language Codes list](http://www.loc.gov/standards/iso639-2/php/code_list.php) for valid values.

<div class="session-post">

**Tip**: It's considered a good practice to set `lang` attribute in `<html>` tag, at least at least
(think of search engines, speech synthesizers etc.)

</div>


First Guess
-----------

One possibly working option would be utilizing
[attribute selector](http://www.w3.org/TR/css3-selectors/#attribute-representation)
introduced in CSS2 which is
[widely supported today](http://caniuse.com/#feat=css-sel2):

```css
[lang="ca"] p {
  background-color: yellow;
  color: red;
}
```

..right? Well, not. This would apply the styles to all paragraphs including the one in English
which is not what we want.

Solution
--------

What we really need here is a less known
[:lang pseudo class](http://www.w3.org/wiki/CSS/Selectors/pseudo-classes/:lang)
selector which has even wider support among vendors than attribute selectors:

```css
p:lang(ca) {
  background-color: yellow;
  color: red;
}
```

What it actually does is it selects
elements that have inherited the specified language from their parents.
Because paragraph in English has two parents with `lang` attribute
(`<article lang="en">`, `<html lang="ca">`) and the closer one has
value of `en` it is out of our selector's scope.


Conclusion
----------

While there most likely isn't much of need in styling elements based on their
locale it's definitely worth knowing the difference between using attribute
selector and :lang pseudo class when filtering locale-specific elements.

So if you find yourself using attribute selector to style locale-specific
content, I'd suggest to consider using `:lang` pseudo class selector instead.

Hopefully this post shows the difference between two approaches clearly
and demonstrates proper problem solving.
