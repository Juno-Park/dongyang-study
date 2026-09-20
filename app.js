// 1~3주차 전체 개념 & 다각도 변주 데이터 내장 (file:// 실행 및 오프라인 완벽 지원)
let conceptData = [
  {
    "id": "concept_dao",
    "week": 1,
    "concept": "道 (도) - 길에서 가치로",
    "summary": "구체적 길(노정)에서 출발하여 사거리에 선 인간이 시선(머리/눈)을 두고 나아갈 당위적 방향과 가치로 상승. 특정 학파 전유물이 아닌 보편적 개념.",
    "variations": [
      {
        "type": "ox",
        "angle": "자형/어원 팩트",
        "question": "갑골문의 '道' 자는 사거리에 사람이 서 있는 형상이고, 금문으로 가면서 '머리(首)' 부분이 강조되었다.",
        "answer": "O",
        "explanation": "갑골문은 사거리+사람, 금문은 사거리+머리(首)로 변천하며 시선이 향하는 방향을 뜻하게 되었습니다."
      },
      {
        "type": "choice",
        "angle": "출제 함정 파쇄",
        "question": "다음 중 동양철학의 '道' 개념에 대한 설명으로 옳은 것은?",
        "options": [
          "노자와 장자 등 도가 학파만이 독점적으로 사용한 개념이다.",
          "구체적인 길과는 무관하게 처음부터 순수 추상적 이념으로 만들어졌다.",
          "유가, 도가, 법가 등 제자백가 누구나 사용한 보편적 개념이다.",
          "공자는 사람이 마땅히 걸어가야 할 길(당위)을 부정한 바 있다."
        ],
        "answer": 2,
        "explanation": "道는 도가만의 전유물이 아니며, 유가·도가·법가 누구나 사용한 한정되지 않은 보편적 개념입니다."
      },
      {
        "type": "typing",
        "angle": "핵심 키워드 직접 입력",
        "question": "공자는 마땅히 걸어가야 하는 [   ](을)를 도(道)로 보았고, 노자는 있는 그대로 자연스럽게 나아가는 길을 도(道)로 보았다.",
        "hint": "ㄷㅇ (두 글자)",
        "answers": ["당위", "당위적 길", "마땅함"],
        "explanation": "공자는 사람이 마땅히 지켜야 할 도덕적 '당위(當爲)'의 길을, 노자는 인위가 배제된 자연의 길을 강조했습니다."
      }
    ]
  },
  {
    "id": "concept_zhouyi",
    "week": 1,
    "concept": "周易 (주역) - 선택과 실행",
    "summary": "인간 이성이 50:50 불확실성에 직면했을 때, 판단(판=칼, 단=도끼)을 통해 생각의 흐름을 끊고 실행으로 나아가도록 돕는 고전.",
    "variations": [
      {
        "type": "ox",
        "angle": "고전 테제/본질",
        "question": "주역은 인간 판단의 불완전성과 불확실성을 보여준다.",
        "answer": "O",
        "explanation": "주역은 인간이 가진 정보의 부족과 50:50 미결정 상태의 불완전성을 전제로 선택과 결단을 촉진합니다."
      },
      {
        "type": "choice",
        "angle": "판단(判斷) 어원",
        "question": "강의에서 '판단(判斷)'이라는 한자의 구성 요소로 설명한 칼(刀)과 도끼(斤)의 상징적 기능은?",
        "options": [
          "적을 공격하여 승리를 쟁취함",
          "계속 이어지는 생각의 흐름을 끊고 결정을 내림",
          "나무를 베어 문자를 기록함",
          "자연의 섭리를 인위적으로 파괴함"
        ],
        "answer": 1,
        "explanation": "칼과 도끼는 우유부단하게 이어지는 생각의 흐름을 단칼에 끊어 결단(실행)으로 이끄는 도구를 상징합니다."
      },
      {
        "type": "typing",
        "angle": "핵심 키워드 직접 입력",
        "question": "주역점은 90:10처럼 이미 마음이 기운 상황이 아니라, 우열을 가리기 힘든 [   ] 대 [   ]의 불확실한 상황에서 친다.",
        "hint": "숫자 2개 (예: 50:50)",
        "answers": ["50:50", "50 : 50", "50대50", "50 대 50"],
        "explanation": "주역은 인간의 지혜로 결정을 내리기 어려운 50:50의 극한 불확실성 상황에서 실행으로 밀어주는 역할을 합니다."
      }
    ]
  },
  {
    "id": "concept_de",
    "week": 2,
    "concept": "德 (덕) - '보다'에서 '성찰'로",
    "summary": "갑골문(사거리+눈, 心 없음)에서 둘러보다(순찰/경계) ➔ 서주 금문(心 추가)에서 나를 비추다(거울/역사 통한 성찰) ➔ 얻다(득/신체화된 역량)로 발전.",
    "variations": [
      {
        "type": "ox",
        "angle": "자형 팩트 체크 (단골 시험 트릭)",
        "question": "갑골문 글꼴의 ‘덕(德)’ 자에는 심(心) 자가 포함되어 있다.",
        "answer": "X",
        "explanation": "갑골문 덕(德) 자에는 마음 심(心) 자가 없었고, 서주 시대 금문(金文)에서부터 비로소 心 자가 추가되었습니다."
      },
      {
        "type": "choice",
        "angle": "출제 함정 파쇄",
        "question": "신정근 교수님에 따르면, '덕(德)' 자에 마음 심(心)이 추가된 진정한 철학적 의미는?",
        "options": [
          "단순한 주술적 의례의 내면화",
          "외부 대상을 살피던 눈을 거울·역사를 통해 자기 자신을 비추어보는 성찰로 전환",
          "선천적으로 타고난 심장의 해부학적 구조 묘사",
          "타인의 마음을 읽어 조종하기 위한 정치적 도구"
        ],
        "answer": 1,
        "explanation": "마음 심의 추가는 밖을 보던 시선이 거울이나 역사를 통해 나 자신을 비추어보는 자기 성찰적 전환을 의미합니다."
      },
      {
        "type": "typing",
        "angle": "핵심 키워드 직접 입력",
        "question": "덕(德)의 초기 의미가 외부를 '보다'였다면, 후대로 가면서 숙련을 통해 신체화된 능력을 [   ](득)하는 의미로 발전하였다.",
        "hint": "ㅇㄷ (한글 두 글자)",
        "answers": ["얻다", "얻음"],
        "explanation": "덕(德)은 '보다'에서 장인이 기술을 손에 익히듯 신체화된 능력을 '얻다(得)'는 의미(덕성)로 상승했습니다."
      }
    ]
  },
  {
    "id": "concept_shujing",
    "week": 2,
    "concept": "書經 (서경) - 수행과 천명",
    "summary": "선택 후의 실행과 결과 책임을 성찰하는 역사이자 법정. 통치 질서는 하늘의 명령(천명)에서 시작하되, 그 실체는 백성의 눈과 귀(민심)를 통해 검증됨.",
    "variations": [
      {
        "type": "ox",
        "angle": "고전 성격 팩트",
        "question": "『서경』은 사건과 사실을 기록하는 역사이다.",
        "answer": "O",
        "explanation": "서경은 사건과 사실을 기록하는 역사책이자, 정의와 부정의를 심판하는 고전적 법정의 성격을 띱니다."
      },
      {
        "type": "ox",
        "angle": "질서 근원 팩트",
        "question": "『서경』의 사회 질서는 하늘(하느님)의 명령에서 시작된다.",
        "answer": "O",
        "explanation": "서경의 질서는 하늘의 명령(천명)으로부터 시작하여 유덕한 군주에게 통치권이 위임됩니다."
      },
      {
        "type": "typing",
        "angle": "핵심 명제 직접 입력",
        "question": "\"하늘이 듣고 보는 것은 백성이 듣고 보는 것으로부터 한다(天聰明 自我民聰明)\"는 구절처럼, 서경에서 천심(天心)은 곧 [   ](으)로 구현된다.",
        "hint": "ㅁㅅ (두 글자)",
        "answers": ["민심", "백성의 마음", "백성"],
        "explanation": "군주가 유덕한지 여부는 하늘이 직접 말하지 않고, 백성들의 소리와 평가인 '민심(民心)'을 통해 검증됩니다."
      }
    ]
  },
  {
    "id": "concept_le",
    "week": 3,
    "concept": "樂 (락) - 악기에서 취미/예술로",
    "summary": "나무 위에 현을 단 현악기(갑골문) ➔ 조율/연주 도구 추가(금문) ➔ 연주(악) ➔ 즐거움(락) ➔ 취미/애호(요)로 의미 확장. 생존 노동을 넘어 취미와 예술의 영역 발견.",
    "variations": [
      {
        "type": "ox",
        "angle": "자형 어원 상형",
        "question": "樂의 모양은 악기의 현을 나무에 붙여놓은 악기의 모양이다.",
        "answer": "O",
        "explanation": "초기 갑골문 樂은 나무(木) 위에 꼬인 실/현(絃)을 붙여놓은 현악기 모양을 본뜬 글자입니다."
      },
      {
        "type": "ox",
        "angle": "금문 변천 팩트 (단골 시험 트릭)",
        "question": "갑골문에서 락과 금문에서의 락의 차이는 조율/연주 도구의 추가 여부이다.",
        "answer": "O",
        "explanation": "갑골문에는 현과 나무만 묘사되었으나, 금문부터 현 사이에 술대/활 같은 조율 및 연주 도구가 추가되었습니다."
      },
      {
        "type": "choice",
        "angle": "한자 3음(音) 트릭",
        "question": "'요산요수(樂山樂水)'라는 사자성어에서 樂 자의 독음과 뜻으로 올바른 것은?",
        "options": [
          "악 - 악기/음악",
          "락 - 즐거움/쾌락",
          "요 - 좋아하다/취미",
          "락 - 편안하다/안락"
        ],
        "answer": 2,
        "explanation": "산을 좋아하고 물을 좋아한다는 뜻의 요산요수에서 樂은 '좋아할 요'로 읽히며 개인의 취미/기호 영역을 나타냅니다."
      },
      {
        "type": "typing",
        "angle": "인간학적 의미 직접 입력",
        "question": "신정근 교수에 따르면, 전쟁과 노동이 고통스러운 생존 활동이라면, 樂은 인간에게 [   ]와 예술이라는 새로운 삶의 차원을 열어주었다.",
        "hint": "ㅊㅁ (두 글자)",
        "answers": ["취미"],
        "explanation": "樂의 발전 과정은 인간이 생존을 위한 고된 노동에서 벗어나 자신만의 '취미'와 정서적 자유를 발견하는 도약의 과정입니다."
      }
    ]
  },
  {
    "id": "concept_shijing",
    "week": 3,
    "concept": "詩經 (시경) - 여흥과 인간 한계의 비유",
    "summary": "선택(주역)과 실행/책임(서경)의 압박에서 벗어나는 축제와 여흥. 풍(대중민요), 아(궁중연회), 송(제사/신화). 구지부득(구하되 얻지 못함)의 인간적 결핍을 운문으로 승화.",
    "variations": [
      {
        "type": "ox",
        "angle": "장르 구분 트릭 (단골 시험 트릭)",
        "question": "시경(詩經)의 풍(風)은 제사, 건국신화 기념식의 음악을 가리킨다.",
        "answer": "X",
        "explanation": "제사 및 건국신화는 송(頌), 궁중 연회·기념식은 아(雅)이며, 풍(風)은 각 지역 백성들의 대중가요(민요)입니다."
      },
      {
        "type": "choice",
        "angle": "시경 3대 장르 매칭",
        "question": "시경의 세 장르 중, 오늘날의 'K-POP'이나 백성들의 솔직한 감정·사랑·사회 비판을 담은 대중가요에 해당하는 것은?",
        "options": [
          "풍(風)",
          "소아(小雅)",
          "대아(大雅)",
          "송(頌)"
        ],
        "answer": 0,
        "explanation": "풍(風)은 15개 지역 백성들의 정서와 민심을 담은 대중가요이자 민요입니다."
      },
      {
        "type": "typing",
        "angle": "핵심 테제 사자성어 직접 입력",
        "question": "시경 관저 편에서 짝을 구하려 애쓰나 얻지 못해 밤새 잠 못 이루는 인간 욕망의 결핍 상태를 가리키는 사자성어는 [    ]이다.",
        "hint": "ㄱㅈㅂㄷ (네 글자)",
        "answers": ["구지부득", "求之不得"],
        "explanation": "구지부득(求之不得)은 원하는 것을 구하려 하나 얻지 못하는 인간의 근원적 결핍과 한계를 노래한 대표적 테제입니다."
      }
    ]
  }
];

