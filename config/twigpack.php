<?php

/**
 * Twigpack plugin for Craft CMS 3.x
 *
 * Twigpack is the conduit between Twig and webpack, with manifest.json &
 * webpack-dev-server HMR support
 *
 * @link      https://nystudio107.com/
 * @copyright Copyright (c) 2018 nystudio107
 */

/**
 * Twigpack config.php
 *
 * This file exists only as a template for the Twigpack settings.
 * It does nothing on its own.
 *
 * Don't edit this file, instead copy it to 'craft/config' as 'twigpack.php'
 * and make your changes there to override default settings.
 *
 * Once copied to 'craft/config', this file will be multi-environment aware as
 * well, so you can have different settings groups for each environment, just as
 * you do for 'general.php'
 */

return [
  // Global settings
  '*' => [
    // If `devMode` is on, use webpack-dev-server to all for HMR (hot module reloading)
    'useDevServer' => false,
    // The JavaScript entry from the manifest.json to inject on Twig error pages
    'errorEntry' => '',
    // Manifest file names
    'manifest' => [
      'legacy' => 'mix-manifest.json',
      'modern' => 'mix-manifest.json',
    ],
    // Public server config
    'server' => [
      'manifestPath' => '@webroot/build',
      'publicPath' => '@web/build',
    ],
    // webpack-dev-server config
    'devServer' => [
      'manifestPath' => '@web',
      'publicPath' => '@web',
    ],
    // Local files config
    'localFiles' => [
      'basePath' => '@webroot/',
      'criticalPrefix' => 'dist/criticalcss/',
      'criticalSuffix' => '_critical.min.css',
    ],
  ],
  // Live (production) environment
  'live' => [],
  // Staging (pre-production) environment
  'staging' => [],
  // Local (development) environment
  'local' => [
    // If `devMode` is on, use webpack-dev-server to all for HMR (hot module reloading)
    'useDevServer' => true,
  ],
];
