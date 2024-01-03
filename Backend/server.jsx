const express = require('express');
const db = require('./config/db.jsx');
const cors = require('cors');

const app = express();

const PORT = 3002;

app.use(cors());
app.use(express.json());


//Queries

//signup user
app.post('/signup', (req,res)=> {

    const userName = req.body.userName;
    const userEmail = req.body.userEmail;
    const password = req.body.password;
    const cPassword = req.body.cpassword;
    const userAddress = req.body.userAddress;
    let numOfRows;
    
    

    db.query("SELECT * FROM users WHERE user_email = ?", [userEmail], (err,result)=>{
        numOfRows = result.length;
        if(err) {
            return (res.json("Error")) ;
        } 
        else if(numOfRows>0){
            return res.json("Email is already registered")
        }
        else if (password!=cPassword){
            return res.json("Passwords do not match");
        }
        else{
            db.query("INSERT INTO users (user_username, user_password, user_email, user_address) VALUES (?,?,?,?)",[userName,password,userEmail,userAddress], (err,result)=>{
                if(err) {
                    return res.json("Error");
                } 
                return res.json(result);
             }
             );   
        }
    }
    )    
    
    })

//login user
app.post('/login', (req,res)=> {

    const userEmail = req.body.userEmail;
    const password = req.body.password;
    let numOfRows;
    

    

    db.query("SELECT * FROM users WHERE user_email = ? AND user_password = ?", [userEmail,password], (err,result)=>{
        numOfRows = result.length;
        if(err) {
            return (res.json("Error")) ;
        } 
        else if(numOfRows==1){

            res.json({data : result});
        }
        else {
           return res.json("Incorrect Email or Password")
        }
    }
    )    
    
    })
    

//Give all products
app.get('/products', (req,res)=> {

    
    db.query("SELECT * FROM products WHERE product_category = 'deal' ORDER BY RAND() LIMIT 3", (err,result)=>{

        if(err) {
           return (res.json(err)) ;
        } 
        else {
           return res.json({data : result});
        }
    }
    )    
    
    })


//get one product for order
app.get('/products/:product_id', (req,res)=> {

    const product_id = req.params.product_id;
    
    db.query("SELECT * FROM products WHERE product_id = ?",[product_id], (err,result)=>{
        if(err) {
            return (res.json("Error")) ;
        } 
        else {
           return res.json({data : result});
        }
    }
    )    
    
    })


app.post('/addToCart', (req,res)=> {

    const product_id = req.body.id;
    const product_quantity = req.body.Quantity;
    const userEmail = req.body.userEmail;
  
    db.query("INSERT INTO orders(order_user_email,order_product_id,order_quantity,status,order_date_time) VALUES(?,?,?,?,CURRENT_TIMESTAMP)",[userEmail,product_id,product_quantity,"cart"], (err,result)=>{
        if(err) {
            return (res.json("Error")) ;
        } 
        else {
           return res.json({data : result});
        }
    }
    )    
    
    })

// Fetching Cart Items
app.post('/cartItems', (req,res)=> {

    const userEmail = req.body.userEmail;

    db.query("SELECT `products`.*, `orders`.`order_id`,`orders`.`order_quantity` FROM `products`,`orders` WHERE order_user_email = ? AND order_product_id = products.product_id AND orders.status = 'cart'",[userEmail], (err,result)=>{
        if(err) {
            return (res.json("Error")) ;
        } 
        else {
           return res.json({data : result});
        }
    }
    )    
    
    })

//Removing Cart Item
app.post('/removeCartItem', (req,res)=> {

    const userEmail = req.body.userEmail;
    const order_id = req.body.order_id;
  
    db.query("DELETE FROM orders WHERE order_user_email = ? AND order_id = ? AND status = 'cart'",[userEmail,order_id], (err,result)=>{
        if(err) {
            return (res.json("Error")) ;
        } 
        else{
            return res.json({data : result});
        }
    }
    )    
    
    })

