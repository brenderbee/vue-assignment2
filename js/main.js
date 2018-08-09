new Vue({
	el: '#exercise',
	data: {
		value: ''
	},
	methods: {
		alertMe: function() {
			alert('alert');
		},
		onKeyDown: function(event) {
			this.value = event.target.value;
		}
	}
});
