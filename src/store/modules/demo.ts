import { defineStore } from "pinia";
interface propsType {
  roles: number[];
  name: string;
}
const useStore = defineStore("app", {
  state: (): propsType => ({
    roles: [],
    name: "",
  }),
  getters: {},
  actions: {},
  // 开启缓存
  persist: true,
});
export default useStore;
