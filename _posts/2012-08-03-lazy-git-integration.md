---
layout: post
tags: [git, deployment, workflow]
description: "How to integrate GIT in a team that is not ready to fully use VCS yet"
title: Lazy GIT integration
lastmod: 2012-08-20
---

Preface
-------

Recently I was challenged to integrate source code versioning and efficient
website deployment in a team that was not ready to switch from old-school FTP deployment.
I call it "lazy integration" because it is indeed full featured integration
while it doesn't force anyone in the team using GIT at all.

This post contains information on how I did it and aims to be a how-to reminder
for myself in case I will ever do this again. It works for me just fine but
I can't guarantee that by following this tutorial you won't harm your software
so use this tutorial on your own risk.


Overview
--------

Let's take a brief look at what we're going to do and how things are going to work after
we finish.

First, a bare repository is initialized out of production source code directory, some hooks
are being installed and repo can now be cloned to dev stations.

Pushing modifications to bare repository activates a hook
([pre-receive](https://gist.github.com/3175467)) that checks for any
local working directory (production source code) changes against HEAD (latest commit).
If no changes were found it just quits with no error and another hook
([post-receive](https://gist.github.com/3175502))
applies pushed commits to the working directory (production source code).
However, if any changes were detected they are submitted to a newly created commit and
hook quits with an error. At this point developer should bring that commit to
his cloned repo (by executing, let's say, PULL command) and PUSH once again.

What is so special in this flow? Well, it allows you to make changes directly on
PRODUCTION source code while still being able using GIT to track and deploy your
modifications. Some teams need just that but please make sure to read some of my thoughts
on that in the end of this post.


Get started
-----------

Let's get our hands dirty and try a real example.

Although I couldn't think of any software project that wouldn't fit this integration, I
expect you to make required adjustments for your specific scenario if you decided to apply this
integration to your project.

In our example we assume that we have a simple static website, it's
webroot path is `/var/htdocs/myproject` on PRODUCTION server (also we assume that
you have SSH access to this server).

Initialize a GIT repository out of source code we have in `myproject` directory:

{% highlight bash %}
cd /var/htdocs
mkdir myproject.git && cd myproject.git
git init --bare
git --work-tree=../myproject add .
git --work-tree=../myproject commit -m'Initial commit'
{% endhighlight %}

Setup hooks. First, download
[pre-receive](https://gist.github.com/3175467) hook as
`/var/htdocs/myproject.git/hooks/pre-receive` and
make it executable:

{% highlight bash %}
cd /var/htdocs/myproject.git/hooks
wget bit.ly/M9Gdt3 -O pre-receive --no-check-certificate
chmod +x pre-receive
{% endhighlight %}

<script>
document.write("<p>Here is the source of pre-receive hook:</p>");
</script>

<script src="https://gist.github.com/3175467.js?file=pre-receive">
</script>


Next, download
[post-receive](https://gist.github.com/3175502) hook
as `/var/htdocs/myproject.git/hooks/post-receive` and
make it executable:

{% highlight bash %}
cd /var/htdocs/myproject.git/hooks
wget http://bit.ly/MV6o8h -O post-receive --no-check-certificate
chmod +x post-receive
{% endhighlight %}

<script>
document.write("<p>Here is the source of post-receive hook:</p>");
</script>

<script src="https://gist.github.com/3175502.js?file=post-receive">
</script>

Now open both of the hooks in your editor of choice and make sure that the value of `WORKTREE` variable
represents the absolute or relative path (relatively to `/var/htdocs/myproject.git/`)
of your source code directory.

You're ready to clone bare repository to your local dev station and PUSH from
it.

Additionally, you could set some restrictions on your bare repository (I find
them reasonable on PRODUCTION bare repository):

{% highlight bash %}
cd /var/htdocs/myproject.git
git config receive.denyDeletes true
git config receive.denyNonFastForwards true
{% endhighlight bash %}

`denyDeletes` set to `true` denies any attempts to delete a branch remotely.

`denyNonFastForwards` set to `true` denies any attempts to delete/replace
existing commits remotely.


Conclusion
----------

Although I believe that any source code deployment should be done via VCS like
GIT I know that there are not few programmers out there who're not ready to
waste their time learning VCS and they feel themselves uncomfortable with the
fact that any PRODUCTION update should go through a "long" deployment process.

So, even though I'm glad I could find a solution for teams with weak workflow,
I highly recommend changing the workflow rather than using this kind of solution.

And what kind of deployment strategy are you using in your projects?

