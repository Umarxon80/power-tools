
import { totp } from "otplib";
import nodemailer from "nodemailer"
import { EMAIL_PASS, EMAIL_USER, JWTSECRET } from "../config/config.js";

const emailTransporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
      user:EMAIL_USER,
      pass:EMAIL_PASS
    }
  })

export const sendemail= async (req,res)=>{
    let {email}=req.body
    let otp=totp.generate(email+JWTSECRET)
    try {
        await emailTransporter.sendMail({
          from:"umarhonsultanov3@gmail.com",
          to:email,
          subject:"Verification",
          text:`your otp code ${otp}`
        })
        res.send("send to email")
      } catch (e) {
        res.status(400).send({message:e.message})
      }
}
export const verifyemail = async(req,res)=>{
    const {email,otp}=req.body  
    const verify=totp.check(otp,email+JWT_SECRET)
    res.send({verify})
}