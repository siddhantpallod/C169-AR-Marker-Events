AFRAME.registerComponent('marker-handler', {

    init: async function () {
        this.el.addEventListener('markerFound', () => {
            this.handleMarkerFound()
        })

         this.el.addEventListener('markerLost', () => {
            this.handleMarkerLost()
        })
    },

    handleMarkerFound: function(){
        var button = document.getElementById('button-div')

        button.style.display = 'flex'

        var ratingButton = document.getElementById('rating')
        var orderButton = document.getElementById('order')

        ratingButton.addEventListener('click', function(){
            swal({
                icon: 'warning',
                title: 'Rate The Dish',
                text: 'Work In Progress'
            })
        })

        orderButton.addEventListener('click', function(){
            swal({
                icon: 'success',
                title: 'Thanks For The Order',
                text: 'Your order will be served soon at your table'
            })
        })

    },

    handleMarkerLost: function(){
        var button = document.getElementById('button-div')

        button.style.display = 'none'
    }


});
