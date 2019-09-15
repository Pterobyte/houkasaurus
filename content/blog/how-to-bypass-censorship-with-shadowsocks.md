---
{
  "doc_id": "lfUiPF4LYv4N5UQFeEy43",
  "owner": "jt.houk@outlook.com",
  "title": "How to Bypass Censorship With Shadowsocks",
  "created_date": "2019-09-15T07:29:37Z",
  "status": {
    ".tag": "active"
  },
  "revision": 1242,
  "last_updated_date": "2019-09-15T08:06:42Z",
  "last_editor": "jt.houk@outlook.com"
}
---
# How to Bypass Censorship With Shadowsocks

> **Shadowsocks** is a [free and open-source](https://en.wikipedia.org/wiki/Free_and_open-source) encrypted [proxy](https://en.wikipedia.org/wiki/Proxy_server) project, widely used in [mainland China](https://en.wikipedia.org/wiki/Mainland_China) to circumvent [Internet censorship](https://en.wikipedia.org/wiki/Internet_censorship_in_China). It was created in 2012 by a Chinese programmer named "clowwindy", and multiple implementations of the protocol have been made available since
> -- [Wikipedia](https://en.wikipedia.org/wiki/Shadowsocks)


## What is a Proxy?

If you’re unfamiliar with the term proxy, you’re not alone. A proxy is simply a middleman between two connections. Imagine you want to access google.com. Normally, your device will attempt to ask google’s servers for its website directly. With a proxy, however, your device can ask your proxy to go ask google for you instead.

**Why would you want that?**

Today, there seems to be a growing trend towards internet censorship (ref), privacy invasion (ref), and information theft (ref). A proxy doesn’t completely protect you from all the things, but it can go a long way without too much work.


## Why Shadowsocks?

There are many different VPN services (which are slightly different than a simple proxy (ref)), which do an excellent job of protecting you from the big bad internet, so why go out of your way to set up your own server? Other than the possibility of saving some money, there are a few good reasons to use this setup, which may or may not apply to you.


1. **You live in a country with aggressive censorship.**

This is a big one. Some countries go to 



## Setting Up a Server


## Installing Shadowsocks

Github user [teddysun](https://github.com/teddysun/) hosts an [installation script](https://github.com/teddysun/shadowsocks_install/tree/master) we’ll be using for this article.


    sudo su
    wget --no-check-certificate -O shadowsocks-all.sh https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocks-all.sh
    chmod +x shadowsocks-all.sh
    ./shadowsocks-all.sh 2>&1 | tee shadowsocks-all.log


    /etc/init.d/shadowsocks-r start | stop | restart | status


## Conclusion
----------

Resources:

- [shadowsocks.org](https://shadowsocks.org/en/index.html)
- [shadowsocks_install](https://github.com/teddysun/shadowsocks_install/tree/master)
- [inspiration from](https://mighil.com/how-to-setup-shadowsocks-server-on-amazon-ec2/) [Mighil Puthukkudy](https://mighil.com/)

