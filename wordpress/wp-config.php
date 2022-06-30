<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'University' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'x]=W<jh=6e/mqpoB:m1(p=TJj;R[k#;d|?YG=7^)`$t+|#Jml;QQ?IGB@fIRTk& ' );
define( 'SECURE_AUTH_KEY',  'h[81]:j_Y/%c8~3@Q8VUf@~>[+;O2A)<Lz/T}OswU4@1gTD%vuuz#q[~:vnj65c$' );
define( 'LOGGED_IN_KEY',    '[%?sov[!+.`f5jjp&$a|~E8Nowi2zJ9NOh.e Q9uQX$u`+oGN`sV,$PF3 F?;i#`' );
define( 'NONCE_KEY',        '>$H~xF]Pb!BCa^xU`j<*=#H_ fH7btaa?QinQkC.y:K} WmI].n!2/t;.M3ARtIU' );
define( 'AUTH_SALT',        'q*+o8)t_v!XG0E6zex2-M3S)$^@5|7^P,M%-8.*_6tE()x7|q{L:Sop/T-M.$_WO' );
define( 'SECURE_AUTH_SALT', '&.edB;Lpr4]IHFyI4wC7 #&jh/qd9 E<&l#}I)=wB`r6`rE*WiR)0[KSr|]};&lF' );
define( 'LOGGED_IN_SALT',   'uEo  sKc,ZE);A95*aWBSJ$ f*Ry5d/NzU{+>hQDdzm5((O2V-syEHUz{;24)E][' );
define( 'NONCE_SALT',       '`BqFF`lKm?<6DMPV*4@>b!cT;(o]OLfL2n+1:)A{ht?)8IBK+B5k&4pa,Kz:ZaY,' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_university';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
