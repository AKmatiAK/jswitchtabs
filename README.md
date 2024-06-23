# jswitchtabs
Javascript library for flexible switching of content tabs visibility

## How to use
this goes to header:
`<link href="/somedironyourserver/jswitchtabs.css" rel="stylesheet">`

this goes to footer:
`<script src="/somedironyourserver/jswitchtabs.js"></script>`

Simple use case: You want to make switchable tabs on your site. You need buttons with `data-switches=""` attribute and content blocks with `data-contents=""` attribute. Let me show you:
```
<ul>
 <li data-switches="someflaggroup[first]">first</a></li>
 <li data-switches="someflaggroup[second]">second</li>
 <li data-switches="someflaggroup[third]">third</li>
 <li data-switches="someflaggroup[fourth]">fourth</li>
</ul>

<div data-contents="someflaggroup[first]">
  <div>
   xyz
  </div>
  <div>
    xyz
  </div>
</div>

<div data-contents="someflaggroup[second]">
	<div>
   xyz
  </div>
  <div>
    xyz
  </div>
</div>

<div data-contents="someflaggroup[third]">
	<div>
   xyz
  </div>
  <div>
    xyz
  </div>
</div>

<div data-contents="someflaggroup[fourth]">
	<div>
   xyz
  </div>
  <div>
    xyz
  </div>
</div>
```

You can also mix switches, like: `data-switches="somemultiflaggroup[first]"`, `data-switches="somemultiflaggroup[second]"` to buttons and `data-contents="somemultiflaggroup[first second]"` to content and it will show datablock when either first or second button is active 

Or nest them:
```
<ul class="tab-btns clearfix">
  <li data-switches="firstflaggroup[buttons1]">buttons1</li>
  <li data-switches="firstflaggroup[buttons2]">buttons2</li>
  <li data-switches="firstflaggroup[buttons3]">buttons3</li>
</ul>

<ul class="service-cat-list tab-btns tab-buttons">
  <li data-switches="secondflaggroup[item1]" data-contents="firstflaggroup[buttons1]">item1</li>
  <li data-switches="secondflaggroup[item2]" data-contents="firstflaggroup[buttons1]">item2</li>
  <li data-switches="secondflaggroup[item3]" data-contents="firstflaggroup[buttons2]">item3</li>
  <li data-switches="secondflaggroup[item4]" data-contents="firstflaggroup[buttons2]">item4</li>
  <li data-switches="secondflaggroup[item5]" data-contents="firstflaggroup[buttons3]">item5</li>
  <li data-switches="secondflaggroup[item6]" data-contents="firstflaggroup[buttons3]">item6</li>
</ul>

<div data-contents="secondflaggroup[item1]">
  <div>xyz</div>
  <div>abc</div>
</div>

<div data-contents="secondflaggroup[item2]">
  <div>xyz</div>
  <div>abc</div>
</div>

<div data-contents="secondflaggroup[item3]">
  <div>xyz</div>
  <div>abc</div>
</div>

<div data-contents="secondflaggroup[item4]">
  <div>xyz</div>
  <div>abc</div>
</div>

<div data-contents="secondflaggroup[item5]">
  <div>xyz</div>
  <div>abc</div>
</div>

<div data-contents="secondflaggroup[item6]">
  <div>xyz</div>
  <div>abc</div>
</div>
```

You can also have multiple fragments of content:

example TODO, you can have eg. `data-contents="someflaggroup[third]"` on multiple html elements and all those elements are controlled by switch with `data-switches="someflaggroup[third]` attribute

Or multiple flag groups:

example TODO

.unbox class is for two or more elements in div for data-contents if wrapper div ruins document flow of your site. add it to wrapper div with data-contents if you experience problems.

Check more examples of my plugin here:

https://e-wheel.pl/oferta/oswietlenie.shtml

https://e-wheel.pl/oferta/maszty.shtml

