function render(vnode) {
  if (typeof vnode === "string") {
    return document.createTextNode(vnode);
  }

  const { tag, attrs, children } = vnode;
  const dom = document.createElement(tag);
  if (attrs) {
    Object.keys(attrs).forEach((item, index) => {
      dom.setAttribute(index, item);
    });
  }

  children.forEach((child) => dom.appendChild(render(child)));
  return dom;
}

const vnode = {
  tag: "DIV",
  attrs: {
    id: "app",
  },
  children: [
    {
      tag: "SPAN",
      children: [{ tag: "A", children: [] }],
    },
    {
      tag: "SPAN",
      children: [
        { tag: "A", children: [] },
        { tag: "A", children: [] },
      ],
    },
  ],
};

console.log(render(vnode));
