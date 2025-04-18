<?php
if ( post_password_required() ):
	return;
endif;
?>


<div class="post-comments">
        <h3 class="comments-title">
    	<span class="comments-number">
				<?php comments_number( __( 'No Responses', 'skylink' ), __( 'One Response', 'skylink' ),
					__( '% Responses', 'skylink' ) ); ?>
    	</span>
        </h3>

        <ol class="comment-list">
			<?php
			wp_list_comments( array(
				'avatar_size' => '32',
			) );
			?>
        </ol>

		<?php
		if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ):
			?>
            <div class="navigation">
                <div class="prev-posts">
					<?php previous_comments_link( __( '<i class="font-icon-post fa fa-angle-double-left"></i> Older Comments',
						'skylink' ) ); ?>
                </div>
                <div class="next-posts">
					<?php next_comments_link( __( 'Newer Comments <i class="font-icon-post fa fa-angle-double-right"></i>',
						'skylink' ) ); ?>
                </div>
            </div>
	<?php endif; ?>

	<?php
	if ( ! comments_open() && get_comments_number() && post_type_supports( get_post_type(), 'comments' ) ):
		?>
        <p class="no-comments"><?php esc_html_e( 'Comments are closed.', 'skylink' ); ?></p>
	<?php
	endif;
	?>

</div>
<!-- /post-comments -->

<div class="comments-form">
    <div class="comment-form">
		<?php comment_form(
			array(
				'class_submit' => 'button blue small',
			)
		);
		?>
    </div>
</div>


