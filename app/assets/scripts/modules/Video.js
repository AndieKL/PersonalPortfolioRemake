import $ from 'jquery'; 

class VideoPop {
	constructor() {
		this.openVideoButton = $('.open-video');
		this.video = $('.video');
		this.closeVideoButton = $('.video__close');
		this.events();
	}

	events() {
		this.openVideoButton.click(this.openVideo.bind(this));
		this.closeVideoButton.click(this.closeVideo.bind(this));
		$(document).keyup(this.keyPressHandler.bind(this));
	}

	keyPressHandler(e) {
		if (e.keyCode == 27) {
			this.closeVideo();
		}
	}

	openVideo() {
		this.video.addClass('video--is-visible');
		return false;
	}

	closeVideo() {
		this.video.removeClass('video--is-visible');
	}
}

export default VideoPop;