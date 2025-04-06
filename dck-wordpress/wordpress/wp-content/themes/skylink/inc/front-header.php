<?php return 
array (
  'navigation' => 
  array (
    'props' => 
    array (
      'showTopBar' => true,
      'sticky' => true,
      'overlap' => true,
      'width' => 'boxed',
      'layoutType' => 'logo-spacing-menu',
    ),
    'style' => 
    array (
      'ancestor' => 
      array (
        'sticky' => 
        array (
          'background' => 
          array (
            'color' => '${theme.colors.4}',
          ),
        ),
      ),
      'background' => 
      array (
        'color' => 'transparent',
      ),
      'padding' => 
      array (
        'top' => 
        array (
          'value' => '20',
        ),
      ),
    ),
  ),
  'logo' => 
  array (
    'props' => 
    array (
      'layoutType' => 'image',
    ),
  ),
  'header-menu' => 
  array (
    'props' => 
    array (
      'sticky' => true,
      'hoverEffect' => 
      array (
        'type' => 'bordered-active-item bordered-active-item--bottom',
        'group' => 
        array (
          'border' => 
          array (
            'transition' => 'effect-borders-grow grow-from-center',
          ),
        ),
        'activeGroup' => 'border',
        'enabled' => true,
      ),
      'showOffscreenMenuOn' => 'has-offcanvas-tablet',
    ),
  ),
  'title' => 
  array (
    'style' => 
    array (
      'textAlign' => 'center',
    ),
  ),
  'hero' => 
  array (
    'style' => 
    array (
      'background' => 
      array (
        'type' => 'image',
        'color' => '#03a9f4',
        'overlay' => 
        array (
          'shape' => 
          array (
            'value' => 'none',
            'isTile' => false,
          ),
          'light' => false,
          'color' => 
          array (
            'value' => '#000000',
            'opacity' => 80,
          ),
          'enabled' => true,
          'type' => 'gradient',
          'gradient' => 
          array (
            'angle' => '90',
            'steps' => 
            array (
              0 => 
              array (
                'color' => 'rgb(240, 241, 238)',
                'position' => '60',
              ),
              1 => 
              array (
                'color' => 'rgba(240, 241, 238, 0.5)',
                'position' => 33,
              ),
            ),
            'name' => 'october_silence',
          ),
        ),
        'image' => 
        array (
          0 => 
          array (
            'source' => 
            array (
              'url' => 'horizon-cloud-sky-sunrise-sunset-sunlight-1625-pxhere.com-.jpg',
              'gradient' => 
              array (
                'name' => 'october_silence',
                'angle' => 0,
                'steps' => 
                array (
                  0 => 
                  array (
                    'position' => '0',
                    'color' => '#b721ff',
                  ),
                  1 => 
                  array (
                    'position' => '100',
                    'color' => '#21d4fd',
                  ),
                ),
              ),
            ),
            'attachment' => 'scroll',
            'position' => 
            array (
              'x' => 52.24647759569451,
              'y' => 0,
            ),
            'repeat' => 'no-repeat',
            'size' => 'cover',
            'useParallax' => false,
          ),
        ),
        'slideshow' => 
        array (
          'duration' => 
          array (
            'value' => 1500,
          ),
          'speed' => 
          array (
            'value' => 1500,
          ),
        ),
        'video' => 
        array (
          'videoType' => 'external',
          'externalUrl' => 'https://www.youtube.com/watch?v=coYirc_qoSA',
          'poster' =>
          array (
          ),
        ),
      ),
      'padding' => 
      array (
        'top' => 
        array (
          'value' => NULL,
          'unit' => 'px',
        ),
        'bottom' => 
        array (
          'value' => NULL,
          'unit' => 'px',
        ),
      ),
      'separatorBottom' => 
      array (
        'enabled' => false,
        'height' => 
        array (
          'unit' => 'px',
          'value' => 100,
        ),
        'color' => 'white',
        'type' => 'triangle-asymmetrical',
        'negative' => false,
      ),
    ),
    'props' => 
    array (
      'layoutType' => 'textWithMediaOnRight',
      'heroSection' => 
      array (
        'layout' => 'textWithMediaOnRight',
      ),
    ),
  ),
);
