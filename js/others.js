/**
 * @authors     : qieguo
 * @date        : 2017/3/6 0006
 * @description :
 */

// 节流throttle，多次触发但只执行一部分，（恒时间间距执行）
function throttle(method, threshold, ctx) {
  let timer = null;
  return function () {
    const args = [].slice.call(arguments);
    if (!timer) {
      timer = setTimeout(function () {
        timer = null;
        method.apply(ctx, args);
      }, threshold);
    }
  }
}

// 防抖debounce, 多次触发但只执行一次，（时间差大于阈值才执行）
function debounce(method, threshold, ctx) {
  let timer = null;
  return function () {
    const args = [].slice.call(arguments);
    timer && clearTimeout(timer);
    timer = setTimeout(function () {
      method.apply(ctx, args);
    }, threshold);
  };
}


