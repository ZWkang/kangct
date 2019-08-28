"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 可暂停的setTimeout任务
 * @param {Function} Execute 可执行函数
 * @param {Number} duration 延迟毫秒数
 */
function Timer(execute, duration) {
  this.duration = duration;
  this.execute = execute;
  this.start = Date.now();
  this.status = 0; // no start
}
Timer.prototype = {
  constructor: Timer,
  startGo: function startGo() {
    this.timeId = setTimeout(this.execute, this.duration);
    this.start = Date.now();
    this.status = 1; // starting
  },

  pause: function pause() {
    var now = Date.now();
    if (this.status === 2) {
      // stop
      return this;
    }
    if (this.start + this.duration < now) {
      return this;
    }
    this.timeId && clearTimeout(this.timeId);
    this.duration = this.duration - (now - this.start);
    this.status = 2;
    return this;
  },
  resume: function resume() {
    if (this.status !== 2) {
      return this;
    }
    this.timeId = setTimeout(this.execute, this.duration);
    this.start = Date.now();
    this.status = 1;
    return this;
  },
  stop: function stop() {
    // debugger
    this.status = 1;
    clearTimeout(this.timeId);
    this.duration = null;
    this.execute = null;
    this.start = null;
  }
};

exports.default = Timer;