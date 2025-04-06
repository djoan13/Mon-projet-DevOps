<?php
$CONFIG = array (
  'htaccess.RewriteBase' => '/',
  'memcache.local' => '\\OC\\Memcache\\APCu',
  'apps_paths' => 
  array (
    0 => 
    array (
      'path' => '/var/www/html/apps',
      'url' => '/apps',
      'writable' => false,
    ),
    1 => 
    array (
      'path' => '/var/www/html/custom_apps',
      'url' => '/custom_apps',
      'writable' => true,
    ),
  ),
  'upgrade.disable-web' => true,
  'instanceid' => 'oco391e6o6m1',
  'passwordsalt' => 'vD2mvX0NGrqZTtDG5juvap3Iakm4A2',
  'secret' => 'NkE+ntmNOpuOSrVGsTvkKO9ftjbwSJx6Lxxfnb/2GoUO/Zfi',
  'trusted_domains' => 
  array (
    0 => '192.168.1.28:8080',
  ),
  'datadirectory' => '/var/www/html/data',
  'dbtype' => 'mysql',
  'version' => '31.0.2.1',
  'overwrite.cli.url' => 'http://192.168.1.28:8080',
  'dbname' => 'nextcloud',
  'dbhost' => 'db',
  'dbport' => '',
  'dbtableprefix' => 'oc_',
  'mysql.utf8mb4' => true,
  'dbuser' => 'nextcloud',
  'dbpassword' => 'userpass',
  'installed' => true,
);
