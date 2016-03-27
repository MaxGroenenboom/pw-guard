# pw-guard

This is a small userscript that highlights password fields on non secure (http) websites, and adds a fast way to reload the page on https.

At first each password field will be highlighted in red, and when the user has clicked it at least once, the highlight color will change to yellow. A title will be added to the field as well, showing a short text why the field has been highlighted.

The script doesn't run on embedded frames, and will run twice every second, to account for changes.
