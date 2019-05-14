import { store } from './store'

describe('Test Exercise 1', () => {
  describe('Test store function', () => {
    it('Should retun correct text if input right Array', () => {
        const input = [{
            key1: 'value1',
            key2: 'value2'
            }, 
            {
            keyA: 'valueA'
            }]
        const expected = 'key1=value1;key2=value2\nkeyA=valueA'
        expect(store(input)).toEqual(expected)
    }),

    it('If input wrong Array, it will be return wrong text', () => {
        const input = [{
            key1: 'value1',
            key3: 'value3'
            }, 
            {
            keyA: 'valueA'
            }]
        const expected = 'key1=value1;key2=value2\nkeyA=valueA'
        expect(store(input)).not.toBe(expected)
    }),

    it('If input right Array, it will be return right text', () => {
        const input = [{
            key1: 'value1',
            key3: 'value3'
            }, 
            {
            keyA: 'valueA'
            }]
        const expected = 'key1=value1;key3=value3\nkeyA=valueA'
        expect(store(input)).toEqual(expected)
    })
  })

})