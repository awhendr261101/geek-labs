<template>
    <div class="container-fluid">
        <h2>Welcome To Our Admin</h2>
        <div class="row" adminWrap >
            <table class="table table-hover table-dark">
              <thead>
                <tr>
                  <th scope="col" colspan="3">User</th>
                  <th scope="col" colspan="3">User Name</th>
                  <th scope="col">User Age</th>
                  <th scope="col" >User Role</th>
                  <th scope="col" >User Email</th>
                  <th scope="col" >Password</th>
                  <th scope="col" colspan="2">Management</th>
  
                </tr>
              </thead>
              <tbody table>

                <tr v-for="(user, index) in users" :key="index">
                    <td colspan="3"> <img :src="user.userProfile"  alt="${element.productName}" loading="lazy" style="width: 6rem;"> </td>
                    <td colspan="3">{{ user.firstName }} {{ user.lastName }}</td>
                    <td>{{ user.userAge }}</td>
                    <td>{{ user.userRole }}</td>
                    <td>{{ user.emailAdd }}</td>
                    <td>{{ user.userPass }}</td>
                    <td>
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-secondary mb-3" @click="updateUID(user)" data-bs-toggle="modal" data-bs-target="#editUser" style="width: 5rem;">
                        Edit
                        </button>

                        <!-- Modal -->
                        <div class="modal fade" id="editUser" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Update User</h5>
                            </div>
                            <div class="modal-body">
                                <form class="form" @submit.prevent="register">
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="First name" v-model="payload.firstName"
                                            required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="last name" v-model="payload.lastName"
                                                required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="number" placeholder="Age" v-model="payload.userAge" required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="Gender" placeholder="Gender" v-model="payload.Gender"
                                                required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="userRole" placeholder="userRole" v-model="payload.userRole"
                                                required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="email" placeholder="Email address" v-model="payload.emailAdd"
                                                required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="password" placeholder="Password" v-model="payload.userPass"
                                                required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="url" placeholder="Profile link" v-model="payload.userProfile"
                                                required />
                                        </span>
                                    </div>
                                    
                                </form>
                            </div>
                            <div class="modal-footer d-flex flex-column justify-content-around">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" @click="updateUser()">Save changes</button>
                            </div>
                            </div>
                        </div>
                        </div>

                        <br> 

                        <button style="width: 5rem;" type="button" @click="userDelete(user.userID)" class="btn btn-dark" :id="user.userID" deleteProduct >Delete</button>  
                    </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                    <td>
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#addUsers">
                    ADD USER
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="addUsers" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Add User</h5>
                        </div>
                        <div class="modal-body">
                            <form class="form">
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="First names" v-model="addpayload.firstName"
                                            required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="last name" v-model="addpayload.lastName"
                                                required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="number" placeholder="Age" v-model="addpayload.userAge" required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="Gender" placeholder="Gender" v-model="addpayload.Gender"
                                                required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="userRole" placeholder="userRole" v-model="addpayload.userRole"
                                                required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="email" placeholder="Email address" v-model="addpayload.emailAdd"
                                                required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="password" placeholder="Password" v-model="addpayload.userPass"
                                                required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="url" placeholder="Profile link" v-model="addpayload.userProfile"
                                                required />
                                        </span>
                                    </div>
                            </form>
                        </div>
                        <div class="modal-footer d-flex flex-column justify-content-around">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" @click="register" class="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div>
                  </td>
                  <td colspan="10" class="hidden-xs"></td>
                  
                </tr>
              </tfoot>
            </table>

            <table class="table table-hover table-dark">
              <thead>
                <tr>
                  <th scope="col" colspan="3">Product</th>
                  <th scope="col" colspan="3">Product Name</th>
                  <th scope="col" >Product Description</th>
                  <th scope="col" >Quantity</th>
                  <th scope="col" >amount</th>
                  <th scope="col" >Category</th>
                  <th scope="col" colspan="2">Management</th>
  
                </tr>
              </thead>
              <tbody table>

                <tr v-for="(prod, index) in products" :key="index">
                    <td colspan="3"> <img :src="prod.prodUrl"  alt="${element.productName}" loading="lazy" style="width: 6rem;"> </td>
                    <td colspan="3">{{ prod.prodName }} </td>
                    <td>{{ prod.prodDescription }}</td>
                    <td>{{ prod.quantity }}</td>
                    <td>{{ prod.amount }}</td>
                    <td>{{ prod.Category }}</td>
                    <td>
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-secondary mb-3" @click="updateID(prod)" data-bs-toggle="modal" data-bs-target="#editProd" style="width: 5rem;">
                        Edit
                        </button>

                        <!-- Modal -->
                        <div class="modal fade" id="editProd" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Update product</h5>
                            </div>
                            <div class="modal-body">
                                <form class="form">
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="Product names" v-model="prodPayload.prodName"
                                            required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="Product Desc" v-model="prodPayload.prodDescription"
                                                required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="number" placeholder="Quantity" v-model="prodPayload.quantity" required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="number" placeholder="amount" v-model="prodPayload.amount"
                                                required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="Category" v-model="prodPayload.Category"
                                                required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="Product Url" v-model="prodPayload.prodUrl"
                                                required />
                                        </span>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer d-flex flex-column justify-content-around">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" @click="updateProd()" class="btn btn-primary" >Save changes</button>
                            </div>
                            </div>
                        </div>
                        </div>

                        <br> 

                        <button style="width: 5rem;" type="button" @click="prodDelete(prod.prodID)" class="btn btn-dark" :id="prod.prodID" deleteProduct >Delete</button>  
                    </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#addProd">
                    ADD PRODUCT
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="addProd" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Add Product</h5>

                        </div>
                        <div class="modal-body">
                            <form class="form" >
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="Product name" v-model="prodUpdatePay.prodName"
                                            required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="Product Desc" v-model="prodUpdatePay.prodDescription"
                                                required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="number" placeholder="Quantity" v-model="prodUpdatePay.quantity" required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="number" placeholder="amount" v-model="prodUpdatePay.amount"
                                                required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="Category" v-model="prodUpdatePay.Category"
                                                required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="Product Url" v-model="prodUpdatePay.prodUrl"
                                                required />
                                        </span>
                                    </div>
                            </form>
                        </div>
                        <div class="modal-footer d-flex flex-column justify-content-around">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" @click="addProd" class="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div>
                  </td>
                  <td colspan="10" class="hidden-xs"></td>
                
                </tr>
              </tfoot>
            </table>
        </div>
    </div>

