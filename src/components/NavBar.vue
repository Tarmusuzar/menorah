<template>
    <div class="container">
        <div style="display: flex; flex-direction: column;" @click="$router.push('/')">
            <p>Menorah </p>
            <b>Education</b>
        </div>
        <p class="threeBars" @click="horizontalMenu=true" ><i class="fa fa-bars" aria-hidden="true"></i></p>
        <ul>
            <li v-for="item in menuItems" :key="item">{{ item }}</li>
        </ul>
    </div>
    <div class="verticalMenu" v-if="horizontalMenu">
            <span class="closeVerticalMenu" @click="horizontalMenu=false">X</span>
            <div class="menuItems">
                <li @click="$router.push('/signup/3')">Enroll Now</li>
                <li @click="$router.push('/signup/2')">My Class</li>
                <li >Take A Loan</li>
                <li >Buy A Laptop</li>

            </div>
            <div class="info">
                <li><i class="fa-solid fa-envelope"></i>Mathiasbugembe3@gmail.com</li>
                <li><i class="fa-solid fa-phone"></i>+971566435617</li>
                <li><i class="fa-brands fa-whatsapp"></i>+256705106499</li>
           
             </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                menuItems:['Enroll Now', 'My Classes', 'Take A Loan','Buy A Laptop'],
                horizontalMenu:false

            }
        }
    }
</script>
<style scoped>
.container{
    margin: auto;
    max-width:70rem;
    padding: 1rem 2rem;
    color: white;
    display: flex;
    justify-content: space-between;
}
ul{
    min-width: 60%;
    display: flex;
    list-style-type: none;
    justify-content: space-evenly;
}
p{
    font-size: 1.8rem;
}
li:hover, .threeBars:hover, .closeVerticalMenu:hover{
    cursor: pointer;
    text-decoration: underline;
    color: rgb(229, 225, 225);
}
.verticalMenu{
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 60vw;
    background-color: rgb(18, 18, 41,.98);
    display: flex;
    flex-direction: column;
    color:white ;
    justify-content: space-between;
}
.closeVerticalMenu:hover{
    text-decoration: none;
}
.closeVerticalMenu{
    align-self: flex-end;
    margin-right: 20vw;
    margin-top: 2rem;
    font-size: 2rem;
    font-weight: 100;
    opacity: 90%;
}
.menuItems{
    list-style-type: none;
    margin-left: 3rem;
    font-size: 1.4rem;
    min-height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.info>li{
    list-style-type: none;
}
.fa-solid, .fa-brands{
    margin-right: .4rem;
    margin-bottom: .6rem;
}
.info{
    margin-top: 6rem;
    margin-bottom: 29rem;
   margin-left: 3rem;
}


@media screen and (max-width: 1024px) {
 ul{
    display: none;
 }
 .verticalMenu{
    width: 100%;
 }
 
}

@media screen and (min-width: 1024px) {
 .threeBars{
    display: none;
 }
 .verticalMenu{
    display: none;
 }
 
}
</style>