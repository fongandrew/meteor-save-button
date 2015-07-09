# fongandrew:save-button
A really simple save button template that I seem to keep re-using in random
places.

Installation
------------
`meteor add fongandrew:save-button`

Usage
-----
The `saveButton` template can be included like any other Meteor template. It 
should be passed the following variables:

* `saving` - This should be a variable that indicates things are being saved.
When saving, the button will be disabled. If you have fontawesome installed, a
little spinner will appear as well.

* `buttonText` - Change the text on the button.

* `buttonClasses` - CSS classes for the button.

You can also the saveButton in contentBlock / elseBlock form, like so:

```handlebars
{{#saveButton}}
  <i class="fa fa-check"></i> Do Something
{{else}}
  <i class="fa fa-circle-o-notch fa-spin"></i> It Is Being Done
{{/saveButton}}

```