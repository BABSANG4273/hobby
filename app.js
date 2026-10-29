const CATEGORIES = [
  { id: 'internet', name: '인터넷/디지털', icon: '💻', desc: '온라인·IT·콘텐츠' },
  { id: 'sports', name: '스포츠/피트니스', icon: '⚽', desc: '구기·라켓·실내운동' },
  { id: 'outdoor', name: '야외활동/자연', icon: '🏕️', desc: '산책·캠핑·아웃도어' },
  { id: 'craft', name: '창작/공예', icon: '🎨', desc: '드로잉·DIY·핸드메이드' },
  { id: 'music', name: '음악/공연', icon: '🎸', desc: '악기·노래·감상' },
  { id: 'food', name: '요리/미식', icon: '🍳', desc: '쿠킹·베이킹·커피' },
  { id: 'mind', name: '인문/교양', icon: '📚', desc: '독서·언어·글쓰기' },
  { id: 'play', name: '수집/보드게임', icon: '🎲', desc: '퍼즐·모임·취향수집' }
];

const HOBBIES = [
  // 1. 인터넷/디지털
  {
    id: 'blogging',
    category: 'internet',
    name: '블로그 & 뉴스레터 운영',
    icon: '✍️',
    summary: '일상, 리뷰, 관심 분야의 지식을 글로 기록하고 이웃과 소통하는 디지털 기록 취미입니다.',
    place: '실내',
    social: '혼자',
    cost: '무료~저렴',
    costRank: 1,
    energy: '정적',
    difficulty: '쉬움',
    diffRank: 1,
    popular: 95,
    tags: ['글쓰기', '디지털노마드', '기록', '수익화가능'],
    equipment: '노트북 또는 스마트폰, 블로그 계정(네이버/티스토리/벨로그 등)',
    tips: [
      '처음부터 완벽한 글을 쓰려 하기보다 짧은 맛집·책·영화 리뷰부터 시작해 보세요.',
      '주 1~2회 정해진 요일에 꾸준히 업로드하는 습관이 가장 중요합니다.'
    ]
  },
  {
    id: 'video-editing',
    category: 'internet',
    name: '유튜브 숏폼 & 브이로그 편집',
    icon: '🎬',
    summary: '스마트폰으로 찍은 일상이나 여행 영상을 감각적으로 편집해 나만의 채널에 공유해 보세요.',
    place: '실내',
    social: '혼자',
    cost: '무료~저렴',
    costRank: 1,
    energy: '정적',
    difficulty: '보통',
    diffRank: 2,
    popular: 93,
    tags: ['영상편집', '브이로그', '릴스', '크리에이터'],
    equipment: '스마트폰, 무료 편집 앱(캡컷, VLLO 등) 또는 PC',
    tips: [
      '처음에는 30초~1분 길이의 쇼츠/릴스 영상으로 컷 편집 감각을 익혀 보세요.',
      '무료 배경음악과 자막 템플릿만 잘 활용해도 완성도가 크게 올라갑니다.'
    ]
  },
  {
    id: 'coding-web',
    category: 'internet',
    name: '나만의 웹사이트/앱 코딩',
    icon: '🧑‍💻',
    summary: 'HTML, 파이썬, 노코드 툴 등을 배워 나에게 필요한 작은 웹서비스나 자동화 도구를 직접 만듭니다.',
    place: '실내',
    social: '혼자',
    cost: '무료~저렴',
    costRank: 1,
    energy: '정적',
    difficulty: '보통',
    diffRank: 2,
    popular: 90,
    tags: ['프로그래밍', '사이드프로젝트', '웹개발', 'AI활용'],
    equipment: 'PC 또는 노트북, 무료 코드 에디터(VS Code)',
    tips: [
      '간단한 투두리스트, 계산기, 취미 추천 페이지처럼 작은 프로젝트부터 완성해 보세요.',
      'AI 코딩 도구를 함께 활용하면 초보자도 훨씬 빠르게 결과물을 만들 수 있습니다.'
    ]
  },
  {
    id: 'digital-drawing',
    category: 'internet',
    name: '아이패드 디지털 드로잉 & 이모티콘 제작',
    icon: '🖌️',
    summary: '태블릿으로 일러스트, 인스타툰, 메신저 이모티콘을 그리며 창작의 즐거움을 느껴보세요.',
    place: '무관',
    social: '혼자',
    cost: '보통',
    costRank: 2,
    energy: '정적',
    difficulty: '쉬움',
    diffRank: 1,
    popular: 92,
    tags: ['프로크리에이트', '인스타툰', '이모티콘', '일러스트'],
    equipment: '태블릿 & 스타일러스 펜 (또는 펜 타블렛), 드로잉 앱',
    tips: [
      '복잡한 그림보다 동그라미 캐릭터에 감정 표현을 넣는 이모티콘 스케치부터 시작해 보세요.',
      '하루 한 컷 그림일기를 그리면 실력이 빠르게 늡니다.'
    ]
  },
  {
    id: '3d-modeling',
    category: 'internet',
    name: '3D 모델링 (블렌더 입문)',
    icon: '🧊',
    summary: '무료 3D 프로그램 블렌더(Blender)로 귀여운 방 디오라마나 캐릭터를 입체로 만들어 봅니다.',
    place: '실내',
    social: '혼자',
    cost: '무료~저렴',
    costRank: 1,
    energy: '정적',
    difficulty: '어려움',
    diffRank: 3,
    popular: 82,
    tags: ['블렌더', '3D아트', '그래픽디자인', '디지털아트'],
    equipment: 'PC/노트북, 마우스(3버튼 휠 마우스 권장), Blender(무료)',
    tips: [
      '유튜브의 유명한 도넛 만들기 튜토리얼이나 아이소메트릭 방 만들기 강의를 따라 해보세요.',
      '단축키 몇 가지만 손에 익으면 찰흙을 빚듯 재미있게 작업할 수 있습니다.'
    ]
  },

  // 2. 스포츠/피트니스
  {
    id: 'badminton',
    category: 'sports',
    name: '배드민턴',
    icon: '🏸',
    summary: '가볍게 시작해 짜릿한 스매싱 쾌감까지 즐길 수 있는 대표적인 생활 체육 스포츠입니다.',
    place: '실내',
    social: '함께',
    cost: '무료~저렴',
    costRank: 1,
    energy: '활동적',
    difficulty: '쉬움',
    diffRank: 1,
    popular: 91,
    tags: ['라켓스포츠', '유산소', '동호회', '실내운동'],
    equipment: '배드민턴 라켓, 셔틀콕, 실내 전용 운동화',
    tips: [
      '동네 실내 배드민턴장이나 구민체육센터 일일 입장으로 가볍게 경험해 보세요.',
      '부상 방지를 위해 발목을 잘 잡아주는 실내 코트화를 착용하는 것이 좋습니다.'
    ]
  },
  {
    id: 'bouldering',
    category: 'sports',
    name: '실내 클라이밍 (볼더링)',
    icon: '🧗',
    summary: '알록달록한 홀드를 잡고 벽을 오르며 전신 근력과 문제 해결의 성취감을 동시에 얻는 스포츠입니다.',
    place: '실내',
    social: '함께',
    cost: '보통',
    costRank: 2,
    energy: '활동적',
    difficulty: '보통',
    diffRank: 2,
    popular: 96,
    tags: ['클라이밍', '전신운동', '코어강화', '성취감'],
    equipment: '편한 운동복 (암벽화와 초크는 암장에서 대여 가능)',
    tips: [
      '대부분의 클라이밍장에 있는 "일일 체험 강습 패키지"로 기본 낙법과 규칙을 배우면 안전합니다.',
      '팔 힘만으로 당기기보다 다리 힘과 무게중심을 이동하는 것이 핵심입니다.'
    ]
  },
  {
    id: 'swimming',
    category: 'sports',
    name: '수영',
    icon: '🏊',
    summary: '관절에 무리 없이 전신 체력과 심폐 지구력을 길러주는 사계절 인기 실내 스포츠입니다.',
    place: '실내',
    social: '혼자',
    cost: '보통',
    costRank: 2,
    energy: '활동적',
    difficulty: '보통',
    diffRank: 2,
    popular: 94,
    tags: ['전신유산소', '체력증진', '초보강습', '아침운동'],
    equipment: '실내 수영복, 수모, 수경, 세면도구',
    tips: [
      '시립/구민 체육센터의 초급반 강습을 신청하면 호흡법과 발차기부터 체계적으로 배울 수 있습니다.',
      '처음에는 물에 힘을 빼고 편안히 뜨는 감각에 집중해 보세요.'
    ]
  },
  {
    id: 'tennis',
    category: 'sports',
    name: '테니스',
    icon: '🎾',
    summary: '경쾌한 타구감과 활발한 랠리가 매력적인 코트 위의 신사·숙녀 스포츠입니다.',
    place: '실외',
    social: '함께',
    cost: '보통',
    costRank: 2,
    energy: '활동적',
    difficulty: '보통',
    diffRank: 2,
    popular: 90,
    tags: ['라켓스포츠', '야외코트', '스크린테니스', '유산소'],
    equipment: '테니스화, 운동복 (초기 레슨 시 라켓 대여 가능)',
    tips: [
      '실내 무인 테니스 연습장이나 1~2개월 입문 레슨으로 포핸드/백핸드 스윙 자세를 먼저 익혀보세요.',
      '어느 정도 랠리가 가능해지면 주말 테니스 모임에서 게임을 즐길 수 있습니다.'
    ]
  },
  {
    id: 'bowling',
    category: 'sports',
    name: '볼링',
    icon: '🎳',
    summary: '날씨에 상관없이 쾌적한 실내에서 핀을 쓰러뜨리는 스트라이크 쾌감을 즐길 수 있습니다.',
    place: '실내',
    social: '함께',
    cost: '무료~저렴',
    costRank: 1,
    energy: '보통',
    difficulty: '쉬움',
    diffRank: 1,
    popular: 86,
    tags: ['실내스포츠', '스트레스해소', '동호회', '집중력'],
    equipment: '볼링장 하우스 볼 & 대여 볼링화 (입문 시 개인 장비 불필요)',
    tips: [
      '손가락에 무리가 가지 않도록 내 체중에 맞는 파운드의 공을 고르는 것이 첫걸음입니다.',
      '스텝(4스텝)과 일정한 스윙 리듬을 연습하면 점수가 금방 올라갑니다.'
    ]
  },

  // 3. 야외활동/자연
  {
    id: 'running',
    category: 'outdoor',
    name: '러닝 & 마라톤 (런닝크루)',
    icon: '🏃',
    summary: '운동화 한 켤레만 있으면 공원이나 강변 어디서든 상쾌한 바람을 맞으며 달릴 수 있습니다.',
    place: '실외',
    social: '혼자',
    cost: '무료~저렴',
    costRank: 1,
    energy: '활동적',
    difficulty: '쉬움',
    diffRank: 1,
    popular: 98,
    tags: ['조깅', '마라톤', '런닝크루', '체력관리'],
    equipment: '쿠션 좋은 러닝화, 가벼운 운동복, 러닝 앱(나이키런/스트라바)',
    tips: [
      '처음부터 빠르게 달리지 말고 옆 사람과 대화할 수 있을 정도의 느린 페이스로 20분만 달려보세요.',
      '5km, 10km 소규모 마라톤 대회를 목표로 잡으면 큰 동기부여가 됩니다.'
    ]
  },
  {
    id: 'hiking',
    category: 'outdoor',
    name: '등산 & 둘레길 트레킹',
    icon: '⛰️',
    summary: '계절마다 바뀌는 숲의 풍경을 감상하며 정상에 올랐을 때의 탁 트인 해방감을 만끽하세요.',
    place: '실외',
    social: '함께',
    cost: '무료~저렴',
    costRank: 1,
    energy: '활동적',
    difficulty: '쉬움',
    diffRank: 1,
    popular: 93,
    tags: ['산행', '트레킹', '자연힐링', '주말나들이'],
    equipment: '트레킹화/등산화, 생수, 가벼운 배낭, 바람막이',
    tips: [
      '도심 근처의 낮은 산(왕복 1~2시간 코스)이나 평탄한 숲길 둘레길부터 시작해 보세요.',
      '블랙야크 100대 명산 인증이나 스탬프 투어를 활용하면 더욱 재미있습니다.'
    ]
  },
  {
    id: 'camping',
    category: 'outdoor',
    name: '감성 캠핑 & 피크닉',
    icon: '⛺',
    summary: '자연 속에서 텐트나 돗자리를 펴고 모닥불(불멍)과 맛있는 야외 요리를 즐기는 힐링 취미입니다.',
    place: '실외',
    social: '함께',
    cost: '다소 높음',
    costRank: 3,
    energy: '보통',
    difficulty: '보통',
    diffRank: 2,
    popular: 91,
    tags: ['불멍', '차박', '글램핑', '자연휴식'],
    equipment: '의자·테이블(경량 체어), 타프 또는 텐트, 랜턴',
    tips: [
      '장비를 처음부터 모두 사기보다 글램핑이나 캠핑 장비 대여점, 혹은 당일치기 한강/공원 피크닉으로 시작해 보세요.',
      '내가 어떤 스타일(미니멀, 오토캠핑, 백패킹)을 좋아하는지 파악한 뒤 장비를 들이는 것이 좋습니다.'
    ]
  },
  {
    id: 'cycling',
    category: 'outdoor',
    name: '자전거 라이딩 (자출/국토종주)',
    icon: '🚴',
    summary: '강변 자전거 도로를 따라 시원한 속도감을 느끼며 멀리 있는 풍경까지 여행해 보세요.',
    place: '실외',
    social: '혼자',
    cost: '보통',
    costRank: 2,
    energy: '활동적',
    difficulty: '쉬움',
    diffRank: 1,
    popular: 89,
    tags: ['라이딩', '따릉이', '자전거도로', '유산소'],
    equipment: '자전거(공영자전거 대여 가능), 헬멧, 장갑',
    tips: [
      '공영자전거(따릉이 등)를 대여해 강변 자전거 도로를 1시간 정도 달려보며 재미를 붙여보세요.',
      '야간 라이딩 시에는 전조등과 후미등, 헬멧 착용이 필수입니다.'
    ]
  },
  {
    id: 'photo-walk',
    category: 'outdoor',
    name: '출사 & 필름카메라 산책',
    icon: '📷',
    summary: '카메라나 스마트폰을 들고 골목길, 공원, 노을 명소를 걸으며 순간의 빛과 풍경을 담아냅니다.',
    place: '실외',
    social: '혼자',
    cost: '보통',
    costRank: 2,
    energy: '보통',
    difficulty: '쉬움',
    diffRank: 1,
    popular: 88,
    tags: ['스냅사진', '필름카메라', '골목산책', '감성기록'],
    equipment: '스마트폰 카메라, 일회용 필름카메라 또는 미러리스 카메라',
    tips: [
      '일회용 필름카메라(코닥/후지 등) 한 롤을 사서 여행지나 동네 산책길의 풍경을 찍어 인화해 보세요.',
      '해가 지기 직전 1시간(골든아워)에 촬영하면 누구나 분위기 있는 사진을 건질 수 있습니다.'
    ]
  },

  // 4. 창작/공예
  {
    id: 'knitting',
    category: 'craft',
    name: '뜨개질 & 코바늘 소품 만들기',
    icon: '🧶',
    summary: '부드러운 털실로 수세미, 키링, 가방, 목도리를 한 코 한 코 완성하는 잡념 삭제 힐링 취미입니다.',
    place: '실내',
    social: '혼자',
    cost: '무료~저렴',
    costRank: 1,
    energy: '정적',
    difficulty: '쉬움',
    diffRank: 1,
    popular: 89,
    tags: ['코바늘', '대바늘', '핸드메이드', '집순이취미'],
    equipment: '코바늘(5~6호), 연습용 실, 단수링 (초보 DIY 키트 추천)',
    tips: [
      '작고 금방 완성되는 코바늘 티코스터(컵받침)나 귀여운 키링 키트부터 시작해 보세요.',
      '유튜브의 슬로우 모션 기초 코바늘 영상을 보며 사슬뜨기, 짧은뜨기만 익히면 응용이 쉽습니다.'
    ]
  },
  {
    id: 'pottery',
    category: 'craft',
    name: '도자기 공예 & 핸드빌딩',
    icon: '🏺',
    summary: '차분하게 흙을 만지며 세상에 하나뿐인 나만의 머그컵, 접시, 화병을 빚어보는 공예입니다.',
    place: '실내',
    social: '혼자',
    cost: '보통',
    costRank: 2,
    energy: '정적',
    difficulty: '쉬움',
    diffRank: 1,
    popular: 85,
    tags: ['원데이클래스', '도예', '식기만들기', '촉감힐링'],
    equipment: '동네 도예 공방 원데이 클래스 신청 (준비물 없음)',
    tips: [
      '공방 원데이 클래스로 물레 체험이나 손으로 빚는 핸드빌딩을 먼저 경험해 보세요.',
      '내가 직접 만든 그릇에 음식을 담아 먹을 때의 만족감이 아주 큽니다.'
    ]
  },
  {
    id: 'oil-pastel',
    category: 'craft',
    name: '오일파스텔 드로잉',
    icon: '🖍️',
    summary: '크레파스처럼 꾸덕하고 따뜻한 질감으로 노을, 꽃, 풍경을 손쉽게 그리는 미술 취미입니다.',
    place: '실내',
    social: '혼자',
    cost: '무료~저렴',
    costRank: 1,
    energy: '정적',
    difficulty: '쉬움',
    diffRank: 1,
    popular: 87,
    tags: ['오일파스텔', '감성그림', '미술입문', '엽서만들기'],
    equipment: '문교 오일파스텔(48색 내외), 오일파스텔 전용 스케치북, 마스킹테이프',
    tips: [
      '종이 가장자리에 마스킹테이프를 붙이고 노을 그라데이션을 문질러 표현한 뒤 테이프를 떼어내면 멋진 엽서가 완성됩니다.',
      '세밀한 묘사보다 색감을 겹쳐 바르는 재미에 집중해 보세요.'
    ]
  },

  // 5. 음악/공연
  {
    id: 'guitar-ukulele',
    category: 'music',
    name: '통기타 & 우쿨렐레 연주',
    icon: '🎸',
    summary: '좋아하는 노래를 직접 반주하며 흥얼거릴 수 있는 가장 친숙하고 로맨틱한 악기 취미입니다.',
    place: '실내',
    social: '혼자',
    cost: '보통',
    costRank: 2,
    energy: '정적',
    difficulty: '보통',
    diffRank: 2,
    popular: 90,
    tags: ['악기연주', '통기타', '우쿨렐레', '코드반주'],
    equipment: '입문용 통기타 또는 우쿨렐레, 튜너(스마트폰 앱 가능)',
    tips: [
      '기타 손가락 통증이 걱정된다면 줄이 부드럽고 크기가 작은 우쿨렐레로 먼저 시작해 보세요.',
      '기본 코드 4개(C, G, Am, F)만 익혀도 수십 곡의 대중가요를 연주할 수 있습니다.'
    ]
  },
  {
    id: 'piano-kalimba',
    category: 'music',
    name: '피아노 & 칼림바 연주',
    icon: '🎹',
    summary: '아름다운 건반 선율이나 맑은 오르골 소리가 나는 칼림바로 영화·애니메이션 OST를 연주합니다.',
    place: '실내',
    social: '혼자',
    cost: '보통',
    costRank: 2,
    energy: '정적',
    difficulty: '보통',
    diffRank: 2,
    popular: 88,
    tags: ['성인피아노', '칼림바', 'OST연주', '힐링음악'],
    equipment: '칼림바(2~3만 원대) 또는 디지털 피아노 / 성인 피아노 학원 연습실',
    tips: [
      '집에 악기를 두기 부담스럽다면 손바닥만 한 칼림바로 시작하거나 동네 성인 피아노 학원의 연습실을 이용해 보세요.',
      '내가 가장 좋아하는 영화 OST 한 곡 완주를 첫 목표로 잡아보세요.'
    ]
  },

  // 6. 요리/미식
  {
    id: 'home-cafe',
    category: 'food',
    name: '홈카페 & 핸드드립 커피',
    icon: '☕',
    summary: '원두의 산지별 향미를 음미하며 내 손으로 직접 맛있는 드립 커피와 음료를 내리는 취미입니다.',
    place: '실내',
    social: '혼자',
    cost: '보통',
    costRank: 2,
    energy: '정적',
    difficulty: '쉬움',
    diffRank: 1,
    popular: 93,
    tags: ['핸드드립', '원두탐방', '홈카페', '커피브루잉'],
    equipment: '드리퍼, 여과지, 드립포트, 소량의 신선한 홀빈/분쇄 원두',
    tips: [
      '동네 로스터리 카페에서 100g~200g씩 다양한 원두를 사서 맛과 향의 차이를 기록해 보세요.',
      '아침에 커피 내리는 5분이 하루의 기분을 상쾌하게 바꿔줍니다.'
    ]
  },
  {
    id: 'home-baking',
    category: 'food',
    name: '홈베이킹 (구움과자 & 쿠키)',
    icon: '🥐',
    summary: '집안 가득 퍼지는 달콤하고 고소한 버터 향기와 함께 휘낭시에, 스콘, 쿠키를 구워보세요.',
    place: '실내',
    social: '혼자',
    cost: '보통',
    costRank: 2,
    energy: '보통',
    difficulty: '보통',
    diffRank: 2,
    popular: 91,
    tags: ['베이킹', '디저트만들기', '에어프라이어베이킹', '선물추천'],
    equipment: '오븐 또는 에어프라이어, 전자저울, 볼, 주걱',
    tips: [
      '베이킹은 계량이 생명입니다! 저렴한 디지털 주방저울 하나만 준비하면 실패 확률이 확 줄어듭니다.',
      '노오븐 디저트나 에어프라이어 스콘/쿠키 레시피부터 가볍게 도전해 보세요.'
    ]
  },

  // 7. 인문/교양
  {
    id: 'reading-club',
    category: 'mind',
    name: '독서 & 북클럽 모임',
    icon: '📖',
    summary: '좋은 책을 읽고 마음에 남는 문장을 필사하거나 독서 모임에서 다양한 시선을 나눕니다.',
    place: '무관',
    social: '함께',
    cost: '무료~저렴',
    costRank: 1,
    energy: '정적',
    difficulty: '쉬움',
    diffRank: 1,
    popular: 92,
    tags: ['독서모임', '필사', '서점투어', '자기계발'],
    equipment: '책 한 권(도서관 대여/전자책 가능), 노트와 펜',
    tips: [
      '하루 10쪽 읽기처럼 아주 작은 목표부터 시작해 독서 루틴을 만들어 보세요.',
      '혼자 완독이 어렵다면 동네 독립서점이나 온라인 독서 모임에 참여해 보세요.'
    ]
  },
  {
    id: 'foreign-lang',
    category: 'mind',
    name: '외국어 회화 & 언어교환',
    icon: '🌏',
    summary: '영어, 일본어, 스페인어 등 좋아하는 나라의 드라마와 앱으로 새로운 언어를 익힙니다.',
    place: '무관',
    social: '혼자',
    cost: '무료~저렴',
    costRank: 1,
    energy: '정적',
    difficulty: '보통',
    diffRank: 2,
    popular: 87,
    tags: ['외국어공부', '듀오링고', '여행회화', '드라마쉐도잉'],
    equipment: '스마트폰 학습 앱, 좋아하는 해외 드라마/유튜브 채널',
    tips: [
      '시험공부가 아닌 취미인 만큼, 내가 좋아하는 영화·애니메이션 대사를 따라 읽는 쉐도잉으로 재미있게 접근해 보세요.'
    ]
  },

  // 8. 수집/보드게임
  {
    id: 'boardgame',
    category: 'play',
    name: '전략 보드게임 & 방탈출',
    icon: '🎲',
    summary: '스마트폰 화면에서 벗어나 친구·동호회 사람들과 머리를 맞대고 추리와 전략을 펼칩니다.',
    place: '실내',
    social: '함께',
    cost: '무료~저렴',
    costRank: 1,
    energy: '보통',
    difficulty: '쉬움',
    diffRank: 1,
    popular: 89,
    tags: ['보드게임카페', '두뇌게임', '소셜모임', '추리'],
    equipment: '보드게임 카페 방문 또는 입문용 보드게임(스플렌더, 루미큐브 등)',
    tips: [
      '요즘 보드게임 카페에는 태블릿 영상으로 룰을 쉽게 설명해 주는 시스템이 잘 되어 있어 초보자도 바로 즐길 수 있습니다.'
    ]
  },
  {
    id: 'lego-puzzle',
    category: 'play',
    name: '레고 & 미니어처/직소퍼즐 조립',
    icon: '🧩',
    summary: '설명서를 따라 조각을 하나씩 맞추며 멋진 건축물, 꽃다발, 인테리어 소품을 완성합니다.',
    place: '실내',
    social: '혼자',
    cost: '보통',
    costRank: 2,
    energy: '정적',
    difficulty: '쉬움',
    diffRank: 1,
    popular: 86,
    tags: ['레고보타니컬', '직소퍼즐', '미니어처하우스', '몰입취미'],
    equipment: '레고 세트, 500~1000피스 퍼즐 또는 DIY 미니어처 키트',
    tips: [
      '인테리어 소품으로도 인기가 많은 레고 보타니컬(꽃다발) 시리즈나 300피스 명화 퍼즐부터 시작해 보세요.'
    ]
  }
];

