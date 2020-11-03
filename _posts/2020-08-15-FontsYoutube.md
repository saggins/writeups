---
layout: post
title:  "‍‎‏‌"

---
![MysteryVideo]({{"/assets/img/mysteryVideo.png" | base_url}})

A youtube video that has seems to have no title and a blank user name.

You'd be forgiven if you thought the real video title is a space. At first, glance, that what I thought it was too. This hypothesis is disproven when you try to highlight the title. It's not possible.

# What are Youtube's title requirements?
![Youtube Requirments]({{"/assets/img/mysteryYoutube.png" | base_url}})

When you try to upload a video, with no title Youtube says, "Your video needs a title" What we can infer from that is, the creator either bypassed Youtube's requirements for titles or put in a character that can't be seen or interacted with.

# So What Exactly is Happening?

![MysteryFig]({{"/assets/img/mysteryFig.png" | base_url}})

If you inspect element the title, you don't see anything. Even so, the Youtube title requirements tell us that there must be a character present. When you "edit as html" an element you can see a red dot attached to ">" character. 

![Decoded]({{"/assets/img/mysteryDecode.png" | base_url}})

Copying and pasting the character into google gives you an empty search. Decoding this text into Unicode entities you can see  "%3E%u200C" 

The tool I used was [this]("https://mothereff.in/html-entities")

# What is "%3E%u200C"?
%3E is the >
%u200C in google spits out [this]("https://en.wikipedia.org/wiki/Zero-width_non-joiner")

# Why is this happening?
[TLDR: Zero-width characters](https://en.wikipedia.org/wiki/Zero-width_space)

With all this, you can guess that the author of the video realized that they could add a "Zero-width character" More specifically, a "Zero-width non-joiner character"

# Why do Zero-width Character exist?

According to Wikipedia, "In certain languages, the ZWNJ is necessary for unambiguously specifying the correct typographic form of a character sequence." ZWNJ stands for a zero-width non-joiner.

![MysteryVideo]({{"/assets/img/mysteryEx.png" | base_url}})

There's a great article about the zero-width characters. [Here.](https://www.ptiglobal.com/2018/04/26/the-beauty-of-unicode-zero-width-characters/) It talks about how some languages don't have spaces. Even so, browsers need to know when to break sentences for overflow. An example of what I'm talking about with English would be:
	
	"Things are th
	
	ings but s
	
	tuff		"

This is the reason why these zero-width characters exist. They're for special languages that need them.

Very Cool <i class="fa fa-thumbs-up" aria-hidden="true"></i>

