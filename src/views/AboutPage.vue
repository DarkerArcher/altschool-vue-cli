<template>
    <div class="about-page">
        <div class="header">
            <h3>Rock Paper Scissors.</h3>
        </div>
        <div class='about-content'>
            <p>Made by Ayo Otutuloro. You can contact me <a href="https://darkerarcher.netlify.app/">here</a>.</p>
            <p>Color themes from <a href="https://www.happyhues.co/">Happy Hues</a>.</p>
        </div>
        <div class="return-link">
            <p>Click <router-link to="/">here</router-link> to return to the game</p>
        </div>
    </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

.about-page {
    max-width: 600px;
    margin: auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.header {
    color: white;
    font-size: 40px;
    text-align: center;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    padding: 0 0 20px 0;
}

.about-content {
    padding: 30px;
}

.about-content>p {
    color: #a7a9be;
    font-size: 20px;
    text-align: center;
    font-family: 'Lato', sans-serif;
}

.about-content>p>a {
    color: #ff8906;
    text-decoration: none;
    font-weight: 700;
}

.about-content>p>a:hover {
    color: #f25f4c;
    text-decoration: none;
}

.return-link {
    margin: 50px auto;
    width: 50%;
    padding-top: 50px;
    text-align: center;
}

.return-link>p {
    color: #a7a9be;
}
</style>