    var rule = {
        title: '酷影4k', // csp_AppYsV2
        host: 'http://svip.realdou.cn:9526/api.php/app',
        hostJs: 'print(HOST);let html=request(HOST,{headers:{"User-Agent":"Dart/3.0 (dart:io)"}});let src = JSON.parse(html).domain;print(src);HOST=src',
        url: '/api.php/app/video?tid=fyclassfyfilter&limit=20&pg=fypage',
        //     http://ym.dytt996.com:3/api.php/app/video?tid=20&class=&area=&lang=&year=&limit=18&pg=1
        filter_url: '&class={{fl.class}}&area={{fl.area}}&lang={{fl.lang}}&year={{fl.year}}',

        detailUrl: '/api.php/app/video_detail?id=fyid',
        searchUrl: '/api.php/app/search?text=**&pg=fypage',
        searchable: 2,
        quickSearch: 0,
        filterable: 1, //是否启用分类筛选,
        headers: {
            'User-Agent': 'Dart/2.14 (dart:io)'
        },
        timeout: 5000,
        class_name: '电影&电视剧&动漫&综艺&儿童', // 分类筛选 /api.php/app/nav
        class_url: '1&2&4&3&5',
        play_parse: true,
        lazy:'js:if(/m3u8|mp4/.test(input)){input}else{let purl=request("http://jx.realdou.cn/home/api?type=ys&uid=1308131&key=aefgjklstzABDFQU78&url="+input);input={jx:0,url:JSON.parse(purl).url,parse:0}}',
        limit: 6,
        推荐: 'json:list[0].vlist;*;*;*;*',
        一级: 'json:list;vod_name;vod_pic;vod_remarks||vod_score;vod_id',
        二级:'*',搜索:'js:let d=[];let html=request(input);let list=JSON.parse(html).sun;for(let j=1;j<=list;j++){let t=JSON.parse(request(MY_URL+j));d.push({title:t.name,desc:t.author,img:t.img,url:t.video})}setResult(d)',}