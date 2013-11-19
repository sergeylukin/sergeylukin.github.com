---
layout: post
tags: [vim]
title: "Compiling VIM with Python support"
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

{% highlight  bash %}
cd /usr/local/src
wget ftp://ftp.vim.org/pub/vim/unix/vim-7.4.tar.bz2
tar -xjf vim-7.4.tar.bz2
cd vim74
./configure --prefix=/usr \
--enable-pythoninterp \
--with-python-config-dir=/usr/local/lib/python2.7/config
make && make install
{% endhighlight %}
