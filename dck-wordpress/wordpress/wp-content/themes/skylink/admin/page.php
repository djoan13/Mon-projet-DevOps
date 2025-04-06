<?php


use ColibriWP\Theme\Core\Hooks;
use ColibriWP\Theme\Translations;
use ColibriWP\Theme\View;

$skylink_tabs            = View::getData( 'tabs', array() );
$skylink_current_tab     = View::getData( 'current_tab', null );
$skylink_url             = View::getData( 'page_url', null );
$skylink_welcome_message = View::getData( 'welcome_message', null );
$skylink_tab_partial     = View::getData( "tabs.{$skylink_current_tab}.tab_partial", null );
Hooks::prefixed_do_action( "before_info_page_tab_{$skylink_current_tab}" );
$skylink_slug        = "colibri-wp-page-info";
$colibri_get_started = array(
    'plugin_installed_and_active' => Translations::escHtml( 'plugin_installed_and_active' ),
    'activate'                    => Translations::escHtml( 'activate' ),
    'activating'                  => __( 'Activating', 'skylink' ),
    'install_recommended'         => isset( $_GET['install_recommended'] ) ? $_GET['install_recommended'] : ''
);

wp_localize_script( $skylink_slug, 'colibri_get_started', $colibri_get_started );
?>
<div class="skylink-admin-page wrap about-wrap full-width-layout mesmerize-page">

    <div class="skylink-admin-page--hero">
        <div class="skylink-admin-page--hero-intro skylink-admin-page-spacing ">
            <div class="skylink-admin-page--hero-logo">
                <img src="<?php echo esc_url( skylink_theme()->getAssetsManager()->getBaseURL() . "/images/colibriwp-logo.png" ) ?>"
                     alt="logo"/>
            </div>
            <div class="skylink-admin-page--hero-text ">
                <?php if ( $skylink_welcome_message ): ?>
                    <h1><?php echo esc_html( $skylink_welcome_message ); ?></h1>
                <?php endif; ?>
            </div>
        </div>
        <?php if ( count( $skylink_tabs ) ): ?>
            <nav class="nav-tab-wrapper wp-clearfix">
                <?php foreach ( $skylink_tabs as $skylink_tab_id => $skylink_tab ) : ?>
                    <a class="nav-tab <?php echo ( $skylink_current_tab === $skylink_tab_id ) ? 'nav-tab-active' : '' ?>"
                       href="<?php echo esc_url( add_query_arg( array( 'current_tab' => $skylink_tab_id ),
                           $skylink_url ) ); ?>">
                        <?php echo esc_html( $skylink_tab['title'] ); ?>
                    </a>
                <?php endforeach; ?>
            </nav>
        <?php endif; ?>
    </div>
    <?php if ( $skylink_tab_partial ): ?>
        <div class="skylink-admin-page--body skylink-admin-page-spacing">
            <div class="skylink-admin-page--content">
                <div class="skylink-admin-page--tab">
                    <div class="skylink-admin-page--tab-<?php echo esc_attr( $skylink_current_tab ); ?>">
                        <?php View::make( $skylink_tab_partial,
                            Hooks::prefixed_apply_filters( "info_page_data_tab_{$skylink_current_tab}",
                                array() ) ); ?>
                    </div>
                </div>

            </div>
            <div class="skylink-admin-page--sidebar">
                <?php View::make( 'admin/sidebar' ) ?>
            </div>
        </div>
    <?php endif; ?>
</div>




