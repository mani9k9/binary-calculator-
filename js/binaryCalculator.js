const BinaryCalCulator = {
  data: {
    result: ''
  },
  init() {
    this.createElements()
    this.cacheDOM()
    this.bindEvents()
    this.render()
  },
  createElements() {
    this.addElement('div', 'res')
    this.addElement('div', 'btns')
    this.addElement('button', 'btn0', 'btns', '0')
    this.addElement('button', 'btn1', 'btns', '1')
    this.addElement('button', 'btnClr', 'btns', 'C')
    this.addElement('button', 'btnEql', 'btns', '=')
    this.addElement('button', 'btnSum', 'btns', '+')
    this.addElement('button', 'btnSub', 'btns', '-')
    this.addElement('button', 'btnMul', 'btns', '*')
    this.addElement('button', 'btnDiv', 'btns', '/')
  },
  cacheDOM() {
    this.res = document.getElementById('res')
    this.btn0 = document.getElementById('btn0')
    this.btn1 = document.getElementById('btn1')
    this.btnClr = document.getElementById('btnClr')
    this.btnEql = document.getElementById('btnEql')
    this.btnSum = document.getElementById('btnSum')
    this.btnSub = document.getElementById('btnSub')
    this.btnMul = document.getElementById('btnMul')
    this.btnDiv = document.getElementById('btnDiv')
  },
  bindEvents() {
    this.btnClr.addEventListener('click', this.clear.bind(this))
    this.btn0.addEventListener('click', this.displayBinary.bind(this, 0))
    this.btn1.addEventListener('click', this.displayBinary.bind(this, 1))
    this.btnEql.addEventListener('click', this.calculate.bind(this))
    this.btnSum.addEventListener('click', this.displayOperation.bind(this, '+'))
    this.btnSub.addEventListener('click', this.displayOperation.bind(this, '-'))
    this.btnMul.addEventListener('click', this.displayOperation.bind(this, '*'))
    this.btnDiv.addEventListener('click', this.displayOperation.bind(this, '/'))
  },
  render() {
    this.res.innerHTML = this.data.result
  },
  addElement(tagName, id, parent, text) {
    let element = document.createElement(tagName)
    element.id = id
    element.innerHTML = text || ''
    if (parent) document.getElementById(parent).append(element)
    else document.body.append(element)
  },
  clear() {
    this.data.result = ''
    this.render()
  },
  displayBinary (binary) {
    this.data.result += binary
    this.render()
  },
  displayOperation(operator) {
    let hasOperation = this.data.result.match(/[\+\-\*\/]/)
    if (this.data.result !== '' && !hasOperation) {
      this.data.result += operator
      this.render()
    }
  },
  calculate() {
    let hasOperation = this.data.result.match(/[\+\-\*\/]/)
    if (this.data.result !== '' && hasOperation) {
      let numbers = this.data.result.split(/[\+\-\*\/]/)
      let operator = this.data.result.match(/[\+\-\*\/]/)[0]
      let digits = numbers.map(number => parseInt(number, 2))
      let equals
      switch (operator) {
        case '+':
          equals = digits[0] + digits[1]
          break;
        case '-':
          equals = digits[0] - digits[1]
          break;
        case '*':
          equals = digits[0] * digits[1]
          break;
        case '/':
          equals = digits[0] / digits[1]
          break;
      }
      this.data.result = equals.toString(2)
      this.render()
    }
  }
}

BinaryCalCulator.init()