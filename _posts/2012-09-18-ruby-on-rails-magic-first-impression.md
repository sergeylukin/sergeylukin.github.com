---
layout: post
tags: [Ruby on Rails]
description: "A short way of rendering partial for list of Model objects in the View"
title: "Ruby on Rails magic: first impression"
---

Preface
-------

Being a PHP developer for more than 5 years I recently started learning 
Ruby on Rails. While I'm used to *"Convention over Configuration"*
principles in PHP frameworks I found not a few conventions in Ruby on Rails
that amazed me in some way.

There is something that amazed me more than anything else and I couldn't
help myself from writing about it when I discovered it in
[this book](http://ruby.railstutorial.org/ruby-on-rails-tutorial-book)
written by Michael Hartl.


Render a partial for model objects
----------------------------------

Assuming we have a simple Controller action:

{% highlight ruby %}
def index
  @users = User.all
end
{% endhighlight %}

..and a simple partial template called `_user.html.erb`:

{% highlight rhtml %}
<p><%= user.name %></p>
{% endhighlight %}

..let's take a look at it's View (`index.html.erb`):

{% highlight rhtml %}
<% @users.each do |u| %>
  <%= render 'user', user: u %>
<% end %>
{% endhighlight %}

Here, a partial `_user.html.erb` that resides in the same directory as
current template file is being rendered for every `@users` element.
Pretty straight-forward. Similarly I would do it in any PHP framework.

However as it turns out View's code can be replaced with just one line:

{% highlight rhtml %}
<%= render @users %>
{% endhighlight %}

It looks simple and logical at first sight, however, if you think about it,
there are so many things happening in this line.

Let's break it into pieces:

* Rails infers that `@users` is a list of `User` objects.
* Because `@users` is a list Rails iterates through every element.
* Because `@users` consists of User objects it assigns every object
to partial's variable `users` and renders a partial called `_user.html.erb`

If `@users` would be a list of `Post` objects, Rails would
set partial's variable called `post` and render
a partial called `_post.html.erb` for every list element.


Conclusion
----------

I'm a big fan of convention over configuration paradigm and such examples
excite me every time I discover them. I know it slows down the learning
progress in the beginning but it saves time in the long run.

And what exciting thing about a framework or programming language
have you ever discovered in your experience?

