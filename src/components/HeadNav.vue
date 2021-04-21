<template>
    <div class="head-nav-box">
        <div class="head-nav-item" v-for="hn in nlist" :key="hn.path">
            <i :class="hn.query.icon"></i>
            {{hn.query.title}}
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>