var i = 1;

var testNum = {
  "1": {
    "title": "Q1",
    "description": "회사에 새로운 사람이 들어왔다.",
    "type": "EI",
    "A": "오! 안녕하세요~",
    "B": "(새로운 얼굴이군...)"
  },
  "2": {
    "title": "Q2",
    "description": "점심시간이 다가오는데 아무도 메뉴를 정하지 않고 있다.",
    "type": "EI",
    "A": "오늘 점심은 삼겹살 어때요?",
    "B": "(눈치...........)"
  },
  "3": {
    "title": "Q3",
    "description": "작업하던 엑셀이 날아갔다...저장도 안했다...",
    "type": "EI",
    "A": "(주변 동료에게) 아....흑흑흑 흑흑흑흑",
    "B": "하.. (잠깐 자리를 이탈한다)"
  },
  "4": {
    "title": "Q4",
    "description": "회사에서 새로운 프로젝트에 참여하게 되었다. 더 마음이 편한 프로젝트는?",
    "type": "SN",
    "A": "확실한 가이드 라인이 있는 프로젝트",
    "B": "내가 스스로 방법을 만들어 가야하는 프로젝트"
  },
  "5": {
    "title": "Q5",
    "description": "의지와 상관 없이 결국 새로운 프로젝트에 참여하게 되었다. 이때 나의 속마음은?",
    "type": "SN",
    "A": "어쩔 수 없다. 일단 해본다",
    "B": "왜 .... 나야... ? 왜... ?"
  },
  "6": {
    "title": "Q6",
    "description": "회사 동료들이 평가하는 나는?",
    "type": "SN",
    "A": "꾸준하고 참을성이 있는 사람",
    "B": "창의적이고 독창적인 사람"
  },
  "7": {
    "title": "Q7",
    "description": "회사에서 진행한 프로젝트의 결과가 좋지 못했을 때 나는?",
    "type": "TF",
    "A": "좋은 결과를 내지 못한 내 자신에게 화가 난다.",
    "B": "다른 사람들이 내 실패를 안좋게 볼까봐 걱정이 된다."
  },
  "8": {
    "title": "Q8",
    "description": "회사에서 억울한 상황에 처하게 된다면 나는?",
    "type": "TF",
    "A": "하고 싶은말을 와다다ㅏ다다다다ㅏ 적는다.",
    "B": "하.. 기가막혀... (말잇못)"
  },
  "9": {
    "title": "Q9",
    "description": "회사의 동료가 프로젝트를 성공적으로 완수했을 때 나는?",
    "type": "TF",
    "A": '"정말 고생했어! 이 부분만 좀 더 보완되면 좋을 것 같아" 조언과 함께 칭찬을 한다."',
    "B": '"이번 프로젝트 정말 열심히 했구나! 고생 많았어" 힘들었을 동료의 노력을 칭찬한다."'
  },
  "10": {
    "title": "Q10",
    "description": "회사에서 빨리 끝내야하는 프로젝트가 있다. 이때 나는?",
    "type": "JP",
    "A": "일단 뭐 부터 해야할지 리스트를 짠다.",
    "B": "시간이 없어! 일단 시작하고 보자"
  },
  "11": {
    "title": "Q11",
    "description": "끝난줄 알았던 프로젝트에 문제가 생겼다.",
    "type": "JP",
    "A": "(멘붕) 뭐가..문제죠?",
    "B": "빠르게 받아들인다."
  },
  "12": {
    "title": "Q12",
    "description": "사소한 부분에서 의문이 생겼다.",
    "type": "JP",
    "A": "이해가지 않는 부분은 반드시 물어보고 진행한다.",
    "B": "일단 크지 않으니 내가 이해한대로 진행해본다"
  }
};

