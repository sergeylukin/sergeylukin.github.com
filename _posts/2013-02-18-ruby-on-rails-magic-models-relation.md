---
layout: post
tags: [Ruby on Rails]
title: "Ruby on Rails magic: models relation"
---

Preface
-------

5 months ago I [demonstrated](/2012/ruby-on-rails-magic-first-impression/) a
convention of RoR that makes it possible to render Model objects in their
corresponding partials in just one line with expressive syntax:

{% highlight rhtml %}
<%= render @users %>
{% endhighlight %}

Today I want to show another tip I learned about
[ActiveRecord](http://guides.rubyonrails.org/association_basics.html) from this
[tutsplus course](https://tutsplus.com/course/riding-ruby-on-rails/) recorded
by José Mota.


Accessing a model via it's parent
---------------------------------

Assuming we have 2 models with `has_many` and `belongs_to` relations
respectively:

{% highlight ruby %}
class User < ActiveRecord::Base
  has_many :posts
end
{% endhighlight %}

{% highlight ruby %}
class Post < ActiveRecord::Base
  belongs_to :user
end
{% endhighlight %}

Now we want to list all posts written by User in a View. Here is what I did at
first myself.

Controller:

{% highlight ruby %}
@user   = User.find(params[:id])
# Find all posts by @user
@posts  = Post.where("user_id = ?", @user.id)
{% endhighlight %}

View:

{% highlight rhtml %}
<% @posts.each do |post| %>
  <p><%= post.title %></p>
<% end %>
{% endhighlight %}

Did you already notice where I wrote too much? Well, of course in Controller.
Assigning User to `@user` was more than enough as our User model has `has_many`
relation with Post model and so posts can be accessed via `@user.posts` due to
magic provided by ActiveRecord.

Let's take a look at a more expressive code that accomplishes exactly the same
result.

Controller:

{% highlight ruby %}
@user = User.find(params[:id])
{% endhighlight %}

View:

{% highlight rhtml %}
<% @user.posts.each do |post| %>
  <p><%= post.title %></p>
<% end %>
{% endhighlight %}


Conclusion
----------

This is a clear example where most generic complexity can be be hidden
behind the scenes and only self-explanatory command executions operate the main
program logic. The importance of this aspect increases with codebase growth.

The more self-explanatory code we write, the less human-readable comments we
have to add.
