<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit830b4242f52dcda28eda3141289ea4bf
{
    public static $files = array (
        'a444ac334d350161fe0d5de1e719f7c4' => __DIR__ . '/../..' . '/template-functions.php',
    );

    public static $prefixLengthsPsr4 = array (
        'T' => 
        array (
            'Skylink\\Theme\\' => 15,
        ),
        'C' => 
        array (
            'ColibriWP\\Theme\\' => 16,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Skylink\\Theme\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
        'ColibriWP\\Theme\\' => 
        array (
            0 => __DIR__ . '/..' . '/colibriwp/themebase/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit830b4242f52dcda28eda3141289ea4bf::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit830b4242f52dcda28eda3141289ea4bf::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit830b4242f52dcda28eda3141289ea4bf::$classMap;

        }, null, ClassLoader::class);
    }
}


