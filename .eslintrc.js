module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        'semi': [0],
        'indent': 'off',
        'vue/script-indent': [
            'error',
            4,
            {
                'baseIndent': 1
            }
        ],
        "comma-dangle": ["error", "never"], //是否允许对象中出现结尾逗号
        "padded-blocks": [2, "never"], //块内行首行尾是否空行
        "no-multiple-empty-lines": [2, {"max": 2}], //空行最多不能超过两行
        "no-extra-parens": 0, //不允许出现多余的括号
        'no-unused-vars': 'off',
        'no-console': 'off',
        'no-restricted-syntax': [
            'error',
            {
                'selector': 'CallExpression[callee.object.name=`console`][callee.property.name!=/^(log|warn|error|info|trace)$/]',
                'message': 'Unexpected property on console object was called'
            }
        ],
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/no-parsing-error': [
            2,
            {
                'x-invalid-end-tag': false
            }
        ]

    }
}

