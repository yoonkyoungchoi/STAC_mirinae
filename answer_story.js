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

    var res = ''

    switch (parameters.Star.value) {
      case '물병자리':
        res = '가니메데는 트로이에 살던 소년으로 매우 아름다워 그 아름다움이 천상계에 전해지게 되었대요. 이 소문을 들은 제우스는 독수리로 변하여 트로이에 갔대요. 트로이에서 양을 쫓던 가니메데를 본 제우스는 한눈에 반했다고 해요. 제우스는 독수리의 발				톱으로 가니메데를 붙잡아 천상계로 데려가 영원한 젊음과 생명을 주고, 신들이 마시는 넥타르라는 음료를 잔에 부어 돌리는 역할을 맡겼대요. 가니메데는 제우스의 총애를 받아 물병자리가 되었다는 이야기가 전해와요.'
        break;
      case '물고기자리':
        res = '어느 날 아프로디테와 아들 에로스가 강 언덕을 건너고 있었대요. 그런데 갑자기 거인 타이폰이 나타나 아프로디테와 에로스를 깜짝 놀라게 했대요. 아프로디테는 아들을 잃어버리지 않도록 자신의 발과 에로스 발을 묶고 함께 물고기로 변신해서 강 속			으로 도망을 쳤대요. 이때 도망치던 모습을 아테네가 이들의 탈출을 기념하기 위해 별자리로 만들었다는 이야기가 전해와요.'
        break;
      case '양자리':
        res = '보이오티아 왕 아타마스의 두 아이 프릭소스와 헬레 남매의 이야기에요. 남매의 친어머니인 구름의 요정 네펠레는 계모의 속임수로 인해 제물로 바쳐져 죽을 위기에 처한 자기 자식들의 모습을 보고 제우스에게 도움을 청했고, 제우스는 헤르메스를 통				해 하늘을 달리는 황금 양을 보내 아이들을 돕게 했대요. 이 황금 양이 후에 하늘에 올라가 양자리가 되었다는 이야기가 전해와요.'
        break;
      case '황소자리':
        res = '제우스가 페니키아의 공주를 유혹하기 위해 흰 황소로 변신했다고 해요. 변한 제우스는 목장에서 놀고 있는 공주를 크레타 섬으로 데려갔대요. 여기서 제우스는 원래 자기 모습으로 돌아와 공주와 결혼을 했고, 제우스가 변했던 흰 소를 기념하여 별자				리를 만들었다는 이야기가 전해와요'
        break;
      case '쌍둥이자리':
        res = '제우스와 레아라는 여인의 사이에서 태어난 카스토르와 풀룩스는 사이가 매우 좋은 형제였대요. 어느 날 친척과의 싸움으로 카스토르가 죽어서 풀룩스는 아버지인 제우스에게 자신의 생명 반을 카스토르에게 달라고 소원을 빌었대요. 이에 감동을 받은 				제우스는 카스토르와 풀룩스를 울림포스에서 살게 하고 하루의 반은 지하세계에서 살게 해주고 별자리도 만들어주었다는 이야기가 전해와요.'
        break;
      case '게자리':
        res = '히드라라는 머리가 아홉 개 달리 뱀과 헤라클레스가 대혈전을 벌였다고 해요. 헤라는 히드라를 도와 헤라클레스를 없애기 위해 보낸 거대한 게로 헤라클레스의 발가락을 물었지만 분노한 헤라클래스의 발에 밟혀 죽고 말았대요. 헤라는 죽은 게에게 보				답하기 위해 별자리로 만들어주었다는 이야기가 전해와요'
        break;
      case '사자자리':
        res = '네메아 숲에 무시무시한 황금빛 사자가 살았대요. 이 사자는 사람들을 괴롭혀서 헤라클레스가 사자를 죽였대요. 제우스는 헤라클레스의 승리를 기념하기 위해 이 사자를 별자리로 만들었다는 이야기가 전해와요.'
        break;
      case '처녀자리':
        res = '대지의 여신 데메테르에게는 아름다운 봄의 여신 페르세포네라는 딸이 있었어요. 그런데 지옥의 왕인 하데스가 페르세포네를 강제로 납치해 아내로 삼았대요. 딸을 잃은 데메테르는 슬픔에 잠겨 대지에는 봄이 오지 않았고, 제우스는 1년의 6개월을 지				하에서 남편과 살고 나머지 반은 지상에서 엄마인 데메테르와 살게 했대요. 데메테르의 모습을 본떠 처녀자리를 만들었다는 이야기가 전해와요'
        break;
      case '천징자리':
        res = '정의의 여신인 아스트라이아는 인간에게 싸우지 않고 사이좋게 사는 여러 가지 방법을 알려주었대요. 그런데도 인간들이 자꾸만 싸워서 인간 세상을 버리고 하늘로 올라갔대요. 하늘에서도 인가의 옳고 그름을 판단해 주었대요. 그때 사용했던 저울이 				천칭자리가 되었다는 이야기가 전해와요.'
        break;
      case '전갈자리':
        res = '오리온은 매우 오만하여 세상의 모든 동물들을 죽일 수 있다고 떠들고 다녔대요. 올림포스 신들은 화가 났고 결구 헤라가 오리온을 죽이기 위해 전갈을 풀었대요. 오리온은 결국 죽었고. 오리온을 죽인 공로로 전갈을 하늘의 별자리가 되었다는 이야기				가 전해와요'
        break;
      case '사수자리':
        res = '케이론은 머리는 사람이고 몸은 말인 켄타우로스 족이었는데, 아주 훌륭하고 지혜로웠대요. 케이론은 아르고호를 타고 황금 양피를 찾아 나선 제자들을 안내하기 위해 스스로 자신의 모습을 별자리로 만들었다는 이야기가 전해와요'
        break;
      case '염소자리':
        res = '제우스는 어렸을 때 크로노스에게서 마지막 남은 아들을 살리기 원했던 자신의 어머니 레아가 할머니인 가이아의 도움을 받아 몰래 빼돌려져서 크레타 섬의 요정들의 손에 자라게 되었어요. 이들 중 그곳의 요정들의 리더로 존재였던 염소 모습의 요정 				아말테이아가 제우스를 자신의 양아들로 삼아 자신의 젖으로 제우스를 키웠다고 해요. 이후 성장하여 성인이 된 제우스는 티타노마키아를 준비하던 중 크레타에서 온 요정에게 염소 가죽을 받게 되었는데 그 가죽은 바로 아말테이아의 가죽이었데요. 아				말테이아는 죽으면서 유언으로 자신의 가죽을 제우스에게 전해달라고 부탁했고 제우스는 자신을 돌봐준 양어머니인 아말테이아의 죽음에 슬퍼하며 자신을 돌봐준 그녀의 은혜에 보답하기 위해 그녀를 별자리로 다시 태어나게 만들었다는 이야기가 전해 				   와요.'
    	break;    
	}

    console.log(actionName)
    console.log(parameters)

    npkResponse.addOutput("starStory", res)
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
  console.log(`NPKResponse: ${JSON.stringify(npkResponse)}`)
  return res.send(npkResponse)
});

module.exports = router;
