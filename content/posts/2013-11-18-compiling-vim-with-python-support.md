---
layout: Post
date: 2013-11-18
route: 2013/compiling-vim-with-python-support
tags: [vim]
title: "Compiling VIM with Python support"
image: /assets/compiling-vim-with-python-support.jpeg
imageUrl: https://unsplash.com/photos/bk4HoBc4k60
imageAuthor: Martin Ezequiel Sanchez
imageAuthorUrl: https://unsplash.com/@mzeketv
imageProviderName: Unsplash
imageProviderUrl: https://unsplash.com/
primaryColor: "rgba(157, 118, 65, .8)"
secondaryColor: "#e7eff6"
linksColor: "#C92020"
linksHoverColor: "#88C6C9"
---

When compiling [VIM](http://www.vim.org) with specific version of Python
support while there is different default version of Python on your system it's
important to note following caveats:

- Pass `--with-python-config-dir` flag with the path to Python's `config`
  directory
- Remove `src/auto/config.cache` file if you've executed `./configure` before
  without passing the `--with-python-config-dir` flag. This was the tip I
  missed and spent an hour or two on failing to compile properly
- Run `make clean` if you compiled VIM before and it didn't work out

Anyways if in doubt here is the list of commands I had to execute in order to
successfully compile VIM with Python 2.7 support from scratch (make sure to
check your Python's config directory path and adjust accordingly):

```bash
cd /usr/local/src
wget ftp://ftp.vim.org/pub/vim/unix/vim-7.4.tar.bz2
tar -xjf vim-7.4.tar.bz2
cd vim74
./configure --prefix=/usr \
--enable-pythoninterp \
--with-python-config-dir=/usr/local/lib/python2.7/config
make && make install
```

<div class="warning-box">

Update on 19/11/2013

If all above fails, I'd consider opening `./src/auto/config.log`
file and verifying that configuration script fetches correct
version of Python by searching for `python` string. If it fetches wrong
version of Python then I'd replace the file it tries to fetch (for
example `/usr/bin/python2`) with my specific
version of Python binary just before running configuration script
(don't forget to remove `./src/auto/config.cache`) and rolling it back
after it finishes. A bit dumb method but it should work, please let
me know if you can think of any better approach.

</div>
