/*!
 * eslint-config-charlint <https://github.com/tunnckoCore/eslint-config-charlint>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (https://i.am.charlike.online)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

const test = require('mukla')
const eslint = require('eslint')
const config = require('./index')

test('eslint-config-charlint', (done) => {
  test.strictEqual(typeof config, 'object')
  test.strictEqual(typeof config.rules, 'object')
  test.strictEqual(typeof config.plugins, 'object')
  test.deepStrictEqual(config.extends, ['standard', 'standard-jsx'])
  done()
})

test('load config in eslint to validate all rule syntax is correct', (done) => {
  const cli = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: 'eslintrc.json'
  })

  const code = 'var foo = (a, b, c, d) => 123'
  const res = cli.executeOnText(code)
  test.strictEqual(res.results[0].messages[1].ruleId, 'max-params')
  done()
})
