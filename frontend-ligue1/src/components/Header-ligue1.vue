<template>
    <div class="header">
        <img src="../assets/Ligue1.png" alt="Logo ligue 1 UBER Eats">
        <h1 class="header-title">Ligue 1 <br/> Uber <mark class="header-eats">Eats</mark></h1>
        <span class="header-champion">
            Champion 2020/2021:
            <img src="../assets/LOSC.svg" alt="Logo lOSC">
        </span>
    </div>
</template>

<script>
</script>

<style scoped lang="scss">
.header{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 250px;
    background-color: #01153A;
    &-title{
        font-size: 50px;
        margin-left: 100px;
    }
    &-eats{
        color:#12C266;
    }
    &-champion{
        display: flex;
        flex-direction: column;
        color: #FFF;
    }
}
img{
    height: 200px;
}
h1{
    padding: 15px;
    border: 2px #FFF solid;
    border-radius: 1em;
    color: #FFF;
}
</style>