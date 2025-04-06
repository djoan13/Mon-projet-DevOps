<div class="<?php skylink_print_archive_entry_class("h-column h-column-container d-flex  masonry-item style-108-outer style-local-17-m4-outer");?>" data-masonry-width="<?php skylink_print_masonry_col_class(true); ?>">
  <div data-colibri-id="17-m4" class="d-flex h-flex-basis h-column__inner h-px-lg-0 h-px-md-0 h-px-0 v-inner-lg-0 v-inner-md-0 v-inner-0 style-108 style-local-17-m4 h-overflow-hidden position-relative">
    <div class="w-100 h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-start align-self-md-start align-self-start">
      <div data-href="<?php the_permalink(); ?>" data-colibri-component="link" data-colibri-id="17-m5" class="colibri-post-thumbnail <?php skylink_post_thumbnail_classes(); ?> style-109 style-local-17-m5 h-overflow-hidden position-relative h-element">
        <div class="h-global-transition-all colibri-post-thumbnail-shortcode style-dynamic-17-m5-height">
          <?php skylink_post_thumbnail(array (
            'link' => true,
          )); ?>
        </div>
        <div class="colibri-post-thumbnail-content align-items-lg-center align-items-md-center align-items-center flex-basis-100">
          <div class="w-100 h-y-container"></div>
        </div>
      </div>
      <?php if ( \ColibriWP\Theme\Core\Hooks::prefixed_apply_filters( 'show_post_meta', true ) ): ?>
      <div data-colibri-id="17-m6" class="h-blog-meta style-113 style-local-17-m6 position-relative h-element">
        <div name="2" class="metadata-item">
          <a href="<?php skylink_post_meta_date_url(); ?>">
            <?php skylink_the_date('d/m/Y'); ?>
          </a>
        </div>
      </div>
      <?php endif; ?>
      <div data-colibri-id="17-m7" class="h-blog-title style-338 style-local-17-m7 position-relative h-element">
        <div class="h-global-transition-all">
          <?php skylink_post_title(array (
            'heading_type' => 'h3',
            'classes' => 'colibri-word-wrap',
          )); ?>
        </div>
      </div>
      <div data-colibri-id="17-m8" class="style-115 style-local-17-m8 position-relative h-element">
        <div class="h-global-transition-all">
          <?php skylink_post_excerpt(array (
            'max_length' => 16,
          )); ?>
        </div>
      </div>
      <div data-colibri-id="17-m9" class="h-x-container style-120 style-local-17-m9 position-relative h-element">
        <div class="h-x-container-inner style-dynamic-17-m9-group">
          <span class="h-button__outer style-121-outer style-local-17-m10-outer d-inline-flex h-element">
            <a h-use-smooth-scroll="true" href="<?php the_permalink(); ?>" data-colibri-id="17-m10" class="d-flex w-100 align-items-center h-button justify-content-lg-center justify-content-md-center justify-content-center style-121 style-local-17-m10 position-relative">
              <span>
                <?php esc_html_e('Read more','skylink'); ?>
              </span>
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
