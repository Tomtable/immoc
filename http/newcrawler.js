var http = require('http')
var cheerio = require('cheerio')
var url = 'http://www.immoc.com/learn/348'

function printCourseInfo (course) {
	course.forEach(function (item) {
		var chapterTitle = item.chapterTitle
		console.log(chapterTitle + '\n')
	
		item.videos.forEach(function (video) {
			console.log('   [' + video.id + ']  ' + video.title + '\n')
		})
	})
}


function filterChapters (html) {
	var $ = cheerio.load(html)
	var chapters = $('.chapter')
	console.log(chapters)
	// [{
	// 	chapterTitle: '',
	// 	videos: [
	// 		title = '',
	// 		id = ''
	// 	]
	// }]

	var courseData = []
	chapters.each(function (item) {
		var chapter = $(this)
		var chapterTitle = chapter.find('strong').text()
		var videos = chapter.find('.video').children('li')
		chapterData = {
			chapterTitle: chapterTitle,
			videos: []
		}
		videos.each(function (item) {
			var video = $(this).find('.studyvideo')
			var videoTitle = video.text()
			var id = video.attr('href').split('video/')[1]
			chapterData.videos.push({
			title: videoTitle,
			id: id,
			})
		})	

		courseData.push(chapterData)
	})
	console.log(courseData)
	return courseData
}

http.get(url, function (res) {
	var html = ''

	res.on('data', function (data) {
		html += data
	})

	res.on('end', function  () {
		// var courseData = filterChapters(html)
		console.log(html)

		// printCourseInfo(courseData)
	})
}).on('error', function  () {
	console.log('获取网页失败！')
})