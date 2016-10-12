---
layout: Post
tags: [Ruby on Rails]
title: "Ruby on Rails magic: models relation"
date: 2013-02-18
route: 2013/ruby-on-rails-magic-models-relation
image: /assets/rails_models_relation.jpg
primaryColor: "#F07830"
secondaryColor: "#732b00"
linksColor: "#4878A8"
linksHoverColor: "#A8D8F0"
---

5 months ago I [demonstrated](/2012/ruby-on-rails-magic-first-impression/) a
convention of RoR that makes it possible to render Model objects in their
corresponding partials in just one line with expressive syntax:

```rhtml
<%= render @users %>
```

Today I want to show another tip I learned about
[ActiveRecord](http://guides.rubyonrails.org/association_basics.html) from this
[tutsplus course](https://tutsplus.com/course/riding-ruby-on-rails/) recorded
by José Mota.


Accessing a model via it's parent
---------------------------------

Assuming we have 2 models with `has_many` and `belongs_to` relations
respectively:

```ruby
class User < ActiveRecord::Base
  has_many :posts
end
```

```ruby
class Post < ActiveRecord::Base
  belongs_to :user
end
```

Now we want to list all posts written by User in a View. Here is what I did at
first myself.

Controller:

```ruby
@user   = User.find(params[:id])
# Find all posts by @user
@posts  = Post.where("user_id = ?", @user.id)
```

View:

```rhtml
<% @posts.each do |post| %>
  <p><%= post.title %></p>
<% end %>
```

Did you already notice where I wrote too much? Well, of course in Controller.
Assigning User to `@user` was more than enough as our User model has `has_many`
relation with Post model and so posts can be accessed via `@user.posts` due to
magic provided by ActiveRecord.

Let's take a look at a more expressive code that accomplishes exactly the same
result.

Controller:

```ruby
@user = User.find(params[:id])
```

View:

```rhtml
<% @user.posts.each do |post| %>
  <p><%= post.title %></p>
<% end %>
```


Conclusion
----------

This is a clear example where most generic complexity can be be hidden
behind the scenes and only self-explanatory command executions operate the main
program logic. The importance of this aspect increases with codebase growth.

The more self-explanatory code we write, the less human-readable comments we
have to add.
