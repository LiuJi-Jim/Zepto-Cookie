# Zepto Cookie Plugin

Modified by LiuJi-Jim

**Move the total API from $.fn.cookie to $.cookie**

**Change the `expires` parameter from `days` to `minutes`**

## 用途

大概这么用: `$.cookie(key, value, options);`

`key` (string), 读/写的cookie名。

`value` (string), 写的cookie值。

`options` (object), 附加参数，如过期时间、路径、域名等。


## 例子

`$.cookie('foo', 'bar');`

写一个名为`foo`的cookie，值为`bar`。

`$.cookie('foo');`

读一个cookie。如果在第一个例子之后运行，应该返回`bar`。如果cookie不存在，返回`null`。

`$.cookie('foo', 'bar', { expires: 30 });`

写名为`foo`的cookie，值为`bar`，设置过期时间为30分钟。

`$.cookie('foo', { raw: true });`

读名为`foo`的cookie，并返回不经过`encodeURIComponent`的值。

## Options

The `options` argument is an object which supports the following properties:
`options`参数是一个对象，支持如下属性：

`{ expires : 30 }`

cookie的生命周期（分钟）。接收整数，默认生命周期为Session。

`{ path: '/foo' }`

cookie的有效路径。如果不指定，则默认为cookie所被设置时的当前路径。

`{ domain: 'example.com' }`

cookie的有效域名。如果不指定，则默认为cookie所被设置时的当前域名。

`{ secure: true }`

指定该cookie是否需要HTTPS，默认为false。

`{ raw: true }`

指定该cookie是否**不**被URI encode，默认为false。

# Zepto Cookie Plugin

A simple plugin to read, set, and delete cookies. This plugin extends [Zepto.js](https://github.com/madrobby/zepto) with a `$.cookie` method.

It is a modification of the [jQuery-Cookie](https://github.com/carhartl/jquery-cookie) plugin made to work with Zepto.


## Loading

Simply include the script in your site's template after zepto.min.js:

    <script type="text/javascript" src="zepto.min.js"></script>
    <script type="text/javascript" src="zepto.cookie.min.js"></script>

Alternatively, you can build the plugin directly into the Zepto library itself.
To do so, copy `zepto.cookie.js` into the `zepto/src/` folder of the
[Zepto project](https://github.com/madrobby/zepto). Then build Zepto as you
normally would using the `rake concat` command:

`rake concat[zepto.cookie] dist`

This will result in a build the default Zepto library, with the inclusion of
Zepto Cookie. Grab the regular or minified version of zepto.js from the
`zepto/dist/` folder and include the library as you normally would.

    <script type="text/javascript" src="zepto.min.js"></script>

You can then use Zepto Cookie as you normally would.

## Usage

Use as such: `$.fn.cookie(key, value, options);`

`key` (string), The name of the cookie you want to read/ set.

`value` (string), The value of the cookie you're setting.

`options` (object), Additional cookie parameters such as expires, path, or domain.


## Examples

`$.fn.cookie('foo', 'bar');`

Sets a cookie with the name of `foo` to the value of `bar`.

`$.fn.cookie('foo');`

Reads the value of a cookie. If ran after the first example, would return `bar`.

`$.fn.cookie('foo', 'bar', { expires: 7 });`

Sets the cookie `foo` with value `bar`, set to expire in 7 days.

## Options

The `options` argument is an object which supports the following properties:

`{ expires : 7 }`

The lifespan of the cookie in days. Takes an integer. Defaults to being a
session cookie.

`{ path: '/foo' }`

The path for which the cookie is valid. If not specified, the cookie defaults to
the path on which the cookie was set.

`{ domain: 'example.com' }`

The domain for which the cookie is valid. If not specified, the cookie defaults
to the domain on which the cookie was set.

`{ secure: true }`

Whether the cookie requries a secure connection (https). Defaults to false.

`{ raw: true }`

Whether or not to URI encode the cookie value. Defaults to false.