//checking out
app.post('/checkout', (req,res)=> {

    const userEmail = req.body.userEmail;
    const contact = req.body.contact;
    const address = req.body.address;

    db.query("UPDATE orders SET status = 'paid', order_address = ?, order_contact = ? WHERE order_user_email = ? AND status = 'cart'",[address,contact,userEmail], (err,result)=>{
        if(err) {
            return (res.json("Error")) ;
        } 
        else{
            return res.json({data : result});
        }
    }
    )
     
    
    })

//order history
app.post('/orderHistory', (req,res)=> {

    const userEmail = req.body.userEmail;
    
    db.query("SELECT `products`.*, `orders`.* FROM `products`,`orders` WHERE order_user_email = ? AND order_product_id = products.product_id AND orders.status != 'cart' ORDER BY orders.order_date_time DESC",[userEmail], (err,result)=>{
        if(err) {
            return (res.json("Error")) ;
        } 
        else {
            return res.json({data : result});
        }
    }
    )    
    
    })
    
app.post('/currentOrders', (req,res)=> {

    db.query("SELECT `products`.*, `orders`.* FROM `products`,`orders` WHERE orders.status = 'paid' AND orders.order_product_id = products.product_id ORDER BY orders.order_date_time DESC", (err,result)=>{
        if(err) {
            return (res.json("Error")) ;
        } 
        else {
            return res.json({data : result});
        }
    }
    )    
    
    })
    

    
app.post('/completedOrders', (req,res)=> {

    db.query("SELECT `products`.*, `orders`.* FROM `products`,`orders` WHERE orders.status = 'completed' AND orders.order_product_id = products.product_id ORDER BY  orders.order_date_time DESC", (err,result)=>{
        if(err) {
            return (res.json("Error")) ;
        } 
        else {
            return res.json({data : result});
        }
    }
    )    
    
    })


app.post('/submitFeedback', (req,res)=> {

    const userEmail = req.body.userEmail;
    const feedback = req.body.feedback;

    db.query("INSERT INTO feedbacks(feedback_user_email,feedback_desc) VALUES(?,?)",[userEmail,feedback], (err,result)=>{
        if(err) {
            return (res.json("Error")) ;
        } 
        else {
            return res.json("");
        }
    }
    )    
    
    })
    
    app.get('/feedbacks', (req,res)=> {

        db.query("SELECT * FROM feedbacks ORDER BY feedback_date_time DESC", (err,result)=>{
            if(err) {
                return (res.json("Error")) ;
            } 
            else {
                return res.json({data:result});
            }
        }
        )    
        
        })

app.post('/completeOrder', (req,res)=> {

    const order_id = req.body.order_id;

    db.query("UPDATE orders SET status = 'completed' WHERE order_id = ?",[order_id], (err,result)=>{
        if(err) {
            return (res.json("Error")) ;
        } 
        else {
            return res.json("");
        }
    }
    )    
    
    })
    

//Give deals
app.get('/deals', (req,res)=> {

    
    db.query("SELECT * FROM products WHERE product_category = 'deal'", (err,result)=>{
        if(err) {
            return (res.json("Error")) ;
        } 
        else {
           return res.json({data : result});
        }
    }
    )    
    
    })

//Give fastFood
app.get('/fastFood', (req,res)=> {

    
    db.query("SELECT * FROM products WHERE product_category = 'fast_food'", (err,result)=>{
        if(err) {
            return (res.json("Error")) ;
        } 
        else {
           return res.json({data : result});
        }
    }
    )    
    
    })

    //Give Desi
app.get('/desi', (req,res)=> {

    let numOfRows;
    
    db.query("SELECT * FROM products WHERE product_category = 'desi'", (err,result)=>{
        numOfRows = result.length;

        if(err) {
            return (res.json("Error")) ;
        } 
        else {
           return res.json({data : result});
        }
    }
    )    
    
    })

//     //Give drinks
app.get('/drinks', (req,res)=> {

    let numOfRows;
    
    db.query("SELECT * FROM products WHERE product_category = 'drink'", (err,result)=>{
        numOfRows = result.length;

        if(err) {
            return (res.json("Error")) ;
        } 
        else {
           return res.json({data : result});
        }
    }
    )    
    
    })



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})