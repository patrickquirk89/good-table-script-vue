import decimalType from '@/components/types/decimal'
import { expect } from 'chai'

describe('decimal type', () => {
  describe('format', () => {
    it('should format always with two decimals', () => {
      expect(decimalType.format('1')).equal('1.00')
    })

    it('should cut at two decimals', () => {
      expect(decimalType.format('3.14159265359')).equal('3.14')
    })
  })
})
