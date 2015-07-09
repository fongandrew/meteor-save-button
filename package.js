Package.describe({
  name: 'fongandrew:save-button',
  summary: "Basic save/saving button template for Spacebars",
  version: '0.1.0',
  git: 'https://github.com/fongandrew/meteor-save-button.git'
});

Package.onUse(function(api) {
  'use strict';

  api.versionsFrom('METEOR@1.1.0.2');
  api.use('spacebars', ['client']);
  api.use('templating', ['client']);
  api.addFiles('save_button.html', ['client']);
});
