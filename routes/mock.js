var express = require('express');
var router = express.Router();
var Mock = require('mockjs');
var Random = Mock.Random;

router.get('/getToBeDealtNumber', function(req,res,next){
    var data = Mock.mock({
        'type': '待处理',
        'number|1-100': 1
    })
    res.send({
        meta: {
            'message': 'success'
        },
        status: true,
        data: data
    })
})

router.get('/getTodayNewNumber', function(req,res,next){
    var data = Mock.mock({
        'type': '新上报',
        'number|1-100': 1
    })
    res.send({
        meta: {
            'message': 'success'
        },
        status: true,
        data: data
    })
})
Random.county();

router.get('/getEventDetailInfo', function(req,res,next){
    var data = Mock.mock({
        'list|20': [{
            "id": "b644135b84504e9b9e510c403b38fa24",
            "displayTag": "[龙西社区网格事件分拨中心]201806B20012",
            "processTag|0-7": 1,
            "place": '@county',
            "gispX|114-115.00-99": 114.00,
            "gispY|22-23.00-99": 22.00,
            "warnningLevel|1-3": 1,
            "housecode": "4403070070041700035",
            "content": "无营业执照"
        }]
    })
    res.send({
        meta: {
            'message': 'success'
        },
        status: true,
        data: data.list
    })
})

Random.extend({
    wkt: function(){
        return 'POINT' + '(' + (114 + Math.random()) + ',' + (22 + Math.random()) + ')'  
    }
})

Random.wkt();

router.get('/getVideoInfoByPosition', function(req,res,next){
    var data = Mock.mock({
        'list|20': [{
            "videoId|+1": 1,
            "geom": "@WKT",
            "href": "rtmp://live.hkstv.hk.lxdns.com/live/hks"
        }]
    })
    res.send({
        meta: {
            'message': 'success'
        },
        status: true,
        data: data.list
    })
})

router.get('/getPanoramaInfoByPosition', function(req,res,next){
    var data = Mock.mock({
        'list|20': [{
            "panoId|+1": 1,
            "geom": "@WKT",
            "href": "https://map.baidu.com/mobile/webapp/index/index/#index/streetview/pid=01005700001312061355067235N&from=indexMap"
        }]
    })
    res.send({
        meta: {
            'message': 'success'
        },
        status: true,
        data: data.list
    })
})

router.get('/getEventDetailInfoById', function(req,res,next){
    var data = Mock.mock({
        "id": "b644135b84504e9b9e510c403b38fa24",
        "displayTag": "[龙西社区网格事件分拨中心]201806B20012",
        "processTag|0-7": 1,
        "place": '@county',
        "gispX|114-115.00-99": 114.00,
        "gispY|22-23.00-99": 22.00,
        "warnningLevel|1-3": 1,
        "housecode": "4403070070041700035",
        "content": "无营业执照"
    })
    res.send({
        meta: {
            'message': 'success'
        },
        status: true,
        data: data.list
    })
})

router.get('/getEventDetailInfoByBuildingId', function(req,res,next){
    var data = Mock.mock({
        "buildingId": "4403070070090300023",
        "name": "龙城愉园建筑物",
        "population|0-255": 0,
        "numberOfEvent|0-255": 0
    })
    res.send({
        meta: {
            'message': 'success'
        },
        status: true,
        data: data.list
    })
})

router.get('/getVideoById', function(req,res,next){
    var data = Mock.mock({
        "videoId|1-10": 1,
        "href" : "rtmp://live.hkstv.hk.lxdns.com/live/hks"
    })
    res.send({
        meta: {
            'message': 'success'
        },
        status: true,
        data: data.list
    })
})

router.get('/getPanoramaById', function(req,res,next){
    var data = Mock.mock({
        "panoId|1-10": 1,
        "href" : "https://map.baidu.com/mobile/webapp/index/index/#index/streetview/pid=01005700001312061355067235N&from=indexMap"
    })
    res.send({
        meta: {
            'message': 'success'
        },
        status: true,
        data: data.list
    })
})

module.exports = router;