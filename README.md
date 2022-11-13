# Favela Log (v.0.0.1)
![favelog-color](https://user-images.githubusercontent.com/3737837/201503890-d747e18e-3b96-47b4-aa69-9828ab07ac3f.png)

---

## Sobre o projeto:

 - App que cria uma rede logística entre o micro empreendedor da favela e seus clientes pormeio de entregadores com motocicletas.

 - Aplicativo para Integração entre os microempreendedores da favela e moto-taxis, para serviços de entrega e variados

## Rotas API

| Rotas | Método | Descrição | Dados transmitidos | OBS |
| --- | --- | --- | --- | --- |
| /createRetail | POST | Criar o usuário do comerciante | Dados do comerciante | - |
| /createCourier | POST | Criar usuário do entregador | Dados do entregador | - |
| /createPayment | POST | Adicionar dados de pagamento do com | Usuário e dados do cartao | Se der tempo |
| /deletePayment | DELETE | Apagar dados de pagamento | Usuário e ID do meio de pagamento | Se der tempo |
| /viewPayments | GET | Ver dados de pagamento | Usuário | Se der tempo |
| /requestDelivery | GET | Cria entrega e retorna com o valor a ser pago | Usuário, local de retirada, local de entrega, tipo de entrega e horário de entrega |  |
| /acceptedDelivery | GET | Depois que ocorre a conciliação bancária do PIX retorna para o comerciante o entregador | Dados do entregador | - |
| /finishedDelivery | GET | Retorna para o comerciante se a entrega foi bem sucedida ou não | | - |
| /allowPayment | POST | Libera pagamento para o entregador | | |
