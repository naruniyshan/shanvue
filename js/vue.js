
Vue.createApp({
    
//  資料結構
    data() {
        return {
            index: 0,
            nav: [
                { title: '宥姍網頁設計工作室', link: 'index.html', id: 'Logo' , Mobileid: 'MobileLogo'},
                { title: '作品分享', link: '#PortfolioBox', id: 'Portfolio', Mobileid: 'MobilePortfolio' },
                { title: '關於工作室', link: '#AboutBox', id: 'About', Mobileid: 'MobileAbout' },
                { title: '專案設計', link: '#ProjectBox', id: 'Project', Mobileid:  'MobileProject' },
                { title: '聯絡表單', link: '#ContactBox', id: 'Contact', Mobileid: 'MobileContact' }
            ],
            portfolio: [
                { title: '名片設計' , Introduction: '說明文字', link: '/images/photos/photoa01.jpg' },
                { title: '網頁版型設計' , Introduction: '說明文字', link: '/images/photos/photoa02.jpg' },
                { title: '網頁版型設計' , Introduction: '說明文字', link: '/images/photos/photoa03.jpg' },
                { title: '網頁版型設計' , Introduction: '說明文字', link: '/images/photos/photoa04.jpg' },
                { title: '網頁版型設計' , Introduction: '說明文字', link: '/images/photos/photoa05.jpg' },
                { title: '網頁版型設計' , Introduction: '說明文字', link: '/images/photos/photoa06.jpg' },
                { title: '網頁版型設計' , Introduction: '說明文字', link: '/images/photos/photoa07.jpg' }
            ],
            newNote: {
            name: '',
            content: ''
        },
        notes: JSON.parse(localStorage.getItem('notes')) || []
        };
    },
     watch: {
        notes: {
            handler: 'saveNotes',
            deep: true
        }
    },
    // function
    methods: {
        opennav() {
            let Menu = document.getElementById('Menu');
            let MobileNav = document.getElementById('MobileNav');
            MobileNav.style = "display:block";
            Menu.style ="display:none";
        },
        closenav(){
            let Menu = document.getElementById('Menu');
            let MobileNav = document.getElementById('MobileNav');
            Menu.style = "display:block";
            MobileNav.style = "display:none";
        },
        changeportfolio(change) {
            this.index = ( this.index +  change + this.portfolio.length ) % this.portfolio.length
            // this.index += change;
            // if ( this.index < 0 ) this.index = this.portfolio.length - 1
            // else if ( this.index > this.portfolio.length -1 ) this.index = 0
        },
        topbtn() {
            Top.style = "display:none";
            $('html, body').animate({ scrollTop: 0 }, 0.333);

        },
         addNote() {
            if (this.newNote.name.trim().length == 0 || this.newNote.content.trim().length == 0) {
                alert(' 記事的摘要及內容都一定要填喔！ ')
                return
            }
            const note = {
                name: this.newNote.name,
                content: this.newNote.content,
                created: new Date()
            }
            this.notes.push(note)
            this.newNote.content = ''
            this.newNote.name = ''
        },
        deleteNote(note) {
            if (confirm('確定要除這則記事嗎？')) {
                const ndx = this.notes.indexOf(note)
                if (ndx !== -1) {
                    this.notes.splice(ndx, 1)
                }
            }
        },
        saveNotes() {
            localStorage.setItem('notes', JSON.stringify(this.notes))
            console.log(' 新記事已儲存 ', new Date())
        }
    }
}).mount('#Content');

