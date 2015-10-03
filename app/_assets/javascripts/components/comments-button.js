var buttons = document.querySelector('.js-show-comments-button');
if (buttons) {
  buttons.addEventListener('click', function() {
    var that = this;

    // We need these variables be global in order for disqus embed
    // code to be able to read them
    disqus_shortname = that.dataset.disqusShortname;
    disqus_identifier = that.dataset.disqusIdentifier;

    var s = document.createElement("script"),
        url = "http://" + disqus_shortname + ".disqus.com/embed.js";
    s.src = url;
    document.body.appendChild(s);
    s.onload = function() {
      that.style.display = 'none';
    };
  });
}
