const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/grid/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('存在.', () => {
        expect(Col).to.be.ok
    })

    it('接收span属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                span: 1,
            }
        }).$mount(div)
        expect(vm.$el.classList.contains('col-1')).to.eq(true)
        div.remove()
        vm.$destroy()
    });

    it('接收offset属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                offset: 1,
            }
        }).$mount(div)
        expect(vm.$el.classList.contains('offset-1')).to.eq(true)
        div.remove()
        vm.$destroy()
    });

    it('接收pc属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                pc: {span: 1, offset: 2},
            }
        }).$mount(div)
        expect(vm.$el.classList.contains('col-pc-1')).to.eq(true)
        expect(vm.$el.classList.contains('offset-pc-2')).to.eq(true)
        div.remove()
        vm.$destroy()
    });
})