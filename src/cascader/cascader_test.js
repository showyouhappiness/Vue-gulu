import Vue from 'vue';
import plugin from "../plugin";
import Cascader from "./cascader";
import {removeListener} from "../click-outside";

Vue.component('g-cascader', Cascader)


Vue.use(plugin)

import db from '../../test/fixtures/db';

function ajax(parentId = 0) {
    return new Promise((success, fail) => {
        setTimeout(() => {
            let result = db.filter(item => item.parent_id === parentId);
            result.forEach(node => {
                node.isLeaf = db.filter(item => item.parent_id === node.id).length <= 0;
            });
            success(result);
        }, 300);
    });
}

new Vue({
    el: "#app",
    data: {
        selected: [],
        source: [],
    },
    created() {
        ajax(0).then(result => {
            this.source = result;
        });
    },
    destroyed() {
        removeListener();
        console.log('destroyed');

    },
    methods: {
        loadData({id}, updateSource) {
            ajax(id).then(result => {
                updateSource(result);
            });
        },
        onUpdateSource(result) {
        },
        onUpdateSelected(selected) {
        }
    }
});