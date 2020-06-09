module.exports = {
  name: 'generate:page',
  alias: 'cp',
  description: 'Create new component inside src/pages',
  run: async toolbox => {
    const { parameters, createComponent, strings } = toolbox

    const name = strings.pascalCase(parameters.string)

    await createComponent('src/pages', name)
  }
}