let currentConceptIndex = 0;
let currentVarIndex = 0;
let currentTab = 'combo';
let currentWeek = 'all';

// Load Data
async function initApp() {
  try {
    const res = await fetch('quiz_data.json');
    if (res.ok) {
      const data = await res.json();
      if (data && data.length > 0) {
        conceptData = data;
      }
    }
  } catch (e) {
    // file:// protocol or offline -> already using embedded conceptData
  }
  
  setupTabs();
  setupFilter();
  renderCurrentTab();
}

function getFilteredConcepts() {
  if (currentWeek === 'all') return conceptData;
  return conceptData.filter(c => c.week === parseInt(currentWeek));
}

// Tab Switching
function setupTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.view-section').forEach(s => s.classList.remove('active'));
      
      btn.classList.add('active');
      currentTab = btn.dataset.tab;
      document.getElementById(`${currentTab}-view`).classList.add('active');
      renderCurrentTab();
    });
  });
}

// Week Filter
function setupFilter() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentWeek = btn.dataset.week;
      currentConceptIndex = 0;
      currentVarIndex = 0;
      renderCurrentTab();
    });
  });
}

function renderCurrentTab() {
  const filtered = getFilteredConcepts();
  if (!filtered || filtered.length === 0) return;
  
  if (currentTab === 'combo') {
    renderComboMode();
  } else if (currentTab === 'typing') {
    renderTypingMode();
  } else if (currentTab === 'story') {
    renderStoryMode();
  } else if (currentTab === 'notion') {
    renderNotionMode();
  }
}

