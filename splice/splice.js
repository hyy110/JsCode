Array.prototype.splice = function (start, deleteCount, ...items) {
  start =
    start < 0 ? Math.max(this.length + start, 0) : Math.min(start, this.length);

  deleteCount = Math.min(Math.max(deleteCount, 0), this.length - start);

  const removed = this.slice(start, start + deleteCount);

  const tail = this.slice(start + deleteCount);
  this.length = start;
  this.push(...items, ...tail);

  return removed;
};
