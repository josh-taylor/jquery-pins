# jQuery Pins

## Description

A jQuery plugin to display posts in a pin board style.

## Usage

Include the jquery.pins.js file in your `<head>` section in your html.

## Examples

Live examples coming soon...

### HTML
```html
<div id="posts">
    <div class="pin">
        <p>
            Lorem ipsum
        </p>
    </div>
    <div class="pin">
        <p>
            Dolor sit
        </p>
    </div>
    ...
</div>
```

### jQuery
```js
$('#posts').pins();
```

## More Advanced Options

The following settings exist. All settings are optional, the list shows all
current options and their default values

```js
$('#posts').pins({
    pin: '.pin', // The selector to use as the 'pin'
    margin: 10, // The spacing between each pin when placed
    columns: 3, // The number of columns the pinboard should have
    animate: false, // Whether to animate each pin
    animateTime: 300, // The time each pin should be animated for
    animateDelay: 200 // The delay between each pin being animated
});
```

## License

The plugin is licensed under the MIT license.