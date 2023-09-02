function render(vnode) {
  if (typeof vnode === "string") {
    return document.createTextNode(vnode);
  }

  const { tag, attrs, children } = vnode;
  const dom = document.createElement(tag);
  if (attrs) {
    Object.entries(attrs).forEach((item) => {
      dom.setAttribute(item[0], item[1]);
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
