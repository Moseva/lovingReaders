<template>
    <div>
        <div class="read-block" v-for="person in people">
            <h4>{{person.userName}} 最近读的书</h4>
            <div class="book-list">
                <div class="book" v-for="book in bookList">
                    <p>{{book.bookName}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'recent-read',
        data(){
            return {
                people: [{userId: '148300917', userName: 'Eva'}, {
                    userId: '148300917',
                    userName: 'Emunah'
                }, {userId: '148300917', userName: 'Sarcophagus'}],
                bookList: []
            }
        },
        created() {
            this.getBookList();
        },
        methods: {
            getBookList(){
                this.bookList =[{bookId:'213',bookName:'原则',bookImg:''}];
            }
        }

    }
</script>