// State
const state = {
  selectedCategories: new Set(),
  filters: {
    place: 'all',
    social: 'all',
    cost: 'all',
    energy: 'all'
  },
  searchQuery: '',
  sortBy: 'popular',
  savedOnly: false,
  savedIds: new Set(JSON.parse(localStorage.getItem('hobbyfinder_saved') || '[]'))
};

// DOM Elements
const categoryGrid = document.getElementById('categoryGrid');
const hobbyGrid = document.getElementById('hobbyGrid');
const resultsHeading = document.getElementById('resultsHeading');
const resultsCount = document.getElementById('resultsCount');
const emptyState = document.getElementById('emptyState');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const sortSelect = document.getElementById('sortSelect');
const resetCategoryBtn = document.getElementById('resetCategoryBtn');
const resetAllBtn = document.getElementById('resetAllBtn');
const emptyResetBtn = document.getElementById('emptyResetBtn');
const savedDrawerBtn = document.getElementById('savedDrawerBtn');
const savedCount = document.getElementById('savedCount');
const randomRecommendBtn = document.getElementById('randomRecommendBtn');
const logoBtn = document.getElementById('logoBtn');

const detailModal = document.getElementById('detailModal');
const modalBody = document.getElementById('modalBody');
const closeModalBtn = document.getElementById('closeModalBtn');

