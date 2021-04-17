var testNu = {
  1:{
    'title' : '문제 1번',
    'description' : '처음 만나는 사람에게 나는?',
    'type' : 'EI',
    'A' : '어색한 상황을 깨기 위해 먼저 말을 건다.',
    'B' : '옆 사람이 먼저 말을 걸지 않으면 조용히 핸드폰을 본다.',
  },
  2:{
    'title' : '문제 2번',
    'description' : '너무 힘들었던 하루, 친구에게 전화가 오면?',
    'type' : 'EI',
    'A' : '전화를 받고 힘든 하루에 대해 하소연한다.',
    'B' : '혼자 쉬고 싶으니 전화를 받지 않고 나중에 카톡을 한다.',
  },
  3:{
    'title' : '문제 3번',
    'description' : '해야 하는 일을 일찍 끝내서 할 일이 없는 나는?',
    'type' : 'EI',
    'A' : '바로 친구에게 전화해 만날 약속을 잡는다.',
    'B' : '집에서 하고 싶은 것을 하며 편하게 쉰다.',
  },
  4:{
    'title' : '문제 4번',
    'description' : '맛집의 음식에 대해 친구에게 설명할 때 나는?',
    'type' : 'SN',
    'A' : '"그 집 음식은 말이야, OO한 맛이 나고 OO해서 맛있어"라는 식으로 구체적으로 설명한다.',
    'B' : '"그냥 맛집이야 후회 안해"이라고 단순히 설명한다.',
  },
  5:{
    'title' : '문제 5번',
    'description' : '그 친구가 맛집의 위치에 대해 알려달라고 한다면?',
    'type' : 'SN',
    'A' : '현재 만난 위치에서부터 가는 방법을 찾아 알려준다.',
    'B' : '맛집 옆에 있는 식별할 수 있는 큰 건물을 알려준다.',
  },
  6:{
    'title' : '문제 6번',
    'description' : '주변 사람들이 나에게 자주하는 말은?',
    'type' : 'SN',
    'A' : '꾸준하고 참을성이 있다는 말을 많이 듣는다.',
    'B' : '창의적이고 독창적이라는 말을 많이 듣는다.',
  },
  7:{
    'title' : '문제 7번',
    'description' : '거절해야하는 상황이 오면 나는?',
    'type' : 'TF',
    'A' : '감정에 흔들리지 않고 강력하게 할 수 없다고 말한다.',
    'B' : '고민하다가 대부분 들어주는 편이다.',
  },
  8:{
    'title' : '문제 8번',
    'description' : '화가났을 때 나는?',
    'type' : 'TF',
    'A' : '논리적으로 잘 말하면서 따지는 편이다.',
    'B' : '할말이 많지만 너무 분해서 말이 안나오고 눈물이 먼저 나온다.',
  },
  9:{
    'title' : '문제 9번',
    'description' : '힘든 일로 고민을 털어놓는 친구에게 나는?',
    'type' : 'TF',
    'A' : '"내가 문제를 해결하는데 도와줄게!"라고 말한다.',
    'B' : '"많이 힘들었겠다...지금은 괜찮아?"라고 위로를 한다.',
  },
  10:{
    'title' : '문제 10번',
    'description' : '빨리 끝내야 하는 일이 있을 때 나의 일처리 방법은?',
    'type' : 'JP',
    'A' : '급하지만 계획을 먼저 세우고 일을 시작한다.',
    'B' : '우선 시작하고 본다.',
  },
  11:{
    'title' : '문제 11번',
    'description' : '자주 가는 음식점에서 새로운 음식을 발견했을 때 나는?',
    'type' : 'JP',
    'A' : '"늘 먹던게 좋아" 기존에 자주 먹던 음식을 선택한다.',
    'B' : '"오 새로운 음식이 나왔네?" 새로나온 음식에 도전한다.',
  },
  12:{
    'title' : '문제 12번',
    'description' : '친구가 놀러와서 물건을 찾을 때 나는?',
    'type' : 'JP',
    'A' : '"그거 oo에 있어!" 정확한 위치를 알고 말해준다.',
    'B' : '"아마 책상 어딘가에 있을껄?" 대충 어디에 있는지만 알고 말해준다.',
  },
};

