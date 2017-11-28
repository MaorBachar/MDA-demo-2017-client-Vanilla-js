# Magen David Adom Spokesman-Department Web Application

Developing web application for Magen David Adom - Spokesman Department,
that need to publish an accurate report, as fast as possible to the press.
once message recived by MDA Call Center, it will appear automaticlly inside this web application - panel editor.



This web app enables the end user to get real time reports from the Israeli national emergency services,By offering to edit & use pre-made text pattern and title that fits with the relevant content entered by the user, all by fast and easy UI.
The messages can then be forwarded to the leading newsgroups, by WhatsApp and / or by mail.
<p align="center">
  <img width="460" height="600" src="https://maorbachar.github.io/Magen-David-Adom-Spokesman-Department-Web-Application/images/preview.jpg">
</p>
<b>This is only static version, Full version running on Nodejs express server.
  <br>
link for static-Demo version (this system build especially for mobile users):</b>
https://goo.gl/6DUw8o

# Panel Edior:
once message recived by MDA Call Center, it will appear automaticlly inside the text area edior.

## -pre-made text pattern:
by clicking on buttons below the text area it will replace automaticlly text to fit relevant content.
for example: "מד"א מוקד ארצי" will replace to "דוברות מד"א" or "דובר מד"א זכי הלר".

## -share to Email or Whatsapp:
by clicking on "send to email", the application will offer to the edior subject.
<br>
by clicking on "send to whatsapp", the applcation able to style your text, for example - adding bold.
<br>
<br>
# Archive system:
every message that recived stored in database (MongoDB), there is an option to merge up to 2 messages and by one click it will redirect the user to the edior.
<br>
<br>
# Auto-save message safety system:
this system checks if the user trying to edit message, any change will save for 10 minutes.
once user close the browser and entered again to the application, system will notify - there is message that saved for 10 minutes.