</template>
<script setup>
import { computed, onMounted } from 'vue'
import { ref } from 'vue';
// import { useStore } from 'vuex';

import store from '@/store';
// const store = useStore()
let payload = ref({
    firstName: '',
    lastName: '',
    userAge: 0,
    Gender: '',
    userRole: '',
    emailAdd: '',
    userPass: '',
    userProfile: 'https://i.postimg.cc/3rZ0H0D8/profile-Image.png'
})

let addpayload = ref({
    firstName: '',
    lastName: '',
    userAge: 0,
    Gender: '',
    userRole: '',
    emailAdd: '',
    userPass: '',
    userProfile: 'https://i.postimg.cc/3rZ0H0D8/profile-Image.png'
})

let prodPayload = ref({
      prodName: "",
      prodDescription: "",
      quantity: 0,
      amount: 0,
      Category: "",
      prodUrl: ""
})

let prodUpdatePay = ref({
    prodName: "",
    prodDescription: "",
    quantity: 0,
    amount: 0,
    Category: "",
    prodUrl: ""
})



// const prodPayload = null;

function register() {
    console.log(addpayload.value);

    
    store.dispatch('register', addpayload.value)
}

function addProd() {
    store.dispatch('addAProduct', prodUpdatePay.value)
}

function userDelete(id) {
    console.log(id);
    store.dispatch('deleteUser', id)
}

let uID
function updateUID(user) {
    console.log('there' + user);

    payload.value = {
        firstName: user.firstName,
        lastName: user.lastName,
        userAge: user.userAge,
        Gender: user.Gender,
        userRole: user.userRole,
        emailAdd: user.emailAdd,
        userPass: user.userPass,
        userProfile: 'https://i.postimg.cc/3rZ0H0D8/profile-Image.png'
    }
    
    console.log(user);
    
    uID = user.userID
}

function updateUser() {
const data = {
    id : uID,
    load : payload.value
}



store.dispatch('updateUser', data)
}

//////////////////////////////////////////////
let pID
function updateID(prod) {
    console.log('here' + prod);
    
    prodPayload.value = {
        prodName: prod.prodName,
        prodDescription: prod.prodDescription,
        quantity: prod.quantity,
        amount: prod.amount,
        Category: prod.Category,
        prodUrl: prod.prodUrl
    }
    console.log(prodPayload.value);
    
    pID = prod.prodID
}

function updateProd(prod) {
    console.log(prod);
    
    const data = {
        id : pID,
        load : prodPayload.value
    }

    console.log(data);
    
    
    store.dispatch('updateProduct', data)
}

function prodDelete(id) {
    console.log(id);
    store.dispatch('deleteProduct', id)
    
}

const users = computed(
    () => store.state.users
)

const products = computed(
    () => store.state.products
)
onMounted(() => {
    store.dispatch('fetchUsers')
    store.dispatch('fetchBookings')
}) 

</script>


<style scoped>
.container-fluid{
    margin-top: 8rem;
    width: 92%;
}

.table{
    background-color: #02141B !important;
}


/* Image sizing and centering */
img {
    max-width: 100%;
    height: auto;

}

/* Button styling and centering */
button {
    width: 100%;
    margin: 0.5rem 0;

}

/* Ensuring responsiveness across different screen sizes */
@media only screen and (max-width: 1440px) {
    .container-fluid {
        padding: 1rem;
    }

    /* Wrapping the table on smaller screens */
    table {
        display: block;
        overflow-x: auto;
        white-space: nowrap;
    }

    thead, tbody, tfoot, tr, td, th {
        display: block;
        text-align: left;
    }

    th, td {
        padding: 0.5rem;
        font-size: 0.9rem;
        text-align: center; /* Center text inside table cells */
    }

    /* Ensure modals scale well */
    .modal-dialog {
        width: 100%;
        max-width: 500px;
    }
}

@media only screen and (max-width: 768px) {
    h2 {
        font-size: 1.5rem;
        text-align: center;
    }

    button {
        font-size: 0.9rem;
    }

    /* Make images smaller on smaller screens */
    img {
        width: 4rem;
    }

    td, th {
        font-size: 0.8rem;
        padding: 0.3rem;
    }
}

@media only screen and (max-width: 480px) {
    h2 {
        font-size: 1.2rem;
    }

    td[colspan="3"], th[colspan="3"] {
        display: block;
        width: 100%;
    }

    img {
        width: 3rem;
    }

    td, th {
        font-size: 0.7rem;
        text-align: center; /* Center text for smallest screens */
    }
}

/* Smallest screen styling */
@media only screen and (max-width: 300px) {
    h2 {
        font-size: 1rem;
    }

    button {
        font-size: 0.8rem;
    }

    td, th {
        font-size: 0.7rem;
    }

    img {
        width: 2.5rem;
    }

    td, th {
        text-align: center; /* Ensure centering on the smallest screens */
    }
}
</style>