function TestCode() {
    document.write("javascript！");

// 資料型別（原生）：數值（Number）、字串（String）、布林（boolean）、未定義（undefined）、空值（null）
// 物件型別（object）、符號（symbol）

// 數字 整數 浮點數（小數點）
// 宣告變數 var
var a = 1 + 2;
document.write("<br>" + a);

// 0.30000000000000004 ；使用 IEEE 754 標準 雙精準度算法（64位元）
var b = 0.1 + 0.2;
document.write("<br>" + b);

// 修正方式
// 1. 將數值比例放大，變成非浮點數，運算之後再除以放大的倍數
var b1 = (0.1 * 10 + 0.2 * 10) / 10;
document.write("<br>" +"將數值比例放大"+ b1);

// 2. 內建函數 toFixed 強制取到小數點的指定位數
var c = (0.1 + 0.2);
document.write("<br>" + c.toFixed(3) + "<br>");


// 字串 用 雙引號「"」 或 單引號「'」框住的字元
var string = "測試";
var mystring = '文章';
var SmS = string + mystring;
document.write( string + mystring );

// 字串的長度，length（字串物件的屬性）
document.write( "<br>" + SmS.length);

// 布林（boolean） 只有兩種值，true(1)與false(0)
// false、0、空字串（"") or （''）、NaN、null、未定義（undefined）；布林值都為 false(0)
// 其他值為 true(1)
document.write("<br> Boolean(0)" + Boolean(NaN));
document.write("<br> Boolean(123)" + Boolean(123));

// 未定義（undefined） 變數沒有被宣告；或是宣告變數，但沒給值
var X;
y = 1; // 設定名稱，給予值，javascript 會將其轉換為變數
document.write("<br>" + y);

// 空值null 清除變數內的值
var z = 2;
document.write("<br>" + z);
z = null;
document.write("<br>" + z);

// NaN 無效的數字 轉換類別 1. 字串轉為數字
var F = "a";
var f = "123";
FF = Number(F);
ff = Number(f);

document.write("<br> F = a &nbsp;" + FF);
document.write("<br> f = 123 &nbsp;" + ff);

// 2. 無意義的運算 0除以0
document.write("<br>" + 0/0 );

// Infinity 無限大 被除數(10) / 除數(0)；被除數為任意數字（除了 0 之外） / 除數（0） = 無限大
document.write("<br>" + -10/0 );

// 宣告變數 var ES6 let const（常數）
// var 宣告的作用域
// 1. 全域變數：不在函數內宣告，在此程式文件內都有作用  2. 區域變數：在函數宣告，只對於目前宣告的函數有作用
// 自訂義函數 function name(){程式碼};
var AA = 2; //全域變數
function cal() {
    // 連續宣告變數 
    var AA = 5, b = 1; //區域變數
    document.write("<br> a+b =" + (AA+b));
}
cal();
document.write("<br>" + AA);

var a = 2; //全域變數
function cal() {
    // 連續宣告變數 
    // a = 5, B; 宣告變數給予值時，可以不用 var 定義；宣告變數不予值時，需要用 var 定義才會成立 
    a = 5, b = 1;//全域變數
    document.write("<br> a+b =" + (a+b));
}
cal();
document.write("<br>" + a);

// let 宣告的作用域 會因 { 區塊敘述 } 而分別定義為 全域或區域 的型態

var a=5, b=0;
let x=2, Y=0;
{
    var c= a+b;
    let z= x+Y;
}
// 測試可用 控制台 呼叫
console.log("c=", c);
console.log("z=", z);
}

// var 的全域與區域的作用，只存在 function（函數）之內
// { 區塊敘述 } if、else、for、while
// 判斷式 if {} else {}

// document.getElementById('TestBox').textContent="1234";

// 確認對話框 '提示訊息'
// window.confirm('繼續請按確定，退出請按取消');

// 條件分支 if(條件){成立時執行的動作}else{不成立時執行的動作}
// 如果沒有「不成立」時要執行的動作，可以省略 else 不寫
// 方法
function WinCon() {
    if(window.confirm('繼續請按確定，退出請按取消')) {
        // 控制台訊息 
        console.log('確定');
        document.getElementById('TestBox').textContent = "確定";
    }else {
        console.log('已取消');
        document.getElementById('TestBox').textContent = "已取消";
    }
}


// 輸入對話框 window.prompt('提示訊息')

// window.prompt('請輸入資料');

// 帳密登入邏輯 
// 1. 設定變數，只依靠window.prompt的一個輸入框，故只設定一個變數即可
// 2. 判斷式 變數值 與 輸入值 比對(==)；相同才會顯示資料；比對(==)，只要輸的資料相同即可通過

// 全域變數
let TestName = document.getElementById('TestBox');

// 全域變數需設定在方法之上，不然會呼叫不到

// 呼叫方法
// login();


