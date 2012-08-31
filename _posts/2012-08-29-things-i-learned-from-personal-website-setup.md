---
layout: post
tags: [jekyll, static website, github pages]
title: "Things I learned from personal website: setup"
description: "Tips on setting up a static website with Jekyll and Github"
---
<div class="session-post" markdown="1">
This entry is part 1 of 3 in the "**Things I learned from personal website**" series:

* Part I, setup
* Part II, seo (coming soon)
* Part III, speed (coming soon)
</div>


Preface
-------

What can be better than creating a small personal website after years of
working with complex server-side driven systems. What I mean is that
when setting up a simple static website from scratch I had more chances to get
known with all the aspects of a well baked website without being diverted by
server-side issues.

In this entry I will share my experience with some nice tools and services I used
while setting up my personal website:

* [Jekyll](http://jekyllrb.com/) to handle website generation
* [Markdown](http://daringfireball.net/projects/markdown/) format to write blog
  posts
* [Disqus](http://disqus.com) for commenting
* [Git](http://git-scm.com) to keep track of changes and to deploy
* [Github](https://github.com) to host the website

If you're unfamiliar with one of those tools, I highly recommend you checking them
out and in this entry I expect that you have done that alrady. After you completed
your basic setup use this article as a helper guide for more advanced customization.


Configuration
-------------

Jekyll reads configuration data from `_config.yml` file in site's root
directory.

You are not limited to options recognized by Jekyll. You can store any data
and retrieve it in any page/layout that contains
[YAML](https://github.com/mojombo/jekyll/wiki/YAML-Front-Matter) form matter block.
For example, I can store my personal info:

    author:
      name: Sergey Lukin
      email: contact@sergeylukin.com
      about: About me text goes here
      profiles:
        - name: Github
          url: https://github.com/sergeylukin
        - name: Twitter
          url: https://twitter.com/sergey_lukin

and retrieve it in a page using [Liquid](https://github.com/shopify/liquid/wiki) syntax:

{% highlight html %}
{% literal %}
<p>My name is {{ site.author.name }}</p>

<p>Social links:</p>
{% for profile in site.author.profiles %}
    <a href="{{ profile.url }}">{{ profile.name }}</a>
{% endfor %}
{% endliteral %}
{% endhighlight %}

The key here is **site** object - in this case we use it to access variables
set in `_config.yml`


Navigation
----------

Navigation can be rendered by looping through **site.pages**.
Additionally, you can also set a variable, let's say, **navigation** in
every page you want to be in navigation menu and filter it in the loop. So,
here is the YAML front matter for a page that should show up in navigation:

{% highlight html %}
---
title: Page title
navigation: true
---
{% endhighlight %}

..then in navigation template loop over all pages and only print ones that have
**navigation** variable set to **true** (also we can check the URLs and add additional
markup if necessary):

{% highlight html %}{% literal %}
<ul>
  {% for node in site.pages %}
    {% if node.navigation == true %}
      {% assign attr = nil %}
      {% if page.url == node.url %}
        {% capture attr %}class="active"{% endcapture %}
      {% endif %}
      <li>
        <a href="{{ node.url }}"{{ attr }}>{{ node.title }}</a>
      </li>
    {% endif %}
  {% endfor %}
</ul>
{% endliteral %}{% endhighlight %}

In this example a comparison is done beween **page.url** and **node.url** and
if no difference found, then variable **attr** gets a value of `class="active"`
which allows us to apply special styles to menu item.


List posts
----------

Printing a list of items inside `_posts` directory is as easy as:

{% highlight html %}{% literal %}
<ul>
  {% for item in site.posts limit:5 %}
    <li>
      <time datetime="{{ item.date | date: "%Y-%m-%d" }}" pubdate>{{ item.date | date: "%B %d, %Y" }}</time>
      <a href="{{ item.url }}">{{ item.title }}</a>
    </li>
  {% endfor %}
</ul>
{% endliteral %}{% endhighlight %}


Creating a New Post
-------------------

To create a New Post I run
[newdraft](https://github.com/sergeylukin/sergeylukin.github.com/blob/master/_bin/newdraft)
script:

    ./_bin/newdraft HERE GOES POST TITLE


GIT and Draft posts
-------------------

Usually it takes a while untill I finish writing a blog post. In the meanwhile I can
do changes to other parts of the website and I don't want GIT to recognize a
draft post as a new object. To avoid this I added following line in `.gitignore` file:

    _posts/*.draft.*

So that any file in `_posts` directory that ends with **draft.md** or
**draft.markdown** is ignored and only when I finish writing the post I remove
the **draft** from the filename.


Syntax highlighting
-------------------

In almost every blog post of mine I insert code snippets so it's extremely
important to have syntax highlighting feature included. Jekyll uses Pygments
to handle this. Here is how I use it:

    {% literal %}
    {% highlight html %}
    ..some code here..
    {% endhighlight %}
    {% endliteral %}

Wonder how I succeeded to print Liquid syntax without it being parsed?
I placed it between **{&#37; literal &#37;}** and **{&#37; endliteral &#37;}**
tags. For more Liquid stuff consider reading
[Liquid for Designers](https://github.com/shopify/liquid/wiki/liquid-for-designers).

Please note that Liquid v2.3.0 and higher supports tag **{&#37; raw &#37;}** instead,
however as of today, Github pages server runs Liquid v2.2.2
Besides that, I would highly recommend installing locally Jekyll and Liquid of
exactly same versions as Github pages server is running (you can always check
what software they are running
[here](https://help.github.com/articles/using-jekyll-with-pages))
and generating a website locally before deploying. That way you will definitely
identify any potential problem as early as possible and it will save your time.


Commenting
----------

My commenting platform of choice is [Disqus](http://disqus.com). After signing up
add a little bit of configuration to `_config.yml`:

    disqus:
      enabled: true
      shortname: YOUR_DISQUS_SHORTNAME

and insert this piece of HTML/JavaScript wherever you want to enable comments:

{% highlight javascript %}{% literal %}
{% if site.disqus.enabled %}
<!-- Disqus -->
<div id="disqus_thread"></div>
<noscript>Please enable JavaScript to view the </noscript>
<a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a>
<script type="text/javascript">
  var disqus_shortname = '{{ site.disqus.shortname }}',
      disqus_identifier = '{{ page.id }}';
  (function() {
    var dsq = document.createElement('script');
    dsq.type = 'text/javascript';
    dsq.async = true;
    dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] ||
     document.getElementsByTagName('body')[0]).appendChild(dsq);
  })();
</script>
{% endif %}
{% endliteral %}{% endhighlight %}

Please note that you can place this code in a separate file, let's say `disqus.html`
inside `_includes` directory and only add one line wherever you want to include it:

    {% literal %}{% include disqus.html %}{% endliteral %}


Twitter button
--------------

For official integration instructions refer to
[their documentation](https://dev.twitter.com/docs/tweet-button).
As an option you can add following to `_config.yml`:

    like_button_twitter: true

create `_includes/like_button_twitter.html` with following contents:

{% highlight javascript %}{% literal %}
{% if site.like_button_twitter %}
<!-- Tweet btn -->
<a href="https://twitter.com/share" class="twitter-share-button">Tweet</a>
<script>
!function(d,s,id){
  var js,fjs=d.getElementsByTagName(s)[0];
  if(!d.getElementById(id)) {
    js=d.createElement(s);
    js.id=id;js.src="//platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js,fjs);
  }
}(document,"script","twitter-wjs");
</script>
{% endif %}
{% endliteral %}{% endhighlight %}

and finally include it in template, like so:

    {% literal %}{% include like_button_twitter.html %}{% endliteral %}


404 Page
--------

[GitHub pages](http://pages.github.com/) service makes it extremely easy to set custom
404 page - just place, let's say, 404.md file in the root directory.
Also, I'm not huge fan of that, but I add index.md file to directories that
don't have index page (like /js/, /css/ etc.) and include content's of 404 page.
As long as I have those directories in the list of directories to ignore in robots.txt
file, it's not a big deal.


favicon.ico
-----------

Don't forget to place **favicon.ico** file in the root directory. Don't have one?
Check out [favicon.cc](http://www.favicon.cc/)

Add meta tag in page's head:

{% highlight html %}
<link rel="shortcut icon" href="/favicon.ico" />
{% endhighlight %}


humans.txt
----------

What is humans.txt?

> It's an initiative for knowing the people behind a website.
> It's a TXT file that contains information about the different
> people who have contributed to building the website.

Why humans.txt?

> Because it's something simple and fast to create

So why not:) Place it in the root directory of your website
with some message to humans and optionally add author tag
to the `<head>` tag:

{% highlight html %}<link rel="author" href="/humans.txt" />{% endhighlight %}

Read more on [humanstxt.org](http://humanstxt.org)


Conclusion
----------

And what tools/services are you using for your static websites?

