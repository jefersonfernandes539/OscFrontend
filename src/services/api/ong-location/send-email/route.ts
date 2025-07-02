import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "Rede Mobilize <onboarding@resend.dev>", // ou domínio verificado
      to: ["fernandesjeferson539@gmail.com"], // ou múltiplos destinatários
      subject: `[Contato] ${subject}`,
      html: `
        <strong>Nome:</strong> ${name}<br />
        <strong>Email:</strong> ${email}<br />
        <strong>Mensagem:</strong><br />${message}
      `,
    });

    return Response.json({ success: true, data });
  } catch (err) {
    return Response.json({ success: false, error: err }, { status: 500 });
  }
}
