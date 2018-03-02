$('.inp').on('keyup',function(){
	var value = $(this).val();
	$.ajax({
		type : 'GET',
		url : 'https://api.douban.com/v2/music/search',
		// url : 'http://localhost/douban2/data.txt',
		success :addList,
		data:'q='+value+'&count=7',
		dataType:'jsonp'
	})
})
function addList(data){
	// var data = JSON.parse(data);
	var value = data.musics;
	console.log(value)
	// console.log(data)
	var str = '';
	$('ul','.search-data').html('');
	$.each(value,function(index,ele){
		if(ele.author){
			str += '<li>\
						<a href="http://localhost:8000/douban2/itemPage.html?id='+ele.id+'">\
							<img src="'+ ele.image +'" alt="">\
							<div>\
								<span>'+ ele.title +'</span>\
								<p>'+ ele.author[0].name +'</p>\
							</div>\
						</a>\
					</li>'
		}else{
			str += '<li>\
						<a href="http://localhost:8000/douban2/itemPage.html?id='+ele.id+'/">\
							<img src="'+ ele.image +'" alt="">\
							<div>\
								<span>'+ ele.title +'</span>\
							</div>\
						</a>\
					</li>'
		}
	})
	$('ul','.search-data').append(str);
}
