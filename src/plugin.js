import Toast from "./toast";

export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message, toastOptions) {
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor({
                propsData: {
                    closeButton: toastOptions.closeButton
                }
            })
            toast.$slots.default = [message] // 把数据赋值给插槽的默认值
            toast.$mount()
            document.body.appendChild(toast.$el)  // 把元素放在body里
        }
    }
}