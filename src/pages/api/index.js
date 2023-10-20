import { admin } from './../../config/firebaseAdmin'

export default async function handler(req, res) {

    const {title, body, image, token, id} = req.body;

    const mensagem = {
        data: {
            title: title,
            body: body ,
            image: image,
            idConvite: id,
            actions: JSON.stringify([
                {
                    title: 'Ver agora',
                    pressAction: {
                        id: 'convites',
                    },
                },
            ])
        },
        token: token
        
    };

    try {
        await admin.messaging().send(mensagem)
        console.log('Notificação enviada com sucesso!')
        res.status(200).json({
            status: 'Notificação enviada com sucesso!'
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 'Erro ao enviar!'
        })
    }
}