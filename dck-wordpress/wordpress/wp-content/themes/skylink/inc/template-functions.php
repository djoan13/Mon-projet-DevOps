<?php

	use ColibriWP\Theme\Core\Hooks;
	use ColibriWP\Theme\Core\Utils;
	use ColibriWP\Theme\Defaults;
	use ColibriWP\Theme\View;


	function skylink_page_title( $atts = array() ) {
		if ( is_404() ) {
			$title = __( 'Page not found', 'skylink' );
		} elseif ( is_search() ) {
			$title = sprintf( __( 'Search Results for &#8220;%s&#8221;', 'skylink' ), get_search_query() );
		} elseif ( is_home() ) {
			if ( is_front_page() ) {
				$title = get_bloginfo( 'name' );
			} else {
				$title = single_post_title( '', false );
			}
		} elseif ( is_archive() ) {
			if ( is_post_type_archive() ) {
				$title = post_type_archive_title( '', false );
			} else {
				$title = get_the_archive_title();
			}
		} elseif ( is_single() ) {
			$title = get_bloginfo( 'name' );

			global $post;
			if ( $post ) {
				// apply core filter
				$title = apply_filters( 'single_post_title', $post->post_title, $post );
			}
		} else {
			$title = get_the_title();
		}

		echo "<span><" . tag_escape( $atts['tag'] ) . ">" . $title . "</" . tag_escape( $atts['tag'] ) . "></span>";
	}

	function skylink_site_title() {
		$site_title = get_bloginfo( 'name' );
		echo esc_html( $site_title );
	}

	function skylink_post_title( $atts ) {
		$atts = array_merge(
			array(
				'heading_type' => 'h3',
				'classes'      => 'skylink-word-wrap'
			),
			$atts
		);

		$title_tempalte = '<a href="%1$s"><%2$s class="%4$s">%3$s</%2$s></a>';

		printf( $title_tempalte,
			esc_url( get_the_permalink() ),
			tag_escape( $atts['heading_type'] ),
			get_the_title(),
			esc_attr( $atts['classes'] )
		);
	}

	function skylink_post_excerpt( $attrs = array() ) {

		echo '<div class="colibri-post-excerpt">' . get_the_excerpt() . '</div>';
	}

	function skylink_post_thumb_placeholder_classes( $atts = array() ) {
		$result = 'colibri-post-thumbnail-has-placeholder';

		$show_placeholder = get_theme_mod( 'blog_show_post_thumb_placeholder',
			Defaults::get( 'blog_show_post_thumb_placeholder', true )
		);
		if ( intval( $show_placeholder ) ) {
			echo $result;
		}
	}

	function skylink_post_thumbnail_classes( $atts = array() ) {
		$result = 'colibri-post-has-no-thumbnail';

		if ( has_post_thumbnail() ) {
			$result = 'colibri-post-has-thumbnail';
		}

		if ( get_theme_mod( 'blog_show_post_thumb_placeholder',
			Defaults::get( 'blog_show_post_thumb_placeholder', true ) ) ) {
			$result .= ' colibri-post-thumbnail-has-placeholder';
		}

		echo $result;
	}

	function skylink_post_thumbnail( $atts = array() ) {

		$show_placeholder = get_theme_mod( 'blog_show_post_thumb_placeholder',
			Defaults::get( 'blog_show_post_thumb_placeholder', true ) );
		if ( ! has_post_thumbnail() && ! $show_placeholder ) {
			return;
		}
		if ( has_post_thumbnail() ) {
			if ( Utils::pathGet( $atts, 'link', false ) ) {
				?>
                <a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>">
					<?php the_post_thumbnail(); ?>
                </a>
				<?php
			} else {
				the_post_thumbnail();
			}
		}
	}

	function skylink_post_meta_date_url( $atts = array() ) {
		$id   = get_the_ID();
		$link = get_day_link( get_post_time( 'Y', false, $id, true ),
			get_post_time( 'm', false, $id, true ),
			get_post_time( 'j', false, $id, true ) );

		echo $link;
	}

	function skylink_post_categories( $attrs = array() ) {
		$categories = get_the_category( get_the_ID() );
		$atts       = shortcode_atts(
			array(
				'prefix' => '',
			),
			$attrs
		);

		$html = "";
		if ( $atts['prefix'] !== '' ) {
			$html .= '<span class="d-inline-block categories-prefix">' . skylink_esc_html_preserve_spaces( $atts['prefix'] ) . '</span>';
		}
		if ( $categories ) {
			foreach ( $categories as $category ) {
				$html .= sprintf( '<a class="d-inline-block" href="%1$s">%2$s</a>',
					esc_url( get_category_link( $category->term_id ) ),
					esc_html( $category->name )
				);
			}
		} else {
			$html .= sprintf( '<span class="d-inline-block">%s</span>', esc_html__( 'No Category', 'skylink' ) );
		}

		echo $html;
	}

	function skylink_esc_html_preserve_spaces( $text ) {
		return esc_html( str_replace( " ", "&nbsp;", $text ) );
	}

	function skylink_post_tags( $attrs = array() ) {
		$atts = shortcode_atts(
			array(
				'prefix' => '',
			),
			$attrs
		);
		$tags = get_the_tags( get_the_ID() );
		$html = '';
		if ( $atts['prefix'] !== '' ) {
			$html .= '<span class="d-inline-block tags-prefix">' . skylink_esc_html_preserve_spaces( $atts['prefix'] ) . '</span>';
		}
		if ( $tags ) {
			foreach ( $tags as $tag ) {
				$tag_link  = get_tag_link( $tag->term_id );
				$tag_title = sprintf( __( 'Tag: %s', 'skylink' ), $tag->name );
				$html      .= sprintf( '<a class="d-inline-block" href="%s" title="%s">%s</a>',
					esc_url( $tag_link ),
					esc_attr( $tag_title ),
					esc_html( $tag->name )
				);
			}
		} else {
			$html .= sprintf( '<span class="d-inline-block">%s</span>', esc_html__( 'No Tag', 'skylink' ) );
		}

		echo $html;
	}


	function skylink_get_nav_direction_wp_name( $type ) {
		return $type == "next" ? $type : "previous";
	}


	function skylink_print_navigation_button( $type, $button_text ) {
		$args = array(
			'prev_text'          => '%title',
			'next_text'          => '%title',
			'in_same_term'       => false,
			'excluded_terms'     => '',
			'taxonomy'           => 'category',
			'screen_reader_text' => __( 'Post navigation', 'skylink' ),
		);

		$navigation        = '';
		$direction_wp_name = skylink_get_nav_direction_wp_name( $type );
		$outer             = "<div class=\"nav-{$direction_wp_name}\">%link</div>";
		$nav_link_fct      = "get_{$direction_wp_name}_post_link";
		$navigation        = call_user_func( $nav_link_fct,
			$outer,
			$button_text,
			$args['in_same_term'],
			$args['excluded_terms'],
			$args['taxonomy']
		);

		// Only add markup if there's somewhere to navigate to.
		if ( $navigation ) {
			$navigation = _navigation_markup( $navigation, 'post-navigation',
				$args['screen_reader_text'] );
		}

		echo $navigation;
	}


	function skylink_post_nav_button( $atts = array() ) {
		$type = $atts['type'];
		$meta = $atts["{$type}_post"];

		$button_text = '<span class="meta-nav" aria-hidden="true">' . $meta . '</span> ' .
		               '<span class="post-title" title="%title">%title</span>';
		skylink_print_navigation_button( $type, $button_text );

	}


	function skylink_button_pagination( $args, $atts ) {
		$type          = $atts['type'];
		$nav_direction = skylink_get_nav_direction_wp_name( $type );
		$label         = $atts["{$type}_label"];
		$link          = call_user_func( "get_{$nav_direction}_posts_link", '<span>' . $label . '</span>' );
		?>
        <div class="navigation" role="navigation">
            <h2 class="screen-reader-text"><?php echo $args['screen_reader_text'] ?></h2>
            <div class="nav-links">
                <div class="<?php echo esc_attr( $type ); ?>-navigation"><?php echo $link; ?></div>
            </div>
        </div>
		<?php
	}

	function skylink_numbers_pagination( $args, $atts ) {
		$links = paginate_links( $args );
		$template
		       = '<div class="navigation" role="navigation">' .
		         '  <h2 class="screen-reader-text">' . $args["screen_reader_text"] . '</h2>' .
		         '  <div class="nav-links">' .
		         '      <div class="numbers-navigation">' . $links . '</div>' .
		         ' </div>' .
		         '</div>';
		echo $template;
	}


	function skylink_render_pagination( $pagination_type, $atts = array(), $args = array() ) {
		$args = wp_parse_args( $args, array(
			'before_page_number' => '<span class="meta-nav screen-reader-text">'
			                        . __( 'Page', 'skylink' )
			                        . ' </span>',
			'prev_text'          => '',
			'next_text'          => '',
			'prev_next'          => false,
			'screen_reader_text' => __( 'Posts navigation',
				'skylink' ),
		) );

		call_user_func( $pagination_type, $args, $atts );
	}


	function skylink_archive_nav_button( $attrs = array() ) {

		$atts = shortcode_atts(
			array(
				'type'       => 'next',
				'next_label' => '',
				'prev_label' => ''
			),
			$attrs
		);
		skylink_render_pagination( 'skylink_button_pagination', $atts );
	}


	function skylink_archive_pagination() {
		skylink_render_pagination( '\skylink_numbers_pagination' );
	}

	function skylink_render_page_comments() {
		if ( ! comments_open() || is_customize_preview() ) {
			return;
		}
		?>
        <div id="page-comments" class="page-comments">
            <div
                    class="h-section h-section-global-spacing d-flex align-items-lg-center align-items-md-center align-items-center">
                <div class="h-section-grid-container h-section-boxed-container">
                    <div class="gutters-row-md-2 gutters-row-0 position-relative">
                        <div class="h-px-lg-2 h-px-md-2 h-px-2 ">
							<?php echo skylink_post_comments() ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		<?php

	}

	function skylink_post_comments( $attrs = array() ) {
		// comments won't render without post//
		if ( is_customize_preview() ) {
			the_post();
		}

		$attrs = shortcode_atts(
			array(
				'none'        => __( 'No responses yet', 'skylink' ),
				'one'         => __( 'One response', 'skylink' ),
				'multiple'    => __( 'Responses', 'skylink' ),
				'avatar_size' => 32
			),
			$attrs
		);

		ob_start();


		add_filter( 'comments_template', 'skylink_post_comments_template' );
		if ( comments_open( get_the_ID() ) ) {
			comments_template();
		} else {
			return "";
		}
		$content = ob_get_clean();

		remove_filter( 'comments_template', 'skylink_post_comments_template' );

		echo $content;
	}

	function skylink_post_comment_form() {

	}

	function skylink_widget_area( $atts ) {

		if ( is_customize_preview() ) {
			global $wp_customize;
			$wp_customize->widgets->selective_refresh_init();
		}

		$atts = shortcode_atts(
			array(
				'id' => 'widget-1',
			),
			$atts
		);

		$id = "colibri-" . $atts['id'];
		$id = Hooks::prefixed_apply_filters( 'widget_area_id', $id );

		ob_start();
		dynamic_sidebar( $id );
		$content = ob_get_clean();
		echo $content;
	}

	function skylink_post_meta_time_url() {
		return '';
	}

	function skylink_has_multiple_pages() {
		global $wp_query;

		$adjacent_post = get_next_post();

		if ( empty( $adjacent_post ) ) {
			$adjacent_post = get_previous_post();
		}

		if ( is_single() ) {
			return ! empty( $adjacent_post );
		}

		return ( $wp_query->max_num_pages > 1 );
	}

	function skylink_output_sidebar_search_form( $form = '' ) {

		ob_start();

		get_template_part( 'template-parts/blog/searchform' );

		return ob_get_clean();
	}

	function skylink_post_comments_template( $form = '' ) {
		return 'template-parts/blog/comments.php';
	}

	function skylink_theme_print_footer_copyright() {
		?>
        <div class="h-global-transition-all">
            &copy; <?php echo date( 'Y' ); ?> <?php bloginfo( 'blogname' ); ?>.
			<?php printf( __( 'Built using WordPress and %s', 'skylink' ),
				'Skylink Theme'
			); ?> .
        </div>
		<?php
	}

	function skylink_footer_parallax_is_enabled() {
		$parallax = (bool) get_theme_mod( "footer_post.footer.props.useFooterParallax",
			Defaults::get( "footer_post.footer.props.useFooterParallax" ) );

		return ( $parallax == true ) ? 'true' : 'false';
	}

	function skylink_copyright() {
		?>
        <div class="h-global-transition-all">
            <span>&copy; <?php echo date( 'Y' ); ?> <?php bloginfo( 'blogname' ); ?></span>.
        </div>
		<?php
	}

	function skylink_print_offscreen_copyright() {
		echo "&copy; " . date( 'Y' );
	}

	function skylink_the_date( $format = 'F j, Y' ) {
		echo get_the_date( $format );
	}

	add_filter( 'get_search_form', "skylink_output_sidebar_search_form", 100 );


	function skylink_layout_wrapper( $atts ) {
		$atts = array_merge(
			array(
				"name" => "",
				"slug" => ""
			),
			$atts
		);

		$name = $atts['name'];

		?>
        <!-- layout_wrapper_output:<?php echo esc_attr( $name ); ?>-start -->
		<?php
		Hooks::prefixed_do_action( "layout_wrapper_output_{$name}", $atts );
		?>
        <!-- layout_wrapper_output:<?php echo esc_attr( $name ); ?>-end -->
		<?php
	}


	function skylink_layout_wrapper_output_tags_container( $atts ) {
		if ( has_tag() ) {
			View::partial( 'layout-wrapper-content', $atts['slug'] );
		}
	}


	function skylink_layout_wrapper_output_categories_container( $atts ) {
		if ( has_category() ) {
			View::partial( 'layout-wrapper-content', $atts['slug'] );
		}
	}


	function skylink_layout_wrapper_output_navigation_container( $atts ) {
		if ( skylink_has_multiple_pages() ) {
			View::partial( 'layout-wrapper-content', $atts['slug'] );
		}
	}

	Hooks::prefixed_add_action( "layout_wrapper_output_tags_container",
		'skylink_layout_wrapper_output_tags_container' );

	Hooks::prefixed_add_action( "layout_wrapper_output_categories_container",
		'skylink_layout_wrapper_output_categories_container' );

	Hooks::prefixed_add_action( "layout_wrapper_output_navigation_container",
		'skylink_layout_wrapper_output_navigation_container' );


