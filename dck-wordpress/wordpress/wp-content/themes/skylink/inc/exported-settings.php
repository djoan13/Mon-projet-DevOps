<?php

return array(
	'header_front_page' =>
		array(
			'navigation' =>
				array(
					'style' =>
						array(
							'background' =>
								array(
									'color' => 'transparent',
								),
							'padding'    =>
								array(
									'top' =>
										array(
											'value' => '20',
										),
								),
						),
					'props' =>
						array(
							'showTopBar' => false,
							'sticky'     => true,
							'overlap'    => true,
							'width'      => 'boxed',
							'layoutType' => 'logo-spacing-menu',
						),
				),
			'hero'       =>
				array(
					'props' =>
						array(
							'heroSection' =>
								array(
									'layout' => 'textWithMediaOnRight',
								),
						),
					'style' =>
						array(
							'padding'         =>
								array(
									'top'    =>
										array(
											'unit' => 'px',
										),
									'bottom' =>
										array(
											'unit' => 'px',
										),
								),
							'separatorBottom' =>
								array(
									'height' =>
										array(
											'unit'  => 'px',
											'value' => 100,
										),
									'type'   => 'triangle-asymmetrical',
									'color'  => 'white',
								),
							'background'      =>
								array(
									'image'   =>
										array(
											0 =>
												array(
													'source'     =>
														array(
															'gradient' =>
																array(
																	'steps' =>
																		array(
																			0 =>
																				array(
																					'color' => '#b721ff',
																				),
																			1 =>
																				array(
																					'color'    => '#21d4fd',
																					'position' => '100',
																				),
																		),
																),
														),
													'attachment' => 'scroll',
													'position'   =>
														array(
															'x' => 52.24647759569451,
														),
													'repeat'     => 'no-repeat',
													'size'       => 'cover',
												),
										),
									'type'    => 'image',
									'overlay' =>
										array(
											'shape'    =>
												array(
													'value' => 'none',
												),
											'enabled'  => true,
											'type'     => 'gradient',
											'gradient' =>
												array(
													'angle' => '90',
													'steps' =>
														array(
															0 =>
																array(
																	'color'    => '#F0F1EE',
																	'position' => 60,
																),
															1 =>
																array(
																	'color'    => '#F0F1EE7F',
																	'position' => 33,
																),
														),
													'name'  => 'october_silence',
												),
										),
								),
						),
				),
		),
);
