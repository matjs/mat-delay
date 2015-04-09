function delay(opts) {
  opts = opts || {};
  opts.delay = opts.delay || 0;

  return function *opoa(next) {
    yield function(done) {
      setTimeout(done, opts.delay *1000);
    };
    yield next;
  };
}

module.exports = delay;