// ==========================================
// 1. [1개념 다각도 콤보 모드] (Combo Mode)
// ==========================================
function renderComboMode() {
  const filtered = getFilteredConcepts();
  if (currentConceptIndex >= filtered.length) currentConceptIndex = 0;
  
  const curConcept = filtered[currentConceptIndex];
  const curVar = curConcept.variations[currentVarIndex];
  
  document.getElementById('combo-concept-title').innerText = `[${curConcept.week}주차] ${curConcept.concept}`;
  document.getElementById('combo-angle-tag').innerText = `변주 ${currentVarIndex + 1}/${curConcept.variations.length} : ${curVar.angle}`;
  document.getElementById('combo-concept-progress').innerText = `개념 ${currentConceptIndex + 1}/${filtered.length}`;
  document.getElementById('combo-question').innerText = curVar.question;
  
  const interactionArea = document.getElementById('combo-interaction-area');
  interactionArea.innerHTML = '';
  
  const expBox = document.getElementById('combo-explanation');
  expBox.className = 'explanation-box';
  expBox.style.display = 'none';
  
  if (curVar.type === 'ox') {
    interactionArea.innerHTML = `
      <div class="ox-row">
        <button class="btn-option btn-ox btn-o" onclick="checkComboOX('O')">⭕ O (참)</button>
        <button class="btn-option btn-ox btn-x" onclick="checkComboOX('X')">❌ X (거짓)</button>
      </div>
    `;
  } else if (curVar.type === 'choice') {
    let html = '<div class="options-container">';
    curVar.options.forEach((opt, idx) => {
      html += `<button class="btn-option" onclick="checkComboChoice(${idx})">${idx + 1}. ${opt}</button>`;
    });
    html += '</div>';
    interactionArea.innerHTML = html;
  } else if (curVar.type === 'typing') {
    interactionArea.innerHTML = `
      <div class="typing-box">
        <div class="typing-hint">💡 힌트: ${curVar.hint || '핵심 키워드를 입력하세요'}</div>
        <input type="text" id="combo-typing-input" class="typing-input" placeholder="정답 키워드 입력..." autocomplete="off">
        <button class="btn-submit" onclick="checkComboTyping()">정답 확인 (Enter)</button>
      </div>
    `;
    setTimeout(() => {
      const input = document.getElementById('combo-typing-input');
      if (input) {
        input.focus();
        input.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') checkComboTyping();
        });
      }
    }, 50);
  }
  
  document.getElementById('combo-prev-concept').disabled = (currentConceptIndex === 0 && currentVarIndex === 0);
}

