---
layout: post
tags: [yeoman, freebsd]
title: "Yeoman on FreeBSD 9"
description: "Step-by-step guide on how I installed Yeoman on FreeBSD 9"
lastmod: 2012-11-23T00:00:00+00:00
---

Preface
-------

In this post I will go through the steps I had to perform in order to get
[Yeoman](http://yeoman.io) up and running on relatively fresh installation of
FreeBSD 9 with Xorg and Desktop Environment.

Check your system
-----------------

Run `curl -L get.yeoman.io | bash` in order to see what dependencies you need
to install. Since my commit
[8630c44](https://github.com/yeoman/yeoman/commit/8630c44fc9cd46155f9a620c9b2a2ec5c9ca81bd)
was kindly merged into Yeoman's master branch this step is possible on
FreeBSD.

Install Dependencies
--------------------

<div class="warning-box" markdown="1">
The list of dependencies may vary with time. Refer to
[Yeoman's wiki](https://github.com/yeoman/yeoman/wiki/Manual-Install) for more
up-to-date list.
</div>

Please note that there are alternative methods for installing software in
FreeBSD so you decide what method to use when installing those dependencies,
however following worked for me.

Install as *root* user:

**Git**  
`cd /usr/ports/devel/git && make install clean`

**PhantomJS** (this may take a while)  
`cd /usr/ports/lang/phantomjs && make install clean`

**NodeJS**  
`cd /usr/ports/www/node && make install clean`

**Npm**  
`cd /usr/ports/www/npm && make install clean`

**Google Chrome** (this may take a while)  
`cd /usr/ports/www/chromium && make install clean`

**libyaml**  
`cd /usr/ports/textproc/libyaml && make install clean`

**optipng**  
`cd /usr/ports/graphics/optipng && make install clean`

Install following as normal user:

**Rvm** + **Ruby**  
Refer to [https://rvm.io/rvm/install/](https://rvm.io/rvm/install/) for
installation instructions

**Compass**  
`gem install compass`

Verify Dependencies
-------------------

Run `curl -L get.yeoman.io | bash` again to verify that you have completed
the list of required dependencies.

Say hello to Yeoman
-------------------

Finally, when all required dependencies are installed we're ready
(hopefully) to say hello to Yeoman:  
`npm install -g yeoman`

Known issues
------------

- When I first initialized a yeoman project and executed `yeoman server` I
got this scary error: **v8::Context::New() V8 is no longer usable**
The solution was to execute `yeoman build` at least once, since then I
didn't see this error
- After a few files modifications yeoman couldn't reload the page (opened in
  Opera) any more as there was this error: **TypeError: Cannot call method 'send'
  of null** The solution was to use Chromium instead of Opera (didn't test
  with Firefox however)

Conclusion
----------

Hope this post will be helpful to anyone besides myself.

If you followed this post and found any required steps that are
not covered, please leave a comment below.