// 方法
function login() {
    
    // 區域變數
    let Ans = window.prompt('請輸入帳號');
    let Number;

    if( Ans == 'shan') {
        // console.log(Ans);
        Number = window.prompt('請輸入密碼');

        if( Number == '12345') {
            TestName.textContent="歡迎進入系統";
        }
        
    } else {
        Ans = "帳號密碼輸入錯誤！"
        // console.log(Ans);
        TestName.textContent = Ans;
    }
}
TimeItem();
// 按照時間顯示不同訊息
function TimeItem() { 

    // 區域變數 時間（時）
    let hour = new Date().getHours();

    // 判斷式 1. 早上 9點 和（或 ||） 下午 3點，顯示「現在買 1 送 1 喔！」；一個條件成立即可
    // 2. 晚上 7點之後到 晚上 9點前（和 &&），顯示「所有商品 7 折，特價品除外」；兩個條件要同時成立
    // 3. 其他時間顯示「歡迎團購商品！」；除了上述條件之外，都會成立
    // 多條件判斷式 if(條件){成立} else if(條件){成立} else{上述條件都不成立}
    if (hour == 9 || hour == 15 ) {
        TestName.textContent = "現在買 1 送 1 喔！";
    } else if (hour >=19 && hour <21) {
        TestName.textContent = "所有商品 7 折，特價品除外";
    } else {
        TestName.textContent = "歡迎團購商品！";
    }
}

// ForCode();
// 迴圈 for (初始化;迴圈的條件;每次執行後的動作){語法}
// i = i + 1 原始寫法 i++ ；「++」加法運算子 數字 + 數字；「--」減法運算子 數字 - 數字
function ForCode() {
    let i;
    for ( i = 1; i <= 10; i++ ){
        console.log(i);
    }

    let q;
    for ( q = 10; q > 0 ; q--) {
        console.log(q);
    }
}

// 迴圈 while(條件){執行程式}
// WhileCode();
function WhileCode() {
    // 總數
    let Number = 100;
    // 亂數（系統產生的亂數，會介於 0 ~ 1 之間）；每次亂數都要大於 30 小於 40
    // 亂數求整數值時，需乘以「基數」
    let attack;
    while(Number > 0) {
        // 產生亂數 Math.random() -- 0 ~ 1
        attack = Math.floor(Math.random() * 41);
        console.log('亂數值：'+attack);


        if (attack > 30)
            Number = Number - attack;

        // 小於 0 Number等於0
        if (Number < 0)
            Number = 0;
        
        console.log('計算結果：' + Number);
    }

    
}

// let ac = Math.random();
// console.log(ac);

// let ack = Math.random() * 41;
// console.log(ack);

// let ackk = Math.floor(Math.random() * 41 );
// console.log(ackk);

// if ( ackk > 30 )
//     console.log(ackk);

ArrayCode();
// 陣列 ['資料','資料']；利用索引編號找值；陣列第一筆資料編號永遠為 0（除非重新設定） 
function ArrayCode(){
    let Items =['01',01,'項目'];
    // Items.length 陣列的長度
    for (let i = 0; i < Items.length; i++) {
        console.log(Items[i]);
    }
}

function CodeContent() {
    document.getElementById('ProjectContent').textContent="測試文字";

    let Items =['Item01','Item02','Item03'];

    for (let i = 0; i < Items.length; i++) {

        // 在 html 內新增標籤 li
        let liName = document.createElement('li');

        // 陣列內的資料，置入 li 之內
        liName.textContent = Items[i];

        // 在哪個 html 標籤內，產生 li 清單物件
        let Div = document.getElementById('ProjectContent');
        // 取得 html 標籤（元素）中添加的子元素
        Div.appendChild(liName);
    }

    // 變數 變更值
    let a = 3.14;
    console.log(a);
    a = 2;
    console.log(a);

    // 常數 無法變更值
    const pi = 3.14;

    console.log(pi);
    // pi = 2;
    console.log(pi);
}

// 迴圈 寫入 html 畫面
function AddArticle() {
    // 呼叫主要的 article id=main
    let Main = document.getElementById("main");

    // 新增 article
    let art = document.createElement("article");

    // 新增 article 的屬性 setAttribute("id or class", "自訂名稱") id 
    art.setAttribute("id", "PortfolioBox");

    // innerHTML 可寫入純文字，還可以寫入 html 的標籤
    // art.innerHTML = "<h1>在 Por 元素的開頭</h1>";

    // 在 article 新增 h1
    let h1 = document.createElement('h1');

    h1.textContent = "作品分享";

    art.appendChild(h1);

    // 取得 html 標籤（元素）中添加的子元素
    Main.appendChild(art);

    // 1. 在被選取的元素開頭插入內容 prepend() 置入被選取元素之中

    // 2. 在被選取的元素結尾插入內容 append() 置入被選取元素之中

    // 3. 在被選取的元素之前插入內容 before() 置入被選取元素標籤之前

    // 4. 在被選取的元素之後插入內容 after() 置入被選取元素標籤之後
    let Con = document.getElementById("ContactBox");

    Con.before(art);
};