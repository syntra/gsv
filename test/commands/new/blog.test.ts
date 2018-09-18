import {expect, test} from '@oclif/test'

describe('new:blog', () => {
  test
    .stdout()
    .command(['new:blog'])
    .it('runs hello', ctx => {
      expect(ctx.stdout).to.contain('hello world')
    })

  test
    .stdout()
    .command(['new:blog', '--name', 'jeff'])
    .it('runs hello --name jeff', ctx => {
      expect(ctx.stdout).to.contain('hello jeff')
    })
})
