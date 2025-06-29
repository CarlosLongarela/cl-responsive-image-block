<?php
/**
 * Plugin Name: CL Responsive Image Block
 * Description: Bloque de imagen responsive con enlace y versión para móvil y escritorio.
 * Version: 1.0.1
 * Author: Carlos Longarela
 * Author URI: https://tabernawp.com/
 * License: GPL-2.0+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: cl-responsive-image-block
 * Domain Path: /languages
 *
 * @package CL_Responsive_Image_Block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function cl_register_responsive_image_block() {
	register_block_type( __DIR__ );
}
add_action( 'init', 'cl_register_responsive_image_block' );
