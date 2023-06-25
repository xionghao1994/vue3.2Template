/**
 * @author jiangtou
 * @description PINIA模块化配置
 * @time 20230422
 */
import "./type.d";
import { createPinia } from "pinia";

//  pinia插件-数据持久化
import PiniaPluginPersistedstate from "pinia-plugin-persistedstate";

const store = createPinia();
store.use(PiniaPluginPersistedstate);
export default store;
