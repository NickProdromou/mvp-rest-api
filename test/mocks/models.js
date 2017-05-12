const keyboard_shortcuts = {
  findAll() {
      return new Promise( (resolve, reject) => {
          resolve('A result of multiple');
      })
  },
    findOne() {
        return new Promise( (resolve, reject) => {
            resolve('A single value');
        })
    },
    getColumns() {
        return this.attributes;
    },
    attributes: ['an', 'array', 'of', 'columns']
};

const comments = {
    findAll() {
        return new Promise( (resolve, reject) => {
            resolve('A result of multiple');
        })
    },
    findOne() {
        return new Promise( (resolve, reject) => {
            resolve('A single value');
        })
    },
    getColumns() {
        return this.attributes;
    },
    attributes: ['an', 'array', 'of', 'columns']
};

const programs = {
    findAll() {
        return new Promise( (resolve, reject) => {
            resolve('A result of multiple');
        })
    },
    findOne() {
        return new Promise( (resolve, reject) => {
            resolve('A single value');
        })
    },
    getColumns() {
        return this.attributes;
    },
    attributes: ['an', 'array', 'of', 'columns']
};



export { keyboard_shortcuts, programs, comments };
