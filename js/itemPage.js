var id = location.search.slice(1).split('=')[1];
$.ajax({
	type : 'GET',
	url : 'https://api.douban.com/v2/music/' + id,
	success : show,
	dataType : 'jsonp'
})
function show(data){
	var str = '';
	str += '<strong class="song-title">'+data.title+'</strong>\
		<div class="song">\
			<div class="song-content">\
				<div class = "song-list">\
					<img src="'+data.image+'" alt="">\
					<ul>\
						<li>表演者：<em><a href="#">'+data.attrs.singer[0]+'</a></em></li>\
						<li>流派：<span>民谣</span></li>\
						<li>专辑类型：<span>'+data.attrs.version[0]+'</span></li>\
						<li>介质：<span>'+data.attrs.media[0]+'</span></li>\
						<li>发行时间：<span>'+data.attrs.pubdate[0]+'</span></li>\
						<li>出版者:<span>'+data.attrs.publisher[0]+'</span></li>\
					</ul>\
					<div class = "a">\
						<a href="#">听相似歌曲</a>\
					</div>\
				</div>\
				<div class="song-mark">\
					<p>豆瓣评分</p>\
					<span class = "mark-num">'+data.rating.average+'</span>\
					<div class="star">\
						<div class="star-img">\
						</div>\
						<span class = "star-people">'+data.rating.numRaters+'人评价</span>\
					</div>\
					<div class="star-list">\
						<ul>\
							<li>5星 52.9%</li>\
							<li>4星 28.6%</li>\
							<li>3星 12.3%</li>\
							<li>2星 3.4%</li>\
							<li>1星 2.8%</li>\
						</ul>\
					</div>\
				</div>\
			</div>\
		</div>';
	$('.add').append(str)
}
