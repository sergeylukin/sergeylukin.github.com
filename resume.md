---
layout: main
id: vcard
description: "Resume of Sergey Lukin, web developer"
sitemap:
  priority: 0.7
  changefreq: weekly
---
Sergey Lukin
============

Website
: [http://sergeylukin.com](http://sergeylukin.com)

Email
: [contact@sergeylukin.com](mailto:contact@sergeylukin.com)


As of today, I'm full-time employee and am not looking for a new job.

About
-----

I develop software. Most of the time I build stuff for Web. In my free time I read books from O'Reilly, watch screencasts from PeepCode, read tuts by Envato and experiment with cutting edge technologies.

Most of the code I write for fun is available on my [Github profile](https://github.com/sergeylukin)

Technical skills
----------------

* Semantic HTML
* Scalable and cutting-edge CSS
* Know Good and Bad parts of Javascript
* Websites client-side performance
* Clean and maintainable PHP
* Currently learning Ruby + Rails
* Solid skills in Regular Expressions
* Always using VIM+GIT+Tmux and most likely on UNIX (FreeBSD, CentOS)

Articles
--------

{% for item in site.posts %}{% unless item.draft %}
* [{{ item.title }}]({{ item.url }}){% endunless %}{% endfor %}
* [Animated 3D Bar Chart with CSS3](http://tympanus.net/codrops/2012/05/21/animated-3d-bar-chart-with-css3/)
