mainVM = new Vue({
	el: '#app',
	data: {
		cargo: [],
		items: [{
			name: 'chips',
			weight: 1,
			price: 3,
			picture: 'https://tinyurl.com/y7ruskuh',
			imageHeight: '300px',
			imageWidth: '300px',
		},

		{
			name: 'tire',
			weight: 20,
			price: 100,
			picture: 'https://tinyurl.com/yb2kh3lt',
			imageHeight: '300px',
			imageWidth: '300px',
		},

		{
			name: 'baby goat',
			weight: 20,
			price: 50,
			picture: 'https://tinyurl.com/nbox9bb',
		},

		{
			name: 'driver',
			weight: 100,
			price: 100,
			picture: 'https://tinyurl.com/zgkvc48',
		},


		],
		validString: '',

	},
	computed: {
		returnPrice: function() {
			var totalPrice = 0
			for (var i = 0; i < this.cargo.length; i++) {
				totalPrice += this.cargo[i].price 
			}
			return totalPrice 
		},
		returnWeight: function() {
			var totalWeight = 0
			for (var i = 0; i < this.cargo.length; i++) {
				totalWeight += this.cargo[i].weight
			}
			return totalWeight
		}
	},
	methods: {
		addItem: function(event, i){
			event.preventDefault()
			this.cargo.push(this.items[i])
		},

		removeItem: function(event, i){
			event.preventDefault()
			this.cargo.shift(this.items[i])

		},

		validate: function(event) {
			event.preventDefault()
			$.post('/timeToValidate', {displayPrice: this.returnPrice, displayWeight: this.returnWeight}, (data) => {
				this.validString = data
			})
		}

	}
})