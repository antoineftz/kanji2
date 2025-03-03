    let K_array = ['一','one,いち','二','two,に','三','three,さん','四','four,よん','五','five,ご','六','six,ろく','七','seven,なな','八','eight,はち','九','nine,きょう','十','ten,じゅう',
                   '百','hundred,ひゃく','千','thousand,せん','日','day,にち','月','day,げつ','火','fire,か','水','water,すい','木','tree,もく','金','gold,こん','土','earth,つち',
                   '年','year,ねん','左','left,ひだり','右','right,みぎ','上','top,うえ','下','bottom,した','大','big,だい','中','middle,なか','小','small,こ','入','entering,いり',
                   '出','go out,しゅつ','目','eye,め'
    ];
    
    const list1 = K_array.slice(0,4); 
    const list2 = K_array.slice(4,8);
    const list3 = K_array.slice(8,12);
    const list4 = K_array.slice(12,16);
    const list5 = K_array.slice(16,20);
    const list6 = K_array.slice(20,24);
    const list7 = K_array.slice(24,28);
    const list8 = K_array.slice(28,32);
    const list9 = K_array.slice(32,36);
    const list10 = K_array.slice(36,40);
    const list11 = K_array.slice(40,44);
    const list12 = K_array.slice(44,48);
    const list13 = K_array.slice(48,52);
    const list14 = K_array.slice(52,56);
    const list15 = K_array.slice(56,60);
    const nxt = document.querySelector('.next');
    const output = document.querySelector('.kanji-card');
    const score = document.querySelector('.score');
    const reset = document.querySelector('.reset');
    let count = 0;
    let index = 0;
    let array = [];
    
    // Increment the score counter 
    function increment(){
     count++;
     score.textContent = count;
    }
    score.addEventListener("click", increment);
        
    // Reset the score counter
    function reinit(){
     count = 0;
     score.textContent = count;
    }
    reset.addEventListener("click", reinit);

    // Initialize a list
    function init(b) {
     array = b;
     index = 0;
     output.textContent = array[index];
    }
    
    // Output next element of a list
    function nextelem() {
     index++;
     index = index % array.length; 
     output.textContent = array[index];
    }
    nxt.addEventListener("click",nextelem);
 
    
    