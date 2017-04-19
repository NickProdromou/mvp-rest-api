import chai from 'chai';
import assertArrays from 'chai-arrays';

global.expect = chai.expect;
global.should = chai.should();
global.assert = chai.assert;

chai.use(assertArrays);