window.checkComboOX = function(userAns) {
  const filtered = getFilteredConcepts();
  const curVar = filtered[currentConceptIndex].variations[currentVarIndex];
  const isCorrect = userAns === curVar.answer;
  showComboFeedback(isCorrect, curVar.explanation, curVar.answer);
};

window.checkComboChoice = function(userIndex) {
  const filtered = getFilteredConcepts();
  const curVar = filtered[currentConceptIndex].variations[currentVarIndex];
  const isCorrect = userIndex === curVar.answer;
  showComboFeedback(isCorrect, curVar.explanation, `${curVar.answer + 1}번: ${curVar.options[curVar.answer]}`);
};

window.checkComboTyping = function() {
  const input = document.getElementById('combo-typing-input');
  if (!input) return;
  const userVal = input.value.trim().toLowerCase();
  if (!userVal) {
    alert('답안을 입력해 주세요!');
    return;
  }
  
  const filtered = getFilteredConcepts();
  const curVar = filtered[currentConceptIndex].variations[currentVarIndex];
  const isCorrect = curVar.answers.some(ans => userVal === ans.toLowerCase().trim() || userVal.includes(ans.toLowerCase().trim()));
  showComboFeedback(isCorrect, curVar.explanation, curVar.answers.join(' 또는 '));
};

