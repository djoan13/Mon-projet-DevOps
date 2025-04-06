<div class="h-column h-column-container d-flex h-col-lg-12 h-col-md-12 h-col-12  masonry-item style-138-outer style-local-23-m3-outer">
  <div data-colibri-id="23-m3" class="d-flex h-flex-basis h-column__inner h-px-lg-0 h-px-md-0 h-px-0 v-inner-lg-0 v-inner-md-0 v-inner-0 style-138 style-local-23-m3 position-relative">
    <div class="w-100 h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-start align-self-md-start align-self-start">
      <?php if ( \ColibriWP\Theme\Core\Hooks::prefixed_apply_filters( 'show_post_meta', true ) ): ?>
      <div data-colibri-id="23-m4" class="h-blog-meta style-113 style-local-23-m4 position-relative h-element">
        <div name="2" class="metadata-item">
          <a href="<?php skylink_post_meta_date_url(); ?>">
            <?php skylink_the_date('d/m/Y'); ?>
          </a>
        </div>
      </div>
      <?php endif; ?>
      <div data-colibri-id="23-m5" class="h-row-container gutters-row-lg-0 gutters-row-md-0 gutters-row-0 gutters-row-v-lg-0 gutters-row-v-md-0 gutters-row-v-0 style-339 style-local-23-m5 position-relative">
        <div class="h-row justify-content-lg-start justify-content-md-start justify-content-start align-items-lg-stretch align-items-md-stretch align-items-stretch gutters-col-lg-0 gutters-col-md-0 gutters-col-0 gutters-col-v-lg-0 gutters-col-v-md-0 gutters-col-v-0">
          <div class="h-column h-column-container d-flex h-col-lg-auto h-col-md-auto h-col-auto style-340-outer style-local-23-m6-outer">
            <div data-colibri-id="23-m6" class="d-flex h-flex-basis h-column__inner h-px-lg-0 h-px-md-0 h-px-0 v-inner-lg-0 v-inner-md-0 v-inner-0 style-340 style-local-23-m6 position-relative">
              <div class="w-100 h-y-container h-column__content h-column__v-align flex-basis-auto align-self-lg-start align-self-md-start align-self-start">
                <div data-colibri-id="23-m7" class="h-text h-text-component style-79 style-local-23-m7 position-relative h-element">
                  <div>
                    <p>
                      <?php esc_html_e('Categories','skylink'); ?>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="h-column h-column-container d-flex h-col-lg h-col-md h-col style-341-outer style-local-23-m8-outer">
            <div data-colibri-id="23-m8" class="d-flex h-flex-basis h-column__inner h-px-lg-1 h-px-md-1 h-px-1 v-inner-lg-0 v-inner-md-0 v-inner-0 style-341 style-local-23-m8 position-relative">
              <div class="w-100 h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-start align-self-md-start align-self-start">
                <div data-colibri-id="23-m9" class="h-blog-categories style-141 style-local-23-m9 position-relative h-element">
                  <div class="h-global-transition-all">
                    <?php skylink_post_categories(array (
                      'prefix' => '',
                    )); ?>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-colibri-id="23-m10" class="h-blog-title style-142 style-local-23-m10 position-relative h-element">
        <div class="h-global-transition-all">
          <?php skylink_post_title(array (
            'heading_type' => 'h4',
            'classes' => 'colibri-word-wrap',
          )); ?>
        </div>
      </div>
      <div data-colibri-id="23-m11" class="style-144 style-local-23-m11 position-relative h-element">
        <div class="h-global-transition-all">
          <?php skylink_post_excerpt(array (
            'max_length' => '',
          )); ?>
        </div>
      </div>
      <div data-colibri-id="23-m12" class="h-x-container style-145 style-local-23-m12 position-relative h-element">
        <div class="h-x-container-inner style-dynamic-23-m12-group">
          <span class="h-button__outer style-121-outer style-local-23-m13-outer d-inline-flex h-element">
            <a h-use-smooth-scroll="true" href="<?php the_permalink(); ?>" data-colibri-id="23-m13" class="d-flex w-100 align-items-center h-button justify-content-lg-center justify-content-md-center justify-content-center style-121 style-local-23-m13 position-relative">
              <span>
                <?php esc_html_e('read more','skylink'); ?>
              </span>
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
