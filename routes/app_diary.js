var express = require('express');
var router = express.Router();

const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'mirim2',
  database : 'diary'
});


connection.connect();

connection.query('SELECT * from diary', (error, rows, fields) => {
  if (error) throw error;
  console.log('User info is: ', rows);
});

connection.end();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/diary_list', function(req, res, next) {
	res.json([
			{diary_id:1, diary_day:'2020.09.22', title:'맛집 갔던 날', content:'오늘 친구랑 기분이 너무 좋아서 새로생긴 마라탕집에 가서 마라탕을 진탕 먹었다. 너무 행복하면서도 살찔까봐 걱정도 되었다. 하지만 맛있었으니 된 것 같다! 앞으로 다이어트는 내일부터 하면서 오늘은 마음것 먹을 것 이다!'},
			{diary_id:2, diary_day:'2021125', title:'행복했던 그날', content:'오늘은 날씨가 너무 좋아서 행복했다. 날씨가 좋으니 바람을 맞는것도 햇볓을 쬐는것도 너무 행복하다. 어제는 비가와서 날씨가 우울할 것 같았지만 오늘은 화창해서 나도 모르게 웃으면서 하루를 보냈다'},
			{diary_id:3, diary_day:'2020년 9월 2일', title:'화를 못 참았던 날', content:' 원래 화가 나면 조금은 마음을 삼키려고 생각을 했지만 매번 실패한다. 나는 화가 나면 상대가 싫어지는 경향이 있다. 하지만 감정에 휩쓸려 그 사람을 미워하게 되면 끝도 없이 미워질 것 같아 하루 빨리 이 버릇을 고치고 싶다.'},
			{diary_id:4, diary_day:'20201231', title:'꽃들이 날 반겨주던 날', content:''},
			{diary_id:5, diary_day:'20200713', title:'1cxvcxvd', content:'dsccvxvvcxvcxvcxvffddsfds'},
			{diary_id:6, diary_day:'2020년 4월 2일', title:'조순형 바보',content:' 백만세 개싫어 미어미어.'},
		]
			 
	)
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/diary_list/:diary_id', function(req, res, next) {
	res.json(
			{diary_id:1, diary_day:3, title:'1dd', content:'dsffddsfds'}
	);
});
  
module.exports = router;
