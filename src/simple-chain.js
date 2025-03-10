const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  links: [],
  getLength() {
    return this.links.length;
  },
  addLink(value) {
    this.links.push(value);
    return this;
  },
  removeLink(position) {
    console.log(this.links);
    if(typeof(position) != 'number' || position < 1 || position > this.links.length) {
      this.links = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.links = this.links.filter((element) => this.links.indexOf(element) != position - 1);
    return this;
  },
  reverseChain() {
    this.links.reverse();
    return this;
  },
  finishChain() {
    let result = this.links.map((element) => `( ${element} )`).join('~~');
    this.links = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