function showComboFeedback(isCorrect, expText, correctAns) {
  const expBox = document.getElementById('combo-explanation');
  expBox.className = `explanation-box ${isCorrect ? 'correct' : 'incorrect'}`;
  expBox.innerHTML = `<strong>${isCorrect ? '🎉 정답입니다!' : '❌ 오답입니다! (정답: ' + correctAns + ')'}</strong><br><br>${expText}`;
  expBox.style.display = 'block';
}

document.getElementById('combo-next-btn').addEventListener('click', () => {
  const filtered = getFilteredConcepts();
  const curConcept = filtered[currentConceptIndex];
  
  if (currentVarIndex < curConcept.variations.length - 1) {
    currentVarIndex++;
    renderComboMode();
  } else {
    if (currentConceptIndex < filtered.length - 1) {
      alert(`👏 [${curConcept.concept}] 완전 정복 완료!\n다음 개념으로 넘어갑니다.`);
      currentConceptIndex++;
      currentVarIndex = 0;
      renderComboMode();
    } else {
      alert('🏆 선택한 모든 주차의 개념 변주 훈련을 완료하셨습니다!');
      currentConceptIndex = 0;
      currentVarIndex = 0;
      renderComboMode();
    }
  }
});

document.getElementById('combo-prev-concept').addEventListener('click', () => {
  if (currentVarIndex > 0) {
    currentVarIndex--;
  } else if (currentConceptIndex > 0) {
    currentConceptIndex--;
    const filtered = getFilteredConcepts();
    currentVarIndex = filtered[currentConceptIndex].variations.length - 1;
  }
  renderComboMode();
});


// ==========================================
// 2. [직접 타이핑 전용 단답형 모드] (Typing Mode)
// ==========================================
let allTypingQuestions = [];
let currentTypingIndex = 0;

