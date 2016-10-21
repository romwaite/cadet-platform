Template.dashboard.events({
	'click .stem-img': function() {
		$(".creative").fadeOut("slow");
		$(".publicenterprise").fadeOut("slow");
		$(".show-all").removeClass('hidden');
		$(".show-all").fadeIn("slow");
		Session.set("sFieldClicked", true);
		Session.set("field", "STEM");
	},
	'click .creative-img': function() {
		$(".stem").fadeOut("slow");
		$(".publicenterprise").fadeOut("slow");
		$(".show-all").removeClass('hidden');
		$(".show-all").fadeIn("slow");
		Session.set("sFieldClicked", true);
		Session.set("field", "Creative");
	},
	'click .publicenterprise-img': function() {
		$(".stem").fadeOut("slow");
		$(".creative").fadeOut("slow");
		$(".show-all").removeClass('hidden');
		$(".show-all").fadeIn("slow");
		Session.set("sFieldClicked", true);
		Session.set("field", "Public Enterprise");
	},
	'click .show-all': function() {
		$(".stem").fadeIn("slow");
		$(".creative").fadeIn("slow");
		$(".publicenterprise").fadeIn("slow");
		$(".show-all").addClass('hidden');
		Session.set("sFieldClicked", false);
		Session.set("field", "");
	}
})