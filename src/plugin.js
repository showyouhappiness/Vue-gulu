import Toast from "./toast";

function createToast({Vue, message, propsData}) {
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({propsData})
    toast.$slots.default = [message] // 把数据赋值给插槽的默认值
    toast.$mount()
    document.body.appendChild(toast.$el)  // 把元素放在body里
    return toast
}

let currentToast
export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message, toastOptions) {
            if (currentToast) {
                console.log('haha')
                currentToast.close()
            }
            currentToast = createToast({Vue, message, propsData: toastOptions})
        }
    }
}