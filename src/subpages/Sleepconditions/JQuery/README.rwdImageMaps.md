# jQuery RWD Image Maps
[![CDNJS](https://img.shields.io/cdnjs/v/jQuery-rwdImageMaps.svg)](https://cdnjs.com/libraries/jQuery-rwdImageMaps)

### Allows image maps to be used in a responsive design by recalculating the area coordinates to match the actual image size on load and window.resize

---

#### Usage:

* If possible, add [correct, unitless](http://dev.w3.org/html5/markup/img.html) `width` and `height` attributes to your image map images. You can override these in CSS to make them responsive.
* Add a link to jQuery in your page, preferably at the bottom just before the closing `</body>`
* After jQuery, either in a `<script>` block or a separate file, call:

```js
$('img[usemap]').rwdImageMaps();
```

You may also want to wrap it inside a `$(document).ready()` function, like so:

```js
$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps();
});
```

#### Demo:
https://studentdhbwheidenheimde-my.sharepoint.com/:p:/g/personal/bockd_tin21_student_dhbw-heidenheim_de/EervSbARBvlKoav1ze2zgkgBnms4o-Y63dyTp7ioyT2Q5Q?email=Damian.Bock%40bosch.com&e=CsZ815
http://mattstow.com/experiment/responsive-image-maps/rwd-image-maps.html

---

Copyright (c) 2016 [Matt Stow](http://mattstow.com)  
Licensed under the MIT license *(see [LICENSE](https://github.com/stowball/jQuery-rwdImageMaps/blob/master/LICENSE) for details)*  
Minified version created with Online YUI Compressor: http://www.refresh-sf.com/yui/
