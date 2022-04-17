module.exports = {
    base: "/Vue-gulu/",
    title: '轱辘UI',
    description: '一个好用的UI框架',
    themeConfig: {
        sidebar: [
            {
                title: '入门',
                collapsable: false,
                children: [
                    '/install/',
                    '/get-started/',
                ]
            },
            {
                title: '组件',
                children: [
                    '/components/button',
                    '/components/grid',
                    '/components/input',
                    '/components/layout',
                    '/components/popover',
                    '/components/tabs',
                    '/components/toast',
                    '/components/slides',
                    '/components/cascader',
                    '/components/nav',
                    '/components/pager',
                    '/components/sticky',
                    '/components/table',
                ],
            }

        ]
    }
}
