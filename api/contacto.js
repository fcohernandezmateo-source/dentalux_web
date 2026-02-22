import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { name, email, phone, service, message } = req.body;

  try {
    await resend.emails.send({
      from: 'DentalLux <onboarding@resend.dev>',
      to: ['info@dentalux.es'],
      subject: `Consulta Web: ${service} - ${name}`,
      html: `
        <h2>Nueva solicitud de cita</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email || 'No aportado'}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Servicio:</strong> ${service}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error Resend:', error);
    return res.status(500).json({ error: error.message });
  }
}