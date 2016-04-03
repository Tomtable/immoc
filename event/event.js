var EventEmitter = require('events').EventEmitter

var life = new EventEmitter()

// addEventListener
life.setMaxListeners(11)

function water(who) {
	console.log('给' + who + '倒水')
}

life.on('求安慰', water)
life.on('求安慰', function (who) {
	console.log('给' + who + '笑一个')
})
life.on('求安慰', function (who) {
	console.log('给' + who + '笑一个')
})
life.on('求安慰', function (who) {
	console.log('给' + who + '笑一个')
})
life.on('求安慰', function (who) {
	console.log('给' + who + '笑一个')
})
life.on('求安慰', function (who) {
	console.log('给' + who + '笑一个')
})
life.on('求安慰', function (who) {
	console.log('给' + who + '笑一个')
})
life.on('求安慰', function (who) {
	console.log('给' + who + '笑一个')
})
life.on('求安慰', function (who) {
	console.log('给' + who + '笑一个')
})
life.on('求安慰', function (who) {
	console.log('给' + who + '笑一个')
})
life.on('求溺爱', function (who) {
	console.log('给' + who + '笑一个')
})
life.removeListener('求安慰',water)
life.removeAllListeners()
console.log(life.listeners('求安慰').length)
console.log(EventEmitter.listenerCount(life,'求安慰'))
// var hasConfortListener = life.emit('求安慰','大爷')
// var hasLovedListener = life.emit('求溺爱','大爷')
// var hasPlayedListener = life.emit('求玩坏','大爷')