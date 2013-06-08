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

<dl class="skills-diagram">
  <dt class="skill-5">UNIX</dt>
  <dd>5</dd>
  <dt class="skill-10">Git + Vim + Tmux</dt>
  <dd>10</dd>
  <dt class="skill-3">Ruby</dt>
  <dd>3</dd>
  <dt class="skill-8">PHP</dt>
  <dd>8</dd>
  <dt class="skill-4">RegEx</dt>
  <dd>4</dd>
  <dt class="skill-6">HTML5</dt>
  <dd>6</dd>
  <dt class="skill-7">Javascript</dt>
  <dd>7</dd>
  <dt class="skill-9">CSS</dt>
  <dd>9</dd>
  <dt class="skill-2">C#</dt>
  <dd>2</dd>
</dl>

* Always using VIM+GIT+Tmux and most likely on UNIX (FreeBSD, CentOS)
* Solid skills in Regular Expressions
* Semantic HTML5
* Know Good and Bad parts of Javascript
* Scalable and cutting-edge CSS
* Some experience in C and C#
* Clean and maintainable PHP
* Currently learning Ruby + Rails

Articles
--------

{% for item in site.posts %}{% unless item.draft %}
* [{{ item.title }}]({{ item.url }}){% endunless %}{% endfor %}
* [Animated 3D Bar Chart with CSS3](http://tympanus.net/codrops/2012/05/21/animated-3d-bar-chart-with-css3/)
