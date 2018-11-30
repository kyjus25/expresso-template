/*****************************************************************************************
 * constants.ts
 *
 * A place for global, world-readable constants. These constants are often declared in
 * webpack, using a plugin. These constants have to be re-declared in this file in order
 * to allow TypeScript to be able to interface with it. The constants declared here
 * can be used in any file in the application provided this file is imported.
 *****************************************************************************************/



/**VERSION constant holds the version number of the application. Webpack grabs the version
 * number from package.json using a plugin.
 **/

declare const VERSION: string;
const _VERSION = VERSION;
export {_VERSION as VERSION};
