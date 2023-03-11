import { generateRowProps } from '../components/List';

describe('Functions inside the List component', () => {

  describe('generateRowProps', () => {
    test('Multiples of three must have the defined text, the rest have their position in the list', () => {
      const result = generateRowProps(10, [{number: 3, text: 'Falabella'}]);

      expect(result[1 - 1].text).toBe('1');
      expect(result[2 - 1].text).toBe('2');
      expect(result[3 - 1].text).toBe('Falabella');
      expect(result[4 - 1].text).toBe('4');
      expect(result[5 - 1].text).toBe('5');
      expect(result[6 - 1].text).toBe('Falabella');
      expect(result[7 - 1].text).toBe('7');
      expect(result[8 - 1].text).toBe('8');
      expect(result[9 - 1].text).toBe('Falabella');
      expect(result[10 - 1].text).toBe('10');
    });
    
    test('If there is a mapper that is multiple of another, the last one of the list has priority', () => {
      const result = generateRowProps(100, [{number: 3, text: 'Falabella'}, {number: 3 * 5, text: 'Marketplace'}]);

      expect(result[15 - 1].text).toBe('Marketplace');
      expect(result[30 - 1].text).toBe('Marketplace');
      expect(result[45 - 1].text).toBe('Marketplace');
      expect(result[60 - 1].text).toBe('Marketplace');
      expect(result[75 - 1].text).toBe('Marketplace');
      expect(result[90 - 1].text).toBe('Marketplace');
    });
  });

});
