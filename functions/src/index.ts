import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
const cors = require('cors')({ origin: true });



const nodemailer = require('nodemailer');
// const cors = require('cors')({ origin: true });

admin.initializeApp(functions.config().firebase)


const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  service: 'gmail',
  auth: {
    user: 'freedomapp2020@gmail.com',
    pass: 'freedom2020$'
  }
});

//Enviar Email Bienvenida al registrarse
exports.emailBienvenida = functions.auth.user().onCreate((user) => {


    const dest = user.email;

    const mailOptions = {
      from: 'freedomapp2020@gmail.com', 
      to: dest,
      subject: "Bienvenid@ a FREEDOM", 
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

      <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
      <head>
      <!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
      <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
      <meta content="width=device-width" name="viewport"/>
      <!--[if !mso]><!-->
      <meta content="IE=edge" http-equiv="X-UA-Compatible"/>
      <!--<![endif]-->
      <title></title>
      <!--[if !mso]><!-->
      <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css"/>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css"/>
      <!--<![endif]-->
      <style type="text/css">
          body {
            margin: 0;
            padding: 0;
          }
      
          table,
          td,
          tr {
            vertical-align: top;
            border-collapse: collapse;
          }
      
          * {
            line-height: inherit;
          }
      
          a[x-apple-data-detectors=true] {
            color: inherit !important;
            text-decoration: none !important;
          }
        </style>
      <style id="media-query" type="text/css">
          @media (max-width: 720px) {
      
            .block-grid,
            .col {
              min-width: 320px !important;
              max-width: 100% !important;
              display: block !important;
            }
      
            .block-grid {
              width: 100% !important;
            }
      
            .col {
              width: 100% !important;
            }
      
            .col>div {
              margin: 0 auto;
            }
      
            img.fullwidth,
            img.fullwidthOnMobile {
              max-width: 100% !important;
            }
      
            .no-stack .col {
              min-width: 0 !important;
              display: table-cell !important;
            }
      
            .no-stack.two-up .col {
              width: 50% !important;
            }
      
            .no-stack .col.num4 {
              width: 33% !important;
            }
      
            .no-stack .col.num8 {
              width: 66% !important;
            }
      
            .no-stack .col.num4 {
              width: 33% !important;
            }
      
            .no-stack .col.num3 {
              width: 25% !important;
            }
      
            .no-stack .col.num6 {
              width: 50% !important;
            }
      
            .no-stack .col.num9 {
              width: 75% !important;
            }
      
            .video-block {
              max-width: none !important;
            }
      
            .mobile_hide {
              min-height: 0px;
              max-height: 0px;
              max-width: 0px;
              display: none;
              overflow: hidden;
              font-size: 0px;
            }
      
            .desktop_hide {
              display: block !important;
              max-height: none !important;
            }
          }
        </style>
      </head>
      <body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #FFFFFF;">
      <!--[if IE]><div class="ie-browser"><![endif]-->
      <table bgcolor="#FFFFFF" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="table-layout: fixed; vertical-align: top; min-width: 320px; Margin: 0 auto; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF; width: 100%;" valign="top" width="100%">
      <tbody>
      <tr style="vertical-align: top;" valign="top">
      <td style="word-break: break-word; vertical-align: top;" valign="top">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#FFFFFF"><![endif]-->
      <div style="background-color:#FFFFFF;">
      <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 700px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
      <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#FFFFFF;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
      <!--[if (mso)|(IE)]><td align="center" width="700" style="background-color:transparent;width:700px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
      <div class="col num12" style="min-width: 320px; max-width: 700px; display: table-cell; vertical-align: top; width: 700px;">
      <div style="width:100% !important;">
      <!--[if (!mso)&(!IE)]><!-->
      <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
      <!--<![endif]-->
      <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
      <tbody>
      <tr style="vertical-align: top;" valign="top">
      <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" height="30" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 30px; width: 100%;" valign="top" width="100%">
      <tbody>
      <tr style="vertical-align: top;" valign="top">
      <td height="30" style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <!--[if (!mso)&(!IE)]><!-->
      </div>
      <!--<![endif]-->
      </div>
      </div>
      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
      </div>
      </div>
      </div>
      <div style="background-color:transparent;">
      <div class="block-grid two-up no-stack" style="Margin: 0 auto; min-width: 320px; max-width: 700px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
      <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
      <!--[if (mso)|(IE)]><td align="center" width="350" style="background-color:transparent;width:350px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top:10px; padding-bottom:10px;"><![endif]-->
      <div class="col num6" style="min-width: 320px; max-width: 350px; display: table-cell; vertical-align: top; width: 350px;">
      <div style="width:100% !important;">
      <!--[if (!mso)&(!IE)]><!-->
      <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:10px; padding-bottom:10px; padding-right: 20px; padding-left: 20px;">
      <!--<![endif]-->
      <div align="center" class="img-container center autowidth" style="padding-right: 0px;padding-left: 0px;">
      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><img align="center" alt="Image" border="0" class="center autowidth" src="https://i.imgur.com/EM3NmrT.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; border: 0; height: auto; width: 100%; max-width: 310px; display: block;" title="Image" width="310"/>
      <!--[if mso]></td></tr></table><![endif]-->
      </div>
      <!--[if (!mso)&(!IE)]><!-->
      </div>
      <!--<![endif]-->
      </div>
      </div>
      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
      <!--[if (mso)|(IE)]></td><td align="center" width="350" style="background-color:transparent;width:350px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
      <div class="col num6" style="min-width: 320px; max-width: 350px; display: table-cell; vertical-align: top; width: 350px;">
      <div style="width:100% !important;">
      <!--[if (!mso)&(!IE)]><!-->
      <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
      <!--<![endif]-->
      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 20px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
      <div style="color:#E3E3E3;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;line-height:1.2;padding-top:20px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
      <div style="font-size: 12px; line-height: 1.2; color: #E3E3E3; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; mso-line-height-alt: 14px;">
      <p style="font-size: 12px; line-height: 1.2; text-align: right; word-break: break-word; mso-line-height-alt: 14px; margin: 0;"><span style="font-size: 12px; color: #808080;">Feel free to be free</span></p>
      </div>
      </div>
      <!--[if mso]></td></tr></table><![endif]-->
      <!--[if (!mso)&(!IE)]><!-->
      </div>
      <!--<![endif]-->
      </div>
      </div>
      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
      </div>
      </div>
      </div>
      <div style="background-image:url('https://i.imgur.com/36qUZLY.png');background-position:top center;background-repeat:repeat;background-color:#F4F4F4;">
      <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 700px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
      <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-image:url('https://i.imgur.com/36qUZLY.png');background-position:top center;background-repeat:repeat;background-color:#F4F4F4;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
      <!--[if (mso)|(IE)]><td align="center" width="700" style="background-color:transparent;width:700px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:0px;"><![endif]-->
      <div class="col num12" style="min-width: 320px; max-width: 700px; display: table-cell; vertical-align: top; width: 700px;">
      <div style="width:100% !important;">
      <!--[if (!mso)&(!IE)]><!-->
      <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
      <!--<![endif]-->
      <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
      <tbody>
      <tr style="vertical-align: top;" valign="top">
      <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" height="70" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 70px; width: 100%;" valign="top" width="100%">
      <tbody>
      <tr style="vertical-align: top;" valign="top">
      <td height="70" style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <!--[if (!mso)&(!IE)]><!-->
      </div>
      <!--<![endif]-->
      </div>
      </div>
      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
      </div>
      </div>
      </div>
      <div style="background-color:#F4F4F4;">
      <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 700px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
      <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F4F4F4;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
      <!--[if (mso)|(IE)]><td align="center" width="700" style="background-color:transparent;width:700px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
      <div class="col num12" style="min-width: 320px; max-width: 700px; display: table-cell; vertical-align: top; width: 700px;">
      <div style="width:100% !important;">
      <!--[if (!mso)&(!IE)]><!-->
      <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
      <!--<![endif]-->
      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 30px; padding-left: 30px; padding-top: 10px; padding-bottom: 0px; font-family: 'Trebuchet MS', Tahoma, sans-serif"><![endif]-->
      <div style="color:#555555;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;line-height:1.2;padding-top:10px;padding-right:30px;padding-bottom:0px;padding-left:30px;">
      <div style="font-size: 12px; line-height: 1.2; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #555555; mso-line-height-alt: 14px;">
      <p style="font-size: 14px; line-height: 1.2; word-break: break-word; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 17px; margin: 0;"><strong><span style="font-size: 46px;">Bienvenid@!</span></strong></p>
      </div>
      </div>
      <!--[if mso]></td></tr></table><![endif]-->
      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 45px; padding-left: 30px; padding-top: 20px; padding-bottom: 5px; font-family: Arial, sans-serif"><![endif]-->
      <div style="color:#555555;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;line-height:1.5;padding-top:20px;padding-right:45px;padding-bottom:5px;padding-left:30px;">
      <div style="font-size: 12px; line-height: 1.5; color: #555555; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; mso-line-height-alt: 18px;">
      <p style="line-height: 1.5; word-break: break-word; text-align: center; font-size: 18px; mso-line-height-alt: 27px; margin: 0;"><span style="font-size: 18px;"><strong>Ya formas parte de la familia FREEDOM</strong></span></p>
      <p style="line-height: 1.5; word-break: break-word; text-align: center; font-size: 18px; mso-line-height-alt: 27px; margin: 0;"><span style="font-size: 18px;"><strong>Estamos encantados de que participes en la aplicación y sobre todo, que hagas mucho deporte con las actividades que encontrarás en FREEDOM :)</strong></span></p>
      </div>
      </div>
      <!--[if mso]></td></tr></table><![endif]-->
      <!--[if (!mso)&(!IE)]><!-->
      </div>
      <!--<![endif]-->
      </div>
      </div>
      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
      </div>
      </div>
      </div>
      <div style="background-color:#F4F4F4;">
      <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 700px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #FFFFFF;">
      <div style="border-collapse: collapse;display: table;width: 100%;background-color:#FFFFFF;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F4F4F4;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px"><tr class="layout-full-width" style="background-color:#FFFFFF"><![endif]-->
      <!--[if (mso)|(IE)]><td align="center" width="700" style="background-color:#FFFFFF;width:700px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 5px; padding-left: 5px; padding-top:5px; padding-bottom:5px;"><![endif]-->
      <div class="col num12" style="min-width: 320px; max-width: 700px; display: table-cell; vertical-align: top; width: 700px;">
      <div style="width:100% !important;">
      <!--[if (!mso)&(!IE)]><!-->
      <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 5px; padding-left: 5px;">
      <!--<![endif]-->
      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 35px; padding-top: 25px; padding-bottom: 0px; font-family: 'Trebuchet MS', Tahoma, sans-serif"><![endif]-->
      <div style="color:#444444;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;line-height:1.2;padding-top:25px;padding-right:10px;padding-bottom:0px;padding-left:35px;">
      <div style="font-size: 12px; line-height: 1.2; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #444444; mso-line-height-alt: 14px;">
      <p style="font-size: 14px; line-height: 1.2; word-break: break-word; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 17px; margin: 0;"><span style="background-color: #93f5ed; font-size: 14px;"><span style="font-size: 24px; background-color: #93f5ed;"><span style="font-size: 24px; background-color: #93f5ed;"> Cosas que ya puedes hacer: </span></span></span></p>
      </div>
      </div>
      <!--[if mso]></td></tr></table><![endif]-->
      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 30px; padding-top: 15px; padding-bottom: 30px; font-family: Arial, sans-serif"><![endif]-->
      <div style="color:#555555;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;line-height:1.8;padding-top:15px;padding-right:20px;padding-bottom:30px;padding-left:30px;">
      <div style="line-height: 1.8; font-size: 12px; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; color: #555555; mso-line-height-alt: 22px;">
      <ul style="font-size: 12px;">
      <li style="font-size: 16px; line-height: 1.8; mso-line-height-alt: 29px;"><span style="font-size: 16px; background-color: transparent;">Participar en actividades creadas por otros usuarios.</span></li>
      <li style="font-size: 16px; line-height: 1.8; mso-line-height-alt: 29px;"><span style="font-size: 16px; background-color: transparent;">Orgnizar actividades deportivas con más usuarios.</span></li>
      <li style="font-size: 16px; line-height: 1.8; mso-line-height-alt: 29px;"><span style="font-size: 16px;">Conocer gente nueva.</span></li>
      <li style="font-size: 16px; line-height: 1.8; mso-line-height-alt: 29px;"><span style="font-size: 16px;">Y la más importante, ponerte en forma!</span></li>
      </ul>
      </div>
      </div>
      <!--[if mso]></td></tr></table><![endif]-->
      <!--[if (!mso)&(!IE)]><!-->
      </div>
      <!--<![endif]-->
      </div>
      </div>
      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
      </div>
      </div>
      </div>
      <div style="background-color:#F4F4F4;">
      <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 700px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
      <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F4F4F4;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
      <!--[if (mso)|(IE)]><td align="center" width="700" style="background-color:transparent;width:700px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:25px; padding-bottom:60px;"><![endif]-->
      <div class="col num12" style="min-width: 320px; max-width: 700px; display: table-cell; vertical-align: top; width: 700px;">
      <div style="width:100% !important;">
      <!--[if (!mso)&(!IE)]><!-->
      <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:25px; padding-bottom:60px; padding-right: 0px; padding-left: 0px;">
      <!--<![endif]-->
      <div align="center" class="button-container" style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://javixuu.github.io/freedom" style="height:54pt; width:336pt; v-text-anchor:middle;" arcsize="13%" stroke="false" fillcolor="#3D3BEE"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:26px"><![endif]--><a href="https://javixuu.github.io/freedom" style="-webkit-text-size-adjust: none; text-decoration: none; display: inline-block; color: #ffffff; background-color: #3D3BEE; border-radius: 9px; -webkit-border-radius: 9px; -moz-border-radius: 9px; width: auto; width: auto; border-top: 1px solid #3D3BEE; border-right: 1px solid #3D3BEE; border-bottom: 1px solid #3D3BEE; border-left: 1px solid #3D3BEE; padding-top: 10px; padding-bottom: 10px; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; text-align: center; mso-border-alt: none; word-break: keep-all;" target="_blank"><span style="padding-left:45px;padding-right:45px;font-size:26px;display:inline-block;"><span style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;"><span data-mce-style="font-size: 26px; line-height: 52px;" style="font-size: 26px; line-height: 52px;"><strong>Acceder a FREEDOM </strong></span></span></span></a>
      <!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
      </div>
      <!--[if (!mso)&(!IE)]><!-->
      </div>
      <!--<![endif]-->
      </div>
      </div>
      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
      </div>
      </div>
      </div>
      <div style="background-image:url('https://i.imgur.com/CEfxlTY.png');background-position:top center;background-repeat:repeat;background-color:#F4F4F4;">
      <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 700px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
      <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-image:url('https://i.imgur.com/CEfxlTY.png');background-position:top center;background-repeat:repeat;background-color:#F4F4F4;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
      <!--[if (mso)|(IE)]><td align="center" width="700" style="background-color:transparent;width:700px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:0px;"><![endif]-->
      <div class="col num12" style="min-width: 320px; max-width: 700px; display: table-cell; vertical-align: top; width: 700px;">
      <div style="width:100% !important;">
      <!--[if (!mso)&(!IE)]><!-->
      <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
      <!--<![endif]-->
      <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
      <tbody>
      <tr style="vertical-align: top;" valign="top">
      <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" height="70" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 70px; width: 100%;" valign="top" width="100%">
      <tbody>
      <tr style="vertical-align: top;" valign="top">
      <td height="70" style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <!--[if (!mso)&(!IE)]><!-->
      </div>
      <!--<![endif]-->
      </div>
      </div>
      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
      </div>
      </div>
      </div>
      <div style="background-color:#FFFFFF;">
      <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 700px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #FFFFFF;">
      <div style="border-collapse: collapse;display: table;width: 100%;background-color:#FFFFFF;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#FFFFFF;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px"><tr class="layout-full-width" style="background-color:#FFFFFF"><![endif]-->
      <!--[if (mso)|(IE)]><td align="center" width="700" style="background-color:#FFFFFF;width:700px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:15px; padding-bottom:35px;"><![endif]-->
      <div class="col num12" style="min-width: 320px; max-width: 700px; display: table-cell; vertical-align: top; width: 700px;">
      <div style="width:100% !important;">
      <!--[if (!mso)&(!IE)]><!-->
      <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:15px; padding-bottom:35px; padding-right: 0px; padding-left: 0px;">
      <!--<![endif]-->
      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
      <div style="color:#838383;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;line-height:1.5;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
      <div style="font-size: 12px; line-height: 1.5; color: #838383; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; mso-line-height-alt: 18px;">
      <p style="font-size: 14px; line-height: 1.5; text-align: center; word-break: break-word; mso-line-height-alt: 21px; margin: 0;"><span style="color: #000000; font-size: 14px;"><strong>FREEDOM</strong></span>, Start-up en UC3M, Leganés, Madrid</p>
      </div>
      </div>
      <!--[if mso]></td></tr></table><![endif]-->
      <!--[if (!mso)&(!IE)]><!-->
      </div>
      <!--<![endif]-->
      </div>
      </div>
      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
      </div>
      </div>
      </div>
      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
      </td>
      </tr>
      </tbody>
      </table>
      <!--[if (IE)]></div><![endif]-->
      </body>
      </html>
          ` 
    };

    // returning result
    return transporter.sendMail(mailOptions, (erro:string, info:string) => {
        console.log("email enviado", erro, info)
    });

});


//-------------------------------------------------------------------------------------------------------------------------------



//Enviar email Amistad a través de la página de Usuarios Freedom
export const mandarInvi = functions.https.onRequest((req, res) => {

  cors(req, res, () => {
    const data = req.body;

    console.log(`email mandado a ${data.dest_email}`);

    const dest_email = data.dest_email;
    const dest_nombre = data.dest_nombre;
    const origen_username = data.origen_username;
    const origen_email = data.origen_email;
    const origen_tlf = data.origen_tlf;
    const origen_foto = data.origen_foto;

    
    const mailOptions = {
      from: 'freedomapp2020@gmail.com', 
      to: dest_email,
      subject: "Alguien quiere conocerte en FREEDOM...", 
      html: `

      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
      
      <head>
        <!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width">
        <!--[if !mso]><!-->
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <!--<![endif]-->
        <title></title>
        <!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Bitter" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css">
        <!--<![endif]-->
        <style type="text/css">
          body {
            margin: 0;
            padding: 0;
          }
      
          table,
          td,
          tr {
            vertical-align: top;
            border-collapse: collapse;
          }
      
          * {
            line-height: inherit;
          }
      
          a[x-apple-data-detectors=true] {
            color: inherit !important;
            text-decoration: none !important;
          }
        </style>
        <style type="text/css" id="media-query">
          @media (max-width: 660px) {
      
            .block-grid,
            .col {
              min-width: 320px !important;
              max-width: 100% !important;
              display: block !important;
            }
      
            .block-grid {
              width: 100% !important;
            }
      
            .col {
              width: 100% !important;
            }
      
            .col>div {
              margin: 0 auto;
            }
      
            img.fullwidth,
            img.fullwidthOnMobile {
              max-width: 100% !important;
            }
      
            .no-stack .col {
              min-width: 0 !important;
              display: table-cell !important;
            }
      
            .no-stack.two-up .col {
              width: 50% !important;
            }
      
            .no-stack .col.num4 {
              width: 33% !important;
            }
      
            .no-stack .col.num8 {
              width: 66% !important;
            }
      
            .no-stack .col.num4 {
              width: 33% !important;
            }
      
            .no-stack .col.num3 {
              width: 25% !important;
            }
      
            .no-stack .col.num6 {
              width: 50% !important;
            }
      
            .no-stack .col.num9 {
              width: 75% !important;
            }
      
            .video-block {
              max-width: none !important;
            }
      
            .mobile_hide {
              min-height: 0px;
              max-height: 0px;
              max-width: 0px;
              display: none;
              overflow: hidden;
              font-size: 0px;
            }
      
            .desktop_hide {
              display: block !important;
              max-height: none !important;
            }
          }
        </style>
      </head>
      
      <body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #bcbecd;">
        <!--[if IE]><div class="ie-browser"><![endif]-->
        <table class="nl-container" style="table-layout: fixed; vertical-align: top; min-width: 320px; Margin: 0 auto; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #bcbecd; width: 100%;" cellpadding="0" cellspacing="0" role="presentation" width="100%" bgcolor="#bcbecd" valign="top">
          <tbody>
            <tr style="vertical-align: top;" valign="top">
              <td style="word-break: break-word; vertical-align: top;" valign="top">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#bcbecd"><![endif]-->
                <div style="background-color:transparent;">
                  <div class="block-grid " style="Margin: 0 auto; min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;background-image:url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1116/CV2020_Background_Speechbubble.png');background-position:top center;background-repeat:no-repeat">
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                      <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:#ffffff;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                      <div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
                        <div style="width:100% !important;">
                          <!--[if (!mso)&(!IE)]><!-->
                          <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->
                            <div class="img-container center fixedwidth" align="center" style="padding-right: 0px;padding-left: 0px;">
                              <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><img class="center fixedwidth" align="center" border="0" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/536211_517176/editor_images/logo.png" alt="Image" title="Image" style="text-decoration: none; -ms-interpolation-mode: bicubic; border: 0; height: auto; width: 100%; max-width: 448px; display: block;" width="448">
                              <!--[if mso]></td></tr></table><![endif]-->
                            </div>
                            <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
                              <tbody>
                                <tr style="vertical-align: top;" valign="top">
                                  <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
                                    <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 15px; width: 100%;" align="center" role="presentation" height="15" valign="top">
                                      <tbody>
                                        <tr style="vertical-align: top;" valign="top">
                                          <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" height="15" valign="top"><span></span></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top: 5px; padding-bottom: 5px; font-family: 'Trebuchet MS', Tahoma, sans-serif"><![endif]-->
                            <div style="color:#555555;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;line-height:1.2;padding-top:5px;padding-right:20px;padding-bottom:5px;padding-left:20px;">
                              <div style="font-size: 14px; line-height: 1.2; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #555555; mso-line-height-alt: 17px;">
                                <p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 17px; margin: 0;"><span style="color: #222831;"><span style="font-size: 16px;">Hey&nbsp;<strong>${dest_nombre}</strong>, hay un usuario de <u><strong><em>FREEDOM </em></strong></u></span></span></p>
                                <p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 17px; margin: 0;"><span style="color: #222831;"><span style="font-size: 16px;">que te quiere preguntar algo, sigue leyendo!</span></span></p>
                                <p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 17px; margin: 0;">&nbsp;</p>
                                <p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 17px; margin: 0;">&nbsp;</p>
                              </div>
                            </div>
                            <!--[if mso]></td></tr></table><![endif]-->
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
                <div style="background-color:transparent;">
                  <div class="block-grid " style="Margin: 0 auto; min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;background-image:url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1116/CV2020_Background_wide.png');background-position:top center;background-repeat:no-repeat">
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                      <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:transparent;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:0px;"><![endif]-->
                      <div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
                        <div style="width:100% !important;">
                          <!--[if (!mso)&(!IE)]><!-->
                          <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->
                            <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
                              <tbody>
                                <tr style="vertical-align: top;" valign="top">
                                  <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
                                    <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 35px; width: 100%;" align="center" role="presentation" height="35" valign="top">
                                      <tbody>
                                        <tr style="vertical-align: top;" valign="top">
                                          <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" height="35" valign="top"><span></span></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <div class="img-container center fixedwidth" align="center" style="padding-right: 0px;padding-left: 0px;">
                              <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><img class="center fixedwidth" align="center" border="0" src= ${origen_foto} 
                              alt="Portrait Image" title="Portrait Image" style="text-decoration: none; -ms-interpolation-mode: bicubic; border: 0; height: auto; width: 100%; max-width: 160px; display: block;" width="160">
                              <!--[if mso]></td></tr></table><![endif]-->
                            </div>
                            <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
                              <tbody>
                                <tr style="vertical-align: top;" valign="top">
                                  <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
                                    <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 35px; width: 100%;" align="center" role="presentation" height="35" valign="top">
                                      <tbody>
                                        <tr style="vertical-align: top;" valign="top">
                                          <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" height="35" valign="top"><span></span></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
                <div style="background-color:transparent;">
                  <div class="block-grid " style="Margin: 0 auto; min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                      <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:#ffffff;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                      <div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
                        <div style="width:100% !important;">
                          <!--[if (!mso)&(!IE)]><!-->
                          <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->
                            <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
                              <tbody>
                                <tr style="vertical-align: top;" valign="top">
                                  <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
                                    <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 20px; width: 100%;" align="center" role="presentation" height="20" valign="top">
                                      <tbody>
                                        <tr style="vertical-align: top;" valign="top">
                                          <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" height="20" valign="top"><span></span></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
                <div style="background-color:transparent;">
                  <div class="block-grid " style="Margin: 0 auto; min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;background-image:url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1116/CV2020_Background_Speechbubble.png');background-position:top center;background-repeat:no-repeat">
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                      <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:#ffffff;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                      <div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
                        <div style="width:100% !important;">
                          <!--[if (!mso)&(!IE)]><!-->
                          <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->
                            <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
                              <tbody>
                                <tr style="vertical-align: top;" valign="top">
                                  <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
                                    <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 15px; width: 100%;" align="center" role="presentation" height="15" valign="top">
                                      <tbody>
                                        <tr style="vertical-align: top;" valign="top">
                                          <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" height="15" valign="top"><span></span></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top: 5px; padding-bottom: 5px; font-family: 'Trebuchet MS', Tahoma, sans-serif"><![endif]-->
                            <div style="color:#555555;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;line-height:1.2;padding-top:5px;padding-right:20px;padding-bottom:5px;padding-left:20px;">
                              <div style="font-size: 14px; line-height: 1.2; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #555555; mso-line-height-alt: 17px;">
                                <p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 17px; margin: 0;"><span style="color: #222831;"><span style="font-size: 16px;"><em>Hola! Soy <strong>${origen_username}</strong>, usuario de <u><strong>FREEDOM</strong></u>.</em></span></span></p>
                                <p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 17px; margin: 0;">&nbsp;</p>
                                <p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 17px; margin: 0;"><span style="color: #222831;"><span style="font-size: 16px;"><em>Me encantaría conocerte para hacer deporte juntos!</em></span></span></p>
                              </div>
                            </div>
                            <!--[if mso]></td></tr></table><![endif]-->
                            <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
                              <tbody>
                                <tr style="vertical-align: top;" valign="top">
                                  <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
                                    <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 15px; width: 100%;" align="center" role="presentation" height="15" valign="top">
                                      <tbody>
                                        <tr style="vertical-align: top;" valign="top">
                                          <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" height="15" valign="top"><span></span></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
                <div style="background-color:transparent;">
                  <div class="block-grid " style="Margin: 0 auto; min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                      <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:#ffffff;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                      <div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
                        <div style="width:100% !important;">
                          <!--[if (!mso)&(!IE)]><!-->
                          <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->
                            <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
                              <tbody>
                                <tr style="vertical-align: top;" valign="top">
                                  <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
                                    <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 15px; width: 100%;" align="center" role="presentation" height="15" valign="top">
                                      <tbody>
                                        <tr style="vertical-align: top;" valign="top">
                                          <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" height="15" valign="top"><span></span></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
                <div style="background-color:transparent;">
                  <div class="block-grid " style="Margin: 0 auto; min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;background-image:url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1116/CV2020_Background_Speechbubble.png');background-position:top center;background-repeat:no-repeat">
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                      <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:#ffffff;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                      <div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
                        <div style="width:100% !important;">
                          <!--[if (!mso)&(!IE)]><!-->
                          <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->
                            <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
                              <tbody>
                                <tr style="vertical-align: top;" valign="top">
                                  <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
                                    <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 15px; width: 100%;" align="center" role="presentation" height="15" valign="top">
                                      <tbody>
                                        <tr style="vertical-align: top;" valign="top">
                                          <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" height="15" valign="top"><span></span></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top: 5px; padding-bottom: 5px; font-family: 'Trebuchet MS', Tahoma, sans-serif"><![endif]-->
                            <div style="color:#555555;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;line-height:1.2;padding-top:5px;padding-right:20px;padding-bottom:5px;padding-left:20px;">
                              <div style="font-size: 14px; line-height: 1.2; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #555555; mso-line-height-alt: 17px;">
                                <p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 17px; margin: 0;"><span style="color: #333333;">Puedes contactarme a través mi email personal <strong>${origen_email} </strong></span></p>
                                <p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 17px; margin: 0;"><span style="color: #333333;">o mandarme un mensaje a mi teléfono&nbsp;<strong>${origen_tlf}</strong>.</span></p>
                              </div>
                            </div>
                            <!--[if mso]></td></tr></table><![endif]-->
                            <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
                              <tbody>
                                <tr style="vertical-align: top;" valign="top">
                                  <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
                                    <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 15px; width: 100%;" align="center" role="presentation" height="15" valign="top">
                                      <tbody>
                                        <tr style="vertical-align: top;" valign="top">
                                          <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" height="15" valign="top"><span></span></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
                <div style="background-color:transparent;">
                  <div class="block-grid " style="Margin: 0 auto; min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                      <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:#ffffff;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                      <div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
                        <div style="width:100% !important;">
                          <!--[if (!mso)&(!IE)]><!-->
                          <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->
                            <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
                              <tbody>
                                <tr style="vertical-align: top;" valign="top">
                                  <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
                                    <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 10px; width: 100%;" align="center" role="presentation" height="10" valign="top">
                                      <tbody>
                                        <tr style="vertical-align: top;" valign="top">
                                          <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" height="10" valign="top"><span></span></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <div class="button-container" align="center" style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                              <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://javixuu.github.io/freedom/" style="height:33pt; width:171.75pt; v-text-anchor:middle;" arcsize="10%" strokeweight="1.5pt" strokecolor="#000000" fillcolor="#276bb7"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:20px"><![endif]--><a href="https://javixuu.github.io/freedom/" target="_blank" style="-webkit-text-size-adjust: none; text-decoration: none; display: inline-block; color: #ffffff; background-color: #276bb7; border-radius: 4px; -webkit-border-radius: 4px; -moz-border-radius: 4px; width: auto; width: auto; border-top: 2px solid #000000; border-right: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; padding-top: 5px; padding-bottom: 5px; font-family: 'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif; text-align: center; mso-border-alt: none; word-break: keep-all;"><span style="padding-left:20px;padding-right:20px;font-size:20px;display:inline-block;"><span style="font-size: 16px; line-height: 1.5; word-break: break-word; font-family: Oswald, Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 24px;"><span style="font-size: 20px; line-height: 30px;" data-mce-style="font-size: 20px; line-height: 30px;">Acceder a FREEDOM</span></span></span></a>
                              <!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
                            </div>
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
                <div style="background-color:transparent;">
                  <div class="block-grid " style="Margin: 0 auto; min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;background-image:url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1116/CV2020_divider2.png');background-position:center top;background-repeat:no-repeat">
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                      <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:transparent;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
                      <div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
                        <div style="width:100% !important;">
                          <!--[if (!mso)&(!IE)]><!-->
                          <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->
                            <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
                              <tbody>
                                <tr style="vertical-align: top;" valign="top">
                                  <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
                                    <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 70px; width: 100%;" align="center" role="presentation" height="70" valign="top">
                                      <tbody>
                                        <tr style="vertical-align: top;" valign="top">
                                          <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" height="70" valign="top"><span></span></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        <!--[if (IE)]></div><![endif]-->
      </body>
      
      </html>
          ` 
    };

    // returning result
    return transporter.sendMail(mailOptions, (erro:string, info:string) => {
        console.log("email enviado", erro, info)
    });

  });
});



//-------------------------------------------------------------------------------------------------------------------------------



//Enviar email al usuario cuando haya subido/bajado de nivel para avisarle
export const cambioMedalla = functions.https.onRequest((req, res) => {

  cors(req, res, () => {
    const data = req.body;

    console.log(`email mandado a ${data.dest_email}`);

    const dest_email = data.dest_email;
    const dest_nombre = data.dest_nombre;
    const dest_gif = data.dest_gif;
    const dest_medalla_foto = data.dest_medalla_foto;
    const texto_nivel = data.texto_nivel;
    const dest_puntos= data.dest_puntos;


    
    const mailOptions = {
      from: 'freedomapp2020@gmail.com', 
      to: dest_email,
      subject: `${texto_nivel} en FREEDOM`, 
      html: `

                <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
          <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

          <head>
            <!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
            <meta name="viewport" content="width=device-width">
            <!--[if !mso]><!-->
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <!--<![endif]-->
            <title></title>
            <!--[if !mso]><!-->
            <!--<![endif]-->
            <style type="text/css">
              body {
                margin: 0;
                padding: 0;
              }

              table,
              td,
              tr {
                vertical-align: top;
                border-collapse: collapse;
              }

              * {
                line-height: inherit;
              }

              a[x-apple-data-detectors=true] {
                color: inherit !important;
                text-decoration: none !important;
              }
            </style>
            <style type="text/css" id="media-query">
              @media (max-width: 660px) {

                .block-grid,
                .col {
                  min-width: 320px !important;
                  max-width: 100% !important;
                  display: block !important;
                }

                .block-grid {
                  width: 100% !important;
                }

                .col {
                  width: 100% !important;
                }

                .col>div {
                  margin: 0 auto;
                }

                img.fullwidth,
                img.fullwidthOnMobile {
                  max-width: 100% !important;
                }

                .no-stack .col {
                  min-width: 0 !important;
                  display: table-cell !important;
                }

                .no-stack.two-up .col {
                  width: 50% !important;
                }

                .no-stack .col.num4 {
                  width: 33% !important;
                }

                .no-stack .col.num8 {
                  width: 66% !important;
                }

                .no-stack .col.num4 {
                  width: 33% !important;
                }

                .no-stack .col.num3 {
                  width: 25% !important;
                }

                .no-stack .col.num6 {
                  width: 50% !important;
                }

                .no-stack .col.num9 {
                  width: 75% !important;
                }

                .video-block {
                  max-width: none !important;
                }

                .mobile_hide {
                  min-height: 0px;
                  max-height: 0px;
                  max-width: 0px;
                  display: none;
                  overflow: hidden;
                  font-size: 0px;
                }

                .desktop_hide {
                  display: block !important;
                  max-height: none !important;
                }
              }
            </style>
          </head>

          <body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #FFFFFF;">
            <!--[if IE]><div class="ie-browser"><![endif]-->
            <table class="nl-container" style="table-layout: fixed; vertical-align: top; min-width: 320px; Margin: 0 auto; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF; width: 100%;" cellpadding="0" cellspacing="0" role="presentation" width="100%" bgcolor="#FFFFFF" valign="top">
              <tbody>
                <tr style="vertical-align: top;" valign="top">
                  <td style="word-break: break-word; vertical-align: top;" valign="top">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#FFFFFF"><![endif]-->
                    <div style="background-color:transparent;">
                      <div class="block-grid " style="Margin: 0 auto; min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ebe7e2;">
                        <div style="border-collapse: collapse;display: table;width: 100%;background-color:#ebe7e2;">
                          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#ebe7e2"><![endif]-->
                          <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:#ebe7e2;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
                          <div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
                            <div style="width:100% !important;">
                              <!--[if (!mso)&(!IE)]><!-->
                              <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
                                <!--<![endif]-->
                                <div class="img-container center fixedwidth" align="center" style="padding-right: 0px;padding-left: 0px;">
                                  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><img class="center fixedwidth" align="center" border="0" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/536211_517176/logo.png" alt="image" title="image" style="text-decoration: none; -ms-interpolation-mode: bicubic; border: 0; height: auto; width: 100%; max-width: 448px; display: block;" width="448">
                                  <!--[if mso]></td></tr></table><![endif]-->
                                </div>
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 0px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
                                <div style="color:#0c2e3a;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.2;padding-top:0px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                                  <div style="font-size: 14px; line-height: 1.2; color: #0c2e3a; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 17px;">
                                    <p style="font-size: 22px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 26px; margin: 0;"><span style="font-size: 22px;">Hey ${dest_nombre}! ${texto_nivel}.</span></p>
                                  </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
                                <div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                                  <div style="font-size: 14px; line-height: 1.2; color: #555555; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 17px;">
                                    <p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 17px; margin: 0;">Tienes ${dest_puntos} puntos. Tu medalla actual es <strong>Novato</strong></p>
                                  </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                                <div class="img-container center autowidth" align="center" style="padding-right: 0px;padding-left: 0px;">
                                  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><img class="center autowidth" align="center" border="0" src=${dest_medalla_foto} alt="Image" title="Image" style="text-decoration: none; -ms-interpolation-mode: bicubic; border: 0; height: auto; width: 100%; max-width: 150px; display: block;" width="150">
                                  <!--[if mso]></td></tr></table><![endif]-->
                                </div>
                                <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
                                  <tbody>
                                    <tr style="vertical-align: top;" valign="top">
                                      <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
                                        <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="25%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 2px solid #0C2E3A; width: 25%;" align="center" role="presentation" valign="top">
                                          <tbody>
                                            <tr style="vertical-align: top;" valign="top">
                                              <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <div class="img-container center autowidth" align="center" style="padding-right: 0px;padding-left: 0px;">
                                  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><img class="center autowidth" align="center" border="0" src=${dest_gif} alt="Image" title="Image" style="text-decoration: none; -ms-interpolation-mode: bicubic; border: 0; height: auto; width: 100%; max-width: 500px; display: block;" width="500">
                                  <!--[if mso]></td></tr></table><![endif]-->
                                </div>
                                <div class="button-container" align="center" style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                                  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://javixuu.github.io/freedom/" style="height:40.5pt; width:261pt; v-text-anchor:middle;" arcsize="8%" stroke="false" fillcolor="#59a3c9"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#ffffff; font-family:Tahoma, sans-serif; font-size:17px"><![endif]--><a href="https://javixuu.github.io/freedom/" target="_blank" style="-webkit-text-size-adjust: none; text-decoration: none; display: inline-block; color: #ffffff; background-color: #59a3c9; border-radius: 4px; -webkit-border-radius: 4px; -moz-border-radius: 4px; width: auto; width: auto; border-top: 1px solid #59a3c9; border-right: 1px solid #59a3c9; border-bottom: 1px solid #59a3c9; border-left: 1px solid #59a3c9; padding-top: 10px; padding-bottom: 10px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; text-align: center; mso-border-alt: none; word-break: keep-all;"><span style="padding-left:45px;padding-right:45px;font-size:17px;display:inline-block;"><span style="font-size: 16px; line-height: 2; word-break: break-word; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 32px;"><span style="font-size: 17px; line-height: 34px;" data-mce-style="font-size: 17px; line-height: 34px;"><strong>ACCEDER A FREEDOM</strong></span></span></span></a>
                                  <!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
                                </div>
                                <!--[if (!mso)&(!IE)]><!-->
                              </div>
                              <!--<![endif]-->
                            </div>
                          </div>
                          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                          <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                        </div>
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  </td>
                </tr>
              </tbody>
            </table>
            <!--[if (IE)]></div><![endif]-->
          </body>

          </html>
          ` 
    };

    // returning result
    return transporter.sendMail(mailOptions, (erro:string, info:string) => {
        console.log("email enviado", erro, info)
    });

  });
});