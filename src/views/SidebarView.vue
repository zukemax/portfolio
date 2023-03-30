<template>
    <div class="sidebar">
        <div class="banner">
            <img src="@/assets/cover.png" alt="" class="cover">

            <div class="name">
                <h2>Frontend Developer</h2>
                <img src="@/assets/name.png" alt="">
            </div>
        </div>
        <div class="widget">
            <h3>About</h3>
            <p>Hi! My name is <b> Hemant Kumar</b>, I started my career in 2012. Since then I’ve worked with multiple IT companies to reach their goals with <b> quality</b> and <b>efficiency</b>. Currently I’m a <b>Frontend Developer</b> at <b>techCurl Media IT Solutions</b>.</p>
        </div>
        <div class="skills">
            <h3>Skills</h3>
            <ul>
                <li><img src="@/assets/skills/html5.png" alt=""></li>
                <li><img src="@/assets/skills/css3.png" alt=""></li>
                <li><img src="@/assets/skills/bootstrap.png" alt=""></li>
                <li><img src="@/assets/skills/sass.png" alt=""></li>
                <li><img src="@/assets/skills/js.png" alt=""></li>
                <li><img src="@/assets/skills/figma.png" alt=""></li>
                <li><img src="@/assets/skills/tailwind.png" alt=""></li>
                <li><img src="@/assets/skills/react.png" alt=""></li>
                <li><img src="@/assets/skills/vue.png" alt=""></li>
                <li><img src="@/assets/skills/xd.png" alt=""></li>
                <li><img src="@/assets/skills/node.png" alt=""></li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .sidebar{
        max-width: 400px;
        width: 100%;
        min-height: 100vh;
        box-shadow: 0 0 10px 0 rgba($color: #000000, $alpha: 0.4);
    }
    .widget{
        text-align: left;
        padding: 30px;
        h3{
            font-size: 20px;
            margin-bottom: 1rem;
        }
        p{
            line-height: 1.5rem;
        }
    }
    .skills{
        padding: 30px;
        text-align: left;
        h3{
            margin-bottom: 1rem;
        }
        ul{
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
            li{
                display: inline-block;
                img{
                    width: 40px;
                }
            }
        }
    }
    .banner{
        position: relative;
        .cover{
            width: 100%;
        }
        .name{
            position: absolute;
            left: 30px;
            bottom: 30px;
            text-align: left;
            h2{
                font-weight: 100;
                margin-bottom: 1rem;
                color: #fff;
            }
        }
    }
</style>