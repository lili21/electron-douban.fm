/**
 * 普通的元素可以直接通过element.click()方法触发click事件
 * 但svg元素没有这个发放，只能降级，通过dispatchEvent来触发
 * 这里的event其实只有click事件。
 */
Element.prototype.trigger = function(event) {
  var evt = new MouseEvent(event, {
    bubbles: true
  });
  this.dispatchEvent(evt);
};


doubanfm$ = {
  getPlayer: function() {
    /**
     * douban.fm有两种播放器模式，
     * mini-player
     * fullplayer
     */
    const miniPlayer = document.querySelector('.mini-player');
    const fullPlayer = document.querySelector('.fullplayer');

    if (getComputedStyle(miniPlayer).opacity !== '0') {
      return miniPlayer;
    }
    if (getComputedStyle(fullPlayer).opacity !== '0') {
      return fullPlayer;
    }
  },
  getActionIcon: function(className) {
    return this.getPlayer().querySelector('.' + className);
  },
  nextSong: function() {
    this.getActionIcon('icon-skip').trigger('click');
  },
  playPause: function() {
    const playIcon = this.getActionIcon('icon-play');
    const pauseIcon = this.getActionIcon('icon-pause') || this.getActionIcon('icon-pause-mini');
    if (playIcon) {
      playIcon.trigger('click');
      return;
    }
    if (pauseIcon) {
      pauseIcon.trigger('click');
      return;
    }
  },
  like: function() {
    this.getActionIcon('icon-heart').trigger('click');
  },
  trash: function() {
    this.getActionIcon('icon-trash').trigger('click');
  }
};
