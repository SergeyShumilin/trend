var expect = require('chai').expect,
    trend = require('../index'),
    translate = trend.translate;

describe('#translate', function() {
  it('translates case 1', function() {
    return translate([1,2,3,4,5,6,7,8]).then(result => {
      expect(result).to.equal('1-8');
    });
  });

  it('translates case 2', function() {
    return translate([1,3,4,5,6,7,8]).then(result => {
      expect(result).to.equal('1,3-8');
    });
  });

  it('translates case 3', function() {
    return translate([1,3,4,5,6,7,8,10,11,12]).then(result => {
      expect(result).to.equal('1,3-8,10-12');
    });
  });

  it('translates case 4', function() {
    return translate([1,2,3]).then(result => {
      expect(result).to.equal('1-3');
    });
  });

  it('translates case 5', function() {
    return translate([1,2]).then(result => {
      expect(result).to.equal('1,2');
    });
  });

  it('translates case 6', function() {
    return translate([1,2,4]).then(result => {
      expect(result).to.equal('1,2,4');
    });
  });

  it('translates case 7', function() {
    return translate([1,2,4,5,6]).then(result => {
      expect(result).to.equal('1,2,4-6');
    });
  });

  it('translates case 8', function() {
    return translate([1,2,3,7,8,9,15,17,19,20,21]).then(result => {
      expect(result).to.equal('1-3,7-9,15,17,19-21');
    });
  });

  it('translates case 9', function() {
    return translate([1,2,3,4,5,6,100,1091,1999,2000,2001,2002]).then(result => {
      expect(result).to.equal('1-6,100,1091,1999-2002');
    });
  });

  it('translates case 10', function() {
    return translate([1]).then(result => {
      expect(result).to.equal('1')
    });
  });

  it('translates case 11', function() {
    return translate([1,3,5,7,9,11]).then(result => {
      expect(result).to.equal('1,3,5,7,9,11');
    });
  }); 
});