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

{{ site.author.about }}

Most of the code I write for fun is available on my [Github profile](https://github.com/sergeylukin)

Technical skills
----------------

<dl class="skills-diagram">
  <dt class="skill-5" data-xrange="20" data-yrange="20">UNIX</dt>
  <dd>5</dd>
  <dt class="skill-10" data-xrange="30" data-yrange="10">Git + Vim + Tmux</dt>
  <dd>10</dd>
  <dt class="skill-3" data-xrange="40" data-yrange="40">Ruby</dt>
  <dd>3</dd>
  <dt class="skill-8" data-xrange="10" data-yrange="20">PHP</dt>
  <dd>8</dd>
  <dt class="skill-4" data-xrange="20" data-yrange="10">RegEx</dt>
  <dd>4</dd>
  <dt class="skill-6" data-xrange="30" data-yrange="10">HTML5</dt>
  <dd>6</dd>
  <dt class="skill-7" data-xrange="40" data-yrange="20">Javascript</dt>
  <dd>7</dd>
  <dt class="skill-9" data-xrange="20" data-yrange="30">CSS</dt>
  <dd>9</dd>
  <dt class="skill-2" data-xrange="20" data-yrange="10">C#</dt>
  <dd>2</dd>
</dl>

* Always using Git+Vim+Tmux and most likely on UNIX (FreeBSD, CentOS)
* Have solid skills in Regular Expressions
* Crunch semantic HTML5
* Know Good and Bad parts of Javascript
* Write scalable and play with cutting-edge CSS
* Some experience in C and C#
* A lot of experience in PHP
* Currently learning Ruby + Rails

Articles
--------

* [Real-time web development against multiple devices](https://code4startup.com/startuphack/real-time-web-development-against-multiple-devices){% for item in site.posts %}{% unless item.draft %}
* [{{ item.title }}]({{ item.url }}){% endunless %}{% endfor %}
* [Animated 3D Bar Chart with CSS3](http://tympanus.net/codrops/2012/05/21/animated-3d-bar-chart-with-css3/)
