/**
 * @descript 声明全局类型
 * 解决ts模块引入时,提示模块未定义的异常: 只需新建"xx.d.ts",然后declare module '第三方类库名'
 */

/** pinia插件 */
// declare module "pinia-plugin-persistedstate";

/** js工具库 */
declare module "lodash";
