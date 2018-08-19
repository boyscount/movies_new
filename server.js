
const express = require('express')
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 4000

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use('/src',express.static(path.join(__dirname,'src')));



app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('contact');
});

app.post('/send',(req,res) => {
  var prices = req.param('price');  
  var person = req.param('person');
  var money = req.param('money');
  var email = req.param('email');  
  var movied = req.param('movie'); 
  
  const emailna = email
  const personn = person
  const moneyy = money
  const price =  personn * prices
  const total = moneyy - price
  const ttitle =  movied

  

  const numbers = [0,0,0,0,0,0,0,0];
  
          numbers[0] = Math.floor(total/1000) 
          const er = numbers[0]
          const ert = (er*1000)     
          const totald = total - ert
  
          numbers[1] = Math.floor(totald/500)
           const q = numbers[1]
           const ttt = (q* 500)
           const tt = totald - ttt
  
  
           numbers[2] = Math.floor(tt/100)
           const onehunred = numbers[2]
           const difone = (onehunred*100)
           const sstwo = tt - difone  
  
           numbers[3] = Math.floor(sstwo/50)
           const hasib = numbers[3] 
           const difhasib = (hasib*50)
           const hasibs = sstwo - difhasib
          
           numbers[4] = Math.floor(hasibs/20)
           const yisib = numbers[4]
           const difyisib = (yisib * 20)
           const yiisib = hasibs - difyisib
  
           numbers[5] = Math.floor(yiisib/10)
           const sib = numbers[5]
           const difsib = (sib * 10)
           const siib = yiisib - difsib
  
           numbers[6] = Math.floor(siib/5)
           const habath = numbers[6]
           const difha = (habath * 5)
           const ha = siib - difha
  
           numbers[7] =  Math.floor(ha)
           const onebath = numbers[7] 


 //const output = "หนังเรื่อง " + ttitle +  " จำนวน "+ personn + " ท่าน " + " รวมราคาทั้งสิ้น " + price + " บาท " + " จำนวนเงินที่รับ " + moneyy +" บาท "+ " เงินทอน " + total + " บาท " + "แบงค์พัน" + er + " ใบ"+" แบงค์ 500 จำนวน" + q +" ใบ" +" แบงค์ 100 จำนวน "+ onehunred +" ใบ" + " แบงค์ 50 จำนวน" + hasib + "ใบ" + " แบงค์20 จำนวน" + yisib +"ใบ "+ "เหรียญ10 จำนวน" + sib +"เหรียญ"+ " เหรียญ5 จำนวน" + habath +"เหรียญ" + " เหรียญบาท " + onebath + "เหรียญ";           
 const output = ` <h3>หนังเรื่อง, ${ttitle}</h3> 
 <p>จำนวน ${personn} ท่าน</p>
 <p>รวมราคาทั้งสิ้น ${price} บาท</p>
 <p>จำนวนเงินที่รับ ${moneyy} บาท </p>
 <p>เงินทอน  ${total} บาท</p>
 <p>แบงค์พัน จำนวน ${er} ใบ</p>
 <p>แบงค์ 500 จำนวน ${q} ใบ</p>
 <p>แบงค์ 100 จำนวน ${onehunred} ใบ</p>
 <p>แบงค์ 50 จำนวน ${hasib} ใบ</p>
 <p>แบงค์ 20 จำนวน ${yisib} ใบ</p>
 <p>เหรียญ 10 จำนวน ${sib} เหรียญ</p>
 <p>เหรียญ 5 จำนวน ${habath} เหรียญ</p>
 <p>เหรียญ บาท จำนวน ${onebath} เหรียญ</p>
 `;


 let transporter = nodemailer.createTransport({
  service: 'Gmail',
  secure: true, // true for 465, false for other ports
  auth: {
      user: 'npooseedin@gmail.com', // generated ethereal user
      pass: 'pooseedin1103' // generated ethereal password
  },
  tls:{
    rejectUnauthorized:false
  }
});

// setup email data with unicode symbols
let mailOptions = {
  from: '"Movie Ticket Free 👻" <npooseedin@gmail.com>', // sender address
  to: emailna, // list of receivers
  subject: 'Hello ✔', // Subject line
  text: output, // plain text body
  html: output // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
      return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
 res.render('contact',{msg:'Email has been sent.... Please Check you E-mail'});

});
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`)
  
})