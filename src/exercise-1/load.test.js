import { load } from './load'

describe('Test Exercise 1', () => {
  describe('Test load function', () => {
    it('Should retun correct Array if input right text', () => {
      const input = 'key1=value1;key2=value2\nkeyA=valueA'
      const expected = [{
        key1: 'value1',
        key2: 'value2'
      }, {
        keyA: 'valueA'
      }]
  
      expect(load(input)).toEqual(expected)
    }),

    it('If input wrong format text, it will be return wrong Array', () => {
      const input = 'key1=value1;\nkey2=value2\nkeyA=valueA'
      const expected = [{
        key1: 'value1',
        key2: 'value2'
      }, {
        keyA: 'valueA'
      }]
  
      expect(load(input)).not.toBe(expected)
    })
  })

})