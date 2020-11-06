var express = require('express');
var router = express.Router();
const uuid = require('uuid').v4
const _ = require('lodash')
const { DOMAIN } = require('../config')


class NPKRequest {
  constructor (httpReq) {
    this.context = httpReq.body.context
    this.action = httpReq.body.action
    console.log(`NPKRequest: ${JSON.stringify(this.context)}, ${JSON.stringify(this.action)}`)
  }

  do(npkResponse) {
    this.actionRequest(npkResponse)
  }

  actionRequest(npkResponse) {
    console.log('actionRequest')
    console.dir(this.action)
	    const actionName = this.action.actionName
		const parameters = this.action.parameters

		var target_day = parameters.day.value; // target_day라는 변수에 누구에서 받아온 day값을 넣어줌 
		console.log('검색날짜:' + target_day);

		if(target_day == 'TODAY'){
			var date = new Date(); 
			var year = date.getFullYear(); 
			var month = new String(date.getMonth()+1); 
			var day = new String(date.getDate()); 

			// 한자리수일 경우 0을 채워준다. 
			if(month.length == 1){ 
			  month = "0" + month; 
			} 
			if(day.length == 1){ 
			  day = "0" + day;
			} 
			target_day = year + "." + month + "." + day
			console.log('변환날짜:' + target_day);
		}else{
			/*var target_search_day = target_day.split('년|월|일')
			var split_Day = target_search_day[0] + "." + target_seatch_day[1] + "." + target_search_day[2]
			consol.log('변환한 날짜 : ' + target_search_day)
			consol.log('변환한 . 날짜 : ' + split_Day)*/

			// TODO : target_day 변환!!! 2020.09.01 형식으로 변형할 것!
			
		}

		const mysql      = require('sync-mysql');
		const connection = new mysql({
		  host     : 'localhost',
		  user     : 'mirinaediary',
		  password : '2oJfkNYVOh2FEN3k',
		  database : 'mirinaediary'
		});
		//connection.connect();
		var sql = "select diary_id, DATE_FORMAT(diary_day,'%Y.%m.%d') as diary_day, title, content from diary where diary_day = '"+ target_day +"' limit 1";
		let rows = connection.query(sql);
		console.log('성공' + sql);
			
		if(rows != ""){
			console.log('성공2-해당날짜 일기 발견'); // 서버 로그에서 성공유뮤 확인 
			console.log(rows[0].content); // 서버 로그에서 내용이 찍힘
			var res = rows[0].content;
			var pre_day = rows[0].diary_day.split('.')
			var day = pre_day[0] + '년 ' + pre_day[1] + '월 ' + pre_day[2] + '일'
			
			//var when = '2020년9월24일'  
			console.log(actionName)
			console.log(parameters)

			npkResponse.addOutput("Diary", res)
			npkResponse.addOutput("when", day)
		}else{
			console.log('성공3-해당날짜 일기 없음');//서버 로그에서 확인 
			var pre_day = target_day.split('.')
			var day = pre_day[0] + '년 ' + pre_day[1] + '월 ' + pre_day[2] + '일'
			npkResponse.addOutput("Diary", "일기가 없습니다.")
			npkResponse.addOutput("when", day)
		}
		console.log(actionName)
		console.log(parameters)
	}
}

class NPKResponse {
  constructor () {
    console.log('NPKResponse constructor')

    this.version = '2.0'
    this.resultCode = 'OK'
    this.output = {}
    this.directives = []
  }

  addOutput(key, value) {
    this.output[key] = value
  }
}

router.post('/', function(req, res, next) {
  npkResponse = new NPKResponse()
  npkRequest = new NPKRequest(req)
  npkRequest.do(npkResponse)
  //console.log(`NPKResponse: ${JSON.stringify(npkResponse)}`)
  //npkResponse.addOutput("Diary", "asdfsdㄹㅇsdfsadfds")

  return res.send(npkResponse)
});

module.exports = router;
