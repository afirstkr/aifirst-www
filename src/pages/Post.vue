<template lang="pug">
  #wrapper
    #page-wrapper.gray-bg
      main-header

      .row.wrapper.border-bottom.white-bg.page-heading
        .col-lg-12
          ol.breadcrumb(style='margin-top: 18px;')
            h1 강의자료
            li
              a(href='index.html') 아카데미
            li.active
              strong 강의자료

      .wrapper.wrapper-content.animated.fadeInRight.article
        .row
          .col-lg-10.col-lg-offset-1
            .ibox
              .ibox-content
                .pull-right
                  button.btn.btn-white.btn-xs(type='button') 유머
                  button.btn.btn-white.btn-xs(type='button') 파이썬
                .text-center.article-title
                  span.text-muted
                    i.fa.fa-clock-o
                    |  28th Oct 2015
                  h1
                    | {{title}}
                p
                  | Many desktop publishing packages and web page editors now use
                  strong Lorem Ipsum as their default model text
                  | , and a search for 'lorem ipsum' will uncover many
                  |                                     web
                p
                  | 사람들이 기계 학습(Machine Learning)에 대해 이야기하는 것을 들어 봤지만, 그게 무슨 뜻인지는 명확하지는 않은가요? 동료들과 대화할 때 머리만 끄덕이고 있는 내 모습에 지쳤습니까? 그럼 이제 바꿔봅시다!
                  | 이 글은 기계 학습에 대해 궁금한 점은 있지만 어디서부터 시작해야할지 모르는 분들을 위한 안내서입니다. 위키 피디아의 글을 읽고 좌절하고 포기해버린 많은 사람들은 누군가 좀더 쉬운 설명을 해주길 바란다고 생각합니다.
                  | 그래서 이글을 쓰게 되었습니다. 이 글의 목표는 누구에게나 쉽게 다가가는 데 있습니다 — 이는 글에 많은 일반화가 있음을 의미합니다. 하지만 어떻습니까? 그래서 더 많은 사람들이 ML에 관심을 가지게 된다면, 목표를
                  | 달성한 것입니다. 기계 학습(Machine Learning)이란 무엇인가? 기계 학습은 문제를 해결하기 위한 맞춤 코드(custom code)를 작성하지 않고도 일련의 데이터에 대해 무언가 흥미로운 것을 알려줄 수 있는
                  | 일반 알고리즘(generic algorithms)이 있다는 아이디어입니다. 코드를 작성하는 대신 데이터를 일반 알고리즘에 공급하면, 데이터를 기반으로 한 자체 로직이 만들어 지게 됩니다. 예를 들어, 이러한 알고리즘의
                  | 한 종류가 분류(classification) 알고리즘입니다. 이 알고리즘을 사용하면 데이터를 서로 다른 그룹으로 분류할 수 있습니다. 손으로 쓴 숫자를 인식하는 데 사용 된 것과 동일한 분류 알고리즘을 그대로 코드 변경없이
                  | 사용해서, 이메일을 스팸과 스팸이 아닌 것으로 분류 할 수도 있습니다. 결국 동일한 알고리즘이지만 다른 학습 데이터를 제공하면 다른 분류 로직이 자동으로 만들어지게 됩니다. 이 기계 학습 알고리즘은 서로 다른 많은 분류
                  | 문제에 재사용될 수있는 블랙 박스입니다.
                p
                  i
                    | Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated
                    | they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small
                    | river named Duden flows by their place and supplies it with the necessary regelialia. It is a
                    | paradisematic country, in which roasted parts of sentences fly into your mouth.
                p
                  | The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli,
                  | but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the
                  | belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had
                  | a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village
                  | and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek,
                p
                  | Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled.
                  | Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves
                  | quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury
                  | box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy
                  | red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard’s job is to
                  | vex chumps quickly in fog. Watch "Jeopardy!", Alex Trebek's fun TV quiz game. Woven silk pyjamas
                  | exchanged for blue quartz. Brawny gods just
                p
                  | Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs
                  | blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex.
                hr
                .row
                  .col-md-6
                    h5 Tags:
                    button.btn.btn-primary.btn-xs(type='button') 유머
                    button.btn.btn-white.btn-xs(type='button') 파이썬
                  .col-md-6
                    .small.text-right
                      h5 Stats:
                      div
                        i.fa.fa-comments-o  
                        |  56 comments
                      i.fa.fa-eye  
                      |  144 views

</template>

<script lang='coffee'>
################################################
# coffee 
################################################

import MainHeader from '@/components/MainHeader'

export default
  name: 'Post'
  components: { MainHeader }
  data: () -> title: '기계 학습(Machine Learning, 머신 러닝)은 즐겁다!'

################################################
</script>


<style>
</style>