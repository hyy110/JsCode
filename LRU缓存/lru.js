var LRUCache = function(capacity) {
  this.cache = new Map();
  this.size = capacity;
};

LRUCache.prototype.get = function(key) {
  if (this.cache.has(key)) {
      val = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, val);
      return val;
  }
  return -1;
};  

LRUCache.prototype.put = function(key, value) {
  if (this.cache.has(key)) {
      this.cache.delete(key);
      this.cache.set(key, value);
  } else {
      this.cache.set(key, value);
  }

  if (this.cache.size > this.size) {
      this.cache.delete(this.cache.keys().next().value);
  }
};