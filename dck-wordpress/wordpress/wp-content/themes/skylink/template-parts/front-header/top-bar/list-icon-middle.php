<li class="list-item no-gutters">
  <a href="<?php echo esc_attr(\ColibriWP\Theme\View::getData( 'link_value' )); ?>" class="item-link no-gutters customize-unpreviewable" h-use-smooth-scroll="true">
    <div class="d-flex h-col no-gutters align-items-lg-center align-items-md-center align-items-center list-item-text-wrapper">
      <div class="d-flex">
        <span class="h-svg-icon style-21-icon style-local-5-h22-icon">
          <?php $icon = \ColibriWP\Theme\View::getData( 'icon' ); if (isset($icon['content'])) echo $icon['content'] ?>
        </span>
      </div>
      <span class="list-text d-block">
        <span>
          <?php echo esc_html(\ColibriWP\Theme\View::getData( 'text' )); ?>
        </span>
      </span>
    </div>
  </a>
  <div class="list-container-divider d-flex justify-content-lg-start justify-content-md-start justify-content-start"></div>
</li>
