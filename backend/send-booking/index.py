import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправляет email-уведомление о новом бронировании на катер."""
    
    cors_headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors_headers, 'body': ''}

    body = json.loads(event.get('body', '{}'))

    name = body.get('name', '')
    phone = body.get('phone', '')
    service = body.get('service', '')
    date = body.get('date', '')
    time = body.get('time', '')
    guests = body.get('guests', '')
    tariff = body.get('tariff', '')
    price = body.get('price', '')

    notify_email = os.environ.get('NOTIFY_EMAIL', '')
    smtp_host = os.environ.get('SMTP_HOST', 'smtp.mail.ru')
    smtp_port = int(os.environ.get('SMTP_PORT', '465'))
    smtp_user = os.environ.get('SMTP_USER', '')
    smtp_pass = os.environ.get('SMTP_PASS', '')

    subject = f'Новое бронирование — {name}'
    html = f"""
    <h2>Новая заявка на бронирование</h2>
    <table style="border-collapse:collapse;width:100%">
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Имя</td><td style="padding:8px;border:1px solid #ddd">{name}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Телефон</td><td style="padding:8px;border:1px solid #ddd">{phone}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Услуга</td><td style="padding:8px;border:1px solid #ddd">{service}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Тариф</td><td style="padding:8px;border:1px solid #ddd">{tariff}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Дата</td><td style="padding:8px;border:1px solid #ddd">{date}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Время</td><td style="padding:8px;border:1px solid #ddd">{time}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Гостей</td><td style="padding:8px;border:1px solid #ddd">{guests}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Стоимость</td><td style="padding:8px;border:1px solid #ddd">{price} ₽</td></tr>
    </table>
    """

    msg = MIMEMultipart('alternative')
    msg['Subject'] = subject
    msg['From'] = smtp_user
    msg['To'] = notify_email
    msg.attach(MIMEText(html, 'html', 'utf-8'))

    with smtplib.SMTP_SSL(smtp_host, smtp_port) as server:
        server.login(smtp_user, smtp_pass)
        server.sendmail(smtp_user, notify_email, msg.as_string())

    return {
        'statusCode': 200,
        'headers': cors_headers,
        'body': json.dumps({'success': True})
    }