// Initialize
function init() {
  renderCategories();
  updateSavedCount();
  renderHobbies();
  bindEvents();
}

function getCategoryName(catId) {
  const found = CATEGORIES.find((c) => c.id === catId);
  return found ? found.name : '';
}

// Render Categories
function renderCategories() {
  categoryGrid.innerHTML = CATEGORIES.map((cat) => {
    const count = HOBBIES.filter((h) => h.category === cat.id).length;
    const isActive = state.selectedCategories.has(cat.id);
    return `
      <button class="category-card ${isActive ? 'active' : ''}" data-category="${cat.id}" type="button">
        <span class="category-icon">${cat.icon}</span>
        <span class="category-name">${cat.name}</span>
        <span class="category-desc">${cat.desc}</span>
        <span class="category-count">${count}개 취미</span>
      </button>
    `;
  }).join('');
}

// Filter & Sort Hobbies
function getFilteredHobbies() {
  return HOBBIES.filter((hobby) => {
    // Saved filter
    if (state.savedOnly && !state.savedIds.has(hobby.id)) {
      return false;
    }

    // Category filter
    if (state.selectedCategories.size > 0 && !state.selectedCategories.has(hobby.category)) {
      return false;
    }

    // Sub-filters
    if (state.filters.place !== 'all') {
      if (state.filters.place === '무관') {
        if (hobby.place !== '무관') return false;
      } else {
        if (hobby.place !== state.filters.place && hobby.place !== '무관') return false;
      }
    }

    if (state.filters.social !== 'all' && hobby.social !== state.filters.social) {
      return false;
    }

    if (state.filters.cost !== 'all' && hobby.cost !== state.filters.cost) {
      return false;
    }

    if (state.filters.energy !== 'all' && hobby.energy !== state.filters.energy) {
      return false;
    }

    // Search query
    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.trim().toLowerCase();
      const matchName = hobby.name.toLowerCase().includes(q);
      const matchSummary = hobby.summary.toLowerCase().includes(q);
      const matchTags = hobby.tags.some((t) => t.toLowerCase().includes(q));
      const matchCat = getCategoryName(hobby.category).toLowerCase().includes(q);
      if (!matchName && !matchSummary && !matchTags && !matchCat) {
        return false;
      }
    }

    return true;
  }).sort((a, b) => {
    if (state.sortBy === 'popular') return b.popular - a.popular;
    if (state.sortBy === 'easy') return a.diffRank - b.diffRank;
    if (state.sortBy === 'cheap') return a.costRank - b.costRank;
    if (state.sortBy === 'name') return a.name.localeCompare(b.name, 'ko');
    return 0;
  });
}