function renderTypingMode() {
  const filtered = getFilteredConcepts();
  allTypingQuestions = [];
  
  filtered.forEach(c => {
    c.variations.filter(v => v.type === 'typing').forEach(v => {
      allTypingQuestions.push({
        week: c.week,
        concept: c.concept,
        ...v
      });
    });
  });
  
  if (allTypingQuestions.length === 0) return;
  if (currentTypingIndex >= allTypingQuestions.length) currentTypingIndex = 0;
  
  const q = allTypingQuestions[currentTypingIndex];
  document.getElementById('typing-badge').innerText = `${q.week}주차 | ${q.concept}`;
  document.getElementById('typing-counter').innerText = `${currentTypingIndex + 1} / ${allTypingQuestions.length}`;
  document.getElementById('typing-question').innerText = q.question;
  document.getElementById('typing-hint-text').innerText = `💡 힌트: ${q.hint || '키워드 입력'}`;
  
  const input = document.getElementById('typing-mode-input');
  input.value = '';
  input.focus();
  
  const expBox = document.getElementById('typing-explanation');
  expBox.className = 'explanation-box';
  expBox.style.display = 'none';
}

document.getElementById('typing-submit-btn').addEventListener('click', checkTypingOnly);
document.getElementById('typing-mode-input').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') checkTypingOnly();
});

function checkTypingOnly() {
  const input = document.getElementById('typing-mode-input');
  const userVal = input.value.trim().toLowerCase();
  if (!userVal) {
    alert('답안을 입력해 주세요!');
    return;
  }
  
  const q = allTypingQuestions[currentTypingIndex];
  const isCorrect = q.answers.some(ans => userVal === ans.toLowerCase().trim() || userVal.includes(ans.toLowerCase().trim()));
  
  const expBox = document.getElementById('typing-explanation');
  expBox.className = `explanation-box ${isCorrect ? 'correct' : 'incorrect'}`;
  expBox.innerHTML = `<strong>${isCorrect ? '🎉 정답입니다!' : '❌ 오답입니다! (정답: ' + q.answers.join(' 또는 ') + ')'}</strong><br><br>${q.explanation}`;
  expBox.style.display = 'block';
}

document.getElementById('typing-next-btn').addEventListener('click', () => {
  if (currentTypingIndex < allTypingQuestions.length - 1) {
    currentTypingIndex++;
    renderTypingMode();
  } else {
    alert('🎉 모든 직접 타이핑 문제를 완료했습니다!');
    currentTypingIndex = 0;
    renderTypingMode();
  }
});


// ==========================================
// 3. [노션 스타일 터치 토글 단권화] (Notion Accordion)
// ==========================================
function renderNotionMode() {
  const filtered = getFilteredConcepts();
  const container = document.getElementById('notion-accordion-list');
  container.innerHTML = '';
  
  filtered.forEach((c) => {
    const item = document.createElement('div');
    item.className = 'accordion-item';
    
    let varsHtml = '<div style="margin-top:10px; display:flex; flex-direction:column; gap:8px;">';
    c.variations.forEach((v, idx) => {
      let ansText = v.type === 'ox' ? v.answer : (v.type === 'choice' ? `${v.answer + 1}번` : v.answers.join('/'));
      varsHtml += `
        <div style="background:rgba(255,255,255,0.04); padding:8px 10px; border-radius:8px;">
          <div style="font-size:0.75rem; color:var(--accent-gold); font-weight:700;">[변주 ${idx+1}] ${v.angle}</div>
          <div style="font-size:0.82rem; margin:2px 0;">Q. ${v.question}</div>
          <div style="font-size:0.78rem; color:#6ee7b7;">👉 <strong>정답:</strong> ${ansText}</div>
        </div>
      `;
    });
    varsHtml += '</div>';
    
    item.innerHTML = `
      <div class="accordion-header">
        <span>▶ [${c.week}주차] ${c.concept}</span>
        <span style="font-size:0.75rem; color:var(--text-sub);">터치하여 열기</span>
      </div>
      <div class="accordion-content">
        <p style="margin-bottom:8px; color:#f8fafc;"><strong>📌 핵심 요약:</strong><br>${c.summary}</p>
        <hr style="border:0; border-top:1px solid rgba(255,255,255,0.1); margin:8px 0;">
        <strong>🎯 다각도 출제 트릭 & 변주 모음:</strong>
        ${varsHtml}
      </div>
    `;
    
    item.querySelector('.accordion-header').addEventListener('click', () => {
      item.classList.toggle('open');
      const arrow = item.querySelector('.accordion-header span:first-child');
      if (item.classList.contains('open')) {
        arrow.innerText = arrow.innerText.replace('▶', '▼');
      } else {
        arrow.innerText = arrow.innerText.replace('▼', '▶');
      }
    });
    
    container.appendChild(item);
  });
}

