<template>
    <footer id="app-footer">
        <h4>Contact</h4>
        <div id='contacts'>
            <ul>
                <li>
                    <a v-on:click="emailVisible = !emailVisible">
                        <icon name="envelope"></icon>
                    </a>
                    <span v-show="emailVisible">pywjob@163.com</span>
                </li>
                <li>
                    <a v-on:click="wechatVisible = !wechatVisible">
                        <icon name="weixin"></icon>
                    </a>
                     <span v-show="wechatVisible">limpid416</span>
                </li>
            </ul>
        </div>
    </footer>
</template>
<script>
    import 'vue-awesome/icons'
    import Icon from 'vue-awesome/components/Icon'
    export default {
        name: 'app-footer',
        components: {
            Icon
        },
        data () {
            return {
              emailVisible: false,
              wechatVisible: false
            }
          },

    }
</script>
<style scoped>
    #app-footer {
        position: fixed;
        z-index: 1;
        bottom: 0;
        right: 0;
        left: 0;
        height: 6em;
        border-top: 1px solid #f5f5f5;
        padding-left: calc(100vw - 100%);
        background-color: rgba(255, 255, 255, 0.8);
    }

    h4 {
        font-weight: 900;
        line-height: 1.5;
        margin: 0.5em 0 0.5em 0;
        text-transform: uppercase;
        letter-spacing: 0.35em;
    }
    ul{padding:0;}
    li{
       list-style-type: none;
    }
    a{
        cursor:pointer;
    }
    a:hover{
        color:pink;
    }
    a svg{
        position: relative;
        top: 0.2em;
        margin-right:0.2em;
    }
</style>
