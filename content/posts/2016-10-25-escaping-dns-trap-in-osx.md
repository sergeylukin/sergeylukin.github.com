---
title: Escaping DNS trap in OS X
date: 2016-10-25
layout: Post
image: /assets/networksetup.jpg
route: 2016/escaping-dns-trap-in-osx
primaryColor: "#abe3b0"
secondaryColor: "#123e31"
linksColor: "#3292ff"
linksHoverColor: "#0033c5"
---

Last week a DDoS attack shut down several popular internet sites, including
Twitter, Github, PayPal, Reddit, etc. The blackout was a result of a global
DDoS attack on Dyn, the domain name service used by these sites.

In this post I'm going to talk about a way one could use to be able to access
these websites by their fully qualified domain names regardless of the fact that
their authoritative servers were not able to respond. Please note that although
the method applies to all major Operating Systems, I'm only discussing OS X here.

/etc/resolv.conf
----------------

Before I dig into the details let me offer a little challenge for you that is
somewhat related to this topic.
Are you a sysadmin or a DevOps? If so then you
shouldn't have trouble answering following interview question, otherwise just
read on:

> A web application is lagging. One edit the `/etc/resolv.conf` and add this line
> `nameserver 8.8.8.8`. It appear to fix the problem. Why?

I've seen this question on
[Christian Baune's list of fullstack developer
questions](https://www.quora.com/What-should-a-fullstack-developer-know-in-2016-1/answer/Christian-Baune)
list.

I must admit, it puzzled me at first. The mysterious `8.8.8.8` just scared me
off until I performed a reverse DNS lookup using `host 8.8.8.8` which returned:

```bash
8.8.8.8.in-addr.arpa domain name pointer google-public-dns-a.google.com.
```

It turns out [Google has a public DNS server that resolves domain names to IP
addresses](https://en.wikipedia.org/wiki/Google_Public_DNS), how cool is that?
So basically a web application is lagging due to
some problems with DNS, which by itself can be pretty much anything, and we
can overcome those problems by resolving hosts via Google's public DNS server.
While [using Google's public DNS server doesn't mean we eliminiate domain
name resolving
problems](https://serverfault.com/questions/811123/what-would-happen-if-someone-would-flush-host-from-google-public-dns-while-its)
, there is a big chance you will be able to resolve
any existing domain name through it and that's exactly what happened in the
hypothetical (or not?) scenario above.

Configure DNS on OS X
---------------------

Now it's time for me to explain how one could use Google's public DNS server
in OS X and revert back to the original settings if so required.

There is a pre-installed tool called `networksetup`, here is a cut
from `man networksetup`:

> networksetup -- configuration tool for network settings in System Preferences.
> The networksetup command is used to configure network settings typically
> configured in the System Preferences application. The
> networksetup command requires at least "admin" privileges to run. Most of
> the set commands require "root" privileges to run.

First, we'll use `networksetup` to list all the network services we have:

```bash
networksetup listallnetworkservices
```

The command above should produce an output similar to following:

```bash
Wi-Fi
Bluetooth PAN
Thunderbolt Bridge
```

Assuming we're using Wi-Fi service, we'd fetch it's current configuration
by running following command:

```bash
networksetup -getdnsservers Wi-Fi
```

There are two possible outputs here: either nothing is configured and the
output will look like so (scenario 1):

```bash
There aren't any DNS Servers set on Wi-Fi.
```

...either we have something configured and the output may be similar to
following (scenario 2):

```bash
10.0.1.1
```

Just remember the output and we will get back to it when rolling back.

Let's overwrite the settings (you may need to enter admin password in the
dialog that will show up):

```bash
networksetup -setdnsservers Wi-Fi 8.8.8.8
```

Now any domain name you try to visit via your browser should be resolved
using Google's public DNS server. That was pretty easy, wasn't it?

Later on when you need to roll back, just run the following command in
case you didn't have anything configured for the network service:

```bash
networksetup -setdnsservers Wi-Fi Empty
```

Or if you had something configured, say `10.0.1.1` then run:

```bash
networksetup -setdnsservers Wi-Fi 10.0.1.1
```

That's it! Thanks for reading. Happy domain names resolving :)
