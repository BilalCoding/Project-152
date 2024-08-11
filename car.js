AFRAME.registerComponent("car", {
    schema: {
        message: {type: 'string', default: 'Car'}
    },
    init: function(){
        console.log("Car has loaded")
    }
})

AFRAME.registerComponent('change-camera-on-click', {
    schema: {
        clickCounter: {type: 'number', default: 0}
    },
    update: function(){
        window.addEventListener('click', (e)=>{
            this.data.clickCounter = this.data.clickCounter + 1
            if(this.data.clickCounter === 0){
                var rot = {x: 0, y: 0, z: 0}
                var pos = {x: 0, y: 1, z: 0}
            }
            if(this.data.clickCounter === 1){
                var rot = {x: 0, y: 45, z: 0}
                var pos = {x: 4, y: 1, z: -2}
            }
            if(this.data.clickCounter === 2){
                var rot = {x: 0, y: 90, z: 0}
                var pos = {x: 6, y: 1, z: -5}
            }
            if(this.data.clickCounter === 3){
                var rot = {x: 0, y: 135, z: 0}
                var pos = {x: 4, y: 1, z: -8}
            }
            if(this.data.clickCounter === 4){
                var rot = {x: 0, y: 180, z: 0}
                var pos = {x: 0, y: 1, z: -11}
            }
            if(this.data.clickCounter === 5){
                var rot = {x: 0, y: 225, z: 0}
                var pos = {x: -4, y: 1, z: -8}
            }
            if(this.data.clickCounter === 6){
                var rot = {x: 0, y: 270, z: 0}
                var pos = {x: -6, y: 1, z: -5}
            }
            if(this.data.clickCounter === 7){
                var rot = {x: 0, y: 315, z: 0}
                var pos = {x: -4, y: 1, z: -2}
            }
            if(this.data.clickCounter === 8){
                var rot = {x: -90, y: 0, z: -90}
                var pos = {x: 0, y: 5, z: -5}
                this.data.clickCounter = -1
            }
            this.el.setAttribute('rotation', rot)
            this.el.setAttribute('position', pos)
        })
    }
})