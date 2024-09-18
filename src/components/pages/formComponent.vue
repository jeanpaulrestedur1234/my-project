<template>
   
        <form>
            <div class="row">

                <h1>File a Complaint</h1>
                <hr>
                <div class="form-group">
                    <label for="email" >Mail </label>
                    <input type="text" id="email" class="form-control" v-model="userData.email">
                </div>
                <div class="form-group">
                    <label for="password">Password </label>
                    <input type="password" id="password" class="form-control " v-model="userData.password">
                </div>
                <div class="form-group">
                    <label for="age">Age</label>
                    <input type="number" id="age" class="form-control" v-model="userData.age">
                </div>

            </div>
            <div class="row">

                <label for="message" >Message</label><br>
                <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                <textarea id="message" rows="5" class="form-control" v-model="message"></textarea>

            </div>
            <div class="row">

                <div class="form-group">
                    <label for="sendmail">
                        <input type="checkbox" id="sendmail" value="SendMail" v-model="sendMail"> Send Mail
                    </label>
                    <label for="sendInfomail">
                        <input type="checkbox" id="sendInfomail" value="SendInfoMail"  v-model="sendMail"> Send Infomail
                    </label>


                </div>
            </div>
            <div class="row">

                <label for="male">
                    <input type="radio" id="male" value="Male" v-model="gender"> Male
                </label>
                <label for="female">
                    <input type="radio" id="female" value="Female" v-model="gender"> Female
                </label>

            </div>
            <div class="row">

                <label for="priority">Priority</label>
                <select id="priority" class="form-control" v-model="priority">
                    <option v-for =" (priority, index) in priorities" :key="index" 
                    :selected="priority=='Medium'"

                    >{{priority}}</option>
                </select>

            </div>
            <hr>
            <div class="row">

                <button class="btn btn-primary">Submit!
                </button>

            </div>
        </form>
        <hr>
        <div class="row">

            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4>Your Data</h4>
                </div>
                <div class="panel-body">
                    <p>Mail: {{userData.email}}</p>
                    <p>Password: {{userData.password}}</p>
                    <p>Age: {{userData.age}}</p>
                    <p>Message: {{message}} </p>
                    <p><strong>Send Mail: </strong></p>
                    
                    <ul>
                        <li v-for="(sende, index) in sendMail" :key="index">
                            {{ sende }}
                        </li>
                    </ul>
                    <p>Gender: {{ gender }}</p>
                    <p>Priority:{{ priority }}</p>
                    <p>Switched:</p>
                </div>
            </div>

        </div>
  
</template>

<script>
export default {
    data() {
        return {
            userData: {
                email: '',
                password: '',
                age: 27
            },
            message: 'A new Text',
            sendMail: [],
            gender: 'Male',
            priorities: ['High', 'Medium','low'],
            priority:''
        }
    }
}
</script>

<style setup>
.form-group {
 
    justify-content:flex-start;
    justify-items: flex-start;
    margin-bottom: 15px;
}


</style>