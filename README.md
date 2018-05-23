# Karusel - a photo gallery plugin

### Demo
soon

### Install
1. Paste the **karusel** folder in your project;

2. Add a link to the CSS file in your `<head>`:
```html
<!-- Karusel CSS file -->
<link rel="stylesheet" type="text/css" href="karusel/karusel.css"/>
```

3. Before closing your `<body>`, add a link to the main JS file:
```html
<!-- Karusel JS file -->
<script type="text/javascript" src="karusel/karusel.js"></script>
```

### Usage
Your HTML structure should look like this:
```html
<div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

You can add custom settings with the `data-karusel` attribute. Just place it in your outer `<div>` like so:
```html
<div data-karusel="{'showSlides': 3, 'scrollSlides': 1}">
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### Settings
Setting | Type | Default | Description
--- | --- | --- | ---
arrows | boolean | true | Enable prev/next arrows
autoplay | boolean | true | Enable slides autoplay
dots | boolean | true | Enable current slide dots
pauseHover | boolean | true | Pause autoplay on hover
scrollSlides | int | 1 | Number of slides to scroll at a time
showSlides | int | 1 | Number of slides to show at a time
speed | int | 400 | Slide transition speed
