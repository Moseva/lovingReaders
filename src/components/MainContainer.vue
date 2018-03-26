<template>
    <div id="container">
        <div id="main">
            <dash-board></dash-board>
        </div>
        <div id="right_col"></div>
    </div>
</template>

<script>
    import DashBoard from './DashBoard'
    export default {
        name: 'main-container',
        components: {DashBoard}
    }
</script>
<style scoped>
    #container {
        display: flex;
    }

    #main {
        flex-direction: column;
        flex-wrap: nowrap;
        flex: 5;
        padding: 20px;
        box-sizing: border-box;
        border-right: 1px solid #ccc;
    }

    #right_col {
        flex-direction: column;
        flex-wrap: nowrap;
        flex: 2;
    }
</style>
