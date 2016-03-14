doubanfm$ = {
  getPlayer: function() {
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
    this.getActionIcon('icon-skip').click();
  },
  playPause: function() {
    const playIcon = this.getActionIcon('icon-play');
    const pauseIcon = this.getActionIcon('icon-pause');
    if (playIcon) {
      playIcon.click();
      return;
    }
    /*
    if (pauseIcon) {
      pauseIcon.click();
      return;
    }*/
  },
  like: function() {
    this.getActionIcon('icon-heart').click();
  },
  trash: function() {
    this.getActionIcon('icon-trash').click();
  }
};
