var express = require('express');
var router = express.Router();



const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'mirinaediary',
  password : '2oJfkNYVOh2FEN3k',
  database : 'mirinaediary'
});

/*

	res.json([
			{diary_id:1, diary_day:'2020.09.22', title:'내 생일', content:'오늘은 내 생일이다. 요즘에 너무 바빠서 내 생일도 잊고 있었는데 친구들이 서프라이즈 파티를 준비했다. 아침마다 아리야에게 오늘의 운세를 물어보는데 맨 처음 멘트가‘만족스러운 하루가 기대됩니다.’였다. 그래서 오늘 내내 기분이 좋았는데 친구들이 내 생일을 축하해 줘서 더 만족스러운 하루가 된 것 같다.\n처음에는 너무 놀라고 고마워서 눈물이 났다. 애들이랑 사진을 한500장 정도 찍은 거 같은데 ㅋㅋㅋㅋ 꼭 인화해서 방 벽에 붙여놔야지. 생일 파티가 끝나고 친구들이랑 집에서 영화를 봤다. 이런 친구들이 없었다면 이번 생일은 미역국도 생일 케이크도 없이 그냥 지나갔을 텐데.. 잊지 않고 챙겨준 친구들의 생일에 내가 느낀 감동을 배로 전해주고 싶다.'},
			{diary_id:2, diary_day:'2020.11.25', title:'행복했던 그날', content:'오늘은 날씨가 너무 좋아서 행복했다. 날씨가 좋으니 바람을 맞는것도 햇볓을 쬐는것도 너무 행복하다. 어제는 비가와서 날씨가 우울할 것 같았지만 오늘은 화창해서 나도 모르게 웃으면서 하루를 보냈다, 그리고 오늘 우리 방탄오빠들이 노래를 다른 버전으로 올려줬다!! 너무 행복하다. 오늘 잠은 자기 글렀다. 너무 행복해서 잠이 안온다'},
			{diary_id:3, diary_day:'2020년 9월 2일', title:'화를 못 참았던 날', content:' 원래 화가 나면 조금은 마음을 삼키려고 생각을 했지만 매번 실패한다. 나는 화가 나면 상대가 싫어지는 경향이 있다. 하지만 감정에 휩쓸려 그 사람을 미워하게 되면 끝도 없이 미워질 것 같아 하루 빨리 이 버릇을 고치고 싶다.'},
			{diary_id:4, diary_day:'2020.12.31', title:'꽃들이 날 반겨주던 날', content:'오늘 아마스빈 먹았다. 오랜만에 먹으니까 진짜 맛있고 옛날 추억도 생각났다. 지금 이 상황이 나는 너무 싫고 화가 난다. 하지만 나는 오늘도 이 환경에 적응해 나간다.'},
			{diary_id:5, diary_day:'2020.07,13', title:'친구', content:'고등학교 처음 와서 사귄 친구들과 아직도 친하게지내는 중이다. 누군가는 서로 맞지 않아 갈라지고 싸우는 경우도 있다. 친구들끼리 싸울수도 있지만 누군가의 뒷함은 안하는게 좋다. 또 싸우게 되고 서로 마음아프니까. 그러니 모두 원만하게 해겨라고 내가좋아하는 마라탕먹으러 가서 행복하게 놀았으면 좋겠다'},
			{diary_id:6, diary_day:'2020.4.2', title:'소중함을 잃었던 날 ',content:'소중한 걸 잊어버렸다. 물건이 아니더라도 나한첸소중한것들이였다. 하지만 한순간 잃어버리는 바람에 나는 아무것도 하지도 그저정망에 빠져있었다. 누군가 나를 도와줬으면 좋겠다..'},
		]
			 
	)
*/

//connection.connect();
/*
connection.query('SELECT * from diary', (error, rows, fields) => {
  if (error) throw error;
  //console.log('User info is: ', rows);
});
*/
//connection.end();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req,res,next){
		//onsole.log('User info is: ', rows);
	//res.json([]i);
	//}
	
	//);
});

// 목록 글
// 사용법 : GET /diary_list
router.get('/diary_list', function(req, res, next) {
	connection.query("select diary_id, DATE_FORMAT(diary_day,'%Y.%m.%d') as diary_day, title, content from diary order by diary_day desc", (error, rows, fields) => {
  	if (error){
		console.log(error);
	}
	for( i = 0; i < rows.length; i ++){
		rows[i].diary_day = rows[i].diary_day
	}
	res.json(rows);
	});
});

// 검색키워드
// 사용법 : GET /diary_list/searcvh/검색키워드
router.get('/diary_list/search/:keyword', function(req, res, next) {
	var keyword = req.params.keyword;
	var sql = "select diary_id, DATE_FORMAT(diary_day,'%Y.%m.%d') as diary_day, title, content from diary where title like '%"+keyword+"%' or content like '%"+ keyword +"%' order by diary_id desc";
	console.log(sql);
	connection.query(sql, (error, rows, fields) => {
  	if (error){
		console.log(error);
	}
	for( i = 0; i < rows.length; i ++){
		rows[i].diary_day = rows[i].diary_day
	}
	res.json(rows);
	})
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 디테일부 글
// 사용법 : GET /diary_list/글번호
router.get('/diary_list/:diary_id', function(req, res, next) {
	var id = req.params.diary_id;
	connection.query("select diary_id, DATE_FORMAT(diary_day,'%Y.%m.%d') as diary_day, title, content from diary where diary_id=" + id, (error, rows, fields) => {
  	if (error){
		console.log(error);
	}
	if(rows.length == 1){
		res.json(rows[0]);
	}else{
		res.json('failed');
	}
	});
});

// 추가
// 사용법 : POST /diary_list/insert
router.post('/diary_list/insert', function(req, res, next) {
	var title = req.body.title;
	var content = req.body.content;
	var diary_day = req.body.diary_day;
	console.log(title)
	connection.query("INSERT INTO `diary` ( `diary_day`, `title`, `content`) VALUES ( '"+diary_day+"', '"+title+"', '"+content+"');", (error, rows, fields) => {
  	if (error){
		
		res.json('failed');
		console.log(error);
	}else{
		var result = {};
		result['title'] = title
		result['content'] = content;
		result['diary_day'] = diray_day;


		res.json(result);
	}
	});

});

// 수정
// 사용법 : POST /diary_list/update
router.post('/diary_list/update', function(req, res, next) {
	var id = req.body.diary_id;
	// TODO 
	connection.query("update diary set  diary_day = , title = , content = ) where diary_id=" + id, (error, rows, fields) => {
  	if (error){
		console.log(error);
		res.json('failed');
	}else{
		res.json('success');
	}
	});

});

// 삭제
// 사용법 : POST /diary_list/delete
router.post('/diary_list/delete/', function(req, res, next) {
	var id = req.body.diary_id;
	connection.query("select diary_id, DATE_FORMAT(diary_day,'%Y.%m.%d') as diary_day, title, content from diary where diary_id=" + id, (error, rows, fields) => {
  	if (error){
		console.log(error);
	}
	if(rows.length > 0){
		connection.query("delete from diary where diary_id = " + id, (error, rows, fields) => {
		if (error){
			res.json('failed');
			console.log(error);
		}else{		
			res.json('success');
		}
		});
	}else{
		res.json('failed');
	}
	
	});

});
  
module.exports = router;