var result = {  
'INTP': {'mbti': 'INTP', 'explain': '사물을 정확하게 파악할 수 있기 때문에,<br>부정적인 부분을 발견하면 절망하게 됩니다. 사람들이 서로 실망하고 있거나,누군가에게<br>도움을 주지 못했을 때 우울함을 느낍니다. INTP는 우울해 보이는 것이 어리석다고 생각해<br>동요하는 모습을 보이지 않으려합니다.<br>자신의 생각과 다른 새로운 것에 도전해 보세요.<br>우울함의 굴레에서 벗어나는 계기가 될거예요.'}, 
'ENTJ': {'mbti': 'ENTJ', 'explain': '신뢰를 바탕으로 상대에게 헌신하기 떄문에<br>배신감은 ENTJ에게 가장 고통스러운 일입니다.<br>상처를 받으면 잘 드러내지 않고,<br>폭력을 행하거나 화를 내며 자신의 나약함을 숨깁니다.<br>우울함을 계속해서 부정하지마세요.<br>우울함에서 벗어나기 위해서는<br>받아들여 극복할 필요가 있습니다.'}, 
'ENTP': {'mbti': 'ENTP', 'explain': '다른 사람에게 상처를 주거나 죄책감을<br>느끼면 우울함을 느낍니다.<br>나쁜 상황을 바꿀 수 없거나,<br>상황을 개선하지 못하면 우울함에 빠집니다.<br>꾸밈없는 모습으로 자연스럽게 기댈 수 있는<br>친구를 만난다면 우울함에서 벗어날 수 있을 겁니다.'}, 
'INFJ': {'mbti': 'INFJ', 'explain': '먼 훗날의 일보다 눈앞의 일에서 우울함을 느낍니다. <br>세상의 나쁜 일을 걱정하고 슬퍼하며, 자신이 잠재력을 <br>발휘하지 못하고 주위에 변화를 주지 못할 때 실망합니다. <br>이런 상황에서 마음이 통하는 사람을 찾고 그 사람에게 <br>인정 받았을 때 INFJ는 우울함을 극복합니다.'}, 
'INFP': {'mbti': 'INFP', 'explain': '마이너스적인 슬럼프나 사이클에 빠졌을 때,<br> 벗어날 방법이 보이지 않으면 우울해집니다. <br> 돌봐주는 상대가 감사한 마음을 보이지 않을 때<br> INFP는 동요하게 됩니다.<br> 체험을 통해 얻은 지식으로 남을 도움으로써, <br> 내가 한 일이 잘못이 아니었다는 자신감을 얻으면 <br> 우울함을 극복할 수 있습니다.'}, 
'ENFJ': {'mbti': 'ENFJ', 'explain': '요구에 부응하지 못한다고 느끼면 우울함을 느낍니다.<br> 특히, 소중한 사람이 곤경이나 위기에 처했을 때<br> 본인이 어떻게 할 수 없는 경우 우울해집니다. <br>ENFJ는 우울함을 이해하고 받아들여야 합니다.<br>그리고 소중한 사람이나 주위 사람이 만드는 <br>따뜻한 환경이 우울함을 극복하는 큰 원동력이 됩니다.'}, 
'ENFP': {'mbti': 'ENFP', 'explain': 'ENFP는 주위 사람들이 힘들어하면 함께 우울해집니다. <br>이들은 주위 사람들이 성공하고 행복하길 바랍니다.<br>외로움을 느낄 때도 우울함을 느낄 수 있습니다.<br>이럴 때 친구와 함께 외출을 하거나<br>새로운 경험을 함으로써 우울함에서 벗어날 수 있습니다.'}, 
'ISTJ': {'mbti': 'ISTJ', 'explain': '가까운 사람이 고통받고 있을 때 우울함을 느낍니다.<br>눈앞의 사람이 괴로워하는데,<br>아무것도 할 수 없는 무기력감을 느낄 때,<br>ISTJ는 깊은 우울감을 느끼게 됩니다. 자신이 우울하다고 느끼기 어렵기 때문에<br>우울함을 느끼고 있는 걸 인지하는게 중요해요.<br>소중한 사람과 밝은 미래를 계획해보면<br>우울함을 극복하는데 도움이 됩니다.'}, 
'ISFJ': {'mbti': 'ISFJ', 'explain': '다른 사람의 냉정한 태도에 우울함에 빠집니다.<br>누군가 사람에게 상처를 주거나,<br>싸우는 경우를 맞닥뜨리면 우울함을 느낍니다.<br>ISFJ는 주위 사람의 행복을 바라기에, 가족이 불온해지면 더욱 괴로워합니다.<br>모든 것을 책임질 필요는 없어요.<br>혼자서 뭐든지 할 수 있는 것은<br>아닌걸 깨달으면 우울함을 극복할 수 있습니다.'}, 
'ESTJ': {'mbti': 'ESTJ', 'explain': '목표에 도달하지 못하면 우울함에 빠집니다.<br>억압받거나 인생에서 실패했다고 느낄 때,<br>ESTJ는 쉽게 우울함에 빠집니다.<br>우울함을 잘 표현하지 못하기 때문에<br>극단적인 경우 폭력적인 면을 보입니다.<br>그러기 전에 주위 사람들에게 도움을 청하세요.<br>죄책감과 우울함을 걷어낼 수 있다면,<br>슬기롭게 우울함을 극복할 수 있습니다.'}, 
'ESFJ': {'mbti': 'ESFJ', 'explain': '소중한 사람을 구하지 못할 때 우울함을 느낍니다.<br>모두를 구하고 싶다고 생각하며,<br>도움을 주고 싶다고 생각하고 있습니다.<br>ESFJ는 아무렇지 않은 척 합니다.<br>그러나 우울함이 깊어지면 겉으로 드러나고,<br> 다른 이들에게 기분 나쁘고 성급해집니다.<br>모든 사람을 구할 수 없다는걸 이애하고,<br>실수를 해도 소중한 사람을 저버리는 것이<br>아니라는 것을 깨달으세요.<br> 우울함을 극복하는데 도움이 될거예요.'}, 
'ISTP': {'mbti': 'ISTP', 'explain': '가까운 사람이나 주위 사람이 힘들어할 때,<br>우울함을 느끼게 됩니다.<br>ISTP는 감정적으로 나오지 않습니다.<br>바쁘게 행동하며 즐거움을 찾아보면,<br>우울함을 극복할 수 있을거예요.<br>ISTP는 우울함을 가장 잘 이겨내니까요'}, 
'ISFP': {'mbti': 'ISFP', 'explain': '주위 사람들이 육체적, 정신적으로<br>고통을 겪오 있을 때 우울해집니다. ISFP는 우울함을 느낄 때 내면의 방에 들어가,<br>음악과 책으로 우울함을 치유하려 합니다. <br>우울함을 이겨낼 수 있는 수단을 가지고 있습니다.<br>내면에 틀어박히는 것도 좋지만,<br>새로운 사람과 만남을 만들어보세요.<br>나를 알아주는 사람이 존재한다는 것이,<br>우울함을 극복하는데 도움이 될거예요.'}, 
'ESTP': {'mbti': 'ESTP', 'explain': '다른 사람이 자신을 신경쓰지 않는 경우<br>우울함을 느끼게 됩니다.<br>고립되어 있거나 소중한 사람으로부터<br>소외감은 ESTP를 불안하게 만듭니다. 그렇기에 새로운 친구들과 스릴을 찾아<br>행동하며 우울함에서 눈을 돌리려 합니다.<br>세상에 완벽한 사람은 없습니다.<br>새로운 경험을 하는 것도 좋지만,<br>우선 우울함을 받아들여보세요.<br>우울함을 극복하는데 도움이 될거예요.'}, 
'ESFP': {'mbti': 'ESFP', 'explain': '주위에서 무시하거나 배려해주지 않는다고<br>느낄 때 우울함을 느낍니다. 동물이나 어린아이가 괴롭힘을<br>당하는 것도 우울함을 느끼게 합니다. ESFP는 힘들 때 우울함을 주위 사람들에게도<br>전달하고 마음을 열 수 있는 상대를 찾습니다.<br>문제를 파고드는 것보다 산책 등<br>기분 전환을 위한 방법을 찾아보세요.<br>우울함을 극복하는데 도움이 될거예요.'}, 
'INTJ': {'mbti': 'INTJ', 'explain': '주위의 이해와 지식 부족으로 일이 풀리지 <br>않을 때 우울함을 느끼게 됩니다.<br>주위 사람이 병이나 부상으로 힘들어하는 모습을<br>보는 것을 INTJ는 힘들어합니다.<br>주위 사람에게 우울함을 표현하는 것을 어려워<br>하기 때문에 우울함에 잠식당할 수 있습니다.<br>새로운 것을 모색하면서 긍정적으로 행동해보세요.<br>행동으로 옮겨야 우울한 마음도 깨끗하게 걷히게 됩니다.'} };

