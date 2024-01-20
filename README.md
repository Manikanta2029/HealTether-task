# Staff Management Task

This task provides a method to save staff details to MongoDB with server-side validation and data sanitization.

## Getting Started

Follow the steps below to set up and run the project on your local machine.

### Prerequisites

- Node.js
- MongoDB

### Installation

Step 1: Clone the repository:

  command: git clone https://github.com/Manikanta2029/HealTether-task


Step 2: Navigate to the project directory: 
  command: cd server

Step 3: Install dependencies:   
   command: npm install  express mongoose
   command: npm install mongoose

Step 4: create a new cluster in mangodb atlas and get a connection string 
   note: make sure that you need you install mangodb compass in that paste the connection string and connect to mangodb    
   string is look example:  mongodb+srv://<username>:<password>@ClusterName.tmuuqhb.mongodb.net/  
   
   after it successfully connected you have to paste the connection string with your usename and password in the given code as it present in app.js file  

        code: 
        mongoose.connect("connectionString", {
            dbName: "databasename",
            
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
        });

        
Step5: Now we have to run the code using command  
   command: node app.js    


Step6: once it is successfully done you can see the localhost url like  
   example:  https://localhost:4000 

Step 7: To validate data use postman API in that you have to use POST method and paste the url   
   example:  https://localhost:4000/staffdetails 

step 8: create a Mongoose Model o the same Schema collection

step 9: Import the newly created model into App.js

step10: create a mongoDB connecetion

step 11: create a new Object o Model
step 12: -Reactor our code
-made the method - POST
-made the data dynamic in nature
- coming from request object

step 13: Using POSTman

step 14: Reading data from collections

  find
    - Read all data from collection
    - Read some data based on conditions
      - Query
      - Read a particular data
           findStaffId
  
Step 15: Create a dummy data for the object as we mentioned in the staff.model.js file once dummy data is created you have to paste it in the body choose raw>>JSON(as type)   
   
   dummy data example: 

    {

"staffId": "S84685",
"firstName": "Ajay",
"lastName": "Thakur",
"specialization": "Cardiologist",
"isDoctor": true,
"age": 45,
"birthday": "1976-05-15",
"gender": "Male",
"mobile": "9876549820",
"countryCode": "+91",
"whatsapp": "9876548909",
"email": "ajay.thakur@example.com",
"address": {
    "house": "187 Main Street",
    "street": "Robson Street",
    "landmarks": "Near Hamilton Hospital",
    "city": "canada",
    "pincode": "57654"
},
"documentType": "Aadhar Card",
"documentNumber": "1234-8976-8972",
"upiId": "ajay.thakur@upi",
"bankName": "ICCI Bank",
"accountName": "Ajay Thakur",
"accountNo": "108887767653",
"ifsc": "ICCI012345",
"isAdmin": false,
"created": {
    "on": "2021-02-25T12:30:00Z",
    "by": {
    "id": "admin123",
    "name": "Admin User"
    }
},
"modified": {
    "on": "2022-01-26T15:45:00Z",
    "by": {
    "id": "admin346",
    "name": "Another Admin"
    }
},
"profilePic": "profile.jpg",
"documents": ["document1.pdf", "document2.pdf"],
"deleted": false
}


Step 16: Once you click send button you can see "staff saved succesfully" messsage

