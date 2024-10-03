<template>
    <div class="contact">
    <div class="container">
        <section class="contact">
            <h2>Contact Us</h2>
            <p>If you have any questions or would like to get in touch, please fill out the form below!</p>
            <form action="#" method="POST">
                <div class="form-group">
                    <label for="name"><i class="fas fa-user"></i> Name</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email"><i class="fas fa-envelope"></i> Email</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="message"><i class="fas fa-comments"></i> Message</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </section>
    </div>
    </div>

</template>

<script>

</script>

<style scoped>
body {
    background-color: #02141B; /* Set the background color */
    color: #FFFFFF; /* Set the default text color */
    font-family: Arial, sans-serif; /* Set the default font */
    margin: 0;
    padding: 0;
}
/* General Styles for Contact Page */
.container {
    background-color: #02141B; /* Set the background color */
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #02141B; /* Set the background color */
    color: #FFFFFF; /* Set the default text color */
    font-family: Arial, sans-serif;
    
}
.contact {
    background-color: #02141B; /* Background color for the contact section */
    color: #FFFFFF; /* Text color */
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}
.contact h2 {
    font-size: 36px;
    margin-bottom: 20px;
    color: #004B87;
}
.contact p {
    font-size: 18px;
    margin-bottom: 30px;
}
.form-group {
    margin-bottom: 20px;
}
.form-group label {
    display: block;
    margin-bottom: 5px;
}
.form-group input,
.form-group textarea {
    width: 100%;
    padding: 10px; /* Adjust padding without icons */
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}
.form-group input:focus,
.form-group textarea:focus {
    border-color: #004B87;
    outline: none;
}
button {
    padding: 10px 20px;
    background-color: #004B87;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    transition: background-color 0.3s;
}
button:hover {
    background-color: #003366;
}
</style>