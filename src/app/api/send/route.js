import {NextResponse} from "next/server";
import {createTransport} from "nodemailer";

export async function POST(req) {
    try {
        let data = await req.json();
        const transporter = createTransport({
            port: 465,
            host: "smtp.gmail.com",
            auth: {
                user: '',
                pass: '',
            },
            secure: true,
        });

        let text = "E-mail enviado pelo site por " + data.name + "</br></br>" +
            "Responder para " + data.email + "</br></br>" +
            "Telefone " + data.phone + "</br></br>" + data.text;
        await transporter.sendMail({
            from: data.name + "<" + data.email + ">",
            to: "",
            subject: "E-mail enviado pelo site por " + data.name,
            text: text,
            html: text
        });
        return NextResponse.json({}, {status: 200});
    } catch (error) {
        return NextResponse.json(
            {error: "Failed"},
            {status: 500}
        );
    }
}