var result = {
  "INTJ": {
    "explain": "똑똑하고 독립적인 고양이군요!<br>노르웨이숲은 매우 빨리 배우고<br>훌륭한 사냥꾼이라<br>바이킹의 배에서 쥐를 잡는 역할을 했어요.<br>분석력이 뛰어나고 정기적으로 새로운 것을<br>배우는 것을 좋아하는 편이에요",
    "img" : "img/intj.png"
  },
  "INTP": {
    "explain": "지적호기심이 높은 고양이군요!<br>터키쉬 반은 호기심이 너무 많아<br>주변 상황에 관심이 많고<br>강한 실험 정신을 가지고 있어요.<br>하지만 독립적이기 때문에<br>남에게 제지당하는 상황을 좋아하지 않아요.",
    "img" : "img/intp.png"
  },
  "ENTJ": {
    "explain": "외향적이고 영리한 고양이군요!<br>샴은 매우 지배적인 성격을 가지고 있어<br>자기가 원하는 것을 알리고<br>해주기를 기대하는 측면이 있어요.<br>그래서 자신이 무엇인가 필요하다면<br>끊임없이 대화하고 알리는 경향이 있어요.",
    "img" : "img/entj.png"
  },
  "ENTP": {
    "explain": "박학다식하고 독창적인 고양이군요!<br>발리니즈는 새로운 것을 빨리 배우고<br>새롭고 독특한 방법으로<br>주변을 탐험하는 데 관심이 많아요.<br>지루한 것을 싫어하고<br>새로운 자극을 원해서 사고를 칠 수도 있어요",
    "img" : "img/entp.png"
  },
  "INFJ": {
    "explain": "상대방을 잘 이해하는 고양이군요!<br>러시안 블루는 내성적이지만<br>사람을 신뢰하기 시작하면 정말 다정해져요.<br>무시당하는 것을 좋아하지 않으며<br>힘들 땐 혼자만의 시간이 필요해요.",
    "img" : "img/infj.png"
  },
  "INFP": {
    "explain": "조용하지만 지적인 고양이군요!<br>버만은 성실하고 이해심이 많으며<br>자기 혼자만의 평화로운 시간을 즐겨요.<br>온순하고 침착하지만,<br>호기심이 많고 상상력이 풍부해요.",
    "img" : "img/infp.png"
  },
  "ENFJ": {
    "explain": "열정적이고 친절한 고양이군요!<br>통키니즈는 똑똑하고 사람과<br>함께 하는 것을 즐기지만 고집이 세고<br>자신의 의지가 강해요.<br>사교적이지만 비판을 받으면<br>예민하게 반응할 수 있어요",
    "img" : "img/enfj.png"
  },
  "ENFP": {
    "explain": "활발하고 호기심 많은 고양이군요!<br>싱가푸라는 상상력과 순발력이 뛰어나고<br>호기심 많아 탐험하고 노는 것을 좋아해요.<br>누군가 아프거나 힘들 때 위로하고<br>응원할 줄 아는 친절함을 가지고 있어요",
    "img" : "img/enfp.png"
  },
  "ISTJ": {
    "explain": "책임감이 강해 매우 충성스러운 고양이군요!<br>브리티쉬숏헤어는 지적인 고양이여서<br> 쉽고 빠르게 배우며 기억력도 좋아<br>배운 것을 즉시 기억해요.<br>소속감이 강해 같은 집단과<br>유대를 쉽게 생성해요.<br>하지만, 휴식을 하고싶을 때는<br>혼자만의 시간을 가지는 게 좋아요!",
    "img" : "img/istj.png"
  },
  "ISFJ": {
    "explain": "부드럽고 친절한 고양이군요!<br>페르시안은 질서정연하고<br>안정적인 일상을 좋아하며<br>평화롭고 고요한 환경을 선호해요.<br>우아하면서 매너가 넘치고<br>혼자만의 시간을 즐길 줄 알아요.",
    "img" : "img/isfj.png"
  },
  "ESTJ": {
    "explain": "기억력 좋고 활동성 있는 고양이군요!<br>드래곤 리는 지적이고<br>친절하며 책임감이 있어<br>다른 집단을 이끄는 데 재능이 있어요.<br>가만히 있지 않고 항상 더 많은 책임과<br>도전을 찾는 경향이 있어요.",
    "img" : "img/estj.png"
  },
  "ESFJ": {
    "explain": "다정하고 충성스러운 고양이군요!<br>저먼렉스는 혼자 있는 시간을 좋아하지 않고<br> 사랑하는 사람들과 있는 것을 좋아해요.<br>친절하며 사람에 대한 관심이 많고<br>그들과 함께 하는 것에 행복감을 느껴요.",
    "img" : "img/esfj.png"
  },
  "ISTP": {
    "explain": "행동 전에 데이터를 고려하는 고양이군요!<br>스라소니는 주어진 기회를 최대한<br>활용하기 위한 인내심을 가지고 있고<br>매우 신중히 행동해요.<br>또 과묵하고 분석적이지만 적응력이 강해요.<br>하지만 혼자 활동하는 것을 좋아해요.",
    "img" : "img/istp.png"
  },
  "ISFP": {
    "explain": "온화하면서 겸손한 고양이군요!<br>아나톨리안은 큰 몸집에도 불구하고<br>매우 다정해서 '온화한 거인'이라고도 불려요.<br>하지만 활동적인 것을 좋아하며<br>다양한 장소를 탐험하는 것을 즐겨요.",
    "img" : "img/isfp.png"
  },
  "ESTP": {
    "explain": "자신감 넘치고 활동적인 고양이군요! <br>뱅갈은 똑똑하고 호기심이 많아 <br>새로운 것에 관심이 많고 도전적이에요. <br>지루함은 최대의 적이고 <br>지루한 뱅갈은 파괴적으로 변해요.",
    "img" : "img/estp.png"
  },
  "ESFP": {
    "explain": "장난기 많고 활기찬 고양이군요!<br>스핑크스는 모든 고양이 중<br>가장 사교적인 성격을 가지고 있어<br>치료 고양이로 사용되기도 해요.<br>삶이 지루하지 않게 외부에서의 자극과<br>흥분을 갈망하고 탐험하는 것을 좋아해요.",
    "img" : "img/esfp.png"
  }
};