function run() {
  document.querySelector('#start').style.display="none";
  document.querySelector('#test').style.display="block";
  next();
};

document.querySelector('#start-btn').addEventListener('click', run);
document.querySelector('#A').addEventListener('click', function (){
  var type = document.querySelector('#type').value;
  var prevalue = document.querySelector('#'+type).value;
  document.querySelector('#'+type).value = prevalue+1;
  next();
});
document.querySelector('#B').addEventListener('click', next)
document.querySelector('#again').addEventListener('click', function(){
  document.querySelector('#test').style.display="block";
  document.querySelector('#result').style.display="none";
  i = 1;
  EI.value = SN.value = TF.value = JP.value = 0;
  next();
})

var i = 1;

function next() {
  if(i == 13){
      document.querySelector('#test').style.display="none";
      document.querySelector('#result').style.display="block";
      var mbti = '';
      (document.querySelector('#EI').value<2) ? mbti += 'I' : mbti +='E';
      (document.querySelector('#SN').value<2) ? mbti += 'N' : mbti +='S';
      (document.querySelector('#TF').value<2) ? mbti += 'F' : mbti +='T';
      (document.querySelector('#JP').value<2) ? mbti += 'P' : mbti +='J';
      console.log(mbti);
      document.querySelector('#mymbti').innerHTML = result[mbti]['mbti']
      document.querySelector('#explain').innerHTML = result[mbti]['explain']
  } else {
    document.querySelector('#number').innerHTML = i+'/12';
    document.querySelector('#progress').style.width= (i/12)*100+'%';
    document.querySelector('#title').innerHTML = testNu[i]['title'];
    document.querySelector('#description').innerHTML = testNu[i]['description'];
    document.querySelector('#type').value =testNu[i]['type'];
    document.querySelector('#A').innerHTML =testNu[i]['A'];
    document.querySelector('#B').innerHTML =testNu[i]['B'];
    i++
  }
}