// ==========================================
// 4. [서사 스토리 스트림 모드] (Story Reader)
// ==========================================
const storyData = [
  {
    week: 1,
    act: "제1막. 사거리의 번민과 결단의 칼날",
    title: "1주차: 道(도)와 周易(주역)",
    quote: "\"사거리에 선 인간은 어디로 가야 하는가? 그리고 50:50의 두려움을 어떻게 돌파할 것인가?\"",
    body: `3천 년 전 은나라 사람이 거북이 배딱지에 새긴 **도(道)** 자의 최초 형태는 사거리 한가운데에 사람이 홀로 서 있는 모습이었습니다. 맹수와 적이 도사리는 야생의 들판에서 어느 길로 가야 할지 몰라 두려움에 떨던 원시인의 실존이었습니다.

세월이 흘러 서주(西周) 시대 청동기(금문)로 넘어가면서 글자가 바뀝니다. 사람의 전신 대신 **'머리(首)'**와 **'눈'**이 사거리 위에 뚜렷하게 부각됩니다.
그저 발로 걷는 흙길(구체적 길)에서, **"사람이 시선을 어디에 두고 어떤 방향과 목적을 향해 나아가야 하는가?"**라는 **인간의 가치와 당위(추상적 길)**로 의미가 도약한 것입니다.

공자는 이를 보고 *"사람이 마땅히 걸어가야 할 도덕적 당위의 길(仁·禮)"*이라 했고, 노자는 *"인위적으로 길을 닦으려 하지 말고 자연 그대로 나아가는 길(無爲)"*이라 반박했습니다.

사거리에 선 인간은 *"할까 말까(Do or Not)"*, *"이것인가 저것인가(A or B)"*의 갈림길에 섭니다. 정보가 부족해 **50:50으로 팽팽히 맞서는 극한의 불확실성**에 갇혔을 때, 꼬리를 무는 생각의 흐름을 **칼(判)과 도끼(斷)**로 단칼에 베어내고 실행으로 등을 밀어주는 고대의 결단 촉진제가 바로 **주역(周易)**이었습니다.`
  },
  {
    week: 2,
    act: "제2막. 두리번거리던 눈이 나를 비추기 시작할 때",
    title: "2주차: 德(덕)과 書經(서경)",
    quote: "\"밖만 경계해서는 평화가 오지 않는다. 밖을 보던 눈길을 돌려 거울과 역사에 나를 비추어라.\"",
    body: `결단을 내리고 길을 떠난 인간에게 두 번째 질문이 찾아옵니다. *"나는 잘 해낼 수 있을까? 결과가 나쁘면 어쩌지?"*

은나라 갑골문에서 **덕(德)** 자는 사거리(行) 위에 부릅뜬 눈(目)이 얹혀 있는 모양이었습니다. **마음 심(心) 자는 단 한 획도 없었습니다!** 맹수나 적이 기습하지 않을까 사방을 두리번거리며 경계하고 순찰하는 생존의 눈길이 덕의 출발점이었습니다.

그러나 은나라가 폭정으로 망하고 주나라가 들어선 서주 시대(금문), 글자 아래에 드디어 **'마음 심(心)'**이 결합됩니다. 밖을 쏘아보던 시선을 180도 돌려 **"거울과 역사에 나 자신을 비추어보는 자기 성찰"**을 시작한 것입니다. 나아가 수십 년간 밥알을 쥔 장인의 손길처럼 몸에 완전히 익힌 역량인 **'얻다(得/덕성)'**로 의미의 대전환이 일어납니다.

성찰을 얻은 인간은 이제 결과를 책임져야 합니다. 『서경(書經)』은 통치자가 정의로웠는가를 판정하는 인류 최초의 역사적 법정입니다. 하늘의 명령(천명)은 직접 들리지 않으며, **"하늘이 듣고 보는 것은 오직 우리 백성이 듣고 보는 것으로부터 한다(天聰明 自我民聰明)"**는 말처럼 **고통받는 백성들의 아우성과 민심(民心)**을 통해 검증됩니다.`
  },
  {
    week: 3,
    act: "제3막. 빵만으로는 살 수 없는 인간의 축제",
    title: "3주차: 樂(락)과 詩經(시경)",
    quote: "\"인간이 평생 일과 책임, 긴장만으로 살 수 있는가? 결핍과 상처를 노래로 어루만져라.\"",
    body: `1주차에서 결단을 내리고(주역), 2주차에서 피 말리는 긴장 속에 실행하고 결과 책임을 졌습니다(서경).
그러나 인간이 평생 일과 책임, 긴장과 스트레스만 받으며 살 수 있을까요?

여기서 **락(樂)**이 탄생합니다. 갑골문의 樂은 나무 위에 실(현)을 매달아 놓은 현악기였습니다. 금문으로 가면서 현 사이에 **술대나 활 같은 조율·연주 도구**가 결합되며 본격적인 연주가 시작됩니다. 뙤약볕 아래의 고된 노동(생존)을 넘어, 인간은 마침내 **'취미와 정서적 휴식(요산요수의 樂)'**이라는 예술의 신세계를 발견했습니다.

『시경(詩經)』은 규범과 심판의 칼날을 내려놓은 **축제와 위로의 공간**입니다. 민중의 대중가요이자 K-POP인 **풍(風)**, 궁중 연회의 **아(雅)**, 제사의 **송(頌)**으로 나뉩니다.

특히 시경 첫머리에는 **"구지부득(求之不得), 짝을 구하려 하나 얻지 못해 자나 깨나 뒤척이네"**라는 구절이 나옵니다. 원하는 것을 얻지 못하는 인간의 근원적 결핍과 아픔을, 시경은 자책 대신 아름다운 노래와 시로 승화하여 상처받은 마음을 따뜻하게 어루만져 줍니다.`
  }
];

