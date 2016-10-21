Template.passionsForm.rendered = function() {
	
}

Template.passionsForm.helpers({
	'fieldClicked': function() {
		return Session.get("sFieldClicked");
	},
	'getPassions': function() {
		sField = Session.get("field");
		return PassionTree.find( { field: sField } );
	}
})

Template.passionsForm.events({
	'submit form': function(event){
		event.preventDefault();
		
		var currentUserId = Meteor.userId();
		console.log(currentUserId);
		var passions_array = [];
		$("input[name='passions']:checked").each(function() {         
			passions_array.push($(this).val());
		})
		
		if (passions_array.length > 0){
			alert("Added passion(s): " + passions_array.join(", "));
			//Users.update({ _id: currentUserId }, 
			// { $addToSet: { user_passions: { $each: passions_array} } })
			for (var i=0; i < passions_array.length; i++){
				var p = passions_array[i];
				var docid = PassionTree.findOne({passion : p});
				PassionTree.update( {_id: docid._id}, {$addToSet: { user_ids: currentUserId }});
			}
		}
		else{ 
			alert("Come on. You must be passionate about something.");
		}
		
		console.log(passions_array);
	},
	'click a': function(event, template) {
		event.preventDefault();
		Session.set("selectedPassion", event.target.id);
		console.log(event.target.id);
	}
})