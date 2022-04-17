import Vue from 'vue';
// import Button from './button/button';
// import Icon from './icon';
// import ButtonGroup from './button/button-group';
// import Input from './input';
// import Row from './grid/row';
// import Col from './grid/col';
// import Layout from "./layout/layout";
// import Header from "./layout/header";
// import Content from "./layout/content";
// import Sider from "./layout/sider";
// import Footer from "./layout/footer";
// import Toast from "./toast";
// import plugin from "./plugin";
// import Tabs from "./tabs/tabs";
// import TabsHead from "./tabs/tabs-head";
// import TabsBody from "./tabs/tabs-body";
// import TabsItem from "./tabs/tabs-item";
// import TabsPane from "./tabs/tabs-pane";
// import Popover from "./popover";
// import Collapse from "./collapse/collapse";
// import CollapseItem from "./collapse/collapse-item";
// import Cascader from "./cascader/cascader";
// import Slides from "./slides/slides";
// import SlidesItem from "./slides/slides-item";
// import Nav from "./nav/nav";
// import NavItem from "./nav/nav-item";
// import SubNav from "./nav/sub-nav";
// import Pager from "./pager";
// import Sticky from "./sticky";
import Table from './table/table';

// Vue.component('g-button', Button)
// Vue.component('g-icon', Icon)
// Vue.component('g-button-group', ButtonGroup)
// Vue.component('g-input', Input)
// Vue.component('g-col', Col)
// Vue.component('g-row', Row)
// Vue.component('g-layout', Layout)
// Vue.component('g-header', Header)
// Vue.component('g-content', Content)
// Vue.component('g-sider', Sider)
// Vue.component('g-footer', Footer)
// Vue.component('g-toast', Toast)
// Vue.component('g-tabs', Tabs)
// Vue.component('g-tabs-head', TabsHead)
// Vue.component('g-tabs-body', TabsBody)
// Vue.component('g-tabs-item', TabsItem)
// Vue.component('g-tabs-pane', TabsPane)
// Vue.component('g-popover', Popover)
// Vue.component('g-collapse', Collapse)
// Vue.component('g-collapse-item', CollapseItem)
// Vue.component('g-cascader', Cascader)
// Vue.component('g-slides', Slides)
// Vue.component('g-slides-item', SlidesItem)
// Vue.component('g-nav', Nav)
// Vue.component('g-nav-item', NavItem)
// Vue.component('g-sub-nav', SubNav)
// Vue.component('g-pager', Pager)
// Vue.component('g-sticky', Sticky)
Vue.component('g-table', Table)

// Vue.use(plugin)

new Vue({
    el: "#app",
    data() {
        return {
            selected: [],
            columns: [
                {
                    text: '姓名',
                    field: 'name',
                    width: 100
                },
                {
                    text: '分数',
                    field: 'score'
                }
            ],
            orderBy: {  // 排序  只能确定是否排序，并不知道是升序还是降序
                score: 'asc'
            },
            loading: false,
            dataSource: [
                {
                    id: 1,
                    name: '张三',
                    score: 20
                },
                {
                    id: 2,
                    name: '李四',
                    score: 30
                },
                {
                    id: 3,
                    name: '王五',
                    score: 40
                },
                {
                    id: 4,
                    name: '赵六',
                    score: 50
                },
                {
                    id: 5,
                    name: '田七',
                    score: 60
                }
                ,
                {
                    id: 6,
                    name: '陈八',
                    score: 70
                },
                {
                    id: 7,
                    name: '孙九',
                    score: 80
                },
                {
                    id: 8,
                    name: '周十',
                    score: 90
                },

            ]
        }
    },
    methods: {
        edit(item) {
            alert(item.name)
        },
        view(item) {
            alert(item.name)
        },
        requestData() {
            this.loading = true;
            setTimeout(() => {
                this.dataSource = this.dataSource.sort((a, b) => a.score - b.score)
                this.loading = false;
            }, 3000)
        }
    }
});