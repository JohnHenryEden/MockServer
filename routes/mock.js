var express = require('express');
var router = express.Router();
var Mock = require('mockjs');
var Random = Mock.Random;

// 例子
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

module.exports = router;
