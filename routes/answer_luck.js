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
	
	 //switch (parameters.Star.value) 
	
	var Luck_rand = Math.floor(Math.random() * 23)
	console.log(Luck_rand)
	var Luck = []
	Luck.push('좋은 사건들이 밖에서 대기 중이네요. 이에 운명의 신이 당신을 세상 속으로 떠밀어내는 하루가 예상돼요. 문밖을 나서야 활기를 얻을 수 있는 운수이니 자리를 떨치고 일어나 생활에 적극적으로 뛰어들 수 있어야 할 거예요. 다양한 일을 벌이고 시도해 보시기 바라요. 작게 시작했던 일이 큰 결실을 맺어 돌아오게 될 거예요. 투자 건이 있다면 투자하셔도 좋을 거 같아요. 의류업에 종사하는 사람은 좋은 판매처가 생길 거 같아요.')
	Luck.push('다른 사람들의 도움이 절실히 요청되는 하루가 예상돼요. 그러나 보다 앞서 당신의 꼼꼼한 상황 판단이 필요할 것 같아요. 무작위의 도움은 오히려 혼란을 가중시킬 뿐이기 때문이에요. 처한 상황이나 당면한 문제의 주체는 바로 자신임을 염두에 두시기 바라요. 또한 현재 자신의 행동이 뜻하는 일을 추진하는데 적합한가 혹은 정당한가의 여부에 대한 신중한 판단이 요청되는 하루가 될 거 같아요.')
	Luck.push('당신은 능력을 최대한 발휘해 일을 하지만 알아주는 사람이 없는 하루가 될 거 같아요. 한 발을 앞으로 나아갈 때가 있으면 두 발을 뒤로 물러서는 때도 있는 것이 세상 사는 이치라고 할 수 있죠. 가끔은 다소 손해를 보는 듯 사는 것이 오히려 이로울 수도 있는 거예요. 발전도 있겠고 낭패도 있는 하루이니 겸허하게 받아들이시기 바라요. 이러한 때일수록 자신을 추스르지 않는다면 더 큰 손해를 얻기 쉬워요.')
	Luck.push( '보람 있고 풍부한 결실이 약속된 하루가 기대되어요. 드디어 결실의 시기가 왔으니 그동안 축적된 수고와 노력이 오늘, 큰 성과로 나타날 거예요. 그간의 노고를 위로하며 이루어낸 결과를 마음껏 자축을 해도 좋을 거 같아요. 그리고 새로운 출발을 위해 다시 힘차게 일상으로 되돌아가길 바라요. 싱글이시라면 매우 좋은 인연을 만나게 될 수도 있을 거 같아요. 복권 구매도 나쁘지 않겠군요.')
	Luck.push('그 처음과 끝의 운수 차이가 비교적 큰 하루이나 나쁘지 않아요. 이런 때에는 신경이 예민해지기 쉬우니 사람을 대할 때 조금 더 신경 써야 할 거예요. 그러나 오후에 들면서 상황이 좋아지게 될 거예요. 자칫 허탈함을 느낄 수 있으나 당장 결과를 볼 수는 없더라도 당신의 내부 어딘가에 또한 보이지 않게 축적되어 훗날 든든한 기반이 되어 저력을 나타낼 거예요.')
	Luck.push('몰입이라는 단어를 떠올려야 하는 하루가 될 거 같네요. 당신이 최고의 기량을 발휘하게 되는 때는 바로 나를 의식할 때가 아니라 나를 잊을 정도로 당신의 일에 몰입할 때라는 걸 기억하세요. 음식을 할 때도, 공부를 할 때도, 물건을 팔 때나 아님 누군가를 만나서 대화를 나눌 때조차도 그 상황에 몰입하세요. 일이 더 잘 풀리기도 하지만 그 순간이 바로 행복의 순간이 되어 줄 거예요. 집중을 흩뜨리는 많은 것들에 정신을 팔지 마세요. 돈 생각, 게임 생각, 술 생각, 집 생각 등등은 내려놓으시길 바랍니다.')
	Luck.push('세상에서 가장 중요한 것은 돈이 아니라 사람이에요. 섣불리 믿고 다른 사람과 금전 거래한 일이 당신과 상대에게 갈등을 불러오게 되는군요. 약속을 지키는 최선의 방법은 가능한 맹세를 하지 않는 거예요. 과거를 한번 되짚어 보세요. 지금 갈등하고 있는 사람에게 당신의 능력 이상의 약속을 했는지 또는 그 이상의 암시를 주었는지… 마케팅 관련 종사자는 답 없는 논쟁에 휘말리지 말아야 될 거 같아요.')
	Luck.push('이상하게도 당신이 그동안 깊이 고민하고, 어려워했던 일들이 오늘은 당신도 모르는 사이에 무난하게 마무리가 되어 있을 거예요. 그동안 당신이 배려하고, 성심을 다해 사귀어 놓은 사람들이 간단하게 보답을 한 것으로 생각해도 되겠네요. 안타까워하던 사람을 생각한다면, 이제는 다시 새롭게 출발할 수 있는 기회가 온 것이죠. 잊고 지냈던 지인들에게 연락하기 좋겠어요.')
	Luck.push( '끈기가 필요한 하루이에요. 처음에는 일이 잘 풀려서 느긋했지만 갈수록 일이 안 풀리고 앞으로 나아갈 기미가 보이질 않을 겁니다. 그렇다고 해서 중간에 손을 놓고 지레 포기해버린다면 좀 더 결과를 기다려보기로 하고 계속해서 노력하십시오. 특히 오늘 당신의 과시를 위한 소비의 결과는 파산이 될 거예요. 저녁에 산책 좋을 거 같아요.')
	Luck.push('믿고 의지할 수 있는 친구나 스승은 인생의 다른 무엇보다 큰 보물이라는 것을 알게 되는 때가 될 거 같아요. 힘든 일이 있거나 혼자 해결할 수 없는 어려운 난제를 만난다면 친구나 스승에게 의논해 보세요. 자신에게 바쁜 일이 있더라도 당신의 어려움을 외면하지 않을 거예요. 친구나 스승의 도움으로 어려운 문제나 난관도 해결하고 좋은 성과를 얻어낼 수 있으니 다음에는 자신이 친구나 스승의 도움이 될 수 있게 되어 주세요.')
	Luck.push( '마음이 심란하고 귀가 얇아져 유독 갈등이 많은 하루가 예상되네요. 주위에 솔깃한 얘기나 주의를 끄는 일들이 많으니 마음이 들떠 갈피를 잡기가 어려울 거 같아요. 판단도 흐린 데다가 운도 따르지 않는군요. 다소곳이 하던 일에 대한 꼼꼼한 정리가 필요해요. 노력에 비해 나타나는 성과가 미미할지도 몰라요. 어차피 길흉은 사람의 인생에 두루 번갈아 찾아오는 법이니 너무 낙담하지는 마세요.')
	Luck.push('자칫 자금 사정이 원활하지 않은 하루가 될 수도 있을 거 같아요. 수입이 특별히 줄어들거나 늘어나는 것은 아니나 지출이 많아 적자 재정에 허덕일 수 있어요. 기분에 의한 소비는 피하는 것이 좋을 거 같아요. 술자리나 친목 모임 역시 가능하면 피하는 것이 좋을 듯하군요.')
	Luck.push('노력과 의지를 낭비하게 되기 쉬운 하루에요. 지금 진행되고 있는 당신의 작업 역시 과연 효율성과 경제적 타당성을 갖추고 있는지, 목적에 부합되게 일이 추진되고 있는지 다시 한번 꼼꼼히 점검해 보시기 바라요. 당신이 가진 재능이 뛰어나기는 하지만 태양이 위세를 떨치는 한낮에 촛불을 켜든 형상이니 알아주는 사람이 없어요. 인내는 쓰지만 나중에는 모든 고통에 대한 최선의 치료 약임을 잊지 마세요.')
	Luck.push('무난하고 평범한 하루가 될 것 같아요. 평상시와 다르지 않은 평온함으로 큰 갈등이나 다툼 없이 지내게 될 거예요. 그러나 인간관계에서 사적인 큰 욕심은 금물이에요. 당신이 원하는 바와 상대가 바라는 바가 다를 수 있기 때문이에요. 내가 바라는 것이 욕심인지 아닌지 생각해 볼 필요가 있어요. 어딘가 오래 머물 장소로 이동한다거나 약속 장소를 정할 때는 시계 반대 방향으로 잡는 것이 좋을 거 같아요.')
	Luck.push('오늘보다 겸손한 자세가 필요한 하루라고 별이 얘기하는군요. 자신의 재주와 능력을 과신하고 저돌적으로 일을 추진하다 보면 화를 초래하기 쉬워요. 용기나 배짱보다는 돌다리도 두들겨 보고 건너는 신중함과 조심스러움이 더욱 필요할 거예요. 주위 상황이 불분명한 상태이므로 때와 상황에 알맞은 적절한 행동을 구사함이 좋겠어요. 추진하려는 일이 있다면 잠시 보류하는 것이 좋을 거 같아요.')
	Luck.push('금전운의 흐름이 그리 좋지 만은 않을 것으로 보여요. 소비 생활에 문제가 생겨서 탈이 생길 수 있는 날이에요. 스스로가 자제되지 않는다면 가족이나 친구의 도움을 얻어 소비에 대한 통제를 부탁해 보도록 하세요. 또한, 사행성 또는 리스크가 있는 곳에 대한 투자는 좋지 않은 날이에요.')
	Luck.push('일이 손에 안 잡히고 그것으로부터 도망가고 싶은 날이에요. 하지만 미루고 피해도 잠시일 뿐. 몸은 편할지 몰라도 마음은 늘 가볍지 않아요. 당신 손으로 매듭져야 해요. 하기 싫어도 하고 나면 개운해요. 하기 싫은 것 먼저 하세요. 뒤로 갈수록 마무리가 편해질 거예요.')
	Luck.push('눈앞의 안개가 시야를 가리는 별의 기운이지만 밀고 나아가야 할 처지에요. 자잘한 근심으로 분주한 하루가 예상되어요. 그러나 이러한 때일수록 넉넉한 마음과 여유가 필요해요. 곱고 아름다운 심성이 닥쳐오는 어려움을 헤쳐가는 데 큰 힘이 될 수 있다는 것을 기억하세요. 그리고 오늘은 마음이 잘 맞는 동업자를 만날 수도 있겠고, 경제적으로 어렵다면 어딘가로부터 금전적 도움이 올 거예요. ')
	Luck.push('주변이 소란스러우니 다소 분주한 하루가 예상되어요. 일도 많고 문제도 많으니 솔깃한 유혹도 적지 않을 거예요. 곤란한 상황이 예상되며 추진하는 일에 들었던 행운의 신이 잠시 모습을 감추었어요. 때로 당혹스럽고 견디기 힘들 수도 있으나 이러한 날일수록 동요되지 않도록 자기중심을 확고하게 세울 필요가 있어요. 오늘 침묵으로의 입문을 해보는 건 어떤가요? 마음을 내려놓고 입을 무겁게 하면 소란하게만 보였던 하루도 차분해질 것 같아요.')
	Luck.push('좋은 일이 계속되는 순탄한 하루에요. 모처럼 여유롭고 넉넉한 시간을 누릴 수 있을 거예요. 지난 시간을 반성하고 앞날을 설계해 보는 것도 좋은 여가 활용이 될 것 같아요. 또한 어려운 때를 미리 대비하여 나태해지거나 자만하지 않도록 스스로 잘 추스르기 바라요. 당신의 성실한 의지가 도움의 손길을 불러올 수 있을 거예요. 운동을 시작해도 좋을 것 같아요.')
	Luck.push('다소 불안한 기미가 느껴지는 하루입니다. 조만간 들이닥칠 역경의 조짐이 보이는군요. 지나친 걱정보다는 조심하고 삼가는 마음으로 그에 대처할 준비가 필요한 하루가 될 것입니다. 역경과 곤란은 누구에게나 있는 것이고, 그것을 현명하게 극복해 내는가가 더 현실적인 문제이니까요. 하지만 고난 뒤에 쾌락이 바로 이어질 테니 너무 괴로워하지는 마시길 바랍니다. 불과 관련된 일을 하는 사람은 특히 조심하시길 바랍니다.')
	Luck.push('중심 생각이나 태도의 확립이 절실히 요구되는 하루에요. 고대하던 기회를 만났지만 확고한 신념을 가지고 밀어 부치지 못한다면 아무리 좋은 기회도 소용이 없어요. 또 기회란 늘 우리 곁에 머물러 있지 않아요. 기회는 그냥 어쩌다 오는 우연이 아니라 당신 마음의 부름으로 인해 다가와요. 그러한 행운의 기회를 부르는 가장 강력한 요소는 그것을 이루기 위한 적극적인 마음이에요.')
	Luck.push('어떠한 일이라도 도전하는 사람에겐 경험적인 측면으로 성과를 얻을 수 있어요. 지금은 당신을 위해 준비된 시간이라고 생각해보세요. 모든 일이 당신의 의지가 반영됨에 따라 움직여갈 것이에요. 초심을 잃지 않는 모습이야말로 모두가 지향해야 할 모범적인 태도일 것이니, 꾸준히 지켜나가도록 노력하시기 바라요. 이직을 준비 중인 사람이라면 자신감을 갖고 현 상황에서 벗어나야 해요.')


    console.log(actionName)
    console.log(parameters)

    npkResponse.addOutput("Luckstory",  Luck[Luck_rand])
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
  return res.send(npkResponse)
});

module.exports = router;