function renderStoryMode() {
  const container = document.getElementById('story-content-area');
  container.innerHTML = '';
  
  let storiesToShow = storyData;
  if (currentWeek !== 'all') {
    storiesToShow = storyData.filter(s => s.week === parseInt(currentWeek));
  }
  
  // Overview banner if 'all' is selected
  if (currentWeek === 'all') {
    const banner = document.createElement('div');
    banner.className = 'story-quote';
    banner.style.borderLeftColor = 'var(--accent-cyan)';
    banner.style.background = 'rgba(6, 182, 212, 0.1)';
    banner.style.color = '#bae6fd';
    banner.innerHTML = `
      <strong>🌌 1~3주차 거대 서사 체인 요약:</strong><br>
      • <strong>1주차 (주역)</strong>: 나아갈 길을 결정하는 <strong>의지</strong> (50:50 결단)<br>
      • <strong>2주차 (서경)</strong>: 성찰을 통한 실행과 <strong>책임</strong> (천명과 민심)<br>
      • <strong>3주차 (시경)</strong>: 일의 압박에서 벗어나는 <strong>예술과 위로</strong> (숨통과 취미)
    `;
    container.appendChild(banner);
  }
  
  storiesToShow.forEach(story => {
    const card = document.createElement('div');
    card.className = 'story-card';
    card.innerHTML = `
      <div class="story-header-box">
        <span class="story-act-badge">${story.act}</span>
        <h2 class="story-heading">${story.title}</h2>
      </div>
      <div class="story-quote">${story.quote}</div>
      <div class="story-paragraph">${story.body.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</div>
    `;
    container.appendChild(card);
  });
}

// Start immediately
initApp();