//테스트 시작함수
var testStart = function(){
  document.querySelector('#main').style.display = "none";
  document.querySelector('#test').style.display = "block";
  next();
}

document.querySelector('#start_btn').addEventListener('click', testStart);

//테스트 다시시작
var retry = function(){
  document.querySelector('#result').style.display = "none";
  document.querySelector('#test').style.display = "block";
  i = 1;
  EI.value=SN.value=TF.value=JP.value= 0;
  next();
}

document.querySelector('#retry_btn').addEventListener('click', retry);

//타입 선택을 위한 함수
document.querySelector('#A').addEventListener('click',function(){
  var type = document.querySelector('#type').value;
  var preValue = document.querySelector('#'+type).value;
  document.querySelector('#'+type).value = preValue+1;
  next();
})

document.querySelector('#B').addEventListener('click',function(){
  next();
})

//문제 넘기기 + 결과 도출 함수
var next = function(){
  if(i==13){
    document.querySelector('#test').style.display = "none";
    document.querySelector('#result').style.display = "block";
    var mbti = '';
    if(document.querySelector('#EI').value < 2){
      mbti += 'I';
    }else{
      mbti += 'E';
    }
    if(document.querySelector('#SN').value < 2){
      mbti += 'N';
    }else{
      mbti += 'S';
    }
    if(document.querySelector('#TF').value < 2){
      mbti += 'F';
    }else{
      mbti += 'T';
    }
    if(document.querySelector('#JP').value < 2){
      mbti += 'P';
    }else{
      mbti += 'J';
    }
    console.log(mbti);
    document.querySelector('#explain').innerHTML = result[mbti]['explain'];
    document.querySelector('#result_img').src = result[mbti]['img'];
    history.replaceState({ replace : mbti }, "", '?result='+mbti);
  }
  else{
    document.querySelector('#number').innerHTML = i+'/12';
    document.querySelector('#progress').style.width = (i/12)*100+'%';
    document.querySelector('#title').innerHTML = testNum[i]['title'];
    document.querySelector('#description').innerHTML = testNum[i]['description'];
    document.querySelector('#type').value = testNum[i]['type'];
    document.querySelector('#A').innerHTML = testNum[i]['A'];
    document.querySelector('#B').innerHTML = testNum[i]['B'];
    i++;
  }

}

var shareParams = new URL(location.href).searchParams.get('result');
if(Object.keys(result).includes(shareParams)== true)
{
  document.querySelector('#main').style.display = "none";
  document.querySelector('#result').style.display = "block";
  var mbti = shareParams;
  document.querySelector('#explain').innerHTML = result[mbti]['explain'];
  document.querySelector('#result_img').src = result[mbti]['img'];
}

// 카카오 SDK 초기화
Kakao.init('02bd07c071db1509bbe0b181c72169e4');
Kakao.isInitialized();

//카카오톡 공유하기 함수

var kakaoShare = function(){
    var title = "오오";
    var desc = document.querySelector('#explain').textContent;
    var imgUrl = document.querySelector('#result_img').src;
    var mbti = new URL(location.href).searchParams.get('result');

    Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title:  title,
      description: desc,
      imageUrl:
        imgUrl,
      link: {
        mobileWebUrl: 'https://heejun.kim/mbti-cat/?result='+mbti,
      },
    },
    social: {
      likeCount: 10,
      commentCount: 20,
      sharedCount: 30,
    },
    buttons: [
      {
        title: '결과 확인하기',
        link: {
          mobileWebUrl: 'https://heejun.kim/mbti-cat/?result='+mbti,
          webUrl: 'https://heejun.kim/mbti-cat/?result='+mbti,
        },
      },
      {
        title: '나도 테스트하기',
        link: {
          mobileWebUrl: 'https://heejun.kim/mbti-cat/',
          webUrl: 'https://heejun.kim/mbti-cat/',
        },
      },
    ]
  });
  }

document.querySelector('#share_btn').addEventListener('click', kakaoShare);