// Check if any filter is active
function hasActiveFilters() {
  return (
    state.selectedCategories.size > 0 ||
    state.filters.place !== 'all' ||
    state.filters.social !== 'all' ||
    state.filters.cost !== 'all' ||
    state.filters.energy !== 'all' ||
    state.searchQuery.trim() !== '' ||
    state.savedOnly
  );
}

// Render Hobbies
function renderHobbies() {
  const filtered = getFilteredHobbies();

  // Heading update
  if (state.savedOnly) {
    resultsHeading.textContent = '❤️ 내가 찜한 취미 목록';
  } else if (state.selectedCategories.size === 1) {
    const catId = Array.from(state.selectedCategories)[0];
    resultsHeading.textContent = `${getCategoryName(catId)} 추천 취미`;
  } else if (state.selectedCategories.size > 1) {
    resultsHeading.textContent = `선택한 ${state.selectedCategories.size}개 분야 맞춤 취미`;
  } else {
    resultsHeading.textContent = '전체 세부 취미 추천';
  }

  resultsCount.textContent = `${filtered.length}개`;
  resetAllBtn.hidden = !hasActiveFilters();

  if (filtered.length === 0) {
    hobbyGrid.innerHTML = '';
    emptyState.hidden = false;
    return;
  }

  emptyState.hidden = true;
  hobbyGrid.innerHTML = filtered
    .map((hobby) => {
      const isLiked = state.savedIds.has(hobby.id);
      return `
        <article class="hobby-card" data-id="${hobby.id}">
          <div>
            <div class="card-top">
              <div class="hobby-icon-wrap">${hobby.icon}</div>
              <div class="card-badges">
                <span class="cat-badge">${getCategoryName(hobby.category)}</span>
                <button class="like-btn ${isLiked ? 'liked' : ''}" data-like-id="${hobby.id}" title="관심 취미 찜하기" aria-label="찜하기">
                  ${isLiked ? '❤️' : '🤍'}
                </button>
              </div>
            </div>
            <h3 class="hobby-title">${hobby.name}</h3>
            <p class="hobby-summary">${hobby.summary}</p>
          </div>

          <div>
            <div class="hobby-meta">
              <div class="meta-item">📍 장소: <strong>${hobby.place}</strong></div>
              <div class="meta-item">👥 인원: <strong>${hobby.social}</strong></div>
              <div class="meta-item">💰 비용: <strong>${hobby.cost}</strong></div>
              <div class="meta-item">⚡ 에너지: <strong>${hobby.energy}</strong></div>
            </div>
            <div class="hobby-tags">
              ${hobby.tags.map((tag) => `<span class="tag">#${tag}</span>`).join('')}
            </div>
          </div>
        </article>
      `;
    })
    .join('');
}

// Save / Like Toggle
function toggleSave(hobbyId) {
  if (state.savedIds.has(hobbyId)) {
    state.savedIds.delete(hobbyId);
  } else {
    state.savedIds.add(hobbyId);
  }
  localStorage.setItem('hobbyfinder_saved', JSON.stringify(Array.from(state.savedIds)));
  updateSavedCount();
  renderHobbies();
}

function updateSavedCount() {
  savedCount.textContent = state.savedIds.size;
  savedDrawerBtn.classList.toggle('active', state.savedOnly);
}

// Modal Open
function openModal(hobbyId, isRandom = false) {
  const hobby = HOBBIES.find((h) => h.id === hobbyId);
  if (!hobby) return;

  const isLiked = state.savedIds.has(hobby.id);
  const ytQuery = encodeURIComponent(`${hobby.name} 입문 초보 가이드`);
  const naverQuery = encodeURIComponent(`${hobby.name} 원데이클래스 동호회`);

  modalBody.innerHTML = `
    ${isRandom ? '<div style="margin-bottom:10px;"><span class="cat-badge" style="background:#fef3c7;color:#d97706;">🎲 오늘의 랜덤 추천 취미!</span></div>' : ''}
    <div class="modal-header">
      <div class="modal-icon">${hobby.icon}</div>
      <div>
        <span class="cat-badge">${getCategoryName(hobby.category)}</span>
        <h3 class="modal-title" id="modalTitle">${hobby.name}</h3>
      </div>
    </div>

    <p class="modal-desc">${hobby.summary}</p>

    <div class="modal-info-grid">
      <div class="modal-info-box">
        <span>추천 활동 장소</span>
        <strong>📍 ${hobby.place}</strong>
      </div>
      <div class="modal-info-box">
        <span>함께하는 방식</span>
        <strong>👥 ${hobby.social} 하기 좋음</strong>
      </div>
      <div class="modal-info-box">
        <span>초기 입문 비용</span>
        <strong>💰 ${hobby.cost}</strong>
      </div>
      <div class="modal-info-box">
        <span>입문 난이도 / 에너지</span>
        <strong>⭐ ${hobby.difficulty} · ${hobby.energy}</strong>
      </div>
    </div>

    <div class="modal-section">
      <h4>🎒 시작할 때 필요한 준비물</h4>
      <p style="font-size:0.9rem;color:var(--text-secondary);">${hobby.equipment}</p>
    </div>

    <div class="modal-section">
      <h4>💡 초보자를 위한 입문 팁</h4>
      <ul class="starter-list">
        ${hobby.tips.map((tip) => `<li>${tip}</li>`).join('')}
      </ul>
    </div>

    <div class="hobby-tags" style="margin-top: 12px;">
      ${hobby.tags.map((tag) => `<span class="tag">#${tag}</span>`).join('')}
    </div>

    <div class="modal-actions">
      <a href="https://www.youtube.com/results?search_query=${ytQuery}" target="_blank" rel="noopener noreferrer" class="btn-youtube">
        ▶ 유튜브 입문 영상 보기
      </a>
      <a href="https://search.naver.com/search.naver?query=${naverQuery}" target="_blank" rel="noopener noreferrer" class="btn-naver">
        🌱 클래스/모임 검색하기
      </a>
      <button type="button" class="btn-secondary" id="modalLikeBtn" data-id="${hobby.id}">
        ${isLiked ? '❤️ 찜 완료' : '🤍 찜하기'}
      </button>
    </div>
  `;

  const modalLikeBtn = document.getElementById('modalLikeBtn');
  modalLikeBtn.addEventListener('click', () => {
    toggleSave(hobby.id);
    const nowLiked = state.savedIds.has(hobby.id);
    modalLikeBtn.innerHTML = nowLiked ? '❤️ 찜 완료' : '🤍 찜하기';
  });

  detailModal.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  detailModal.hidden = true;
  document.body.style.overflow = '';
}

function resetAllFilters() {
  state.selectedCategories.clear();
  state.filters = { place: 'all', social: 'all', cost: 'all', energy: 'all' };
  state.searchQuery = '';
  state.savedOnly = false;
  searchInput.value = '';
  clearSearchBtn.hidden = true;

  document.querySelectorAll('.chip-group').forEach((group) => {
    group.querySelectorAll('.chip').forEach((chip) => {
      chip.classList.toggle('active', chip.dataset.value === 'all');
    });
  });

  updateSavedCount();
  renderCategories();
  renderHobbies();
}

// Event Listeners
function bindEvents() {
  // Category selection
  categoryGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.category-card');
    if (!card) return;
    const catId = card.dataset.category;
    if (state.selectedCategories.has(catId)) {
      state.selectedCategories.delete(catId);
    } else {
      state.selectedCategories.add(catId);
    }
    state.savedOnly = false;
    updateSavedCount();
    renderCategories();
    renderHobbies();
  });

  // Reset categories
  resetCategoryBtn.addEventListener('click', () => {
    state.selectedCategories.clear();
    renderCategories();
    renderHobbies();
  });

  // Sub-filter chips
  document.querySelectorAll('.chip-group').forEach((group) => {
    group.addEventListener('click', (e) => {
      const chip = e.target.closest('.chip');
      if (!chip) return;
      const filterKey = group.dataset.filter;
      const value = chip.dataset.value;

      state.filters[filterKey] = value;
      group.querySelectorAll('.chip').forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');

      renderHobbies();
    });
  });

  // Search input
  searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    clearSearchBtn.hidden = state.searchQuery.length === 0;
    renderHobbies();
  });

  clearSearchBtn.addEventListener('click', () => {
    state.searchQuery = '';
    searchInput.value = '';
    clearSearchBtn.hidden = true;
    renderHobbies();
  });

  // Sort select
  sortSelect.addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    renderHobbies();
  });

  // Hobby card click (Modal vs Like button)
  hobbyGrid.addEventListener('click', (e) => {
    const likeBtn = e.target.closest('.like-btn');
    if (likeBtn) {
      e.stopPropagation();
      toggleSave(likeBtn.dataset.likeId);
      return;
    }

    const card = e.target.closest('.hobby-card');
    if (card) {
      openModal(card.dataset.id);
    }
  });

  // Saved drawer toggle
  savedDrawerBtn.addEventListener('click', () => {
    state.savedOnly = !state.savedOnly;
    updateSavedCount();
    renderHobbies();
  });

  // Random recommendation
  randomRecommendBtn.addEventListener('click', () => {
    const pool = getFilteredHobbies();
    const targetList = pool.length > 0 ? pool : HOBBIES;
    const randomHobby = targetList[Math.floor(Math.random() * targetList.length)];
    openModal(randomHobby.id, true);
  });

  // Reset all buttons
  resetAllBtn.addEventListener('click', resetAllFilters);
  emptyResetBtn.addEventListener('click', resetAllFilters);
  logoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    resetAllFilters();
  });

  // Modal close
  closeModalBtn.addEventListener('click', closeModal);
  detailModal.addEventListener('click', (e) => {
    if (e.target === detailModal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !detailModal.hidden) closeModal();
  });
}

init();

