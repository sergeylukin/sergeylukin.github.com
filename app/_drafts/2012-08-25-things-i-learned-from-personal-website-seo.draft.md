---
layout: post
tags: 
title: "Things I learned from personal website: seo"
---
<div class="session-post" markdown="1">
This entry is part 2 of 3 in the "Things I learned from personal website" series:

* [Part I, setup]({{ site.baseurl }}/2012/things-i-learned-from-personal-website-setup)
* Part II, seo
* [Part III, speed]({{ site.baseurl }}/2012/things-i-learned-from-personal-website-speed)
</div>

### Robots.txt

Make sure you add "slash" in the end of disallowed directories, like so:

```
Disallow: /styles/
```

..otherwise everything that begins with "styles" will be excluded as well
