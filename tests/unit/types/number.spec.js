import numberType from '@/components/types/number'

describe('number type', () => {
  describe('compare', () => {
    it('should return 1 if x > y for integers', () => {
      expect(numberType.compare('2', '1')).toEqual(1)
    })

    it('should return 1 if x > y for float', () => {
      expect(numberType.compare('1.2', '1.1')).toEqual(1)
    })

    it('should return 1 if x > y for float', () => {
      expect(numberType.compare('1.2', '1.1')).toEqual(1)
    })

    it('should return 1 if x > y for float', () => {
      expect(numberType.compare(1.2, 1.1)).toEqual(1)
    })
  })
  describe('filterPredicate', () => {
    it('should return true only in case of exact equality', () => {
      expect(numberType.filterPredicate('1.2', '1.2')).toEqual(true)
    })

    it('should return true only in case of numeric equality', () => {
      expect(numberType.filterPredicate('1.2', '1.20')).toEqual(true)
    })

    it('should return false else', () => {
      expect(numberType.filterPredicate('1.2', '12')).toEqual(false)
    })
  })
})
