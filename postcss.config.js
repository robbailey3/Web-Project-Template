module.exports = {
  plugins: {
    autoprefixer: '',
    'postcss-sorting': {
      order: [
        'custom-properties',
        'dollar-variables',
        'declarations',
        'at-rules',
        'rules'
      ],
      'properties-order': [
        'position',
        'display',
        'top',
        'right',
        'bottom',
        'left',
        'alphabetical'
      ]
    }
  }
};
