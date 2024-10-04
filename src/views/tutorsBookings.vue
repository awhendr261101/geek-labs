<template>
    <div class="sessions-container">
        <div class="cards">
            <div class="card green">
                <div class="img-cont">
                    <img class="img-fluid" src="https://awhendr261101.github.io/allImages/images/tutor.png" alt="tutor">
                </div>
                <div class="info">
                    <p class="tutor">Tutor : <span>Mr T. Makunya</span></p>
                    <p class="tutee">Tutee : <span>Chelsea Julie</span></p>
                    <p class="second-text">Date & Time : <span>02 / 03 / 2024 - 10:00</span></p>

                    <div class="button-cont">
                        <button class="res">
                        <span class="transition"></span>
                        <span class="gradient"></span>
                        <span class="label">Button</span>
                        </button>
    
                        <button class="del">
                        <span class="transition"></span>
                        <span class="gradient"></span>
                        <span class="label">Button</span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="card green">
                <div class="img-cont">
                    <img class="img-fluid" src="https://awhendr261101.github.io/allImages/images/tutor.png" alt="tutor">
                </div>
                <div class="info">
                    <p class="tutor">Tutor : <span>Mr T. Makunya</span></p>
                    <p class="tutee">Tutee : <span>Chelsea Julie</span></p>
                    <p class="second-text">Date & Time  : <span>02 / 03 / 2024 - 10:00 </span></p>


                    <div class="button-cont">
                        <button class="res">
                        <span class="transition"></span>
                        <span class="gradient"></span>
                        <span class="label">Button</span>
                        </button>
    
                        <button class="del">
                        <span class="transition"></span>
                        <span class="gradient"></span>
                        <span class="label">Button</span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="card green">
                <div class="img-cont">
                    <img class="img-fluid" src="https://awhendr261101.github.io/allImages/images/tutor.png" alt="tutor">
                </div>
                <div class="info">
                    <p class="tutor">Tutor : <span>Mr T. Makunya</span></p>
                    <p class="tutee">Tutee : <span>Chelsea Julie</span></p>
                    <p class="second-text">Date & Time : <span>02 / 03 / 2024 - 10:00</span></p>

                    <div class="button-cont">
                        <button class="res">
                        <span class="transition"></span>
                        <span class="gradient"></span>
                        <span class="label">Button</span>
                        </button>
    
                        <button class="del">
                        <span class="transition"></span>
                        <span class="gradient"></span>
                        <span class="label">Button</span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="card green">
                <div class="img-cont">
                    <img class="img-fluid" src="https://awhendr261101.github.io/allImages/images/tutor.png" alt="tutor">
                </div>
                <div class="info">
                    <p class="tutor">Tutor : <span>Mr T. Makunya</span></p>
                    <p class="tutee">Tutee : <span>Chelsea Julie</span></p>
                    <p class="second-text">Date & Time : <span>02 / 03 / 2024 - 10:00</span></p>

                    <div class="button-cont">
                        <button class="res">
                        <span class="transition"></span>
                        <span class="gradient"></span>
                        <span class="label">Button</span>
                        </button>
    
                        <button class="del">
                        <span class="transition"></span>
                        <span class="gradient"></span>
                        <span class="label">Button</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
// import axios from 'axios';
import store from '@/store';

console.log(store, ref);






</script>

<style scoped>



.sessions-container{

    background-color: #012843;
    min-width: 100%;
    min-height: 100dvh;
    padding-top: 5rem;

    .dims{
        
    }

    .cards {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap; /* Enable wrapping */
        gap: 1.5rem; 
        padding-inline: 2rem; /* 32px */
        justify-content: space-around;
    }

    .cards .card {
    flex: 0 0 calc(50% - 1.5rem); /* Two items per row, accounting for gap */
    box-sizing: border-box; /* Ensure padding/margins are included */
    }


    .cards .card {
    display: flex;
    flex-direction: row;
    height: 10.25rem; /* 100px */
    width: 45%; /* 250px */
    color: black;
    background-color: #515151;
    cursor: pointer;
    transition: 400ms;
    }

    .cards .card p.tip {
    font-size: 1rem; /* 1em */
    font-weight: 700;
    }

    .info p{
        margin-bottom: 0;
        font-weight: 600;
        border-bottom: solid 2px #333;
        margin-right:20px;

        span{
            padding-left: 20px;
        }

    }

    .cards .card p.second-text {
    font-size: 0.9rem; /* 0.7em */

    }

    .cards .card:hover {
    transform: scale(1.1, 1.1);
    }

    .cards:hover > .card:not(:hover) {
    filter: blur(10px);
    transform: scale(0.9, 0.9);
    }

    .img-cont{
        width: 30%;
        height: 90%;
        align-self: center;
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: solid 2px #333;
        .img-fluid{
            width: 70%;
        }
        
    }

    .info{
        padding-block: 1.5rem;
        width: 70%;
        margin-left: 1.5rem;
    }


    button {
    font-size: 13px;
    font-weight: 500;
    background: #1f2937;
    color: white;
    border: none;
    position: relative;
    overflow: hidden;
    border-radius: 0.6em;
    cursor: pointer;
    width: 5rem;
    height: 2rem;
    }

    .gradient {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 0.6em;
    margin-top: -0.25em;
    background-image: linear-gradient(
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.3)
    );
    }

    .label {
    position: relative;
    top: -1px;
    }

    .res .transition {
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transition-duration: 500ms;
    background-color: rgba(16, 185, 129, 0.6);
    border-radius: 9999px;
    width: 0;
    height: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    }

    .del .transition {
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transition-duration: 500ms;
    background-color: rgba(185, 33, 16, 0.6);
    border-radius: 9999px;
    width: 0;
    height: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    }

    button:hover .transition {
    width: 14em;
    height: 14em;
    }

    button:active {
    transform: scale(0.97);
    }

    .button-cont{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 0.5rem;
        width: 95%;
    }

    

    

}

    
</style>