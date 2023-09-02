
  
  function transform(str) {
      let res = {};
      let i = 0;
      let stk = [];
      stk.push({value: '', children: []})
      while (i < str.length) {
          if (str[i] === '[') {
              let node = {value: '', children: []};
              let top = stk.peek();
              top.children.push(node);
          } else if (str[i] === ']') {
              stk.pop();
          } else {
              let top = stk.peek();
              top.value += str[i];
          }
          i ++;
      }
  }

'a[b]' => {value: a, children: [{. value: 'b', children: [] }] }

'a[b1][b2]' => {value: a, children: [{. value: 'b1', children: [] }, {. value: 'b2', children: [] }] }

'a[b[c]]' => {value: a, children: [{. value: 'b', children: [{. value: 'c', children: [] }] }] }