<?php

use ColibriWP\Theme\PluginsManager;
use ColibriWP\Theme\Translations;

$skylink_is_builder_installed = apply_filters( 'skylink_page_builder/installed', false );

wp_enqueue_script( 'updates' );

function skylink_get_setting_link( $setting ) {
    return esc_attr( skylink_theme()->getCustomizer()->getSettingQuickLink( $setting ) );
}

?>

<div class="skylink-get-started__container skylink-admin-panel">
    <div class="skylink-get-started__section">
        <h2 class="col-title skylink-get-started__section-title">
            <span class="skylink-get-started__section-title__icon dashicons dashicons-admin-plugins"></span>
            <?php Translations::escHtmlE( 'get_started_section_1_title' ); ?>
        </h2>
        <div class="skylink-get-started__content">


            <?php foreach ( skylink_theme()->getPluginsManager()->getPluginData() as $skylink_recommended_plugin_slug => $skylink_recommended_plugin_data ): ?>
                <?php
                $skylink_plugin_state = skylink_theme()->getPluginsManager()->getPluginState( $skylink_recommended_plugin_slug );
                $skylink_notice_type  = $skylink_plugin_state === PluginsManager::ACTIVE_PLUGIN ? 'blue' : '';
                if ( isset( $skylink_recommended_plugin_data['internal'] ) && $skylink_recommended_plugin_data['internal'] ) {
                    continue;
                }
                ?>
                <div 
				
					class="skylink-notice <?php echo esc_attr( $skylink_notice_type ); ?> plugin-card-<?php echo $skylink_recommended_plugin_slug;?>">
                    <div class="skylink-notice__header">
                        <h3 class="skylink-notice__title"><?php echo esc_html( skylink_theme()->getPluginsManager()->getPluginData( "{$skylink_recommended_plugin_slug}.name" ) ); ?></h3>
                        <div class="skylink-notice__action">
                            <?php if ( $skylink_plugin_state === PluginsManager::ACTIVE_PLUGIN ): ?>
                                <p class="skylink-notice__action__active"><?php Translations::escHtmlE( 'plugin_installed_and_active' ); ?> </p>
                            <?php else: ?>
                                <?php if ( $skylink_plugin_state === PluginsManager::INSTALLED_PLUGIN ): ?>
                                    <a class="button button-large colibri-plugin activate-now" 
										data-slug="<?php echo $skylink_recommended_plugin_slug;?>"
                                       href="<?php echo esc_url( skylink_theme()->getPluginsManager()->getActivationLink( $skylink_recommended_plugin_slug ) ); ?>">
                                        <?php Translations::escHtmlE( 'activate' ); ?>
                                    </a>
                                <?php else: ?>
                                    <a class="button button-large colibri-plugin install-now"
									   data-slug="<?php echo $skylink_recommended_plugin_slug;?>"
                                       href="<?php echo esc_url( skylink_theme()->getPluginsManager()->getInstallLink( $skylink_recommended_plugin_slug ) ); ?>">
                                        <?php Translations::escHtmlE( 'install' ); ?>
                                    </a>
                                <?php endif; ?>
                            <?php endif; ?>
                        </div>
                    </div>
                    <p class="skylink-notice__description"><?php echo esc_html( skylink_theme()->getPluginsManager()->getPluginData( "{$skylink_recommended_plugin_slug}.description" ) ); ?></p>


                </div>
            <?php endforeach; ?>
        </div>
    </div>
    <div class="skylink-get-started__section">
        <h2 class="skylink-get-started__section-title">
            <span class="skylink-get-started__section-title__icon dashicons dashicons-admin-appearance"></span>
            <?php Translations::escHtmlE( 'get_started_section_2_title' ); ?>
        </h2>
        <div class="skylink-get-started__content">
            <div class="skylink-customizer-option__container">
                <div class="skylink-customizer-option">
                    <span class="skylink-customizer-option__icon dashicons dashicons-format-image"></span>
                    <a class="skylink-customizer-option__label"
                       target="_blank"
                       href="<?php echo esc_url( skylink_get_setting_link( 'logo' ) ); ?>">
                        <?php Translations::escHtmlE( 'get_started_set_logo' ); ?>
                    </a>
                </div>
                <div class="skylink-customizer-option">
                    <span class="skylink-customizer-option__icon dashicons dashicons-format-image"></span>
                    <a class="skylink-customizer-option__label"
                       target="_blank"
                       href="<?php echo esc_url( skylink_get_setting_link( 'hero_background' ) ); ?>">
                        <?php Translations::escHtmlE( 'get_started_change_hero_image' ); ?>
                    </a>
                </div>
                <div class="skylink-customizer-option">
                    <span class="skylink-customizer-option__icon dashicons dashicons-menu-alt3"></span>
                    <a class="skylink-customizer-option__label"
                       target="_blank"
                       href="<?php echo esc_url( skylink_get_setting_link( 'navigation' ) ); ?>">
                        <?php Translations::escHtmlE( 'get_started_change_customize_navigation' ); ?>
                    </a>
                </div>
                <div class="skylink-customizer-option">
                    <span class="skylink-customizer-option__icon dashicons dashicons-layout"></span>
                    <a class="skylink-customizer-option__label"
                       target="_blank"
                       href="<?php echo esc_url( skylink_get_setting_link( 'hero_layout' ) ); ?>">
                        <?php Translations::escHtmlE( 'get_started_change_customize_hero' ); ?>
                    </a>
                </div>
                <div class="skylink-customizer-option">
                    <span class="skylink-customizer-option__icon dashicons dashicons-admin-appearance"></span>
                    <a class="skylink-customizer-option__label"
                       target="_blank"
                       href="<?php echo esc_url( skylink_get_setting_link( 'footer' ) ); ?>">
                        <?php Translations::escHtmlE( 'get_started_customize_footer' ); ?>
                    </a>
                </div>
                <?php if ( $skylink_is_builder_installed ): ?>
                    <div class="skylink-customizer-option">
                        <span class="skylink-customizer-option__icon dashicons dashicons-art"></span>
                        <a class="skylink-customizer-option__label"
                           target="_blank"
                           href="<?php echo esc_url( skylink_get_setting_link( 'color_scheme' ) ); ?>">
                            <?php Translations::escHtmlE( 'get_started_change_color_settings' ); ?>
                        </a>
                    </div>
                    <div class="skylink-customizer-option">
                        <span class="skylink-customizer-option__icon dashicons dashicons-editor-textcolor"></span>
                        <a class="skylink-customizer-option__label"
                           target="_blank"
                           href="<?php echo esc_url( skylink_get_setting_link( 'general_typography' ) ); ?>">
                            <?php Translations::escHtmlE( 'get_started_customize_fonts' ); ?>
                        </a>
                    </div>

                <?php endif; ?>
                <div class="skylink-customizer-option">
                    <span class="skylink-customizer-option__icon dashicons dashicons-menu-alt3"></span>
                    <a class="skylink-customizer-option__label"
                       target="_blank"
                       href="<?php echo esc_url( skylink_get_setting_link( 'menu' ) ); ?>">
                        <?php Translations::escHtmlE( 'get_started_set_menu_links' ); ?>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
<?php



wp_print_request_filesystem_credentials_modal();
wp_print_admin_notice_templates();


