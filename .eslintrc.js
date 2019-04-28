module.exports = {
    root: true,
    extends: ['airbnb', 'prettier', 'prettier/react'],
    parser: 'babel-eslint',
    env: {
      browser: true,
      jest: true,
    },
    plugins: ['react-hooks', 'react', 'import'],
    rules: {
      // 文件扩展名
      'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
      // 禁用某些props types
      'react/forbid-prop-types': 'off',
      // 防止react缺少prop types
    //   'react/prop-types': 'off',
      // 强制确保有default-props
      'react/require-default-props': 'off',
      // 强制确保组件方法的顺序
      'react/sort-comp': 'off',
      // 强制统一使用结构赋值
      'react/destructuring-assignment': 'off',
      // 确保组件不使用propTypes属性
      'react/forbid-foreign-prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      // 优先默认的导出
      'import/prefer-default-export': 'off',
      // 禁用无用的package
      'import/no-extraneous-dependencies': 'off',
      // 使用空格两个作为缩进
      'indent': ['warn', 2],
      'no-plusplus': 'off',
      'no-return-assign': 'off',
      'no-param-reassign': 'off',
      'no-nested-ternary': 'off',
      'no-shadow': 'off',
      'default-case': 'off',
      // 无下划线
      'no-underscore-dangle': ['off'],
    },
  }