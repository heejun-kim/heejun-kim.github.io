---
layout: post
permalink: /category/marketingstory/tracking_utm_content,_utm_term_in_google_analytics_4/
title: "구글 애널리틱스 4(GA4)에서 utm_content, utm_term 추적하기"
date: 2020-12-06 17:13:00 +09:00
image : posts/09/google_analytics4_setting_utm_content_utm_term.png
tags:
  - 구글애널리틱스 4
  - utm매개변수
  - 실전
description: '구글 애널리틱스 4에서 기본 측정기준으로 존재하지 않아 당황해하시는 utm_content, utm_term을 추적하는 법을 알아보겠습니다.'
---



안녕하세요 오늘은 구글 애널리틱스 4를 처음 설치하고 데이터를 보려고 했을 때 가장 당황스러울 수 있는 utm_content, utm_term 매개변수가 추적되지 않는 문제를 해결해보겠습니다.

## utm 매개변수가 뭔가요?

간단하게 utm 매개변수에 대해 알아보고 넘어가겠습니다.<br>utm 매개변수는**Urchin Tracking Module**의 약자입니다. Urchin은 웹 사이트 트래픽을 추적하기 위한 소프트웨어로 현재는 구글이 인수해 google analytic가 되었습니다.<br> utm 매개변수를 사용하면 유입 출처, 마케팅 방식(광고 형식), 캠페인, 콘텐츠, 키워드를 더욱 정확히 추적할 수 있습니다. 이를 통해 디지털 마케터는 이전보다 **더 정확하게 광고 사용자와 비광고 사용자를 나누는 것이 가능해졌고 같은 매체에서도 어떤 캠페인, 콘텐츠, 키워드가 더 좋은 성과를 내고 있는지 분석**할 수 있게 되었습니다.

## utm 매개변수 사용법

utm 매개변수의 기본 형태는 다음과 같이 생겼습니다.<br>

```null
https://example.com/?utm_source=source_name&utm_medium=medium_name&utm_campaign=campaign_name&utm_term=keword&utm_content=contents_name
```

<ul>
<li><b>utm_source</b> : facebook, newsletter, google, naver 같은 유입 출처를 적어줍니다. 즉 고객이 어디서 유입되었는지 알려줍니다.
</li><br>
<li><b>utm_medium</b> : cpc, email, display, social 같이 어떤 마케팅 방식을 통해 고객이 유입되었는지 알 수 있게 적어줍니다.
</li><br>
<li><b>utm_campaign</b> : 캠페인 부분부터는 딱히 정해진 규칙 없이 마케터에 따라 다르게 사용됩니다. 다만 캠페인의 경우 추후 필터 기능을 이용해 분석하는 데 사용되므로 분석에 필요한 요소에 따라 규칙을 정해 작성하는 것이 좋습니다.
</li><br>
<li><b>utm_content</b> : 마케팅에 활용된 콘텐츠의 정보를 넣는 곳으로, 콘텐츠도 캠페인과 마찬가지로 분석에 필요한 요소에 따라 규칙을 정해 작성하는 것이 좋습니다.
</li><br>
<li><b>utm_term</b> : 검색광고에 활용되며, 해당 유입이 어떤 키워드를 통해 발생했는지 알려줍니다.
</li>
</ul>

utm 매개변수를 사용하는 것은 쉽습니다. 자신이 추적하고자 하는 웹사이트 url 맨 끝에 ?를 넣고 utm 매개변수를 붙여주기만 하면 됩니다. 그러면 해당 url로 랜딩페이지에 유입되었을 시에 자동으로 유니버설 구글 애널리틱스까지는 해당 정보를 적절한 측정기준에 넣어줍니다.  구글 애널리틱스 4에서는 콘텐츠와 키워드는 우리가 설정을 해줘야 합니다<br>구글이 제공하는 해당 사이트에서 쉽게 만들어볼 수 있으니 활용해보세요

**utm 매개변수 생성 주의사항**

