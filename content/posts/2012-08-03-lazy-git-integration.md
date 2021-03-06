---
layout: Post
date: 2012-08-03
tags: [git, deployment, workflow]
description: "How to integrate GIT in a team that is not ready to fully use VCS yet"
title: Lazy GIT integration
lastmod: 2013-06-20T00:00:00+00:00
route: 2012/lazy-git-integration
image: /assets/lazy-git-integration.jpeg
imageUrl: https://unsplash.com/photos/TYIzeCiZ_60
imageAuthor: Karl Fredrickson
imageAuthorUrl: https://unsplash.com/@kfred
imageProviderName: Unsplash
imageProviderUrl: https://unsplash.com/
primaryColor: "rgba(109, 63, 34, .9)"
secondaryColor: "#e1c788"
linksColor: "#680148"
linksHoverColor: "#000000"
---

<div class="warning-box">

Update on 20/06/2013

Add <a href="#deploy-tip">custom deployment strategy tip</a>

</div>

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

```bash
cd /var/htdocs
mkdir myproject.git && cd myproject.git
git init --bare
git --work-tree=../myproject add .
git --work-tree=../myproject commit -m'Initial commit'
```

Setup hooks. First, download
[pre-receive](https://gist.github.com/3175467) hook as
`/var/htdocs/myproject.git/hooks/pre-receive` and
make it executable:

```bash
cd /var/htdocs/myproject.git/hooks
wget http://bit.ly/19l9tpg -O pre-receive --no-check-certificate
chmod +x pre-receive
```

Next, download
[post-receive](https://gist.github.com/3175502) hook
as `/var/htdocs/myproject.git/hooks/post-receive` and
make it executable:

```bash
cd /var/htdocs/myproject.git/hooks
wget http://bit.ly/12XVJ57 -O post-receive --no-check-certificate
chmod +x post-receive
```

Now open both of the hooks in your editor of choice and make sure that the value of `WORKTREE` variable
represents the absolute or relative path (relatively to `/var/htdocs/myproject.git/`)
of your source code directory.

You're ready to clone bare repository to your local dev station and PUSH from
it.

Additionally, you could set some restrictions on your bare repository (I find
them reasonable on PRODUCTION bare repository):

```bash
cd /var/htdocs/myproject.git
git config receive.denyDeletes true
git config receive.denyNonFastForwards true
```

`denyDeletes` set to `true` denies any attempts to delete a branch remotely.

`denyNonFastForwards` set to `true` denies any attempts to delete/replace
existing commits remotely.

<a name="deploy-tip"></a>

Custom deployment
-----------------

If updating working directory is not enough for your deployment needs I
suggest commiting a script which will do all is required and executing it
in `post-receive` hook right after working tree update, like so:

```bash
# update the working tree
GIT_WORK_TREE=$WORKTREE git checkout -f

# run custom deploy script
deploy_script="$WORKTREE/deploy.sh"
if [ -e "$deploy_script" ]
then
  . $deploy_script
fi
```

In this example I'm executing `deploy.sh` script which resides in the root of
my repository. Which means I can control my deployment right from my
local repo and any changes to script take place immediately. It's very
powerful.


Conclusion
----------

Although I believe that any source code deployment should be done via VCS like
GIT I know that there are not few programmers out there who're not ready to
waste their time learning VCS and they feel themselves uncomfortable with the
fact that any PRODUCTION update should go through a "long" deployment process.

So, even though I'm glad I could find a solution for teams with weak workflow,
I highly recommend changing the workflow rather than using this kind of solution.

And what kind of deployment strategy are you using in your projects?

