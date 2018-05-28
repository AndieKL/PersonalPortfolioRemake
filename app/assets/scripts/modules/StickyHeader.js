import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
	constructor() {
		this.header = $('.header');
		this.headerTrigger = $('.hero');
		this.createHeadWaypoint();
		this.pageSections = $('.page-section');
		this.headerLinks = $('.header__navbar a')
		this.createPageSectionPoints();
		this.addSmoothScrolling();
	}

	addSmoothScrolling() {
		this.headerLinks.smoothScroll();
	}

	createHeadWaypoint() {
		var that = this;
		new Waypoint({
			element: this.headerTrigger[0],
			handler: function(direction) {
				if(direction == 'down'){
					that.header.addClass('header--dark');
				}
				else {
					that.header.removeClass('header--dark');
				}
			},
			offset: '5%'
		});
	}

	createPageSectionPoints() {
		var that = this;
		this.pageSections.each(function(){
			var currentPageSection = this;
			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if (direction == "down") {
						var headerLink = currentPageSection.getAttribute('data-matching-link');
						that.headerLinks.removeClass('is-current-link')
						$(headerLink).addClass('is-current-link');
					}
				},
				offset: "20%"
			});

			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if (direction == "up") {
						var headerLink = currentPageSection.getAttribute('data-matching-link');
						that.headerLinks.removeClass('is-current-link')
						$(headerLink).addClass('is-current-link');
					}
				},
				offset: "-40%"
			});
		});
	}
}

export default StickyHeader;