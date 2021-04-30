<template>
    <div class="combox" :style="ch">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props:{
        ch:{
            type:Object,
            default:{}
        }
    }
}
</script>

<style scoped>
    .combox{
        position: relative;
        border: 1px solid rgba(0,188,255,0.5);
        box-sizing: border-box;
        box-shadow:inset 0 0 0.5vw 0.5vw rgba(0, 188, 255,0.15)
    }
</style>