1. 대소문자를 구별하므로 되도록이면 소문자로 만듭니다.
2. 기존 웹사이트 url에 이미 ? 파라미터가 있는 경우 ?를 사용하면 오류가 발생한다. 이 경우 ? 대 &를 사용하여 utm 매개변수를 연결합니다.

[구글 utm 생성 사이트](https://ga-dev-tools.appspot.com/campaign-url-builder/)

매번 해당 사이트에 가서 생성하는 것은 매우 번거로운 일이니, 현업에서는 구 데이터리셔스(현 마이티하이브)에서 배포했던 템플릿을 사용하는 것을 추천해 드립니다. 템플릿 내부에 utm 네이밍에 대한 정보도 함께 있으니 참고하셔서 알맞은 utm을 만들어보세요.

[utm 템플릿](https://docs.google.com/spreadsheets/d/1ho8ty_B08aIWvo3rLGvkulG-QrmLGzAEGQ1my3Aspsg/edit)

**템플릿 사용 주의사항**

1. 읽기 전용이므로 사본 만들기로 본인 드라이브에 만들어서 사용해야 합니다.
2. bit.ly 기능을 사용하려는 경우 본인의 API 코드를 발급 받아 사용해주세요


## 구글 애널리틱스 4 utm 매개변수 유실 해결

구글에서는 utm 매개변수에 대해서 필요한 항목만을 추가할 것을 권장하고 있고 필수 사항으로는 **utm_source**, **utm_medium**, **utm_campaign**을 지칭하고 있습니다. <br>그래서인지 구글 애널리틱스 4에서는 utm_content, utm_term이 자동으로 측정기준으로 만들어지지 않게 되어 있어 이를 맞춤 측정기준으로 만들어줘야 합니다. 지금부터 차근 차근 만들어보겠습니다.

1. 내가 테스트하고자 하는 url에 임의의 utm 매개변수를 단 뒤 해당 url에 접속합니다.

2. 구글 애널리틱스 4에 접속하여 실시간 탭에 들어가면 나의 접속 기록이 보이는 것을 확인할 수 있습니다.

   ![구글 애널리틱스 4 utm 세팅 1단계](/images/posts/09/google_analytics_4_utm_setting_step1.png)

3. 구글 애널리틱스 4의 특성에 따라 자동으로 page_view 이벤트가 찍혀있는 것을 확인할 수 있습니다. 해당 page_view 이벤트를 클릭하고 들어갑니다.

   ![구글 애널리틱스 4 utm 세팅 2단계](/images/posts/09/google_analytics_4_utm_setting_step2.png)

4. page_view 이벤트를 클릭하고 들어가면 구글 애널리틱스 4가 자동으로 수집해주는 매개변수를 확인할 수 있습니다. 놀랍게도 **utm_content도 구글 애널리틱스 4에서 이미 자동으로 수집**해주고 있었습니다.

   ![구글 애널리틱스 4 utm 세팅3단계](/images/posts/09/google_analytics_4_utm_setting_step3.png)

5. content라는 이름을 가진 매개변수를 눌러서 들어가면 내가 utm_conent에 설정해놨던 콘텐츠 이름이 보이는 것을 확인할 수 있습니다. 저는 test로 명명했기 때문에 test라고 값이 전달되었습니다.

   ![구글 애널리틱스 4 utm 세팅4단계](/images/posts/09/google_analytics_4_utm_setting_step4.png)

6. 같은 page_view 이벤트에서 term도 한 번 찾아볼까요? term이라는 매개변수 명으로 존재하고 있네요 마찬가지로 term을 눌러서 들어가 보면 utm_term에 설정해놨던 키워드가 보이는 것을 확인할 수 있습니다. 저는 test_term으로 명명했기 때문에 test_term이라고 값이 전달되었습니다.

   ![구글 애널리틱스 4 utm 세팅5단계](/images/posts/09/google_analytics_4_utm_setting_step5.png)

   ![구글 애널리틱스 4 utm 세팅6단계](/images/posts/09/google_analytics_4_utm_setting_step6.png)

7. 다른 utm 매개변수 값도 확인만 해보고 가보겠습니다. source, medium, campaign 매개변수 명에서 각각의 값들을 확인할 수 있습니다. 해당 3개의 값은 우리가 맞춤 측정기준을 만들어 주지 않아도 구글에서 만들어 놓은 소스, 매체, 캠페인이 포함된 측정기준으로 자동으로 전달이 됩니다.

   ![구글 애널리틱스 4 utm 세팅7-1단계](/images/posts/09/google_analytics_4_utm_setting_step7_1.png)

   ![구글 애널리틱스 4 utm 세팅7-2단계](/images/posts/09/google_analytics_4_utm_setting_step7_2.png)

   ![구글 애널리틱스 4 utm 세팅7-3단계](/images/posts/09/google_analytics_4_utm_setting_step7_3.png)

   ![구글 애널리틱스 4 utm 세팅7-4단계](/images/posts/09/google_analytics_4_utm_setting_step7_4.png)

   ![구글 애널리틱스 4 utm 세팅7-5단계](/images/posts/09/google_analytics_4_utm_setting_step7_5.png)

8. 그럼 utm_content, utm_term은 어떻게 맞춤 측정기준으로 만들어줄 수 있을까요? 구글 애널리틱스 4에서는 **매개변수 명을 활용하여 구글 태그매니저에서 설정을 하지 않아도 맞춤 측정기준을 만드는 것이 가능**해졌습니다. <br>원래 **매개변수는 고객의 특성, 정보를 저장**하고 분석 시 필터링을 위해 사용되므로 매개변수를 이용하여 맞춤 측정기준을 만들 수 있게 된건 매우 바람직한 일입니다. 그럼 지금부터 만들어보겠습니다.<br>**이벤트 - 모든 이벤트 - 맞춤 정의 관리**로 들어갑니다.

   ![구글 애널리틱스 4 utm 세팅8단계](/images/posts/09/google_analytics_4_utm_setting_step8.png)

9. 맞춤 측정기준 만들기를 누릅니다.

   ![구글 애널리틱스 4 utm 세팅9단계](/images/posts/09/google_analytics_4_utm_setting_step9.png)

10. 이벤트 매개변수 이름에 기존에 확인하고 왔던 content와 term을 넣어주고 맞춤 측정기준 이름에 적절한 이름을 넣어 맞춤 측정기준을 각각 생성해줍니다.

    ![구글 애널리틱스 4 utm 세팅10단계](/images/posts/09/google_analytics_4_utm_setting_step10.png)

    ![구글 애널리틱스 4 utm 세팅11단계](/images/posts/09/google_analytics_4_utm_setting_step11.png)

11. 생성을 하고 나오면 다음과 같이 맞춤 측정기준이 정상적으로 생성된 것을 확인할 수 있습니다.

    ![구글 애널리틱스 4 utm 세팅12단계](/images/posts/09/google_analytics_4_utm_setting_step12.png)

12. 이렇게 맞춤 측정기준으로 만들고 나면 **유니버설 애널리틱스에서 광고 콘텐츠, 키워드 측정기준을 활용했던 것처럼 분석 보고서나 획득 보고서에서 측정기준으로 활용**이 가능해집니다.



오늘은 구글 애널리틱스 4를 사용하면서 많은 분이 궁금해하셨던 utm 매개변수 추적에 대해 다뤄봤습니다. 알고 나면 별것 아닌데 매개변수나 utm 매개변수에 대한 개념이 없으면 쉽게 다가가기 어려운 주제인 것 같습니다. <br>당연하게 사용해야 한다고 해서 규칙을 외워 사용하기보다는 원리와 본질을 깨닫고 활용하는 것의 중요성을 다시 한번 깨달은 순간이었습니다.
다음에 더 알찬 글로 찾아뵙겠습니다. 감사합니다:-)
